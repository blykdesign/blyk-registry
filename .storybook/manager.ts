import { addons } from "storybook/manager-api"
import { create } from "storybook/theming/create"
import brandImage from "./logo-blyk.svg"

const blykTheme = create({
  base: "light",
  brandTitle: "blyk design system",
  brandUrl: "https://registry.blyk.design",
  brandImage,
  brandTarget: "_self",
})

addons.setConfig({
  theme: blykTheme,
})
