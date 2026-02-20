import type { Meta, StoryObj } from "@storybook/react-vite"
import { LandingPage } from "../../apps/biud-sebrae-landing/src/pages/LandingPage"

const meta: Meta<typeof LandingPage> = {
  title: "BIUD Sebrae/Landing Page",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Landing page completa do BIUD Sebrae, desenvolvida a partir do design do Figma. Utilize o tema **BIUD Sebrae** na toolbar para visualizar com os tokens corretos.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof LandingPage>

export const Default: Story = {
  render: () => <LandingPage />,
}
