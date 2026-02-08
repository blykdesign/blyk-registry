import type { Meta, StoryObj } from "@storybook/react-vite"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuLabel } from "@/registry/base/components/ui/context-menu"

const meta = {
  title: "Components/Navigation/Context Menu",
  component: ContextMenu,
} satisfies Meta<typeof ContextMenu>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>More Tools</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
