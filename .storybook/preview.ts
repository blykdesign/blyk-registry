import type { Preview, Decorator } from "@storybook/react-vite"
import { useEffect } from "react"
import "./globals.css"
import "./theme-tokens/df-imoveis.css"

/* ── Theme decorator ────────────────────────────────────── */
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || "base"
  const mode = context.globals.mode || "light"

  useEffect(() => {
    const root = document.documentElement
    // Apply theme attribute
    if (theme === "base") {
      root.removeAttribute("data-theme")
    } else {
      root.setAttribute("data-theme", theme)
    }
    // Apply dark/light mode
    if (mode === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme, mode])

  return Story()
}

/* ── Viewport presets ───────────────────────────────────── */
const VIEWPORTS = {
  mobileS: { name: "Mobile S (320)", styles: { width: "320px", height: "568px" } },
  mobileM: { name: "Mobile M (375)", styles: { width: "375px", height: "667px" } },
  mobileL: { name: "Mobile L (425)", styles: { width: "425px", height: "812px" } },
  tablet: { name: "Tablet (768)", styles: { width: "768px", height: "1024px" } },
  desktop: { name: "Desktop (1280)", styles: { width: "1280px", height: "800px" } },
}

/* ── Preview config ─────────────────────────────────────── */
const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      description: "Design system theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "base", title: "blyk-base" },
          { value: "df-imoveis", title: "DF Imóveis" },
        ],
        dynamicTitle: true,
      },
    },
    mode: {
      description: "Color mode",
      toolbar: {
        title: "Mode",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    layout: "centered",
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    viewport: { options: VIEWPORTS },
    backgrounds: { disabled: true },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Tokens",
          "Components",
          [
            "Actions",
            ["Button", "Button Group", "Toggle", "Toggle Group"],
            "Data Entry",
            ["Input", "Input Group", "Input OTP", "Textarea", "Select", "Native Select", "Checkbox", "Radio Group", "Switch", "Slider", "Calendar", "Combobox"],
            "Data Display",
            ["Avatar", "Badge", "Card", "Item", "Table", "Skeleton", "Separator", "Kbd"],
            "Feedback",
            ["Alert", "Alert Dialog", "Dialog", "Progress", "Spinner", "Sonner", "Toast", "Toaster"],
            "Layout",
            ["Accordion", "Aspect Ratio", "Carousel", "Collapsible", "Resizable", "Scroll Area", "Sheet", "Sidebar", "Tabs"],
            "Navigation",
            ["Breadcrumb", "Command", "Context Menu", "Dropdown Menu", "Hover Card", "Menubar", "Navigation Menu", "Pagination", "Popover", "Tooltip"],
            "Misc",
            ["Chart", "Direction", "Drawer", "Empty", "Field", "Form", "Label"],
          ],
          "DF Imóveis",
          ["IndicatorCard", "ImovelCard"],
        ],
      },
    },
  },
}

export default preview
