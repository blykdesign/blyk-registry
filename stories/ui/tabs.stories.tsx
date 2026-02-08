import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/base/components/ui/tabs"

const meta = {
  title: "Components/Layout/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
}
