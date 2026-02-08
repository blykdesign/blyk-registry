import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/base/components/ui/hover-card"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Navigation/Hover Card",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
