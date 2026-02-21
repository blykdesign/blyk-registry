import type { Meta, StoryObj } from "@storybook/react-vite"
import { IndicatorCard } from "@/registry/df-imoveis/components/ui/indicator-card"
import { UserPlus, DollarSign, Eye, ShoppingCart, Activity, TrendingUp, TrendingDown } from "lucide-react"

const meta = {
  title: "DF Imóveis/IndicatorCard",
  component: IndicatorCard,
  decorators: [
    (Story) => (
      <div className="max-w-[256px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IndicatorCard>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <UserPlus />,
    label: "Novos Leads",
    value: "12",
    badge: (
      <>
        <TrendingUp /> +3 hoje
      </>
    ),
  },
}

export const WithoutBadge: Story = {
  args: {
    icon: <DollarSign />,
    label: "Receita Mensal",
    value: "R$ 45.200",
  },
}

export const NegativeTrend: Story = {
  args: {
    icon: <Eye />,
    label: "Visualizações",
    value: "1.842",
    badge: (
      <>
        <TrendingDown /> -12%
      </>
    ),
    badgeClassName: "text-destructive border-destructive/30",
  },
}

export const PositiveTrend: Story = {
  args: {
    icon: <ShoppingCart />,
    label: "Vendas",
    value: "384",
    badge: (
      <>
        <TrendingUp /> +18%
      </>
    ),
    badgeClassName: "text-emerald-600 border-emerald-200 bg-emerald-50",
  },
}

const sampleCards = (
  <>
    <IndicatorCard
      icon={<UserPlus />}
      label="Novos Leads"
      value="12"
      badge={
        <>
          <TrendingUp /> +3 hoje
        </>
      }
    />
    <IndicatorCard
      icon={<DollarSign />}
      label="Receita Mensal"
      value="R$ 45.200"
    />
    <IndicatorCard
      icon={<ShoppingCart />}
      label="Vendas"
      value="384"
      badge={
        <>
          <TrendingUp /> +18%
        </>
      }
      badgeClassName="text-emerald-600 border-emerald-200 bg-emerald-50"
    />
    <IndicatorCard
      icon={<Activity />}
      label="Taxa de Conversão"
      value="3,2%"
      badge={
        <>
          <TrendingDown /> -0,4%
        </>
      }
      badgeClassName="text-destructive border-destructive/30"
    />
  </>
)

export const GridScroll: Story = {
  args: {
    icon: <UserPlus />,
    label: "Novos Leads",
    value: "12",
  },
  decorators: [
    (Story) => (
      <div className="max-w-full">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {sampleCards}
    </div>
  ),
}

export const GridStack: Story = {
  args: {
    icon: <UserPlus />,
    label: "Novos Leads",
    value: "12",
  },
  decorators: [
    (Story) => (
      <div className="max-w-full">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-4">
      {sampleCards}
    </div>
  ),
}
