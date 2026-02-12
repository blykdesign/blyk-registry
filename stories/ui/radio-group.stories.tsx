import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect } from "storybook/test"
import { RadioGroup, RadioGroupItem } from "@/registry/base/components/ui/radio-group"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "Components/Data Entry/Radio Group",
  component: RadioGroup,
  args: { defaultValue: "comfortable" },
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof RadioGroup>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radios = canvas.getAllByRole("radio")

    // "Comfortable" should be selected by default
    await expect(radios[1]).toBeChecked()

    // Click "Default" radio
    await userEvent.click(canvas.getByLabelText("Default"))
    await expect(radios[0]).toBeChecked()
    await expect(radios[1]).not.toBeChecked()

    // Click "Compact" radio
    await userEvent.click(canvas.getByLabelText("Compact"))
    await expect(radios[2]).toBeChecked()
    await expect(radios[0]).not.toBeChecked()
  },
}
