import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "../components/ScrollReveal"
import { BLOG_POSTS } from "../data/blog"

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : null

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — blyk`
    } else {
      document.title = "Post não encontrado — blyk"
    }
  }, [post])

  if (!post) {
    return (
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold">Post não encontrado</h1>
          <Button asChild variant="link" className="mt-4">
            <Link to="/blog">
              <ArrowLeft className="mr-2 size-4" />
              Voltar ao blog
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
          <Link to="/blog">
            <ArrowLeft className="mr-2 size-4" />
            Voltar ao blog
          </Link>
        </Button>

        <ScrollReveal>
          <div className="mb-8 overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              loading="eager"
            />
          </div>
        </ScrollReveal>

        <div className="mb-6 flex items-center gap-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">{post.preview}</p>

        <div className="prose prose-invert mt-12 max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            O método uall nos ajudou a estruturar esse processo. Discovery, Design e Delivery integrados transformaram a forma como tomamos decisões de produto.
          </p>
        </div>
      </div>
    </article>
  )
}
