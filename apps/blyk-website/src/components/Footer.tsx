import { Link } from "react-router-dom"
import { Linkedin, Instagram, Palette } from "lucide-react"

const NAV_LINKS = [
  { to: "/metodo", label: "Método" },
  { to: "/servicos", label: "Serviços" },
  { to: "/cases", label: "Cases" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
]

const SOCIAL = [
  {
    href: "https://linkedin.com/company/blyk",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/blyk.design",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://behance.net",
    icon: Palette,
    label: "Behance",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              blyk
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Design de produto baseado em dados.
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            <span className="text-sm font-medium text-foreground">
              Navegação
            </span>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium text-foreground">Redes</span>
            <div className="flex gap-4">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
                  aria-label={label}
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            blyk © 2026. Design de produto baseado em dados.
          </p>
        </div>
      </div>
    </footer>
  )
}
