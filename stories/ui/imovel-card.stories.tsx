import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  ImovelCard,
  ImovelCardImage,
  ImovelCardContent,
  ImovelCardTags,
  ImovelCardTag,
  ImovelCardPrice,
  ImovelCardAddress,
  ImovelCardFeatures,
} from "@/registry/df-imoveis/components/ui/imovel-card"
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
  render: () => (
    <ImovelCard>
      <ImovelCardImage
        src="https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel"
        alt="Foto do imóvel"
      />
      <ImovelCardContent>
        <ImovelCardTags>
          <ImovelCardTag>
            <Star /> Destaque
          </ImovelCardTag>
          <ImovelCardTag>
            <PenLine /> Assinado
          </ImovelCardTag>
          <ImovelCardTag>
            <Shield /> Seguro
          </ImovelCardTag>
        </ImovelCardTags>
        <ImovelCardPrice>R$ 500.000</ImovelCardPrice>
        <ImovelCardAddress>
          SQS 308 Bloco A, Apartamento 302 - Asa Sul
        </ImovelCardAddress>
        <ImovelCardFeatures>
          <ImovelCardTag variant="ghost">
            <Bed /> 3
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Bath /> 3
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Car /> 2
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Maximize2 /> 200m²
          </ImovelCardTag>
        </ImovelCardFeatures>
      </ImovelCardContent>
    </ImovelCard>
  ),
}

export const WithoutTags: Story = {
  render: () => (
    <ImovelCard>
      <ImovelCardImage
        src="https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel"
        alt="Foto do imóvel"
      />
      <ImovelCardContent>
        <ImovelCardPrice>R$ 350.000</ImovelCardPrice>
        <ImovelCardAddress>
          SQNW 310 Bloco B, Sala 205 - Noroeste
        </ImovelCardAddress>
        <ImovelCardFeatures>
          <ImovelCardTag variant="ghost">
            <Bed /> 2
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Bath /> 1
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Car /> 1
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Maximize2 /> 85m²
          </ImovelCardTag>
        </ImovelCardFeatures>
      </ImovelCardContent>
    </ImovelCard>
  ),
}

export const MinimalFeatures: Story = {
  render: () => (
    <ImovelCard>
      <ImovelCardImage
        src="https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel"
        alt="Foto do imóvel"
      />
      <ImovelCardContent>
        <ImovelCardTags>
          <ImovelCardTag>
            <Star /> Destaque
          </ImovelCardTag>
        </ImovelCardTags>
        <ImovelCardPrice>R$ 180.000</ImovelCardPrice>
        <ImovelCardAddress>
          QI 25 Lote 10, Guará II
        </ImovelCardAddress>
        <ImovelCardFeatures>
          <ImovelCardTag variant="ghost">
            <Bed /> 2
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Bath /> 1
          </ImovelCardTag>
          <ImovelCardTag variant="ghost">
            <Maximize2 /> 50m²
          </ImovelCardTag>
        </ImovelCardFeatures>
      </ImovelCardContent>
    </ImovelCard>
  ),
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
      <ImovelCard>
        <ImovelCardImage
          src="https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel+1"
          alt="Foto do imóvel 1"
        />
        <ImovelCardContent>
          <ImovelCardTags>
            <ImovelCardTag>
              <Star /> Destaque
            </ImovelCardTag>
            <ImovelCardTag>
              <Shield /> Seguro
            </ImovelCardTag>
          </ImovelCardTags>
          <ImovelCardPrice>R$ 500.000</ImovelCardPrice>
          <ImovelCardAddress>
            SQS 308 Bloco A, Apartamento 302 - Asa Sul
          </ImovelCardAddress>
          <ImovelCardFeatures>
            <ImovelCardTag variant="ghost">
              <Bed /> 3
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Bath /> 3
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Car /> 2
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Maximize2 /> 200m²
            </ImovelCardTag>
          </ImovelCardFeatures>
        </ImovelCardContent>
      </ImovelCard>

      <ImovelCard>
        <ImovelCardImage
          src="https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel+2"
          alt="Foto do imóvel 2"
        />
        <ImovelCardContent>
          <ImovelCardPrice>R$ 350.000</ImovelCardPrice>
          <ImovelCardAddress>
            SQNW 310 Bloco B, Sala 205 - Noroeste
          </ImovelCardAddress>
          <ImovelCardFeatures>
            <ImovelCardTag variant="ghost">
              <Bed /> 2
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Bath /> 1
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Car /> 1
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Maximize2 /> 85m²
            </ImovelCardTag>
          </ImovelCardFeatures>
        </ImovelCardContent>
      </ImovelCard>

      <ImovelCard>
        <ImovelCardImage
          src="https://placehold.co/684x456/e2e8f0/64748b?text=Im%C3%B3vel+3"
          alt="Foto do imóvel 3"
        />
        <ImovelCardContent>
          <ImovelCardTags>
            <ImovelCardTag>
              <PenLine /> Assinado
            </ImovelCardTag>
          </ImovelCardTags>
          <ImovelCardPrice>R$ 1.200.000</ImovelCardPrice>
          <ImovelCardAddress>
            SHIS QI 15 Conjunto 10, Casa 4 - Lago Sul
          </ImovelCardAddress>
          <ImovelCardFeatures>
            <ImovelCardTag variant="ghost">
              <Bed /> 4
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Bath /> 3
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Car /> 4
            </ImovelCardTag>
            <ImovelCardTag variant="ghost">
              <Maximize2 /> 450m²
            </ImovelCardTag>
          </ImovelCardFeatures>
        </ImovelCardContent>
      </ImovelCard>
    </div>
  ),
}
