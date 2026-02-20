import { Link } from "react-router-dom"
import {
  ArrowRight,
  X,
  Palette,
  Truck,
  Search,
  Lightbulb,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { ScrollReveal } from "../components/ScrollReveal"
import { IMAGES } from "../assets/images"

const CALENDLY_URL = "https://calendly.com/blyk"
const WHATSAPP_URL = "https://wa.me/5511999999999"

const PROVA_SOCIAL_LOGOS = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
]

const PROBLEMAS = [
  {
    title: "Decisões baseadas em achismo",
    desc: "Time gastando tempo em features que não resolvem o problema real do usuário.",
  },
  {
    title: "Retrabalho e desperdício",
    desc: "Designs aprovados que não funcionam na prática, gerando retrabalho em cascata.",
  },
  {
    title: "Falta de alinhamento",
    desc: "Stakeholders, produto e design falando línguas diferentes sobre o mesmo produto.",
  },
  {
    title: "Incerteza na entrega",
    desc: "Dúvida constante sobre o que priorizar e como garantir que o produto vai performar.",
  },
]

const SOLUCOES = [
  {
    icon: Search,
    title: "Discovery que decide",
    desc: "Pesquisa e validação estruturadas para transformar incerteza em decisões claras e sustentáveis.",
  },
  {
    icon: Palette,
    title: "Design que funciona",
    desc: "Solução visual e funcional alinhada ao produto, validada antes de ir para desenvolvimento.",
  },
  {
    icon: Truck,
    title: "Delivery que preserva",
    desc: "Entrega que mantém a qualidade do design e garante que o produto chegue ao usuário como planejado.",
  },
]

const COMO_FUNCIONA = [
  {
    num: "01",
    icon: Search,
    title: "Discovery",
    desc: "Pesquisa, validação e definição de escopo baseados em dados.",
  },
  {
    num: "02",
    icon: Palette,
    title: "Design",
    desc: "Solução de produto e interface alinhada ao usuário e ao negócio.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Delivery",
    desc: "Handoff estruturado e acompanhamento para garantir que o produto chegue ao usuário.",
  },
]

const CASES = [
  {
    slug: "fintrack",
    title: "FinTrack",
    meta: "Fintech",
    resultado: "+40% conversão",
    image: IMAGES.cases.fintech,
  },
  {
    slug: "sala-health",
    title: "Sala Health",
    meta: "Healthtech",
    resultado: "Redução de 60% no onboarding",
    image: IMAGES.cases.health,
  },
  {
    slug: "eduprime",
    title: "EduPrime",
    meta: "Edtech",
    resultado: "NPS de 72",
    image: IMAGES.cases.edtech,
  },
]

const DEPOIMENTOS = [
  {
    texto: "A blyk transformou nossa forma de tomar decisões de produto. Agora temos clareza e base em dados.",
    autor: "Maria Silva",
    cargo: "Head de Produto",
  },
  {
    texto: "O método uall nos trouxe estrutura e alinhamento. O resultado superou nossas expectativas.",
    autor: "João Santos",
    cargo: "CPO",
  },
  {
    texto: "Design de produto que realmente funciona. A blyk entendeu nosso desafio e entregou além.",
    autor: "Ana Costa",
    cargo: "CEO",
  },
]

const FAQ_ITEMS = [
  {
    trigger: "O que é Assessment Call?",
    content:
      "É uma conversa de 30 minutos para avaliar seu desafio e entender se o método uall pode ajudar. Sem compromisso.",
  },
  {
    trigger: "Quanto tempo leva um projeto?",
    content:
      "Depende da esteira escolhida. Quick Wins podem levar 2–3 semanas; projetos completos, de 2 a 4 meses.",
  },
  {
    trigger: "Trabalham com equipes remotas?",
    content:
      "Sim. Todo o processo é pensado para times distribuídos, com rituais e entregas assíncronas quando necessário.",
  },
  {
    trigger: "Qual o diferencial da blyk?",
    content:
      "Método uall: Discovery, Design e Delivery integrados, com base em dados e decisões sustentáveis.",
  },
  {
    trigger: "Como funciona o pagamento?",
    content:
      "Projetos por escopo ou fase. Após a Assessment Call, enviamos proposta com valores e cronograma.",
  },
]

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${IMAGES.hero.background})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.4) 0%, hsl(var(--background)) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">
              DESIGN DE PRODUTO
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Seu produto digital merece decisões, não suposições.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Design de produto baseado em dados. Método uall: Discovery, Design
              e Delivery integrados para transformar incerteza em produto que
              funciona.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Agendar Assessment Call
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="ghost" asChild size="lg">
              <Link to="/metodo">
                Conhecer o método uall
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm text-muted-foreground">
              Empresas que já tomam melhores decisões com a blyk
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-8 opacity-60">
              {PROVA_SOCIAL_LOGOS.map((logo) => (
                <div
                  key={logo}
                  className="flex h-8 w-24 items-center justify-center rounded bg-muted text-xs text-muted-foreground"
                >
                  {logo}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              O PROBLEMA
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Você já conhece essas dores
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMAS.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 50}>
                <Card className="card-hover h-full">
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <X className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              A SOLUÇÃO
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Três blocos que transformam incerteza em produto
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {SOLUCOES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 50}>
                <Card className="card-hover h-full border-primary/20">
                  <CardHeader>
                    <div className="mb-2 flex h-6 w-6 items-center justify-center text-primary">
                      <s.icon className="size-6" />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
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
            <Badge variant="secondary" className="mb-4">
              COMO FUNCIONA
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Da Discovery ao Delivery
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {COMO_FUNCIONA.map((b, i) => (
              <ScrollReveal key={b.num} delay={i * 50}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-primary/80">
                      {b.num}
                    </span>
                    <b.icon className="size-8 text-primary/60" />
                  </div>
                  <h3 className="text-xl font-semibold">{b.title}</h3>
                  <p className="text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200} className="mt-12">
            <Button asChild size="lg">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Agendar Assessment Call
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              CASES EM DESTAQUE
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Resultados que falam
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {CASES.map((c, i) => (
              <ScrollReveal key={c.slug} delay={i * 50}>
                <Link to={`/cases/${c.slug}`}>
                  <Card className="card-hover h-full transition-colors hover:border-primary/50 hover:bg-card">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="outline" className="mb-2 w-fit">
                        {c.meta}
                      </Badge>
                      <CardTitle>{c.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-primary">
                        {c.resultado}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200} className="mt-8">
            <Button variant="outline" asChild>
              <Link to="/cases">
                Ver todos os cases
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              DEPOIMENTOS
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que dizem quem trabalhou com a blyk
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <ScrollReveal key={d.autor} delay={i * 50}>
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <Quote className="mb-2 size-8 text-primary/30" />
                    <p className="text-muted-foreground">&ldquo;{d.texto}&rdquo;</p>
                    <p className="mt-4 font-medium">{d.autor}</p>
                    <p className="text-sm text-muted-foreground">{d.cargo}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perguntas frequentes
            </h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="mt-12">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.trigger} value={item.trigger}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="planos" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <Lightbulb className="mx-auto mb-4 size-12 text-primary/60" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pronto para transformar incerteza em produto?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-4 text-lg text-muted-foreground">
              Agende uma Assessment Call e descubra como o método uall pode
              ajudar sua equipe.
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
