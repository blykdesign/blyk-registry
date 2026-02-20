/**
 * sync-shadcn.ts
 *
 * Syncs base components with the latest shadcn/ui upstream.
 *
 * For each component in registry.json:
 * 1. Fetches the latest version from ui.shadcn.com/r/{name}.json
 * 2. Falls back to GitHub raw for components not in the registry
 * 3. Compares with local source files
 * 4. Reports differences and optionally updates
 *
 * Usage:
 *   pnpm sync-shadcn              # Dry run — show what changed
 *   pnpm sync-shadcn -- --apply   # Apply updates to local files
 */

import { readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"

const ROOT = join(import.meta.dirname, "..")
const REGISTRY_JSON = join(ROOT, "registry.json")
const COMPONENTS_DIR = join(ROOT, "registry", "base", "components")

const SHADCN_REGISTRY_URL = "https://ui.shadcn.com/r"
const SHADCN_GITHUB_RAW =
  "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/v4/registry/new-york-v4"

// Components that return 404 from the registry endpoint but exist on GitHub
const GITHUB_ONLY = new Set([
  "combobox",
  "direction",
  "native-select",
  "toast",
  "use-mobile",
])

// Multi-file components or hooks that need special GitHub fetch paths
const GITHUB_FILE_MAP: Record<string, { path: string; ghPath: string }[]> = {
  "use-mobile": [
    { path: "hooks/use-mobile.ts", ghPath: "hooks/use-mobile.ts" },
  ],
}

// Components that cannot be synced (removed from upstream, legacy, etc.)
const SKIP_SYNC = new Set([
  "toast", // Legacy — removed in v4, replaced by sonner. Our local copy is kept as-is.
])

// Import path patterns to fix (upstream internal paths → standard aliases)
const IMPORT_FIXES: [RegExp, string][] = [
  [/@\/registry\/[^/]+\/ui\//g, "@/components/ui/"],
  [/@\/registry\/[^/]+\/hooks\//g, "@/hooks/"],
  [/@\/registry\/[^/]+\/lib\//g, "@/lib/"],
]

function fixImports(content: string): string {
  let fixed = content
  for (const [pattern, replacement] of IMPORT_FIXES) {
    fixed = fixed.replace(pattern, replacement)
  }
  return fixed
}

interface FileInfo {
  path: string
  content: string
}

async function fetchFromRegistry(name: string): Promise<FileInfo[] | null> {
  try {
    const res = await fetch(`${SHADCN_REGISTRY_URL}/${name}.json`)
    if (!res.ok) return null

    const data = await res.json()
    if (!data.files || !Array.isArray(data.files)) return null

    return data.files.map((f: any) => ({
      path: f.path as string,
      content: fixImports(f.content as string),
    }))
  } catch {
    return null
  }
}

async function fetchFromGitHub(name: string): Promise<FileInfo[] | null> {
  try {
    const fileMap = GITHUB_FILE_MAP[name]
    if (fileMap) {
      // Multi-file or special path component
      const results: FileInfo[] = []
      for (const entry of fileMap) {
        const res = await fetch(`${SHADCN_GITHUB_RAW}/${entry.ghPath}`)
        if (!res.ok) continue
        results.push({
          path: entry.path,
          content: fixImports(await res.text()),
        })
      }
      return results.length > 0 ? results : null
    }

    // Default: single UI component
    const res = await fetch(`${SHADCN_GITHUB_RAW}/ui/${name}.tsx`)
    if (!res.ok) return null

    const content = fixImports(await res.text())
    return [{ path: `ui/${name}.tsx`, content }]
  } catch {
    return null
  }
}

function localPathForFile(filePath: string): string {
  return join(COMPONENTS_DIR, filePath)
}

async function readLocalFile(filePath: string): Promise<string | null> {
  try {
    return await readFile(localPathForFile(filePath), "utf-8")
  } catch {
    return null
  }
}

interface SyncResult {
  name: string
  status: "up-to-date" | "changed" | "new" | "fetch-failed"
  files?: { path: string; changed: boolean }[]
}

async function syncComponent(name: string): Promise<SyncResult> {
  if (SKIP_SYNC.has(name)) {
    return { name, status: "up-to-date" }
  }

  let upstream: FileInfo[] | null = null

  if (GITHUB_ONLY.has(name)) {
    upstream = await fetchFromGitHub(name)
  } else {
    upstream = await fetchFromRegistry(name)
    // Fallback to GitHub if registry fails
    if (!upstream) {
      upstream = await fetchFromGitHub(name)
    }
  }

  if (!upstream) {
    return { name, status: "fetch-failed" }
  }

  const files: { path: string; changed: boolean }[] = []
  let anyChanged = false

  for (const upFile of upstream) {
    const local = await readLocalFile(upFile.path)
    if (local === null) {
      files.push({ path: upFile.path, changed: true })
      anyChanged = true
    } else if (local !== upFile.content) {
      files.push({ path: upFile.path, changed: true })
      anyChanged = true
    } else {
      files.push({ path: upFile.path, changed: false })
    }
  }

  return {
    name,
    status: anyChanged ? "changed" : "up-to-date",
    files,
  }
}

async function applyUpdate(name: string): Promise<void> {
  let upstream: FileInfo[] | null = null

  if (GITHUB_ONLY.has(name)) {
    upstream = await fetchFromGitHub(name)
  } else {
    upstream = await fetchFromRegistry(name)
    if (!upstream) upstream = await fetchFromGitHub(name)
  }

  if (!upstream) return

  for (const upFile of upstream) {
    await writeFile(localPathForFile(upFile.path), upFile.content)
  }
}

async function main() {
  const applyMode = process.argv.includes("--apply")
  const onlyIdx = process.argv.indexOf("--only")
  const onlyName = onlyIdx >= 0 ? process.argv[onlyIdx + 1] : null

  console.log(`\nsync-shadcn: ${applyMode ? "APPLY mode" : "DRY RUN mode"}${onlyName ? ` (only: ${onlyName})` : ""}`)
  console.log("fetching upstream components...\n")

  const registry = JSON.parse(await readFile(REGISTRY_JSON, "utf-8"))
  let names: string[] = registry.items.map((item: any) => item.name)
  if (onlyName) {
    if (!names.includes(onlyName)) {
      console.error(`Unknown component: ${onlyName}`)
      process.exit(1)
    }
    names = [onlyName]
  }

  const results: SyncResult[] = []
  let done = 0

  for (const name of names) {
    const result = await syncComponent(name)
    results.push(result)
    done++
    process.stdout.write(`\r  checking: ${done}/${names.length} (${Math.round((done / names.length) * 100)}%)`)
  }

  console.log("\n")

  const changed = results.filter((r) => r.status === "changed")
  const failed = results.filter((r) => r.status === "fetch-failed")
  const upToDate = results.filter((r) => r.status === "up-to-date")

  console.log(`  up-to-date: ${upToDate.length}`)
  console.log(`  changed:    ${changed.length}`)
  console.log(`  failed:     ${failed.length}`)

  if (failed.length > 0) {
    console.log(
      `\n  fetch failed: ${failed.map((r) => r.name).join(", ")}`
    )
  }

  if (changed.length > 0) {
    console.log("\n  changed components:")
    for (const r of changed) {
      const changedFiles = r.files?.filter((f) => f.changed) ?? []
      console.log(`    ${r.name} (${changedFiles.length} file(s))`)
      for (const f of changedFiles) {
        console.log(`      └─ ${f.path}`)
      }
    }

    if (applyMode) {
      console.log("\napplying updates...")
      for (const r of changed) {
        await applyUpdate(r.name)
        console.log(`  ✓ ${r.name}`)
      }
      console.log("\ndone! Run \`pnpm build\` to regenerate the registry.\n")
    } else {
      console.log("\nrun with --apply to update:")
      console.log("  pnpm sync-shadcn -- --apply\n")
    }
  } else {
    console.log("\nall components are up to date!\n")
  }
}

main().catch((err) => {
  console.error("sync-shadcn failed:", err)
  process.exit(1)
})
