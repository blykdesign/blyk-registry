# BIUD Sebrae Landing Page

Landing page do projeto BIUD Sebrae — Crescimento Sustentável. Migrada do Storybook para app standalone.

## Desenvolvimento

```bash
# Na raiz do monorepo — use este comando (NÃO use "pnpm dev", que serve o registry)
pnpm dev:biud-sebrae
```

O comando `pnpm dev` serve o registry estático (pasta public/), não esta landing.

## Build

```bash
pnpm build:biud-sebrae
```

## Tema

O app usa o tema **BIUD Sebrae** (`registry/biud-sebrae/`), aplicado via tokens em `globals.css`:
- `registry/base/globals.css` — tokens base
- `registry/biud-sebrae/tokens/*.css` — overrides do tema

## Assets

- **SVGs**: `logo-mobile.svg`, `logo-plataforma.svg`, `brands.svg` — de `stories/assets/`
- **PNGs**: Imagens reais em `src/assets/` (hero-app, mia-avatar, cards, vídeos, etc.)

## Storybook

A story em `stories/BIUDSebrae/LandingPage.stories.tsx` importa o componente deste app para evitar duplicação.
