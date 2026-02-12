import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, waitFor } from "storybook/test"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/base/components/ui/popover"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Navigation/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open the popover
    await userEvent.click(canvas.getByRole("button", { name: /open popover/i }))

    // Wait for the popover content to appear (renders in a portal)
    const body = within(document.body)
    await waitFor(() =>
      expect(body.getByText("Dimensions")).toBeVisible()
    )
    await expect(body.getByText("Set the dimensions for the layer.")).toBeVisible()
  },
}
