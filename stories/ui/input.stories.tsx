import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect } from "storybook/test"
import { Input } from "@/registry/base/components/ui/input"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "Components/Data Entry/Input",
  component: Input,
  args: { placeholder: "Type something..." },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "search", "tel", "url"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("Type something...")

    await expect(input).toBeInTheDocument()
    await userEvent.click(input)
    await userEvent.type(input, "Hello, World!")
    await expect(input).toHaveValue("Hello, World!")
  },
}
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} type="email" id="email" placeholder="Email" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText("Email")

    await expect(input).toBeInTheDocument()
    await userEvent.click(input)
    await userEvent.type(input, "user@example.com")
    await expect(input).toHaveValue("user@example.com")
  },
}
export const Password: Story = { args: { type: "password", placeholder: "Password" } }
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("Type something...")

    await expect(input).toBeDisabled()
  },
}
export const File: Story = { args: { type: "file" } }
