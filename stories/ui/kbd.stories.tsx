import type { Meta, StoryObj } from "@storybook/react-vite"
import { Kbd } from "@/registry/base/components/ui/kbd"

const meta = {
  title: "Components/Data Display/Kbd",
  component: Kbd,
  args: { children: "\u2318" },
} satisfies Meta<typeof Kbd>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Combination: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>{"\u2318"}</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
}
