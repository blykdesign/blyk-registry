import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/registry/base/components/ui/navigation-menu"

const meta = {
  title: "Components/Navigation/Navigation Menu",
  component: NavigationMenu,
  parameters: { layout: "padded" },
} satisfies Meta<typeof NavigationMenu>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 w-[400px]">
              <div className="text-sm font-medium">Introduction</div>
              <div className="text-sm text-muted-foreground">Re-usable components built with Radix UI and Tailwind CSS.</div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
