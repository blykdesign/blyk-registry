import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect } from "storybook/test"
import { Textarea } from "@/registry/base/components/ui/textarea"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "Components/Data Entry/Textarea",
  component: Textarea,
  args: { placeholder: "Type your message here." },
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof Textarea>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText("Type your message here.")

    await expect(textarea).toBeInTheDocument()
    await userEvent.click(textarea)
    await userEvent.type(textarea, "This is a sample message.\nWith multiple lines.")
    await expect(textarea).toHaveValue("This is a sample message.\nWith multiple lines.")
  },
}
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea {...args} id="message" placeholder="Type your message here." />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByLabelText("Your message")

    await userEvent.click(textarea)
    await userEvent.type(textarea, "Hello from the play function!")
    await expect(textarea).toHaveValue("Hello from the play function!")
  },
}
export const Disabled: Story = { args: { disabled: true } }
