import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Target, FileText, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "../components/ScrollReveal"
import { CASES_DATA } from "../data/cases"

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const caseData = slug ? CASES_DATA[slug] : null

  useEffect(() => {
    if (caseData) {
      document.title = `${caseData.title} — blyk`
    } else {
      document.title = "Case não encontrado — blyk"
    }
  }, [caseData])

  if (!caseData) {
    return (
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold">Case não encontrado</h1>
          <Button asChild variant="link" className="mt-4">
            <Link to="/cases">
              <ArrowLeft className="mr-2 size-4" />
              Voltar aos cases
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <article className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" size="sm" className="mb-8">
          <Link to="/cases">
            <ArrowLeft className="mr-2 size-4" />
            Voltar aos cases
          </Link>
        </Button>

        <ScrollReveal>
          <div className="mb-8 overflow-hidden rounded-lg">
            <img
              src={caseData.image}
              alt={caseData.title}
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <Badge variant="outline">{caseData.meta}</Badge>
            <span className="text-sm font-medium text-primary">
              {caseData.resultado}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {caseData.title}
          </h1>
        </ScrollReveal>

        <div className="mt-12 space-y-12">
          <ScrollReveal delay={150}>
            <section className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="size-5" />
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  Contexto
                </h2>
                <p className="text-muted-foreground">{caseData.contexto}</p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="size-5" />
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  Desafio
                </h2>
                <p className="text-muted-foreground">{caseData.desafio}</p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <section className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Trophy className="size-5" />
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  Resultado
                </h2>
                <p className="text-muted-foreground">{caseData.resultadoTexto}</p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Galeria
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={caseData.image}
                    alt={`${caseData.title} - mockup 1`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={caseData.image}
                    alt={`${caseData.title} - mockup 2`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </article>
  )
}
