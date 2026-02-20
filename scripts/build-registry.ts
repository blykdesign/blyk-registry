/**
 * build-registry.ts
 *
 * Post-processes shadcn build output and generates multi-theme registries.
 *
 * After `shadcn build` generates base JSONs in public/r/, this script:
 * 1. Fixes file paths (strips source prefix for CLI compatibility)
 * 2. Organizes output into theme directories (public/r/base/, public/r/cliente-x/)
 * 3. Applies theme inheritance: client themes inherit all base components
 * 4. Injects CSS variable tokens from each theme into component JSONs
 * 5. Supports component overrides per theme
 * 6. Generates per-theme index.json catalogs
 */

import {
  access,
  mkdir,
  readdir,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises"
import { join } from "node:path"

const ROOT = join(import.meta.dirname, "..")
const OUTPUT_DIR = join(ROOT, "public", "r")
const REGISTRY_DIR = join(ROOT, "registry")
const PATH_PREFIX = "registry/base/components/"

// ---------------------------------------------------------------------------
// CSS parsing
// ---------------------------------------------------------------------------

interface CssVars {
  light: Record<string, string>
  dark: Record<string, string>
}

function parseCssVars(css: string): CssVars {
  const light: Record<string, string> = {}
  const dark: Record<string, string> = {}

  const rootMatch = css.match(/:root\s*\{([^}]+)\}/)
  if (rootMatch) {
    for (const line of rootMatch[1].split("\n")) {
      const m = line.match(/--([^:]+):\s*(.+?)\s*;/)
      if (m) light[m[1].trim()] = m[2].trim()
    }
  }

  const darkMatch = css.match(/\.dark\s*\{([^}]+)\}/)
  if (darkMatch) {
    for (const line of darkMatch[1].split("\n")) {
      const m = line.match(/--([^:]+):\s*(.+?)\s*;/)
      if (m) dark[m[1].trim()] = m[2].trim()
    }
  }

  return { light, dark }
}

async function loadThemeTokens(themePath: string): Promise<CssVars> {
  const tokensDir = join(themePath, "tokens")
  const merged: CssVars = { light: {}, dark: {} }

  try {
    await access(tokensDir)
  } catch {
    return merged
  }

  const files = await readdir(tokensDir)
  for (const file of files.filter((f) => f.endsWith(".css"))) {
    const css = await readFile(join(tokensDir, file), "utf-8")
    const vars = parseCssVars(css)
    Object.assign(merged.light, vars.light)
    Object.assign(merged.dark, vars.dark)
  }

  return merged
}

// ---------------------------------------------------------------------------
// Registry schema types
// ---------------------------------------------------------------------------

interface RegistryFile {
  path?: string
  type?: string
  target?: string
  content?: string
}

interface RegistryItem {
  name?: string
  files?: RegistryFile[]
  cssVars?: CssVars
  dependencies?: string[]
  registryDependencies?: string[]
}

interface RegistryIndex {
  name?: string
  [key: string]: unknown
}

// ---------------------------------------------------------------------------
// Path & type fixing
// ---------------------------------------------------------------------------

function resolveFileType(path: string): string {
  if (path.startsWith("hooks/")) return "registry:hook"
  if (path.startsWith("lib/")) return "registry:lib"
  return "registry:ui"
}

function fixComponentJson(json: RegistryItem): RegistryItem {
  if (!json.files || !Array.isArray(json.files)) return json

  for (const f of json.files) {
    if (f.path?.startsWith(PATH_PREFIX)) {
      f.path = f.path.slice(PATH_PREFIX.length)
    }
    if (f.path) {
      f.type = resolveFileType(f.path)
    }
    if (f.target === undefined) {
      f.target = ""
    }
  }

  return json
}

// ---------------------------------------------------------------------------
// Theme-exclusive detection
// ---------------------------------------------------------------------------

/**
 * Returns the theme name if a component belongs exclusively to a non-base
 * theme (e.g. "df-imoveis"), or null if it's a base component.
 */
function getExclusiveTheme(json: RegistryItem): string | null {
  for (const f of json.files ?? []) {
    const match = f.path?.match(/^registry\/([^/]+)\//)
    if (match && match[1] !== "base") {
      return match[1]
    }
  }
  return null
}

// ---------------------------------------------------------------------------
// Theme building
// ---------------------------------------------------------------------------

async function discoverThemes(): Promise<string[]> {
  const entries = await readdir(REGISTRY_DIR, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && e.name !== "base")
    .map((e) => e.name)
}

async function hasOverride(
  theme: string,
  componentFile: string
): Promise<string | null> {
  const name = componentFile.replace(".json", "")
  const uiPath = join(REGISTRY_DIR, theme, "components", "ui", `${name}.tsx`)
  try {
    await access(uiPath)
    return uiPath
  } catch {
    return null
  }
}

interface BuildBaseResult {
  baseComponents: Map<string, RegistryItem>
  themeExclusives: Map<string, Map<string, RegistryItem>>
}

async function buildBaseTheme(
  baseJsonFiles: string[]
): Promise<BuildBaseResult> {
  const baseDir = join(OUTPUT_DIR, "base")
  await mkdir(baseDir, { recursive: true })

  const baseTokens = await loadThemeTokens(join(REGISTRY_DIR, "base"))
  const hasTokens =
    Object.keys(baseTokens.light).length > 0 ||
    Object.keys(baseTokens.dark).length > 0
  const baseComponents = new Map<string, RegistryItem>()
  const themeExclusives = new Map<string, Map<string, RegistryItem>>()

  for (const file of baseJsonFiles) {
    const raw = JSON.parse(await readFile(join(OUTPUT_DIR, file), "utf-8"))
    const fixed = fixComponentJson(raw)

    // Check if this component belongs exclusively to a non-base theme
    const exclusiveTheme = getExclusiveTheme(raw)
    if (exclusiveTheme) {
      if (!themeExclusives.has(exclusiveTheme)) {
        themeExclusives.set(exclusiveTheme, new Map())
      }
      themeExclusives.get(exclusiveTheme)!.set(file, fixed)
      continue // skip — not a base component
    }

    // Inject base cssVars if the component doesn't already have its own
    if (hasTokens) {
      const existing: Partial<CssVars> = fixed.cssVars ?? {}
      const hasExisting =
        Object.keys(existing.light ?? {}).length > 0 ||
        Object.keys(existing.dark ?? {}).length > 0

      if (!hasExisting) {
        fixed.cssVars = {
          light: { ...baseTokens.light },
          dark: { ...baseTokens.dark },
        }
      }
    }

    baseComponents.set(file, fixed)
    await writeFile(
      join(baseDir, file),
      JSON.stringify(fixed, null, 2) + "\n"
    )
  }

  // Generate base index.json
  const registryIndex = JSON.parse(
    await readFile(join(OUTPUT_DIR, "registry.json"), "utf-8")
  )
  await writeFile(
    join(baseDir, "index.json"),
    JSON.stringify(registryIndex, null, 2) + "\n"
  )

  return { baseComponents, themeExclusives }
}

async function buildClientTheme(
  theme: string,
  baseComponents: Map<string, RegistryItem>,
  exclusiveComponents: Map<string, RegistryItem>,
  baseRegistryIndex: RegistryIndex
) {
  const themeDir = join(OUTPUT_DIR, theme)
  await mkdir(themeDir, { recursive: true })

  const themeTokens = await loadThemeTokens(join(REGISTRY_DIR, theme))
  const baseTokens = await loadThemeTokens(join(REGISTRY_DIR, "base"))

  // Merge: base tokens + theme overrides
  const mergedTokens: CssVars = {
    light: { ...baseTokens.light, ...themeTokens.light },
    dark: { ...baseTokens.dark, ...themeTokens.dark },
  }

  let overrideCount = 0
  let exclusiveCount = 0

  for (const [file, baseJson] of baseComponents) {
    const component = structuredClone(baseJson)

    // Check for component override
    const overridePath = await hasOverride(theme, file)
    if (overridePath) {
      const overrideContent = await readFile(overridePath, "utf-8")
      if (component.files?.[0]) {
        component.files[0].content = overrideContent
      }
      overrideCount++
    }

    // Apply merged tokens
    if (
      Object.keys(mergedTokens.light).length > 0 ||
      Object.keys(mergedTokens.dark).length > 0
    ) {
      component.cssVars = {
        light: { ...mergedTokens.light },
        dark: { ...mergedTokens.dark },
      }
    }

    await writeFile(
      join(themeDir, file),
      JSON.stringify(component, null, 2) + "\n"
    )
  }

  // Add theme-exclusive components
  for (const [file, json] of exclusiveComponents) {
    const component = structuredClone(json)

    // Fix file paths for theme-exclusive components
    const themePrefix = `registry/${theme}/components/`
    for (const f of component.files ?? []) {
      if (f.path?.startsWith(themePrefix)) {
        f.path = f.path.slice(themePrefix.length)
      }
      if (f.path) {
        f.type = resolveFileType(f.path)
      }
      if (f.target === undefined) {
        f.target = ""
      }
    }

    // Apply merged tokens
    if (
      Object.keys(mergedTokens.light).length > 0 ||
      Object.keys(mergedTokens.dark).length > 0
    ) {
      component.cssVars = {
        light: { ...mergedTokens.light },
        dark: { ...mergedTokens.dark },
      }
    }

    await writeFile(
      join(themeDir, file),
      JSON.stringify(component, null, 2) + "\n"
    )
    exclusiveCount++
  }

  const total = baseComponents.size + exclusiveCount

  // Generate theme index.json
  const themeIndex = {
    ...baseRegistryIndex,
    name: `blyk-registry-${theme}`,
  }
  await writeFile(
    join(themeDir, "index.json"),
    JSON.stringify(themeIndex, null, 2) + "\n"
  )

  console.log(
    `  theme "${theme}": ${total} components (${overrideCount} overrides, ${exclusiveCount} exclusive)`
  )
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const allFiles = await readdir(OUTPUT_DIR)
  const componentJsons = allFiles.filter(
    (f) => f.endsWith(".json") && f !== "registry.json"
  )

  console.log(`\npost-process: ${componentJsons.length} component JSONs found`)

  // Build base theme (separates base components from theme-exclusive ones)
  console.log("building base theme...")
  const { baseComponents, themeExclusives } =
    await buildBaseTheme(componentJsons)
  console.log(`  theme "base": ${baseComponents.size} components`)

  if (themeExclusives.size > 0) {
    const exclusiveSummary = [...themeExclusives.entries()]
      .map(([t, m]) => `${t}(${m.size})`)
      .join(", ")
    console.log(`  theme-exclusive components: ${exclusiveSummary}`)
  }

  // Load registry index for reuse
  const registryIndex = JSON.parse(
    await readFile(join(OUTPUT_DIR, "registry.json"), "utf-8")
  )

  // Build client themes
  const themes = await discoverThemes()
  if (themes.length > 0) {
    console.log(`building ${themes.length} client theme(s)...`)
    for (const theme of themes) {
      const exclusives = themeExclusives.get(theme) ?? new Map()
      await buildClientTheme(theme, baseComponents, exclusives, registryIndex)
    }
  } else {
    console.log("no client themes found")
  }

  // Clean up root-level component JSONs (keep only registry.json at root)
  for (const file of componentJsons) {
    await rm(join(OUTPUT_DIR, file))
  }

  console.log("done!\n")
}

main().catch((err) => {
  console.error("build-registry failed:", err)
  process.exit(1)
})
