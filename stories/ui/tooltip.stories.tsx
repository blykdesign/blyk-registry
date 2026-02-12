import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, waitFor } from "storybook/test"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/base/components/ui/tooltip"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Navigation/Tooltip",
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Hover over the trigger button
    await userEvent.hover(canvas.getByRole("button", { name: /hover me/i }))

    // Wait for tooltip to appear (renders in a portal)
    const body = within(document.body)
    await waitFor(() =>
      expect(body.getByRole("tooltip")).toBeInTheDocument()
    )
    await expect(body.getByText("Add to library")).toBeVisible()

    // Unhover to close
    await userEvent.unhover(canvas.getByRole("button", { name: /hover me/i }))
  },
}
