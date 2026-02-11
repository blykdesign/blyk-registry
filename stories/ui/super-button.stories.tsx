import type { Meta, StoryObj } from "@storybook/react-vite"
import { SuperButton } from "@/registry/base/components/ui/super-button"
import { Mail, ArrowRight, Loader2 } from "lucide-react"

const meta = {
  title: "Components/Actions/SuperButton",
  component: SuperButton,
  args: { children: "Super Button" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: { control: "select", options: ["default", "icon"] },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof SuperButton>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: "secondary" } }
export const Destructive: Story = { args: { variant: "destructive" } }
export const Outline: Story = { args: { variant: "outline" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Link: Story = { args: { variant: "link" } }
export const Icon: Story = { args: { size: "icon", children: <Mail className="size-4" /> } }
export const Disabled: Story = { args: { disabled: true } }
export const WithIcon: Story = { args: { children: <><Mail className="size-4" /> Login with Email</> } }
export const WithIconRight: Story = { args: { children: <>Get Started <ArrowRight className="size-4" /></> } }
export const Loading: Story = { args: { disabled: true, children: <><Loader2 className="size-4 animate-spin" /> Loading...</> } }
