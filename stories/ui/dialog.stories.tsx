import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, waitFor } from "storybook/test"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/base/components/ui/dialog"
import { Button } from "@/registry/base/components/ui/button"
import { Input } from "@/registry/base/components/ui/input"
import { Label } from "@/registry/base/components/ui/label"

const meta = {
  title: "Components/Feedback/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Username</Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Click the trigger to open the dialog
    await userEvent.click(canvas.getByRole("button", { name: /edit profile/i }))

    // Wait for dialog to appear (it renders in a portal, so use document.body)
    const body = within(document.body)
    await waitFor(() =>
      expect(body.getByRole("dialog")).toBeInTheDocument()
    )

    // Verify dialog content
    await expect(body.getByText("Edit profile")).toBeInTheDocument()
    await expect(body.getByText(/make changes to your profile/i)).toBeInTheDocument()

    // Clear the Name field and type a new name
    const nameInput = body.getByLabelText("Name")
    await userEvent.clear(nameInput)
    await userEvent.type(nameInput, "John Doe")
    await expect(nameInput).toHaveValue("John Doe")

    // Clear the Username field and type a new username
    const usernameInput = body.getByLabelText("Username")
    await userEvent.clear(usernameInput)
    await userEvent.type(usernameInput, "@johndoe")
    await expect(usernameInput).toHaveValue("@johndoe")
  },
}
