import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ── Variants ─────────────────────────────────────────── */

const taskComponentVariants = cva(
  "relative flex w-full items-center gap-2 overflow-hidden",
  {
    variants: {
      type: {
        visita: "",
        tarefa: "",
      },
      done: {
        true: "opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      type: "visita",
      done: false,
    },
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
    defaultVariants: {
      type: "visita",
    },
  }
)

const taskComponentBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium leading-normal",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/* ── Root ──────────────────────────────────────────────── */

interface TaskComponentProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof taskComponentVariants> {
  type?: "visita" | "tarefa"
  done?: boolean
}

function TaskComponent({
  className,
  type = "visita",
  done = false,
  children,
  ...props
}: TaskComponentProps) {
  return (
    <div
      data-slot="task-component"
      data-type={type}
      data-done={done}
      className={cn(taskComponentVariants({ type, done }), className)}
      {...props}
    >
      <div
        data-slot="task-component-indicator"
        className={cn(taskComponentIndicatorVariants({ type }))}
      />
      <div
        data-slot="task-component-inner"
        className={cn(
          "flex flex-1 items-center py-2",
          type === "visita" ? "gap-2" : "gap-4"
        )}
      >
        {children}
      </div>
    </div>
  )
}

/* ── TimeSlot (Visita) ────────────────────────────────── */

function TaskComponentTimeSlot({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="task-component-time-slot"
      className={cn(
        "flex w-16 shrink-0 flex-col items-center justify-center gap-2",
        className
      )}
      {...props}
    />
  )
}

/* ── Checkbox (Tarefa) ────────────────────────────────── */

interface TaskComponentCheckboxProps
  extends Omit<React.ComponentProps<"button">, "onChange"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function TaskComponentCheckbox({
  className,
  checked = false,
  onCheckedChange,
  ...props
}: TaskComponentCheckboxProps) {
  return (
    <button
      data-slot="task-component-checkbox"
      type="button"
      role="checkbox"
      aria-checked={checked}
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        checked
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background",
        className
      )}
      onClick={() => onCheckedChange?.(!checked)}
      {...props}
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
  )
}

/* ── Content ──────────────────────────────────────────── */

function TaskComponentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="task-component-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-1", className)}
      {...props}
    />
  )
}

/* ── Badge ────────────────────────────────────────────── */

interface TaskComponentBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof taskComponentBadgeVariants> {}

function TaskComponentBadge({
  className,
  variant,
  ...props
}: TaskComponentBadgeProps) {
  return (
    <span
      data-slot="task-component-badge"
      className={cn(
        taskComponentBadgeVariants({ variant }),
        "w-fit",
        className
      )}
      {...props}
    />
  )
}

/* ── Title ────────────────────────────────────────────── */

function TaskComponentTitle({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="task-component-title"
      className={cn(
        "truncate text-base font-bold leading-normal text-foreground",
        className
      )}
      {...props}
    />
  )
}

/* ── Description ──────────────────────────────────────── */

function TaskComponentDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="task-component-description"
      className={cn(
        "truncate text-sm font-medium leading-normal text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/* ── Meta (horizontal metadata row) ───────────────────── */

function TaskComponentMeta({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="task-component-meta"
      className={cn(
        "flex items-center gap-2 text-sm font-medium leading-normal text-muted-foreground [&_svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

/* ── MetaItem ─────────────────────────────────────────── */

function TaskComponentMetaItem({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="task-component-meta-item"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

/* ── Exports ──────────────────────────────────────────── */

export {
  TaskComponent,
  TaskComponentTimeSlot,
  TaskComponentCheckbox,
  TaskComponentContent,
  TaskComponentBadge,
  TaskComponentTitle,
  TaskComponentDescription,
  TaskComponentMeta,
  TaskComponentMetaItem,
  taskComponentVariants,
  taskComponentIndicatorVariants,
  taskComponentBadgeVariants,
}
