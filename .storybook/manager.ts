import { addons } from "storybook/manager-api"
import { create } from "storybook/theming/create"
import brandImage from "./logo-blyk.svg"

/**
 * Tema do manager alinhado ao design do uall-docs (atualização cosmética).
 * Cores e tipografia extraídos de uall-docs/app/globals.css.
 */
const blykTheme = create({
  base: "light",
  colorPrimary: "#333333",
  colorSecondary: "#666666",
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#fafafa",
  appHoverBg: "#f5f5f5",
  appBorderColor: "#e5e5e5",
  appBorderRadius: 10,
  fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"JetBrains Mono", ui-monospace, monospace',
  textColor: "#262626",
  textInverseColor: "#fafafa",
  textMutedColor: "#7a7a7a",
  barBg: "#fafafa",
  barTextColor: "#262626",
  barHoverColor: "#525252",
  barSelectedColor: "#333333",
  buttonBg: "#f5f5f5",
  buttonBorder: "#e5e5e5",
  booleanBg: "#f5f5f5",
  booleanSelectedBg: "#e5e5e5",
  inputBg: "#ffffff",
  inputBorder: "#e5e5e5",
  inputTextColor: "#262626",
  inputBorderRadius: 10,
  brandTitle: "blyk design system",
  brandUrl: "https://registry.blyk.design",
  brandImage,
  brandTarget: "_self",
})

addons.setConfig({
  theme: blykTheme,
})
