import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "@/registry/base/components/ui/button"

// The combobox component uses @base-ui-components/react which has a complex API.
// We show a simplified usage via the Command component which is the standard shadcn pattern.
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/base/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? frameworks.find((f) => f.value === value)?.label : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

const meta = {
  title: "Components/Data Entry/Combobox",
  component: ComboboxDemo,
} satisfies Meta<typeof ComboboxDemo>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
