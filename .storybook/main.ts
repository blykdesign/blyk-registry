// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/react-vite"
import { join, dirname } from "node:path"
import tailwindcss from "@tailwindcss/vite"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")))
}

const ROOT = join(__dirname, "..")

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  staticDirs: [],

  addons: [
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite") as "@storybook/react-vite",
    options: {},
  },

  viteFinal: async (config) => {
    config.plugins = config.plugins || []
    config.plugins.push(tailwindcss())

    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      // Map component-internal imports to actual source locations
      "@/components/ui": join(ROOT, "registry/base/components/ui"),
      "@/hooks": join(ROOT, "registry/base/components/hooks"),
      "@/lib": join(ROOT, "lib"),
      "@/": ROOT + "/",
    }

    return config
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}

export default config
