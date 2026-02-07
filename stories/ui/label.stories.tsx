import type { Meta, StoryObj } from "@storybook/react-vite"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "UI/Label",
  component: Label,
  args: { children: "Label text" },
} satisfies Meta<typeof Label>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
