import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  IndicatorCard,
  IndicatorCardIcon,
  IndicatorCardLabel,
  IndicatorCardValue,
  IndicatorCardNumber,
  IndicatorCardBadge,
} from "@/registry/base/components/ui/indicator-card"
import { UserPlus, TrendingUp, DollarSign, Eye, ShoppingCart, TrendingDown, Activity } from "lucide-react"

const meta = {
  title: "Components/Data Display/IndicatorCard",
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
  render: () => (
    <IndicatorCard>
      <IndicatorCardIcon>
        <UserPlus />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Novos Leads</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>12</IndicatorCardNumber>
        <IndicatorCardBadge>
          <TrendingUp /> +3 hoje
        </IndicatorCardBadge>
      </IndicatorCardValue>
    </IndicatorCard>
  ),
}

export const WithoutBadge: Story = {
  render: () => (
    <IndicatorCard>
      <IndicatorCardIcon>
        <DollarSign />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Receita Mensal</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>R$ 45.200</IndicatorCardNumber>
      </IndicatorCardValue>
    </IndicatorCard>
  ),
}

export const NegativeTrend: Story = {
  render: () => (
    <IndicatorCard>
      <IndicatorCardIcon>
        <Eye />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Visualizações</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>1.842</IndicatorCardNumber>
        <IndicatorCardBadge className="text-destructive border-destructive/30">
          <TrendingDown /> -12%
        </IndicatorCardBadge>
      </IndicatorCardValue>
    </IndicatorCard>
  ),
}

export const PositiveTrend: Story = {
  render: () => (
    <IndicatorCard>
      <IndicatorCardIcon>
        <ShoppingCart />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Vendas</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>384</IndicatorCardNumber>
        <IndicatorCardBadge className="text-emerald-600 border-emerald-200 bg-emerald-50">
          <TrendingUp /> +18%
        </IndicatorCardBadge>
      </IndicatorCardValue>
    </IndicatorCard>
  ),
}

const sampleCards = (
  <>
    <IndicatorCard>
      <IndicatorCardIcon>
        <UserPlus />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Novos Leads</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>12</IndicatorCardNumber>
        <IndicatorCardBadge>
          <TrendingUp /> +3 hoje
        </IndicatorCardBadge>
      </IndicatorCardValue>
    </IndicatorCard>

    <IndicatorCard>
      <IndicatorCardIcon>
        <DollarSign />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Receita Mensal</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>R$ 45.200</IndicatorCardNumber>
      </IndicatorCardValue>
    </IndicatorCard>

    <IndicatorCard>
      <IndicatorCardIcon>
        <ShoppingCart />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Vendas</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>384</IndicatorCardNumber>
        <IndicatorCardBadge className="text-emerald-600 border-emerald-200 bg-emerald-50">
          <TrendingUp /> +18%
        </IndicatorCardBadge>
      </IndicatorCardValue>
    </IndicatorCard>

    <IndicatorCard>
      <IndicatorCardIcon>
        <Activity />
      </IndicatorCardIcon>
      <IndicatorCardLabel>Taxa de Conversão</IndicatorCardLabel>
      <IndicatorCardValue>
        <IndicatorCardNumber>3,2%</IndicatorCardNumber>
        <IndicatorCardBadge className="text-destructive border-destructive/30">
          <TrendingDown /> -0,4%
        </IndicatorCardBadge>
      </IndicatorCardValue>
    </IndicatorCard>
  </>
)

export const GridScroll: Story = {
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
