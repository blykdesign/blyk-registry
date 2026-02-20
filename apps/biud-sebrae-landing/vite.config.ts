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
    alias: {
      "@/components/ui": join(ROOT, "registry/base/components/ui"),
      "@/lib": join(ROOT, "lib"),
      "@/hooks": join(ROOT, "registry/base/components/hooks"),
      "@": join(ROOT, "registry/base"),
    },
  },
})
