import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect } from "storybook/test"
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Verify the form elements are present
    const usernameInput = canvas.getByPlaceholderText("shadcn")
    await expect(usernameInput).toBeInTheDocument()
    await expect(canvas.getByText("This is your public display name.")).toBeInTheDocument()

    // Fill in the username field
    await userEvent.click(usernameInput)
    await userEvent.type(usernameInput, "johndoe")
    await expect(usernameInput).toHaveValue("johndoe")

    // Click submit
    await userEvent.click(canvas.getByRole("button", { name: /submit/i }))
  },
}
