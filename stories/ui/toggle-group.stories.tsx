import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleGroup, ToggleGroupItem } from "@/registry/base/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

const meta = {
  title: "Components/Actions/Toggle Group",
  component: ToggleGroup,
} satisfies Meta<typeof ToggleGroup>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { type: "multiple" },
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}
export const Single: Story = {
  args: { type: "single" },
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}
export const Outline: Story = {
  args: { type: "multiple" },
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
}
