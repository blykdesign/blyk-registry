/**
 * new-theme.ts
 *
 * Scaffolds a new client theme with token templates.
 * Usage: pnpm new-theme <theme-name>
 */

import { mkdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"

const ROOT = join(import.meta.dirname, "..")
const REGISTRY_DIR = join(ROOT, "registry")

const COLORS_TEMPLATE = `/* Theme: {{name}} — Color tokens
 * Override only the variables you need.
 * Unmodified variables will inherit from the base theme.
 */

:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;
}
`

async function main() {
  const name = process.argv[2]

  if (!name) {
    console.error("Usage: pnpm new-theme <theme-name>")
    console.error("Example: pnpm new-theme cliente-x")
    process.exit(1)
  }

  // Validate name
  if (!/^[a-z0-9-]+$/.test(name)) {
    console.error(
      'Theme name must be lowercase alphanumeric with hyphens (e.g., "cliente-x")'
    )
    process.exit(1)
  }

  if (name === "base") {
    console.error('"base" is reserved for the base theme')
    process.exit(1)
  }

  const themePath = join(REGISTRY_DIR, name)
  const tokensPath = join(themePath, "tokens")
  const componentsPath = join(themePath, "components", "ui")

  // Create directories
  await mkdir(tokensPath, { recursive: true })
  await mkdir(componentsPath, { recursive: true })

  // Write colors template
  await writeFile(
    join(tokensPath, "colors.css"),
    COLORS_TEMPLATE.replace("{{name}}", name)
  )

  // Write .gitkeep for components
  await writeFile(join(componentsPath, ".gitkeep"), "")

  console.log(`\nTheme "${name}" created at registry/${name}/`)
  console.log("")
  console.log("Structure:")
  console.log(`  registry/${name}/`)
  console.log(`  ├── tokens/`)
  console.log(`  │   └── colors.css    ← edit your color tokens here`)
  console.log(`  └── components/`)
  console.log(`      └── ui/           ← add component overrides here`)
  console.log("")
  console.log("Next steps:")
  console.log(`  1. Edit registry/${name}/tokens/colors.css with your brand colors`)
  console.log(`  2. Optionally add typography.css, radius.css, spacing.css`)
  console.log(`  3. Run \`pnpm build\` to generate the themed registry`)
  console.log(
    `  4. Consume via: npx shadcn@latest add button --registry https://registry.blyk.design/r/${name}`
  )
  console.log("")
}

main().catch((err) => {
  console.error("new-theme failed:", err)
  process.exit(1)
})
