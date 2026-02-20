import * as React from "react"

import { cn } from "@/lib/utils"

export interface IndicatorCardProps extends Omit<React.ComponentProps<"div">, "children"> {
  icon?: React.ReactNode
  label: React.ReactNode
  value: React.ReactNode
  badge?: React.ReactNode
  badgeClassName?: string
  description?: React.ReactNode
}

function IndicatorCard({
  className,
  icon,
  label,
  value,
  badge,
  badgeClassName,
  description,
  ...props
}: IndicatorCardProps) {
  return (
    <div
      data-slot="indicator-card"
      className={cn(
        "flex flex-col gap-1.5 rounded-[var(--card-radius)] border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-lg active:shadow-none active:bg-muted min-w-[var(--indicator-card-min-width)]",
        className
      )}
      {...props}
    >
      {icon && (
        <div
          data-slot="indicator-card-icon"
          className="flex items-center justify-center size-8 text-muted-foreground [&_svg]:size-8"
        >
          {icon}
        </div>
      )}
      <span
        data-slot="indicator-card-label"
        className="text-sm text-muted-foreground"
      >
        {label}
      </span>
      <div data-slot="indicator-card-value" className="flex items-center gap-2">
        <span
          data-slot="indicator-card-number"
          className="text-3xl font-semibold leading-tight tracking-tight text-foreground"
        >
          {value}
        </span>
        {badge && (
          <span
            data-slot="indicator-card-badge"
            className={cn(
              "inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground [&_svg]:size-3",
              badgeClassName
            )}
          >
            {badge}
          </span>
        )}
      </div>
      {description && (
        <div data-slot="indicator-card-description" className="mt-1">
          {description}
        </div>
      )}
    </div>
  )
}

export { IndicatorCard }
