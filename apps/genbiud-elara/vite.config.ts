import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { join } from "node:path"

const APP_ROOT = import.meta.dirname
const ROOT = join(APP_ROOT, "../..")

export default defineConfig({
  root: APP_ROOT,
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    fs: { allow: [ROOT] },
  },
  resolve: {
    alias: [
      {
        find: "@/components/ui/indicator-card",
        replacement: join(ROOT, "registry/genbiud-elara/components/ui/indicator-card.tsx"),
      },
      {
        find: "@/components/ui",
        replacement: join(ROOT, "registry/base/components/ui"),
      },
      {
        find: "@/lib",
        replacement: join(ROOT, "lib"),
      },
      {
        find: "@/hooks",
        replacement: join(ROOT, "registry/base/components/hooks"),
      },
      {
        find: "@",
        replacement: join(APP_ROOT, "src"),
      },
    ],
  },
})
