import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster } from "@/registry/base/components/ui/sonner"
import { Button } from "@/registry/base/components/ui/button"
import { toast } from "sonner"

// Note: The Toaster component from toaster.tsx uses the Radix-based toast system.
// For Storybook, we demonstrate using sonner (the recommended approach in shadcn v4).

const meta = {
  title: "Components/Feedback/Toaster",
  component: Toaster,
} satisfies Meta<typeof Toaster>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button variant="outline" onClick={() => toast.success("Success!", { description: "Your action was completed." })}>
        Success Toast
      </Button>
      <Button variant="outline" onClick={() => toast.error("Error!", { description: "Something went wrong." })}>
        Error Toast
      </Button>
      <Button variant="outline" onClick={() => toast.info("Info", { description: "Here is some info." })}>
        Info Toast
      </Button>
      <Toaster />
    </div>
  ),
}
