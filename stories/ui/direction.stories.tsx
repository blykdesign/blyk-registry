import type { Meta, StoryObj } from "@storybook/react-vite"
import { DirectionProvider } from "@/registry/base/components/ui/direction"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "UI/DirectionProvider",
  component: DirectionProvider,
} satisfies Meta<typeof DirectionProvider>
export default meta
type Story = StoryObj<typeof meta>

export const LTR: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="flex gap-2"><Button>Left</Button><Button>Right</Button></div>
    </DirectionProvider>
  ),
}
export const RTL: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div className="flex gap-2"><Button>Right</Button><Button>Left</Button></div>
    </DirectionProvider>
  ),
}
