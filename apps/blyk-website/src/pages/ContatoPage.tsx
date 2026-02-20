import { useEffect } from "react"
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  FileCheck,
  Sparkles,
  Mail,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "../components/ScrollReveal"
import { IMAGES } from "../assets/images"

const CALENDLY_URL = "https://calendly.com/blyk"
const WHATSAPP_URL = "https://wa.me/5511999999999"
const EMAIL = "fabiano@blyk.com.br"
const LINKEDIN = "https://linkedin.com/company/blyk"
const INSTAGRAM = "https://instagram.com/blyk.design"

const ASSESSMENT_STEPS = [
  {
    icon: MessageCircle,
    title: "Entender seu desafio",
    desc: "Conversamos sobre o contexto do produto e o que você precisa.",
  },
  {
    icon: CheckCircle2,
    title: "Avaliar o fit",
    desc: "Verificamos se o método uall faz sentido para o seu momento.",
  },
  {
    icon: FileCheck,
    title: "Propor próximos passos",
    desc: "Se fizer sentido, enviamos proposta com escopo e investimento.",
  },
  {
    icon: Sparkles,
    title: "Sem compromisso",
    desc: "A Assessment Call é gratuita e sem obrigação de contratação.",
  },
]

export function ContatoPage() {
  useEffect(() => {
    document.title = "Contato — blyk"
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: `url(${IMAGES.contact})`,
          }}
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
              CONTATO
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Vamos conversar?
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Agende uma Assessment Call e descubra como o método uall pode
              ajudar sua equipe a tomar melhores decisões de produto.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              O que acontece na Assessment Call
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ASSESSMENT_STEPS.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 50}>
                <div className="card-hover space-y-4 rounded-lg border border-border/50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <s.icon className="size-6" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Agende ou entre em contato
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-10 flex flex-wrap gap-4">
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
          <ScrollReveal delay={200} className="mt-12 flex flex-wrap gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-5" />
              LinkedIn
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="size-5" />
              @blyk.design
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
