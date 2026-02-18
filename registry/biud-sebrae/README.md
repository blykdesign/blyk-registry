# Theme: biud-sebrae

Tema do Design System Blyk para o projeto **BIUD Sebrae**. Herda todos os componentes do tema base e customiza cores, tipografia e radius conforme a identidade visual do Sebrae.

## Identidade visual

- **Primary:** `#1B50E2` (azul)
- **Fonte principal:** Figtree
- **Fonte monoespaçada:** Geist Mono
- **Paleta base:** Slate (Tailwind)

## Tokens customizados

### Cores (divergentes do blyk-base)

| Token | Light | Dark |
|-------|-------|------|
| `--primary` | 224 76% 50% (#1B50E2) | 214 32% 91% (slate) |
| `--primary-foreground` | 210 40% 99% | 224 76% 50% (#1B50E2) |
| `--foreground` | 222 47% 4% (slate-950) | 210 40% 99% |
| `--border` | 214 32% 91% (slate-200) | 0 0% 100% / 0.1 |
| `--input` | 214 32% 91% | 0 0% 100% / 0.15 |
| `--ring` | 215 20% 65% (slate-400) | 215 16% 47% (slate-500) |
| `--chart-1` | 224 76% 50% (azul) | 224 100% 92% |
| `--chart-2` | 24 76% 55% (laranja) | 20 100% 80% |
| `--chart-4` | 43 96% 56% (amber) | 280 65% 60% |

### Tipografia

| Token | Valor |
|-------|-------|
| `--font-sans` | "Figtree" |
| `--font-serif` | "Georgia" |
| `--font-mono` | "Geist Mono" |
| `--font-heading` | var(--font-sans) |

### Radius

- `--radius`: 0.5rem (8px)

## Uso

```bash
# Instalar um componente
npx shadcn@latest add button --registry https://registry.blyk.design/r/biud-sebrae

# Instalar todos os componentes
npx shadcn@latest add --all --registry https://registry.blyk.design/r/biud-sebrae
```

## Dependências de fonte

Para que a tipografia seja exibida corretamente, inclua as fontes no projeto:

```html
<!-- Figtree (Google Fonts) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Geist Mono (se usar npm) -->
```

Ou via CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap');
```

## Estrutura

```
registry/biud-sebrae/
├── README.md           ← esta documentação
├── tokens/
│   ├── colors.css      ← cores light/dark
│   ├── typography.css  ← fontes
│   └── radius.css      ← border-radius
└── components/
    └── ui/             ← overrides de componentes (opcional)
```
