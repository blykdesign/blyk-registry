import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "@/registry/base/components/ui/switch"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "UI/Switch",
  component: Switch,
  argTypes: { disabled: { control: "boolean" } },
} satisfies Meta<typeof Switch>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
