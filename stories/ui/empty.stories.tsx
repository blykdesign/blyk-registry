import type { Meta, StoryObj } from "@storybook/react-vite"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "@/registry/base/components/ui/empty"
import { Inbox } from "lucide-react"

const meta = {
  title: "Components/Misc/Empty",
  component: Empty,
} satisfies Meta<typeof Empty>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <Inbox className="h-10 w-10 text-muted-foreground" />
      </EmptyHeader>
      <EmptyContent>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>Try adjusting your search or filter to find what you are looking for.</EmptyDescription>
      </EmptyContent>
    </Empty>
  ),
}
