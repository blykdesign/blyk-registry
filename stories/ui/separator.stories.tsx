import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "@/registry/base/components/ui/separator"

const meta = {
  title: "Components/Data Display/Separator",
  component: Separator,
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    decorative: { control: "boolean" },
  },
} satisfies Meta<typeof Separator>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <div style={{ width: args.orientation === "vertical" ? "auto" : "100%", height: args.orientation === "vertical" ? "100px" : "auto" }}>
      <Separator {...args} />
    </div>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}
