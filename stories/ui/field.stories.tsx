import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldLabel, FieldDescription } from "@/registry/base/components/ui/field"
import { Input } from "@/registry/base/components/ui/input"

const meta = {
  title: "UI/Field",
  component: Field,
} satisfies Meta<typeof Field>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field className="w-[300px]">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="email@example.com" />
      <FieldDescription>We will never share your email.</FieldDescription>
    </Field>
  ),
}
