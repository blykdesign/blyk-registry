import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/base/components/ui/sheet"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Layout/Sheet",
  component: Sheet,
} satisfies Meta<typeof Sheet>
export default meta
type Story = StoryObj<typeof meta>

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open Left</Button></SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse the menu.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open Top</Button></SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification</SheetTitle>
          <SheetDescription>A sheet from the top.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open Bottom</Button></SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Actions</SheetTitle>
          <SheetDescription>Select an action below.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
