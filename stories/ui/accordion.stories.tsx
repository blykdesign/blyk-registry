import type { Meta, StoryObj } from "@storybook/react-vite"
import { userEvent, within, expect, waitFor } from "storybook/test"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/base/components/ui/accordion"

const meta = {
  title: "Components/Layout/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { type: "single" },
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default, but you can disable it.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open the first accordion item
    await userEvent.click(canvas.getByText("Is it accessible?"))
    await waitFor(() =>
      expect(canvas.getByText("Yes. It adheres to the WAI-ARIA design pattern.")).toBeVisible()
    )

    // Open the second item (closes the first in single mode)
    await userEvent.click(canvas.getByText("Is it styled?"))
    await waitFor(() =>
      expect(canvas.getByText("Yes. It comes with default styles that match the other components.")).toBeVisible()
    )

    // Open the third item
    await userEvent.click(canvas.getByText("Is it animated?"))
    await waitFor(() =>
      expect(canvas.getByText("Yes. It's animated by default, but you can disable it.")).toBeVisible()
    )
  },
}

export const Multiple: Story = {
  args: { type: "multiple" },
  render: () => (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Open both sections (multiple mode allows it)
    await userEvent.click(canvas.getByText("Section 1"))
    await waitFor(() =>
      expect(canvas.getByText("Content for section 1.")).toBeVisible()
    )

    await userEvent.click(canvas.getByText("Section 2"))
    await waitFor(() =>
      expect(canvas.getByText("Content for section 2.")).toBeVisible()
    )

    // Both should be visible simultaneously
    await expect(canvas.getByText("Content for section 1.")).toBeVisible()
    await expect(canvas.getByText("Content for section 2.")).toBeVisible()
  },
}
