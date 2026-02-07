import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "@/registry/base/components/ui/input"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "UI/Input",
  component: Input,
  args: { placeholder: "Type something..." },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "search", "tel", "url"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}
export const Password: Story = { args: { type: "password", placeholder: "Password" } }
export const Disabled: Story = { args: { disabled: true } }
export const File: Story = { args: { type: "file" } }
