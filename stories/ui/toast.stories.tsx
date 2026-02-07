import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toast, ToastProvider, ToastViewport } from "@/registry/base/components/ui/toast"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "UI/Toast",
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toast>
      <div className="grid gap-1">
        <div className="text-sm font-semibold">Scheduled: Catch up</div>
        <div className="text-sm opacity-90">Friday, February 10, 2024 at 5:57 PM</div>
      </div>
    </Toast>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Toast variant="destructive">
      <div className="grid gap-1">
        <div className="text-sm font-semibold">Error</div>
        <div className="text-sm opacity-90">Something went wrong.</div>
      </div>
    </Toast>
  ),
}
