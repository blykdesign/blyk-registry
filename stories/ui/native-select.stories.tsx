import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelect, NativeSelectOption } from "@/registry/base/components/ui/native-select"

const meta = {
  title: "Components/Data Entry/Native Select",
  component: NativeSelect,
} satisfies Meta<typeof NativeSelect>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-[180px]">
      <NativeSelectOption value="">Select a fruit</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  ),
}
