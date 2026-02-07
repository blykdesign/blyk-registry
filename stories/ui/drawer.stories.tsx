import type { Meta, StoryObj } from "@storybook/react-vite"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/registry/base/components/ui/drawer"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "UI/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild><Button variant="outline">Open Drawer</Button></DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <p className="text-center text-sm text-muted-foreground">Your goal is set.</p>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
}
