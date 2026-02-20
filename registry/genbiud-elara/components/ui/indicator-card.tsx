import * as React from "react"

import { cn } from "@/lib/utils"

function IndicatorCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="indicator-card"
      className={cn(
        "flex flex-col gap-1.5 rounded-[var(--card-radius)] border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-lg active:shadow-none active:bg-muted min-w-[var(--indicator-card-min-width)]",
        className
      )}
      {...props}
    />
  )
}

function IndicatorCardIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="indicator-card-icon"
      className={cn(
        "flex items-center justify-center size-8 text-muted-foreground [&_svg]:size-8",
        className
      )}
      {...props}
    />
  )
}

function IndicatorCardLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="indicator-card-label"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function IndicatorCardValue({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="indicator-card-value"
      className={cn(
        "flex items-center gap-2",
        className
      )}
      {...props}
    />
  )
}

function IndicatorCardNumber({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="indicator-card-number"
      className={cn(
        "text-3xl font-semibold leading-tight tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  )
}

function IndicatorCardBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="indicator-card-badge"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground [&_svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export {
  IndicatorCard,
  IndicatorCardIcon,
  IndicatorCardLabel,
  IndicatorCardValue,
  IndicatorCardNumber,
  IndicatorCardBadge,
}
