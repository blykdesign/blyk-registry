import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonGroup } from "@/registry/base/components/ui/button-group"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Actions/Button Group",
  component: ButtonGroup,
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
} satisfies Meta<typeof ButtonGroup>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}
