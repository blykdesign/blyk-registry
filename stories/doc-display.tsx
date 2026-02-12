import * as React from "react"

/* ── Section Divider ────────────────────────────────────── */
export function DocDivider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid hsl(var(--border))",
        margin: "2.5rem 0",
      }}
    />
  )
}

/* ── Feature Card ───────────────────────────────────────── */
export function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div
      style={{
        padding: "1.25rem",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: "0.9375rem",
          marginBottom: "0.375rem",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.8125rem",
          color: "hsl(var(--muted-foreground))",
          lineHeight: 1.5,
        }}
      >
        {description}
      </div>
    </div>
  )
}

/* ── Link Card ──────────────────────────────────────────── */
export function LinkCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        padding: "1.25rem",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
        textDecoration: "none",
        transition: "border-color 150ms, background-color 150ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "hsl(var(--ring))"
        e.currentTarget.style.backgroundColor = "hsl(var(--accent))"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "hsl(var(--border))"
        e.currentTarget.style.backgroundColor = "hsl(var(--card))"
      }}
    >
      <div
        style={{
          fontWeight: 600,
          fontSize: "0.9375rem",
          marginBottom: "0.25rem",
        }}
      >
        {title}
        <span
          style={{
            marginLeft: "0.375rem",
            fontSize: "0.75rem",
            opacity: 0.5,
          }}
        >
          ↗
        </span>
      </div>
      <div
        style={{
          fontSize: "0.8125rem",
          color: "hsl(var(--muted-foreground))",
          lineHeight: 1.5,
        }}
      >
        {description}
      </div>
    </a>
  )
}

/* ── Tip / Callout ──────────────────────────────────────── */
export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "1rem 1.25rem",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--muted))",
        color: "hsl(var(--muted-foreground))",
        fontSize: "0.8125rem",
        lineHeight: 1.6,
        margin: "1rem 0",
      }}
    >
      <span style={{ fontWeight: 600, marginRight: "0.5rem" }}>Tip:</span>
      {children}
    </div>
  )
}

/* ── Grid layout ────────────────────────────────────────── */
export function DocGrid({
  children,
  columns = 2,
}: {
  children: React.ReactNode
  columns?: number
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "0.75rem",
        margin: "1rem 0 1.5rem",
      }}
    >
      {children}
    </div>
  )
}

/* ── Hero section for Introduction ──────────────────────── */
export function Hero({
  title,
  subtitle,
  description,
}: {
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2.5rem 0 1.5rem",
      }}
    >
      <div
        style={{
          fontSize: "4rem",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          color: "hsl(var(--foreground))",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "1.125rem",
          color: "hsl(var(--muted-foreground))",
          marginTop: "0.5rem",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {subtitle}
      </div>
      <p
        style={{
          maxWidth: "36rem",
          margin: "1.5rem auto 0",
          color: "hsl(var(--muted-foreground))",
          lineHeight: 1.6,
          fontSize: "0.9375rem",
        }}
      >
        {description}
      </p>
    </div>
  )
}

/* ── Step indicator ─────────────────────────────────────── */
export function Step({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        margin: "1.25rem 0",
      }}
    >
      <div
        style={{
          width: "1.75rem",
          height: "1.75rem",
          borderRadius: "50%",
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          fontWeight: 700,
          flexShrink: 0,
          marginTop: "0.125rem",
        }}
      >
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontWeight: 600,
            fontSize: "0.9375rem",
            marginBottom: "0.5rem",
            color: "hsl(var(--foreground))",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "0.8125rem",
            color: "hsl(var(--muted-foreground))",
            lineHeight: 1.6,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
