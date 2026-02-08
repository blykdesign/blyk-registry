import type { Meta, StoryObj } from "@storybook/react-vite"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/registry/base/components/ui/command"
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react"

const meta = {
  title: "Components/Navigation/Command",
  component: Command,
} satisfies Meta<typeof Command>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[350px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><Calendar className="mr-2 h-4 w-4" /><span>Calendar</span></CommandItem>
          <CommandItem><Smile className="mr-2 h-4 w-4" /><span>Search Emoji</span></CommandItem>
          <CommandItem><Calculator className="mr-2 h-4 w-4" /><span>Calculator</span></CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><User className="mr-2 h-4 w-4" /><span>Profile</span></CommandItem>
          <CommandItem><CreditCard className="mr-2 h-4 w-4" /><span>Billing</span></CommandItem>
          <CommandItem><Settings className="mr-2 h-4 w-4" /><span>Settings</span></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
