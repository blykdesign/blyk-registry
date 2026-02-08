import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Calendar } from "@/registry/base/components/ui/calendar"

const meta = {
  title: "Components/Data Entry/Calendar",
  component: Calendar,
} satisfies Meta<typeof Calendar>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
  },
}
