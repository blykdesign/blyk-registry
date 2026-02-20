import type { Meta, StoryObj } from "@storybook/react-vite"
import { ImovelCard } from "@/registry/df-imoveis/components/ui/imovel-card"
import { Star, PenLine, Shield, Bed, Bath, Car, Maximize2 } from "lucide-react"

const meta = {
  title: "DF Imóveis/ImovelCard",
  component: ImovelCard,
  decorators: [
    (Story) => (
      <div className="max-w-[342px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImovelCard>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image: {
      src: "https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel",
      alt: "Foto do imóvel",
    },
    tags: [
      { icon: <Star />, label: "Destaque" },
      { icon: <PenLine />, label: "Assinado" },
      { icon: <Shield />, label: "Seguro" },
    ],
    price: "R$ 500.000",
    address: "SQS 308 Bloco A, Apartamento 302 - Asa Sul",
    features: [
      { icon: <Bed />, label: "3" },
      { icon: <Bath />, label: "3" },
      { icon: <Car />, label: "2" },
      { icon: <Maximize2 />, label: "200m²" },
    ],
  },
}

export const WithoutTags: Story = {
  args: {
    image: {
      src: "https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel",
      alt: "Foto do imóvel",
    },
    price: "R$ 350.000",
    address: "SQNW 310 Bloco B, Sala 205 - Noroeste",
    features: [
      { icon: <Bed />, label: "2" },
      { icon: <Bath />, label: "1" },
      { icon: <Car />, label: "1" },
      { icon: <Maximize2 />, label: "85m²" },
    ],
  },
}

export const MinimalFeatures: Story = {
  args: {
    image: {
      src: "https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel",
      alt: "Foto do imóvel",
    },
    tags: [{ icon: <Star />, label: "Destaque" }],
    price: "R$ 180.000",
    address: "QI 25 Lote 10, Guará II",
    features: [
      { icon: <Bed />, label: "2" },
      { icon: <Bath />, label: "1" },
      { icon: <Maximize2 />, label: "50m²" },
    ],
  },
}

export const Grid: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-full">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(342px,1fr))] gap-4">
      <ImovelCard
        image={{
          src: "https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel+1",
          alt: "Foto do imóvel 1",
        }}
        tags={[
          { icon: <Star />, label: "Destaque" },
          { icon: <Shield />, label: "Seguro" },
        ]}
        price="R$ 500.000"
        address="SQS 308 Bloco A, Apartamento 302 - Asa Sul"
        features={[
          { icon: <Bed />, label: "3" },
          { icon: <Bath />, label: "3" },
          { icon: <Car />, label: "2" },
          { icon: <Maximize2 />, label: "200m²" },
        ]}
      />
      <ImovelCard
        image={{
          src: "https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel+2",
          alt: "Foto do imóvel 2",
        }}
        price="R$ 350.000"
        address="SQNW 310 Bloco B, Sala 205 - Noroeste"
        features={[
          { icon: <Bed />, label: "2" },
          { icon: <Bath />, label: "1" },
          { icon: <Car />, label: "1" },
          { icon: <Maximize2 />, label: "85m²" },
        ]}
      />
      <ImovelCard
        image={{
          src: "https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel+3",
          alt: "Foto do imóvel 3",
        }}
        tags={[{ icon: <PenLine />, label: "Assinado" }]}
        price="R$ 1.200.000"
        address="SHIS QI 15 Conjunto 10, Casa 4 - Lago Sul"
        features={[
          { icon: <Bed />, label: "4" },
          { icon: <Bath />, label: "3" },
          { icon: <Car />, label: "4" },
          { icon: <Maximize2 />, label: "450m²" },
        ]}
      />
    </div>
  ),
}
