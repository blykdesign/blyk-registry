import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ── Root ──────────────────────────────────────────────── */

function ImovelCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="imovel-card"
      className={cn(
        "flex w-[342px] flex-col overflow-hidden rounded-[14px] border border-border bg-card bg-linear-to-b from-transparent to-primary/15 text-card-foreground shadow-sm transition-shadow hover:shadow-lg active:shadow-none",
        className
      )}
      {...props}
    />
  )
}

/* ── Image ─────────────────────────────────────────────── */

interface ImovelCardImageProps
  extends React.ComponentProps<"img"> {
  src: string
  alt: string
}

function ImovelCardImage({
  className,
  src,
  alt,
  ...props
}: ImovelCardImageProps) {
  return (
    <img
      data-slot="imovel-card-image"
      src={src}
      alt={alt}
      className={cn(
        "aspect-[3/2] w-full object-cover",
        className
      )}
      {...props}
    />
  )
}

/* ── Content ───────────────────────────────────────────── */

function ImovelCardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="imovel-card-content"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  )
}

/* ── Tags row ──────────────────────────────────────────── */

function ImovelCardTags({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="imovel-card-tags"
      className={cn(
        "flex flex-wrap items-center gap-2",
        className
      )}
      {...props}
    />
  )
}

/* ── Tag (with cva variants) ───────────────────────────── */

const imovelCardTagVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium [&_svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-primary-foreground",
        ghost: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ImovelCardTagProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof imovelCardTagVariants> {}

function ImovelCardTag({
  className,
  variant,
  ...props
}: ImovelCardTagProps) {
  return (
    <span
      data-slot="imovel-card-tag"
      className={cn(imovelCardTagVariants({ variant }), className)}
      {...props}
    />
  )
}

/* ── Price ──────────────────────────────────────────────── */

function ImovelCardPrice({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="imovel-card-price"
      className={cn(
        "text-3xl font-semibold leading-normal text-foreground",
        className
      )}
      {...props}
    />
  )
}

/* ── Address ───────────────────────────────────────────── */

function ImovelCardAddress({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="imovel-card-address"
      className={cn(
        "truncate text-sm leading-normal text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/* ── Features row ──────────────────────────────────────── */

function ImovelCardFeatures({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="imovel-card-features"
      className={cn(
        "flex flex-wrap items-center gap-2",
        className
      )}
      {...props}
    />
  )
}

/* ── Exports ───────────────────────────────────────────── */

export {
  ImovelCard,
  ImovelCardImage,
  ImovelCardContent,
  ImovelCardTags,
  ImovelCardTag,
  ImovelCardPrice,
  ImovelCardAddress,
  ImovelCardFeatures,
  imovelCardTagVariants,
}
