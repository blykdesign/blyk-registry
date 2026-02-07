import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster } from "@/registry/base/components/ui/sonner"
import { Button } from "@/registry/base/components/ui/button"
import { toast } from "sonner"

const meta = {
  title: "UI/Sonner",
  component: Toaster,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("Event has been created", { description: "Sunday, December 03, 2023 at 9:00 AM" })}>
      Show Toast
    </Button>
  ),
}
