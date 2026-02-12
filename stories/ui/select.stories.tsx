import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, waitFor } from "storybook/test"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/registry/base/components/ui/select"

const meta = {
  title: "Components/Data Entry/Select",
  component: Select,
} satisfies Meta<typeof Select>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open the select dropdown
    await userEvent.click(canvas.getByRole("combobox"))

    // Wait for the dropdown to appear (renders in a portal)
    const body = within(document.body)
    await waitFor(() =>
      expect(body.getByText("Fruits")).toBeVisible()
    )

    // Verify all options are present
    await expect(body.getByText("Apple")).toBeVisible()
    await expect(body.getByText("Banana")).toBeVisible()
    await expect(body.getByText("Blueberry")).toBeVisible()

    // Select an option
    await userEvent.click(body.getByText("Banana"))

    // Verify the selected value is shown in the trigger
    await waitFor(() =>
      expect(canvas.getByRole("combobox")).toHaveTextContent("Banana")
    )
  },
}
