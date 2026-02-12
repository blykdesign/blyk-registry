import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect } from "storybook/test"
import { Toggle } from "@/registry/base/components/ui/toggle"
import { Bold } from "lucide-react"

const meta = {
  title: "Components/Actions/Toggle",
  component: Toggle,
  argTypes: {
    variant: { control: "select", options: ["default", "outline"] },
    size: { control: "select", options: ["default", "sm", "lg"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Toggle>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: <Bold className="h-4 w-4" />, "aria-label": "Toggle bold" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole("button", { name: /toggle bold/i })

    await expect(toggle).toHaveAttribute("aria-pressed", "false")
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute("aria-pressed", "true")
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute("aria-pressed", "false")
  },
}
export const WithText: Story = { args: { children: <><Bold className="h-4 w-4" /> Bold</> } }
export const Outline: Story = { args: { variant: "outline", children: <Bold className="h-4 w-4" />, "aria-label": "Toggle bold" } }
export const Small: Story = { args: { size: "sm", children: <Bold className="h-4 w-4" />, "aria-label": "Toggle bold" } }
export const Large: Story = { args: { size: "lg", children: <Bold className="h-4 w-4" />, "aria-label": "Toggle bold" } }
export const Disabled: Story = { args: { disabled: true, children: <Bold className="h-4 w-4" />, "aria-label": "Toggle bold" } }
