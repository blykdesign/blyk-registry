import * as React from "react"

/* ── Color Pair Card ────────────────────────────────────── */
export function ColorPairCard({
  bgVar,
  fgVar,
  label,
  description,
}: {
  bgVar: string
  fgVar: string
  label: string
  description?: string
}) {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
      }}
    >
      <div
        style={{
          backgroundColor: `hsl(var(${bgVar}))`,
          color: `hsl(var(${fgVar}))`,
          padding: "1rem",
          height: "5rem",
          display: "flex",
          alignItems: "flex-end",
          fontSize: "1.5rem",
          fontWeight: 600,
          letterSpacing: "-0.025em",
        }}
      >
        Aa
      </div>
      <div
        style={{
          padding: "0.75rem 1rem",
          backgroundColor: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <code
          style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            background: "none",
            padding: 0,
          }}
        >
          {bgVar}
        </code>
        <code
          style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            color: "hsl(var(--muted-foreground))",
            background: "none",
            padding: 0,
          }}
        >
          {fgVar}
        </code>
        {description && (
          <span
            style={{
              fontSize: "0.6875rem",
              color: "hsl(var(--muted-foreground))",
              marginTop: "4px",
            }}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

/* ── Color Swatch ───────────────────────────────────────── */
export function ColorSwatch({
  cssVar,
  description,
}: {
  cssVar: string
  description?: string
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.75rem 1rem",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
      }}
    >
      <div
        style={{
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "calc(var(--radius) - 2px)",
          backgroundColor: `hsl(var(${cssVar}))`,
          border: "1px solid hsl(var(--border))",
          flexShrink: 0,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <code
          style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            color: "hsl(var(--foreground))",
            background: "none",
            padding: 0,
          }}
        >
          {cssVar}
        </code>
        {description && (
          <span
            style={{
              fontSize: "0.6875rem",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

/* ── Token Grid ─────────────────────────────────────────── */
export function TokenGrid({
  children,
  columns = 3,
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

/* ── Radius Preview ─────────────────────────────────────── */
export function RadiusPreview({
  name,
  cssValue,
  resolvedValue,
}: {
  name: string
  cssValue: string
  resolvedValue?: string
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.75rem 1rem",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
      }}
    >
      <div
        style={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: cssValue,
          border: "2px solid hsl(var(--foreground))",
          backgroundColor: "hsl(var(--muted))",
          flexShrink: 0,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <code
          style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            color: "hsl(var(--foreground))",
            background: "none",
            padding: 0,
          }}
        >
          {name}
        </code>
        <code
          style={{
            fontSize: "0.6875rem",
            fontFamily: "var(--font-mono)",
            color: "hsl(var(--muted-foreground))",
            background: "none",
            padding: 0,
          }}
        >
          {cssValue}
        </code>
        {resolvedValue && (
          <span
            style={{
              fontSize: "0.6875rem",
              color: "hsl(var(--muted-foreground))",
            }}
          >
            {resolvedValue}
          </span>
        )}
      </div>
    </div>
  )
}

/* ── Font Preview ───────────────────────────────────────── */
export function FontPreview({
  cssVar,
  value,
  specimen,
}: {
  cssVar: string
  value: string
  specimen?: string
}) {
  return (
    <div
      style={{
        padding: "1.5rem",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
        marginBottom: "0.75rem",
      }}
    >
      <div
        style={{
          fontFamily: `var(${cssVar})`,
          fontSize: "1.75rem",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          marginBottom: "1rem",
          lineHeight: 1.3,
        }}
      >
        {specimen || "The quick brown fox jumps over the lazy dog"}
      </div>
      <div
        style={{
          fontFamily: `var(${cssVar})`,
          fontSize: "0.875rem",
          marginBottom: "1.25rem",
          lineHeight: 1.6,
          color: "hsl(var(--muted-foreground))",
        }}
      >
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br />
        abcdefghijklmnopqrstuvwxyz
        <br />
        0123456789 !@#$%^&*()
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          borderTop: "1px solid hsl(var(--border))",
          paddingTop: "0.75rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span
            style={{
              fontSize: "0.625rem",
              color: "hsl(var(--muted-foreground))",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Token
          </span>
          <code
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              background: "none",
              padding: 0,
            }}
          >
            {cssVar}
          </code>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span
            style={{
              fontSize: "0.625rem",
              color: "hsl(var(--muted-foreground))",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Value
          </span>
          <code
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "hsl(var(--muted-foreground))",
              background: "none",
              padding: 0,
            }}
          >
            {value}
          </code>
        </div>
      </div>
    </div>
  )
}

/* ── Spacing Scale ──────────────────────────────────────── */
export function SpacingScale() {
  const steps = [
    { name: "1", rem: "0.25rem", px: "4px" },
    { name: "2", rem: "0.5rem", px: "8px" },
    { name: "3", rem: "0.75rem", px: "12px" },
    { name: "4", rem: "1rem", px: "16px" },
    { name: "5", rem: "1.25rem", px: "20px" },
    { name: "6", rem: "1.5rem", px: "24px" },
    { name: "8", rem: "2rem", px: "32px" },
    { name: "10", rem: "2.5rem", px: "40px" },
    { name: "12", rem: "3rem", px: "48px" },
    { name: "16", rem: "4rem", px: "64px" },
    { name: "20", rem: "5rem", px: "80px" },
    { name: "24", rem: "6rem", px: "96px" },
  ]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.375rem",
        margin: "1rem 0 1.5rem",
        padding: "1.25rem",
        borderRadius: "var(--radius)",
        border: "1px solid hsl(var(--border))",
        backgroundColor: "hsl(var(--card))",
      }}
    >
      {steps.map((step) => (
        <div
          key={step.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <code
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "hsl(var(--muted-foreground))",
              width: "1.75rem",
              textAlign: "right",
              flexShrink: 0,
              background: "none",
              padding: 0,
            }}
          >
            {step.name}
          </code>
          <div
            style={{
              height: "1.25rem",
              width: step.rem,
              backgroundColor: "hsl(var(--primary))",
              borderRadius: "calc(var(--radius) - 4px)",
              flexShrink: 0,
              minWidth: "2px",
            }}
          />
          <code
            style={{
              fontSize: "0.6875rem",
              fontFamily: "var(--font-mono)",
              color: "hsl(var(--muted-foreground))",
              background: "none",
              padding: 0,
            }}
          >
            {step.rem}{" "}
            <span style={{ opacity: 0.6 }}>({step.px})</span>
          </code>
        </div>
      ))}
    </div>
  )
}

/* ── Section Divider ────────────────────────────────────── */
export function TokenDivider() {
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
