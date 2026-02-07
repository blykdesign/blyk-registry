# blyk-registry

Custom [shadcn/ui](https://ui.shadcn.com) registry for [blyk.design](https://blyk.design) clients.

Hosted at **registry.blyk.design** via Vercel.

## How it works

```
base (blyk root theme)
├── all shadcn/ui components + design tokens
│
├── cliente-x (inherits from base)
│   ├── overrides: colors, typography
│   └── optional: custom components
│
└── cliente-y (inherits from base)
    └── overrides: colors
```

Each client theme inherits **all** base components. Tokens are merged (base + client overrides) and injected as `cssVars` in every component JSON. Clients can also override individual component source code.

## Usage (for client devs)

```bash
# Install a single component from the base theme
npx shadcn@latest add button --registry https://registry.blyk.design/r/base

# Install from a specific client theme
npx shadcn@latest add button --registry https://registry.blyk.design/r/cliente-x

# Install all components from a theme
npx shadcn@latest add --all --registry https://registry.blyk.design/r/cliente-x
```

## Development

### Prerequisites

- Node.js 20+
- pnpm 9+

### Commands

```bash
pnpm install          # Install dependencies
pnpm build            # Generate registry JSONs (shadcn build + post-process)
pnpm dev              # Serve registry locally at http://localhost:3000
pnpm new-theme <name> # Scaffold a new client theme
pnpm sync-shadcn      # Update base components from shadcn upstream
pnpm typecheck        # Run TypeScript type checking
```

### Creating a new client theme

```bash
pnpm new-theme cliente-z
```

This creates:

```
registry/cliente-z/
├── tokens/
│   └── colors.css    ← edit brand colors here
└── components/
    └── ui/           ← add component overrides here
```

Edit the token files, then run `pnpm build`.

### Overriding a component

To customize a component for a specific client:

1. Copy the base component from `registry/base/components/ui/button.tsx`
2. Place it at `registry/cliente-x/components/ui/button.tsx`
3. Make your changes
4. Run `pnpm build` — the theme build will use the override instead of base

## Build pipeline

```
pnpm build
  │
  ├─ shadcn build          → reads registry.json, outputs flat JSONs to public/r/
  │
  └─ build-registry.ts     → post-processes:
       ├─ fixes file paths (strips source prefix)
       ├─ organizes into theme dirs (public/r/base/, public/r/cliente-x/)
       ├─ merges tokens (base + client overrides)
       ├─ injects cssVars into every component JSON
       └─ generates per-theme index.json
```

### Output structure

```
public/r/
├── registry.json           # Master catalog
├── base/
│   ├── index.json          # Theme catalog (58 items)
│   ├── button.json         # Component with base tokens
│   └── ...
└── cliente-x/
    ├── index.json          # Theme catalog (58 items)
    ├── button.json         # Component with merged tokens
    └── ...
```

## Deploy

The registry is deployed as static files on Vercel:

1. Push to GitHub
2. Connect the repo to Vercel
3. Set domain to `registry.blyk.design`
4. Vercel runs `pnpm build` and serves `public/` directory

### Vercel settings

| Setting | Value |
|---|---|
| Build Command | `pnpm build` |
| Output Directory | `public` |
| Install Command | `pnpm install` |
| Framework | Other |
| Node.js Version | 20.x |

## Components

58 items total: 57 components + 1 hook (`use-mobile`).

All official shadcn/ui components are included, plus:
button-group, combobox, direction, empty, field, input-group, item, kbd, native-select, spinner.

## Tech stack

- **shadcn** v3.8.4 — registry build
- **tsx** — TypeScript script runner
- **TypeScript** 5.x — type safety
- **pnpm** — package manager
- **Vercel** — static hosting
