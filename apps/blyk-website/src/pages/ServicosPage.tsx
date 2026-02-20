import { useEffect } from "react"
import {
  ArrowRight,
  Check,
  X,
  Zap,
  Search,
  Palette,
  Rocket,
  RefreshCw,
  FileCheck,
  MessageCircle,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "../components/ScrollReveal"
import { IMAGES } from "../assets/images"

const CALENDLY_URL = "https://calendly.com/blyk"
const WHATSAPP_URL = "https://wa.me/5511999999999"

const ESTEIRAS = [
  {
    icon: Zap,
    title: "Quick Win Discovery",
    desc: "Descoberta rápida para validar uma hipótese ou decisão em 2–3 semanas.",
  },
  {
    icon: Zap,
    title: "Quick Win Design",
    desc: "Solução de design para uma feature ou fluxo específico em 2–3 semanas.",
  },
  {
    icon: Search,
    title: "Produto/Funcionalidade Discovery",
    desc: "Discovery completo para um produto ou funcionalidade nova.",
  },
  {
    icon: Search,
    title: "Discovery Profundo",
    desc: "Pesquisa, validação e definição de escopo para produtos complexos.",
  },
  {
    icon: Palette,
    title: "Produto/Funcionalidade Design",
    desc: "Design completo de produto ou funcionalidade.",
  },
  {
    icon: Rocket,
    title: "MVP 0-1",
    desc: "Discovery + Design + acompanhamento para lançar um MVP do zero.",
  },
  {
    icon: RefreshCw,
    title: "Redesign Completo",
    desc: "Redesign de produto existente com base em dados e validação.",
  },
]

const CONTRATACAO = [
  {
    icon: MessageCircle,
    step: "1",
    title: "Assessment Call",
    desc: "Conversa de 30 min para entender seu desafio e fit.",
  },
  {
    icon: FileCheck,
    step: "2",
    title: "Proposta",
    desc: "Escopo, cronograma e investimento em até 5 dias úteis.",
  },
  {
    icon: Calendar,
    step: "3",
    title: "Kick-off",
    desc: "Alinhamento inicial e início do projeto.",
  },
]

const BLYK_FAZ = [
  "Discovery e pesquisa baseada em dados",
  "Design de produto e interface",
  "Validação de hipóteses",
  "Handoff estruturado para desenvolvimento",
  "Acompanhamento e revisão de implementação",
]

const BLYK_NAO_FAZ = [
  "Desenvolvimento frontend ou backend",
  "Marketing ou growth",
  "Branding ou identidade visual",
  "Consultoria de negócio ou estratégia",
]

export function ServicosPage() {
  useEffect(() => {
    document.title = "Serviços — blyk"
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${IMAGES.design.process})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.5) 0%, hsl(var(--background)) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">
              SERVIÇOS
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Esteiras de produto para cada necessidade
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Da validação rápida ao redesign completo. Escolha a esteira que
              combina com seu momento e desafio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Esteiras
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ESTEIRAS.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 50}>
                <Card className="card-hover h-full">
                  <CardHeader>
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <e.icon className="size-4" />
                    </div>
                    <CardTitle className="text-lg">{e.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{e.desc}</p>
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
              Como funciona a contratação
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {CONTRATACAO.map((c, i) => (
              <ScrollReveal key={c.step} delay={i * 50}>
                <div className="card-hover space-y-4 rounded-lg border border-border/50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <c.icon className="size-5" />
                    </div>
                    <Badge variant="secondary">{c.step}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                O que a blyk faz
              </h2>
              <ul className="mt-6 space-y-4">
                {BLYK_FAZ.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Check className="size-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                O que a blyk não faz
              </h2>
              <ul className="mt-6 space-y-4">
                {BLYK_NAO_FAZ.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <X className="size-5 shrink-0 text-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Pronto para começar?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-4 text-muted-foreground">
              Agende uma Assessment Call ou fale conosco no WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Agendar Assessment Call
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
