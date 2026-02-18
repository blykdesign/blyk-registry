"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SuperButton } from "@/components/ui/super-button"
import { Card, CardTitle, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Lightbulb,
  Menu,
  Users,
  Recycle,
  Handshake,
  Zap,
  DollarSign,
  Check,
  Play,
} from "lucide-react"
import heroAppImg from "../assets/hero-app.png"
import miaAvatarImg from "../assets/mia-avatar.png"
import cardIaImg from "../assets/card-ia.png"
import cardMarketingImg from "../assets/card-marketing.png"
import cardSeloImg from "../assets/card-selo.png"
import whatsappSectionImg from "../assets/whatsapp-section.png"
import suporteSebraeImg from "../assets/suporte-sebrae.png"
import videoCidaImg from "../assets/video-cida.png"
import videoMarceloImg from "../assets/video-marcelo.png"
import seloSustentabilidadeImg from "../assets/selo-sustentabilidade.png"
import avatarFernandoImg from "../assets/avatar-fernando.png"
import logoMobileImg from "../assets/logo-mobile.svg"
import logoPlataformaImg from "../assets/logo-plataforma.svg"
import brandsImg from "../assets/brands.svg"

/* ── Mapeamento Figma → DS ────────────────────────────────────────────────
| Elemento no Figma          | Componente do DS | Variant/Size | Observações        |
|----------------------------|-----------------|--------------|--------------------|
| Badge (Apoio do Sebrae)    | Badge           | outline      | + ícone CheckCircle2|
| Badge (+8 mil empresas)    | Badge           | outline      | + ícone Building2   |
| SuperButton (Comece agora) | SuperButton     | default      | + ícone ArrowRight  |
| Card (MIA, Marketing, Selo)| Card            | —            | CardHeader+Content  |
| Button (Comece agora lg)   | Button          | default, lg  | + ícone ArrowRight  |
| Badge (Verified)           | Badge           | default      | DS não tem verified |
| Button (Fale com MIA)      | Button          | secondary    | + ícone ArrowRight  |
| Card (passos 1-2-3)        | div + Badge     | —            | Layout customizado  |
| Accordion (FAQ)            | Accordion       | —            | Padrão Radix       |
| Button (Outline)           | Button          | outline      | + ícone ArrowRight  |
| Avatar                     | Avatar          | —            | Fallback CN         |
| Separator                  | Separator       | horizontal  | —                   |
*/

const FAQ_ITEMS = [
  {
    trigger: "Essa plataforma é para mim?",
    content:
      "Muito provavelmente sim! A plataforma é feita para todos os Microempreendedores Individuais (MEI), Microempresas (ME) e Empresas de Pequeno Porte (EPP). De qualquer segmento, ou tempo de existência. Não importa se funciona de forma presencial ou remota, se for uma empresa brasileira, já pode utilizar.",
  },
  {
    trigger: "É realmente do Sebrae?",
    content:
      "Sim. A plataforma é uma parceria oficial do Sebrae com a BIUD, empresa de tecnologia homologada. O Sebrae é o dono do projeto e a BIUD cuida da parte técnica. Toda comunicação, selo e certificação são do Sebrae. Se você já tem cadastro no Sebrae, pode até usar o mesmo login.",
  },
  {
    trigger: "Quanto custa?",
    content:
      "R$ 69,90 por mês. Mas você começa com 15 dias grátis, com acesso a tudo: MIA, marketing, selo, WhatsApp. E não precisa cadastrar cartão de crédito. Se não fizer sentido para o seu negócio, é só não continuar.",
  },
  {
    trigger: "Posso cancelar quando quiser?",
    content:
      "Sim, sem burocracia. O cancelamento pode ser feito a qualquer momento. Sem multa e sem taxa.",
  },
  {
    trigger: "O que vem no plano? Tem alguma funcionalidade bloqueada?",
    content:
      "No teste de 15 dias você acessa tudo: MIA ilimitada, ferramentas de marketing, integração com WhatsApp, página de captura de clientes e caminho completo para o selo de sustentabilidade. Não tem versão \"meia-boca\". É o plano completo pra você testar de verdade.",
  },
  {
    trigger: "Preciso entender de tecnologia pra usar?",
    content:
      "Não. A MIA funciona como uma conversa de WhatsApp: você digita o que precisa e ela responde. Sem menu complicado, sem configuração técnica. Se você sabe mandar uma mensagem de texto, sabe usar a MIA.",
  },
  {
    trigger: "O que eu posso pedir pra MIA?",
    content:
      "Tudo que você pediria pra um consultor de marketing: ideias de post pro Instagram, legendas prontas, estratégia de promoção, análise dos seus concorrentes, planejamento de conteúdo pro mês, sugestão de preço e até ajuda pra responder clientes no WhatsApp. Ela conhece seu negócio e dá respostas personalizadas, não genéricas.",
  },
  {
    trigger: "O que é ESG? Preciso entender disso?",
    content:
      "ESG é uma sigla pra práticas ambientais, sociais e de governança. Parece complicado, mas na prática é simples: se você economiza energia, cuida bem dos seus funcionários, organiza as contas da empresa e separa o lixo, por exemplo, já está no caminho! A plataforma traduz tudo isso em linguagem clara.",
  },
  {
    trigger: "Quanto tempo leva pra conseguir o selo?",
    content:
      "Depende do nível. Pode sair em poucas semanas, porque muita coisa que você já faz conta como prática sustentável. Você responde um diagnóstico, a plataforma identifica o que já está cumprido e mostra o que falta. Não é um processo burocrático.",
  },
  {
    trigger: "Como funciona a integração com WhatsApp?",
    content:
      "Você conecta seu WhatsApp Business direto na plataforma. A partir daí, consegue organizar seus clientes, ver histórico de conversas, receber sugestões da MIA pra responder mais rápido e identificar quem está pronto pra comprar. Tudo sem precisar mudar nada no WhatsApp que você já usa.",
  },
  {
    trigger: "Ainda tem dúvidas?",
    content: null,
  },
] as const

const FAQ_ITEMS_WITH_CONTENT = FAQ_ITEMS.filter((item) => item.content)

const PLAN_FEATURES = [
  "Mais barato que uma hora de consultoria",
  "Conversas ilimitadas com a MIA",
  "Página de cadastro de clientes",
  "Integração com WhatsApp",
  "Disparos em massa pelo WhatsApp",
  "Integração com emissor de notas do Sebrae",
  "Selo de sustentabilidade do Sebrae",
  "Soluções personalizadas do Sebrae",
]

const MARKETING_CARDS = [
  {
    img: cardIaImg,
    title:
      "Conheça a MIA, a Inteligência Artificial de Marketing especialista no seu negócio",
    desc: "Peça ideias de posts, legendas prontas, estratégias de vendas e até análise dos seus concorrentes. É como ter uma consultora de marketing disponível 24h.",
  },
  {
    img: cardMarketingImg,
    title: "Atraia mais clientes",
    desc: "Crie sua página de vendas, centralize suas conversas do WhatsApp e planeje ações de marketing sem precisar ser especialista em tecnologia.",
  },
  {
    img: cardSeloImg,
    title: "Selo de Sustentabilidade Sebrae",
    desc: "Mostre que seu negócio é sustentável com o selo que abre portas para grandes empresas, linhas de crédito e parcerias.",
  },
] as const

const GROWTH_STEPS = [
  {
    step: "1",
    title: "Cadastre sua empresa",
    desc: "Rápido e gratuito. Conecte com seu cadastro Sebrae ou crie uma conta e pronto.",
  },
  {
    step: "2",
    title: "Converse com a MIA",
    desc: "Conte sobre seu negócio e receba um diagnóstico personalizado com oportunidades de melhoria.",
  },
  {
    step: "3",
    title: "Coloque em prática",
    desc: "Use as ferramentas de marketing, conquiste seu selo de sustentabilidade e veja seus resultados crescerem.",
  },
] as const

const SUSTENTABILIDADE_VIDEOS = [
  {
    img: videoCidaImg,
    text: "A Cida implementou práticas sustentáveis e posicionou a SerHum como destaque no mercado de São Luís.",
  },
  {
    img: videoMarceloImg,
    text: "O Marcelo conquistou o selo de sustentabilidade do Sebrae e trouxe mais eficiência para a Los Paderos no Rio de Janeiro.",
  },
] as const

const PLATAFORMA_HELP_ITEMS = [
  { icon: Lightbulb, title: "Economia de energia", desc: "Lâmpadas LED, ar-condicionado eficiente" },
  { icon: Users, title: "Cuidado com a equipe", desc: "Ambiente saudável, direitos respeitados" },
  { icon: Recycle, title: "Separação de resíduos", desc: "Reciclagem, descarte consciente" },
  { icon: Handshake, title: "Fornecedores locais", desc: "Apoio à economia da região" },
] as const

const CARD_GRADIENT =
  "linear-gradient(180deg, rgba(27, 80, 226, 0) 0%, rgba(27, 80, 226, 0.12) 100%), hsl(var(--card))"
const VIDEO_OVERLAY_GRADIENT =
  "linear-gradient(180deg, rgba(2, 6, 23, 0.3) 0%, rgba(2, 6, 23, 1) 100%)"
const IA_GRADIENT =
  "linear-gradient(225deg, hsl(var(--primary)) 0%, hsl(var(--foreground)) 100%)"

const SECTION_BASE = "px-6 py-12 md:py-16 md:px-8 flex justify-center"
const SECTION_CONTENT = "w-full max-w-[976px]"
const SECTION_HEADING = "text-3xl font-bold mb-6 md:mb-10 text-foreground"
const TEXT_IMAGE_ROW =
  "flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-8"
const TEXT_COLUMN =
  "flex flex-col gap-6 flex-1 min-w-0 lg:max-w-[58%] lg:self-center lg:pb-16"
const IMAGE_COLUMN_BOTTOM =
  "flex items-end justify-center lg:justify-end lg:self-end"

function PlataformaHelpBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-muted py-4 px-6 flex flex-col justify-center gap-2",
        className
      )}
    >
      <h3 className="text-xl font-bold text-foreground">
        A plataforma te ajuda a transformar o que você já faz em um selo
        reconhecido pelo mercado.
      </h3>
      <div className="flex flex-col">
        {PLATAFORMA_HELP_ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="flex items-center gap-4 py-4 border-b border-border last:border-b-0"
            >
              <Icon className="size-6 shrink-0 text-primary" />
              <div className="space-y-1">
                <p className="font-bold text-base text-foreground">{item.title}</p>
                <p className="text-base text-foreground/90">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header - fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center border-b border-border bg-background shadow-md">
        <div className={cn(SECTION_CONTENT, "flex items-center justify-between gap-4 px-4 py-4")}>
          {/* Logo: mobile = Projeto Crescimento Sustentável + SEBRAE | desktop = Plataforma */}
          <img
            src={logoMobileImg}
            alt="Projeto Crescimento Sustentável - SEBRAE"
            className="h-8 w-auto md:hidden"
          />
          <img
            src={logoPlataformaImg}
            alt="BIUD Sebrae - Plataforma"
            className="hidden md:block h-9 w-auto"
          />
          {/* Desktop: Entrar + Comece agora de graça */}
          <div className="hidden md:flex items-center gap-4">
            <SuperButton variant="ghost" size="default" className="font-normal">
              Entrar
            </SuperButton>
            <SuperButton className="gap-2" size="default">
              Comece agora de graça
              <ArrowRight className="size-4 shrink-0" />
            </SuperButton>
          </div>
          {/* Mobile: Comece agora + hamburger (Button, size default) */}
          <div className="flex md:hidden items-center gap-2">
            <Button className="gap-2 shrink-0" size="default">
              Comece agora
              <ArrowRight className="size-4 shrink-0" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menu">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    variant="ghost"
                    size="default"
                    className="font-normal w-full justify-center"
                  >
                    Entrar
                  </Button>
                  <Button className="gap-2 w-full justify-center" size="default">
                    Comece agora de graça
                    <ArrowRight className="size-4 shrink-0" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero - pt para compensar header fixo, pb-0 para a mão encostar no cinza */}
      <section className={cn(SECTION_BASE, "pt-[120px] pb-0 md:pt-[152px] md:pb-0")}>
        <div className={cn(SECTION_CONTENT, TEXT_IMAGE_ROW)}>
          <div className={TEXT_COLUMN}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl text-foreground">
              Venda mais com a inteligência do Sebrae no seu bolso
            </h1>
            <p className="text-xl text-foreground/90">
              Uma plataforma completa com IA, marketing eficiente e selo de
              sustentabilidade. Tudo que sua empresa precisa para crescer.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="gap-1.5">
                <CheckCircle2 className="size-3.5 shrink-0" />
                Apoio do Sebrae
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <Building2 className="size-3.5 shrink-0" />
                +8 mil empresas ativas
              </Badge>
            </div>
            <SuperButton className="w-fit gap-2">
              Comece agora de graça
              <ArrowRight className="size-4 shrink-0" />
            </SuperButton>
          </div>
          <div
            className={cn(
              "relative w-full lg:w-[42%] lg:flex-shrink-0 h-[320px] lg:h-[480px]",
              IMAGE_COLUMN_BOTTOM
            )}
          >
            <img
              src={heroAppImg}
              alt="App BIUD Sebrae - Ideias da MIA no celular"
              className="h-full w-auto max-w-full object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Section: Marketing, IA e selo */}
      <section className={cn(SECTION_BASE, "bg-muted rounded-t-[32px]")}>
        <div className={SECTION_CONTENT}>
          <h2 className={SECTION_HEADING}>
            Marketing, IA e selo do Sebrae num só lugar
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {MARKETING_CARDS.map((card) => (
              <Card
                key={card.title}
                className="overflow-hidden border-border flex flex-col"
                style={{ background: CARD_GRADIENT }}
              >
                <div className="flex justify-start px-6 pt-6">
                  <img
                    src={card.img}
                    alt=""
                    className="size-[100px] object-contain"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col justify-end gap-2 p-6 pt-8">
                  <CardTitle className="text-xl leading-tight">
                    {card.title}
                  </CardTitle>
                  <p className="text-base text-foreground/90">{card.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Do cadastro ao crescimento */}
      <section className={cn(SECTION_BASE, "bg-background")}>
        <div className={SECTION_CONTENT}>
          <h2 className={SECTION_HEADING}>
            Do cadastro ao crescimento em poucos cliques
          </h2>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8 mb-8 md:mb-12">
            {GROWTH_STEPS.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="size-8 shrink-0 rounded-full border border-border flex items-center justify-center text-sm font-bold text-primary">
                  {item.step}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base">{item.title}</h3>
                  <p className="text-base text-foreground/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button size="lg" className="gap-2">
            Comece agora de graça
            <ArrowRight className="size-4 shrink-0" />
          </Button>
        </div>
      </section>

      {/* Section: IA do seu negócio */}
      <section className={SECTION_BASE} style={{ background: IA_GRADIENT }}>
        <div className={cn(SECTION_CONTENT, "flex flex-col lg:flex-row gap-6 lg:gap-16 items-center")}>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Não é uma IA genérica. É a IA do seu negócio.
            </h2>
            <p className="text-base text-primary-foreground/90">
              A MIA analisa seus dados, seu setor, sua região, seus concorrentes
              e te entrega ações prontas para usar, desde ideias de campanhas
              para atrair clientes a oportunidades que você não estava vendo.
              Tudo numa conversa simples, a qualquer hora.
            </p>
            <Button variant="secondary" className="gap-2">
              Fale com a MIA agora
              <ArrowRight className="size-4 shrink-0" />
            </Button>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-full max-w-[380px] flex items-start gap-2 rounded-2xl border border-border/50 bg-white/10 p-4 pr-2 shadow-sm">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div
                  className="rounded-2xl rounded-tl-none border border-border bg-secondary px-3 py-2 w-[140px]"
                >
                  <p className="text-sm text-muted-foreground">
                    Preciso divulgar meu produto.
                  </p>
                </div>
                <div className="rounded-2xl rounded-tr-none bg-primary px-3 py-2 self-end max-w-full">
                  <p className="text-sm text-primary-foreground">
                    Claro! Fiz um texto para o Instagram que costuma funcionar
                    bem pra delivery. Quer que eu adapte pra WhatsApp também?
                  </p>
                </div>
              </div>
              <img
                src={miaAvatarImg}
                alt="Avatar da MIA"
                className="size-[72px] shrink-0 rounded-full border border-border object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: WhatsApp - mesmo layout do Hero */}
      <section className={cn(SECTION_BASE, "bg-muted pt-12 pb-0 md:pb-0")}>
        <div className={cn(SECTION_CONTENT, TEXT_IMAGE_ROW)}>
          <div className="flex-1 space-y-6 lg:self-center lg:pb-16">
            <h2 className="text-3xl font-bold text-foreground">
              Pare de perder vendas no WhatsApp
            </h2>
            <Badge variant="default" className="text-xs">
              Integração oficial com WhatsApp
            </Badge>
            <p className="text-base text-foreground/90">
              A plataforma guarda o histórico de cada pessoa, cria perfil de
              cada cliente a partir do histórico de conversas e ainda sugere o
              que falar na hora de oferecer algo novo. Seu WhatsApp continua o
              mesmo, só que agora trabalha a seu favor.
            </p>
          </div>
          <div
            className={cn(
              "flex-1 w-full max-w-md lg:h-[380px]",
              IMAGE_COLUMN_BOTTOM
            )}
          >
            <img
              src={whatsappSectionImg}
              alt="Interface de dados do cliente e conversa no WhatsApp com a MIA"
              className="w-full max-w-md rounded-lg object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Section: Sustentabilidade */}
      <section className={cn(SECTION_BASE, "bg-card")}>
        <div className={SECTION_CONTENT}>
          <div className="grid lg:grid-cols-[1fr_340px] gap-6 lg:gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Você já é mais sustentável do que imagina
              </h2>
              <p className="text-base text-foreground/90">
                O selo de sustentabilidade do Sebrae abre portas com grandes
                fornecedores e transforma o que você já faz no dia a dia em um
                diferencial competitivo reconhecido.
              </p>
              <Badge variant="default" className="text-xs">
                Metodologia ABNT
              </Badge>
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:overflow-x-auto md:pb-2">
                {SUSTENTABILIDADE_VIDEOS.map((item) => (
                  <div
                    key={item.text}
                    className="relative w-full min-w-0 h-[296px] md:h-[320px] md:flex-1 rounded-2xl overflow-hidden flex flex-col"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: VIDEO_OVERLAY_GRADIENT }}
                      aria-hidden
                    />
                    {/* Botão play centralizado */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Play className="size-20 shrink-0 text-primary-foreground" strokeWidth={1} />
                    </div>
                    {/* Texto na parte inferior */}
                    <div className="relative z-10 mt-auto p-4">
                      <p className="text-base text-primary-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <PlataformaHelpBlock className="md:hidden" />
              <Card className="flex items-center gap-4 p-2 border-border">
                <img
                  src={seloSustentabilidadeImg}
                  alt="Selo de Sustentabilidade Sebrae - Bronze, Prata, Ouro, Diamante"
                  className="size-16 shrink-0 rounded-none object-cover"
                />
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="font-bold text-base text-foreground leading-normal">
                    Selo de Sustentabilidade Sebrae
                  </p>
                  <p className="text-sm text-muted-foreground leading-none">
                    Bronze → Prata → Ouro → Diamante
                  </p>
                </div>
              </Card>
            </div>
            <PlataformaHelpBlock className="hidden md:flex self-stretch" />
          </div>
        </div>
      </section>

      {/* Section: Suporte Sebrae */}
      <section className={cn(SECTION_BASE, "bg-muted")}>
        <div className={cn(SECTION_CONTENT, "flex flex-col lg:flex-row gap-2 lg:gap-12 items-stretch lg:items-center")}>
          <div className="flex flex-col justify-center space-y-4 lg:space-y-6 min-w-0 lg:flex-1">
            <h2 className="text-3xl font-bold text-foreground">
              Todo o suporte do Sebrae, agora no seu celular.
            </h2>
            <p className="text-base text-foreground/90">
              É o Sebrae cuidando do seu negócio. Quando você precisa de ajuda,
              tem gente de verdade pronta para te atender. A plataforma conecta
              você a tudo isso num lugar só.
            </p>
          </div>
          <Card className="w-full min-w-0 lg:flex-1">
            <img
              src={suporteSebraeImg}
              alt="Consultor Sebrae - suporte humanizado para o seu negócio"
              className="w-full h-[258px] object-cover"
            />
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={avatarFernandoImg} alt="Fernando - Consultor Sebrae" />
                  <AvatarFallback>F</AvatarFallback>
                </Avatar>
                <p className="text-base text-muted-foreground">
                  Fernando • Consultor Sebrae
                </p>
              </div>
              <p className="text-base text-foreground/90">
                Ana, separei algumas recomendações do Sebrae personalizadas para
                sua empresa:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <Zap className="size-5 text-muted-foreground shrink-0" />
                  <p className="text-sm font-bold text-muted-foreground">
                    Estratégia de vendas para o Natal
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <DollarSign className="size-5 text-muted-foreground shrink-0" />
                  <p className="text-sm font-bold text-muted-foreground">
                    Como precificar seus produtos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: Preço */}
      <section className={cn(SECTION_BASE, "bg-background")}>
        <div className={cn(SECTION_CONTENT, "flex flex-col lg:flex-row gap-8 lg:items-stretch")}>
          <div className="flex flex-col justify-center gap-4 lg:flex-1">
            <h2 className="text-3xl font-bold text-foreground">
              Comece sem pagar nada por 15 dias
            </h2>
            <p className="text-base text-foreground/90">
              MIA ilimitada, ferramentas de marketing, página de cadastro de
              clientes, integração com WhatsApp e o caminho completo para o selo
              de sustentabilidade do Sebrae. Sem taxa escondida, sem plano
              intermediário, sem pegadinha.
            </p>
          </div>
          <Card className="border-border lg:flex-1 lg:min-w-0">
            <CardContent className="p-6 space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="text-xs">
                  Experimente de graça por 15 dias
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Não precisa de cartão de crédito
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">
                  R$ 69,90/mês
                </p>
                <p className="text-base text-muted-foreground">
                  cancele quando quiser
                </p>
              </div>
              <ul className="space-y-3">
                {PLAN_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="size-6 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full gap-2">
                Começar agora de graça
                <ArrowRight className="size-4 shrink-0" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section: FAQ */}
      <section className={cn(SECTION_BASE, "bg-muted")}>
        <div className={SECTION_CONTENT}>
          <h2 className={SECTION_HEADING}>Ainda tem dúvidas?</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-0">
            {FAQ_ITEMS_WITH_CONTENT.map((item, i) => (
              <AccordionItem key={item.trigger} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Ainda tem dúvidas?
            </p>
            <Button variant="outline" className="gap-2">
              Acesse o suporte Sebrae
              <ArrowRight className="size-4 shrink-0" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background shadow-md flex justify-center">
        <div className={cn(SECTION_CONTENT, "flex flex-col items-start gap-8 px-4 py-16")}>
          <div className="w-full flex flex-col gap-8">
            <img
              src={logoMobileImg}
              alt="Projeto Crescimento Sustentável - SEBRAE"
              className="h-8 w-auto self-start md:hidden"
            />
            <img
              src={logoPlataformaImg}
              alt="BIUD Sebrae - Plataforma"
              className="hidden md:block h-8 w-auto self-start"
            />
            <div className="flex flex-col gap-3">
              <p className="text-sm text-foreground leading-normal">
                Para acessar o Dashboard de Gestão Sebrae:
              </p>
              <Button variant="outline" className="w-fit gap-2" size="default">
                Acesse com a conta Sebrae
                <ArrowRight className="size-4 shrink-0" />
              </Button>
            </div>
            <Separator />
            <div className="flex flex-col gap-4">
              <div className="flex items-end gap-4">
                <p className="text-sm text-muted-foreground leading-normal w-[99px] shrink-0">
                  Uma tecnologia
                </p>
                <img
                  src={brandsImg}
                  alt="BIUD"
                  className="h-6 w-auto max-w-[68px] object-contain object-left"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-normal max-w-md">
                A BIUD gera análises com base nos dados históricos do seu
                negócio. Os resultados são estimativas e podem variar conforme
                as circunstâncias do mercado.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
