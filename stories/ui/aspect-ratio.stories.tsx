import type { Meta, StoryObj } from "@storybook/react-vite"
import { AspectRatio } from "@/registry/base/components/ui/aspect-ratio"

const meta = {
  title: "Components/Layout/Aspect Ratio",
  component: AspectRatio,
} satisfies Meta<typeof AspectRatio>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">16:9</span>
      </AspectRatio>
    </div>
  ),
}
export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">1:1</span>
      </AspectRatio>
    </div>
  ),
}
