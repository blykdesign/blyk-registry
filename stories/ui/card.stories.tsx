import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/base/components/ui/card"
import { Button } from "@/registry/base/components/ui/button"

const meta = {
  title: "Components/Data Display/Card",
  component: Card,
} satisfies Meta<typeof Card>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <p>Simple card with just content.</p>
    </Card>
  ),
}
