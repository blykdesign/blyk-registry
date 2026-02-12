import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, fn } from "storybook/test"
import { Button } from "@/registry/base/components/ui/button"
import { Mail } from "lucide-react"

const meta = {
  title: "Components/Actions/Button",
  component: Button,
  args: { children: "Button", onClick: fn() },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: /button/i })

    await expect(button).toBeInTheDocument()
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(2)
  },
}
export const Destructive: Story = { args: { variant: "destructive" } }
export const Outline: Story = { args: { variant: "outline" } }
export const Secondary: Story = { args: { variant: "secondary" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Link: Story = { args: { variant: "link" } }
export const Small: Story = { args: { size: "sm" } }
export const Large: Story = { args: { size: "lg" } }
export const Icon: Story = { args: { size: "icon", children: <Mail className="h-4 w-4" /> } }
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")

    await expect(button).toBeDisabled()
  },
}
export const WithIcon: Story = { args: { children: <><Mail className="h-4 w-4" /> Login with Email</> } }
