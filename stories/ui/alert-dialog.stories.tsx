import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, waitFor } from "storybook/test"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/registry/base/components/ui/alert-dialog"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Feedback/Alert Dialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. This will permanently delete your account.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open the alert dialog
    await userEvent.click(canvas.getByRole("button", { name: /show dialog/i }))

    // Wait for the alert dialog to appear (renders in a portal)
    const body = within(document.body)
    await waitFor(() =>
      expect(body.getByRole("alertdialog")).toBeInTheDocument()
    )

    // Verify the content
    await expect(body.getByText("Are you absolutely sure?")).toBeInTheDocument()
    await expect(body.getByText(/this action cannot be undone/i)).toBeInTheDocument()

    // Click Cancel to close
    await userEvent.click(body.getByRole("button", { name: /cancel/i }))
    await waitFor(() =>
      expect(body.queryByRole("alertdialog")).not.toBeInTheDocument()
    )
  },
}
