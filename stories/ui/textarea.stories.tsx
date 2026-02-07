import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "@/registry/base/components/ui/textarea"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  args: { placeholder: "Type your message here." },
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof Textarea>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
}
export const Disabled: Story = { args: { disabled: true } }
