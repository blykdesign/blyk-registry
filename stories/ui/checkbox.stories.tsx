import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "@/registry/base/components/ui/checkbox"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof Checkbox>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
