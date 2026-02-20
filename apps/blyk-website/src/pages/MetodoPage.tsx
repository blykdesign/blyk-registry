import { useEffect } from "react"
import {
  ArrowRight,
  Search,
  Palette,
  Truck,
  CheckCircle2,
  Layers,
  Calendar,
  BarChart3,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollReveal } from "../components/ScrollReveal"
import { IMAGES } from "../assets/images"

const CALENDLY_URL = "https://calendly.com/blyk"

const PRINCIPIOS = [
  {
    icon: Target,
    text: "Decisões baseadas em dados, não em achismo",
  },
  {
    icon: Search,
    text: "Discovery antes de Design — validar antes de desenhar",
  },
  {
    icon: Palette,
    text: "Design de produto, não só de interface",
  },
  {
    icon: Truck,
    text: "Delivery que preserva a qualidade do design",
  },
  {
    icon: Calendar,
    text: "Rituais e alinhamento contínuo entre stakeholders",
  },
]

const DISCOVERY_MODULOS = [
  "Imersão de contexto",
  "Entrevistas com usuários",
  "Análise de dados",
  "Mapeamento de jornadas",
  "Definição de problemas",
  "Priorização de oportunidades",
  "Validação de hipóteses",
  "Escopo de produto",
  "Métricas de sucesso",
  "Roadmap inicial",
  "Arquitetura de informação",
  "Documentação de requisitos",
]

const DESIGN_MODULOS = [
  "Wireframes de baixa fidelidade",
  "Prototipação interativa",
  "Design system",
  "Componentes de interface",
  "Fluxos de usuário",
  "Estados e erros",
  "Responsividade",
  "Acessibilidade",
  "Handoff para desenvolvedores",
  "Guia de estilo",
  "Documentação de componentes",
]

const DELIVERY_MODULOS = [
  "Handoff estruturado",
  "Revisão de implementação",
  "Testes de usabilidade",
  "Ajustes pós-release",
  "Documentação final",
  "Rituais de retrospectiva",
]

const DIFERENCIAIS = [
  {
    icon: Layers,
    text: "Método uall: Discovery, Design e Delivery integrados",
  },
  {
    icon: BarChart3,
    text: "Base em dados e evidências, não em opinião",
  },
  {
    icon: Calendar,
    text: "Rituais e alinhamento contínuo",
  },
  {
    icon: CheckCircle2,
    text: "Entrega que preserva a qualidade do design",
  },
  {
    icon: Target,
    text: "Foco em produto que funciona, não só em telas bonitas",
  },
]

export function MetodoPage() {
  useEffect(() => {
    document.title = "Método uall — blyk"
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">
              MÉTODO UALL
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              uall design. O sistema que transforma incerteza em produto.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Um método estruturado para Discovery, Design e Delivery de produto
              digital. Integrado, baseado em dados e focado em decisões
              sustentáveis.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Princípios
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPIOS.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 50}>
                <Card className="card-hover">
                  <CardContent className="flex gap-4 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Os três blocos
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Tabs defaultValue="discovery" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="discovery" className="gap-2">
                  <Search className="size-4" />
                  Discovery (12)
                </TabsTrigger>
                <TabsTrigger value="design" className="gap-2">
                  <Palette className="size-4" />
                  Design (11)
                </TabsTrigger>
                <TabsTrigger value="delivery" className="gap-2">
                  <Truck className="size-4" />
                  Delivery (6)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="discovery" className="mt-8">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {DISCOVERY_MODULOS.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {m}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="design" className="mt-8">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {DESIGN_MODULOS.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {m}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="delivery" className="mt-8">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {DELIVERY_MODULOS.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {m}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Rituais
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                O método uall inclui rituais de alinhamento contínuo:
                kick-offs, reviews semanais, retrospectivas e handoffs
                estruturados. Cada etapa tem um propósito claro e entregas
                definidas.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={IMAGES.design.workspace}
                  alt="Workspace de design"
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Diferenciais
            </h2>
          </ScrollReveal>
          <ul className="mt-12 space-y-4">
            {DIFERENCIAIS.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 50}>
                <li className="card-hover flex items-center gap-4 rounded-lg border border-border/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Quer conhecer o método na prática?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-4 text-muted-foreground">
              Agende uma Assessment Call e descubra como o uall pode transformar
              sua forma de fazer produto.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="mt-10">
            <Button asChild size="lg">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Agendar Assessment Call
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
