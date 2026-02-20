# Theme: lekto

Tema do Design System Blyk para o projeto **Lekto**. Herda todos os componentes do tema base e customiza cores, tipografia e radius conforme a identidade visual da Lekto.

## Identidade visual

- **Primary:** `#7E1BA8` (purple/violet)
- **Fonte principal:** Mulish
- **Fonte serifada:** Georgia
- **Fonte monoespaçada:** Geist Mono
- **Paleta base:** Slate (Tailwind)

## Tokens customizados

### Cores (divergentes do blyk-base)

| Token | Light | Dark |
|-------|-------|------|
| `--primary` | 287 72% 38% (#7E1BA8) | 285 100% 98% (#FCF4FF) |
| `--primary-foreground` | 285 100% 98% (#FCF4FF) | 287 72% 38% (#7E1BA8) |
| `--foreground` | 222 47% 4% (slate-950) | 210 40% 98% |
| `--border` | 214 32% 91% (slate-200) | 0 0% 100% / 0.1 |
| `--input` | 214 32% 91% | 0 0% 100% / 0.15 |
| `--ring` | 215 20% 65% (slate-400) | 215 20% 47% (slate-500) |
| `--chart-1` | 287 72% 38% (#7E1BA8) | 285 100% 97% (#FBF2FF) |
| `--chart-2` | 211 55% 16% (#122A3F) | 211 24% 75% (#AFC0CE) |

### Tipografia

| Token | Valor |
|-------|-------|
| `--font-sans` | "Mulish" |
| `--font-serif` | "Georgia" |
| `--font-mono` | "Geist Mono" |
| `--font-heading` | var(--font-sans) |

### Radius

- `--radius`: 0.5rem (8px)

## Uso

```bash
# Instalar um componente
npx shadcn@latest add button --registry https://registry.blyk.design/r/lekto

# Instalar todos os componentes
npx shadcn@latest add --all --registry https://registry.blyk.design/r/lekto
```

## Dependências de fonte

Para que a tipografia seja exibida corretamente, inclua as fontes no projeto:

```html
<!-- Mulish (Google Fonts) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Ou via CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&display=swap');
```

## Estrutura

```
registry/lekto/
├── README.md           ← esta documentação
├── tokens/
│   ├── colors.css      ← cores light/dark
│   ├── typography.css  ← fontes
│   └── radius.css      ← border-radius
└── components/
    └── ui/             ← overrides de componentes (opcional)
```
