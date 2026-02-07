import type { Meta, StoryObj } from "@storybook/react-vite"
import { Item, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/registry/base/components/ui/item"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "UI/Item",
  component: Item,
} satisfies Meta<typeof Item>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item className="w-[400px]">
      <ItemContent>
        <ItemTitle>Item Title</ItemTitle>
        <ItemDescription>This is a description of the item.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">Edit</Button>
      </ItemActions>
    </Item>
  ),
}
