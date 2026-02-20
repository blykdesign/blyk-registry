import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "../components/ScrollReveal"
import { IMAGES } from "../assets/images"

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

export function CasesPage() {
  useEffect(() => {
    document.title = "Cases — blyk"
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${IMAGES.design.desk})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.6) 0%, hsl(var(--background)) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6">
              CASES
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3">
              <Briefcase className="size-10 text-primary/60" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Resultados que falam
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Conheça projetos em que o método uall transformou incerteza em
              produto que funciona.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>
    </div>
  )
}
