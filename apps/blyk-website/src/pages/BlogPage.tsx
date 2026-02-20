import { useEffect } from "react"
import { Link } from "react-router-dom"
import { BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "../components/ScrollReveal"
import { BLOG_POSTS } from "../data/blog"
import { IMAGES } from "../assets/images"

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export function BlogPage() {
  useEffect(() => {
    document.title = "Blog — blyk"
  }, [])

  return (
    <div>
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${IMAGES.design.workspace})`,
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
              BLOG
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-3">
              <BookOpen className="size-10 text-primary/60" />
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Conteúdo sobre design de produto
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Método, processo, cases e reflexões sobre produto digital baseado
              em dados.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 30}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="card-hover h-full transition-colors hover:border-primary/50 hover:bg-card">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {post.preview}
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
