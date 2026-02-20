import * as React from "react"

import { cn } from "@/lib/utils"

export interface ImovelCardTagItem {
  icon?: React.ReactNode
  label: React.ReactNode
}

export interface ImovelCardFeatureItem {
  icon?: React.ReactNode
  label: React.ReactNode
}

export interface ImovelCardProps extends Omit<React.ComponentProps<"div">, "children"> {
  image: { src: string; alt: string }
  tags?: ImovelCardTagItem[]
  price: React.ReactNode
  address: React.ReactNode
  features?: ImovelCardFeatureItem[]
}

function ImovelCard({
  className,
  image,
  tags,
  price,
  address,
  features,
  ...props
}: ImovelCardProps) {
  return (
    <div
      data-slot="imovel-card"
      className={cn(
        "flex w-[var(--card-width)] flex-col overflow-hidden rounded-[var(--card-radius)] border border-border bg-card bg-linear-to-b from-transparent to-primary/15 text-card-foreground shadow-sm transition-shadow hover:shadow-lg active:shadow-none",
        className
      )}
      {...props}
    >
      <img
        data-slot="imovel-card-image"
        src={image.src}
        alt={image.alt}
        className="aspect-[3/2] w-full object-cover"
      />
      <div data-slot="imovel-card-content" className="flex flex-col gap-1.5 p-6">
        {tags && tags.length > 0 && (
          <div data-slot="imovel-card-tags" className="flex flex-wrap items-center gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                data-slot="imovel-card-tag"
                className="inline-flex items-center gap-1 rounded-full border border-transparent bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground [&_svg]:size-3"
              >
                {tag.icon}
                {tag.label}
              </span>
            ))}
          </div>
        )}
        <span
          data-slot="imovel-card-price"
          className="text-3xl font-semibold leading-normal text-foreground"
        >
          {price}
        </span>
        <span
          data-slot="imovel-card-address"
          className="truncate text-sm leading-normal text-muted-foreground"
        >
          {address}
        </span>
        {features && features.length > 0 && (
          <div
            data-slot="imovel-card-features"
            className="flex flex-wrap items-center gap-2"
          >
            {features.map((feat, i) => (
              <span
                key={i}
                data-slot="imovel-card-tag"
                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium text-foreground [&_svg]:size-3"
              >
                {feat.icon}
                {feat.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export { ImovelCard }
