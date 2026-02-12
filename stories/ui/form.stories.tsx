import type { Meta, StoryObj } from "@storybook/react-vite"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/base/components/ui/form"
import { Input } from "@/registry/base/components/ui/input"
import { Button } from "@/registry/base/components/ui/button"

const meta: Meta = {
  title: "Components/Misc/Form",
  component: Form,
}
export default meta
type Story = StoryObj<typeof meta>

function FormDemo() {
  const form = useForm({ defaultValues: { username: "" } })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="w-[350px] space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export const Default: Story = {
  render: () => <FormDemo />,
}
