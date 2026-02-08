import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/registry/base/components/ui/input-group"

const meta = {
  title: "Components/Data Entry/Input Group",
  component: InputGroup,
} satisfies Meta<typeof InputGroup>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon>https://</InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}
