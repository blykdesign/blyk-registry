import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const taskComponentVariants = cva(
  "relative flex w-full items-center gap-2 overflow-hidden",
  {
    variants: {
      type: { visita: "", tarefa: "" },
      done: { true: "opacity-50", false: "" },
    },
    defaultVariants: { type: "visita", done: false },
  }
)

const taskComponentIndicatorVariants = cva(
  "shrink-0 self-stretch w-1 rounded-full",
  {
    variants: {
      type: {
        visita: "bg-emerald-500",
        tarefa: "bg-violet-500",
      },
    },
    defaultVariants: { type: "visita" },
  }
)

const taskComponentBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium leading-normal w-fit",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

export interface TaskComponentVisitaProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  type: "visita"
  done?: boolean
  timeSlot: { time: React.ReactNode; badge?: React.ReactNode }
  title: React.ReactNode
  descriptions: React.ReactNode[]
}

export interface TaskComponentTarefaProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  type: "tarefa"
  done?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  badge?: React.ReactNode
  badgeVariant?: "default" | "secondary"
  title: React.ReactNode
  meta: React.ReactNode[]
}

export type TaskComponentProps =
  | TaskComponentVisitaProps
  | TaskComponentTarefaProps

function TaskComponent(props: TaskComponentProps) {
  const { className, type, done = false, ...rest } = props

  return (
    <div
      data-slot="task-component"
      data-type={type}
      data-done={done}
      className={cn(taskComponentVariants({ type, done }), className)}
    >
      <div
        data-slot="task-component-indicator"
        className={taskComponentIndicatorVariants({ type })}
      />
      <div
        data-slot="task-component-inner"
        className={cn(
          "flex flex-1 items-center py-2",
          type === "visita" ? "gap-2" : "gap-4"
        )}
      >
        {type === "visita" ? (
          <VisitaContent done={done} {...(rest as Omit<TaskComponentVisitaProps, "type" | "done" | "className">)} />
        ) : (
          <TarefaContent done={done} {...(rest as Omit<TaskComponentTarefaProps, "type" | "done" | "className">)} />
        )}
      </div>
    </div>
  )
}

function VisitaContent({
  done,
  timeSlot,
  title,
  descriptions,
}: Omit<TaskComponentVisitaProps, "type" | "className">) {
  return (
    <>
      <div
        data-slot="task-component-time-slot"
        className="flex w-16 shrink-0 flex-col items-center justify-center gap-2"
      >
        {timeSlot.time}
        {timeSlot.badge &&
          (done ? (
            <span className="text-xs font-medium leading-normal text-muted-foreground">
              {timeSlot.badge}
            </span>
          ) : (
            <span className={taskComponentBadgeVariants({ variant: "default" })}>
              {timeSlot.badge}
            </span>
          ))}
      </div>
      <div
        data-slot="task-component-content"
        className="flex min-w-0 flex-1 flex-col gap-1"
      >
        <span
          data-slot="task-component-title"
          className={cn(
            "truncate text-base font-bold leading-normal",
            done ? "text-muted-foreground" : "text-foreground"
          )}
        >
          {title}
        </span>
        {descriptions.map((desc, i) => (
          <span
            key={i}
            data-slot="task-component-description"
            className={cn(
              "truncate text-sm font-medium leading-normal text-muted-foreground",
              i === descriptions.length - 1 && "font-normal"
            )}
          >
            {desc}
          </span>
        ))}
      </div>
    </>
  )
}

function TarefaContent({
  done,
  checked = false,
  onCheckedChange,
  badge,
  badgeVariant = "secondary",
  title,
  meta,
}: Omit<TaskComponentTarefaProps, "type" | "className">) {
  return (
    <>
      <button
        data-slot="task-component-checkbox"
        type="button"
        role="checkbox"
        aria-checked={checked}
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background"
        )}
        onClick={() => onCheckedChange?.(!checked)}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
      <div
        data-slot="task-component-content"
        className="flex min-w-0 flex-1 flex-col gap-1"
      >
        {badge && (
          <span
            data-slot="task-component-badge"
            className={taskComponentBadgeVariants({ variant: badgeVariant })}
          >
            {badge}
          </span>
        )}
        <span
          data-slot="task-component-title"
          className={cn(
            "truncate text-base font-bold leading-normal",
            checked ? "text-muted-foreground" : "text-foreground"
          )}
        >
          {title}
        </span>
        <div
          data-slot="task-component-meta"
          className="flex items-center gap-2 text-sm font-medium leading-normal text-muted-foreground [&_svg]:size-4"
        >
          {meta.map((item, i) => (
            <span
              key={i}
              data-slot="task-component-meta-item"
              className="inline-flex items-center gap-1 [&>[data-orientation=vertical]]:mx-0 [&>[data-orientation=vertical]]:shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

export { TaskComponent }
