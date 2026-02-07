import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/base/components/ui/tooltip"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  decorators: [(Story) => <TooltipProvider><Story /></TooltipProvider>],
} satisfies Meta<typeof Tooltip>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}
