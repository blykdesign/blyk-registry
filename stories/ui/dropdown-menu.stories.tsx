import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, waitFor } from "storybook/test"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/registry/base/components/ui/dropdown-menu"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Navigation/Dropdown Menu",
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open the dropdown
    await userEvent.click(canvas.getByRole("button", { name: /open/i }))

    // Wait for the menu to appear (renders in a portal)
    const body = within(document.body)
    await waitFor(() =>
      expect(body.getByText("My Account")).toBeVisible()
    )

    // Verify all menu items are present
    await expect(body.getByText("Profile")).toBeVisible()
    await expect(body.getByText("Billing")).toBeVisible()
    await expect(body.getByText("Team")).toBeVisible()
    await expect(body.getByText("Subscription")).toBeVisible()

    // Click a menu item
    await userEvent.click(body.getByText("Profile"))
  },
}
