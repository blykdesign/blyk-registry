import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress } from "@/registry/base/components/ui/progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  args: { value: 60 },
  argTypes: { value: { control: { type: "range", min: 0, max: 100 } } },
} satisfies Meta<typeof Progress>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-[60%]" />,
}

export const Complete: Story = {
  args: { value: 100 },
  render: (args) => <Progress {...args} className="w-[60%]" />,
}

export const Empty: Story = {
  args: { value: 0 },
  render: (args) => <Progress {...args} className="w-[60%]" />,
}
