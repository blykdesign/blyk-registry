import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect } from "storybook/test"
import { Switch } from "@/registry/base/components/ui/switch"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "Components/Data Entry/Switch",
  component: Switch,
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole("switch")

    await expect(switchEl).not.toBeChecked()
    await userEvent.click(switchEl)
    await expect(switchEl).toBeChecked()
    await userEvent.click(switchEl)
    await expect(switchEl).not.toBeChecked()
  },
}
export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole("switch")

    await userEvent.click(canvas.getByText("Airplane Mode"))
    await expect(switchEl).toBeChecked()
  },
}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
