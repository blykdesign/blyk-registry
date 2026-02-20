import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { IndicatorCard } from "@/components/ui/indicator-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import { getAnuncioById, getTendenciaAnuncio } from "@/data/mock"
import type { StatusAnuncio } from "@/data/mock"

const PERIODOS = [
  { value: "esta-semana", label: "Esta semana" },
  { value: "este-mes", label: "Este mês" },
  { value: "ultimos-30", label: "Últimos 30 dias" },
] as const

const chartConfig = {
  exibicoes: {
    label: "Exibições",
    color: "hsl(var(--chart-1))",
  },
}

function VariacaoBadge({ valor }: { valor: number }) {
  const isPositive = valor >= 0
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-xs font-medium",
        isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
      )}
    >
      {isPositive ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
      {isPositive ? "+" : ""}
      {valor}%
    </span>
  )
}

function StatusBadge({ status }: { status: StatusAnuncio }) {
  const variant =
    status === "Em Veiculação"
      ? "default"
      : status === "Pausado"
        ? "secondary"
        : "outline"
  return <Badge variant={variant}>{status}</Badge>
}

export function DetalheAnuncio() {
  const { id } = useParams<{ id: string }>()
  const [periodo, setPeriodo] = useState<string>("este-mes")

  const anuncio = id ? getAnuncioById(id) : undefined
  const tendencia = getTendenciaAnuncio()

  if (!anuncio) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-muted-foreground">Anúncio não encontrado.</p>
        <Link to="/" className="text-primary mt-2 hover:underline">
          Voltar ao relatório
        </Link>
      </div>
    )
  }

  const mediaExibicoesDia = Math.round(anuncio.exibicoes / 30)
  const variacaoPeriodo = anuncio.variacaoExibicoes ?? 12.5

  return (
    <div className="space-y-8">
      {/* Breadcrumb + Filtros */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Relatório de Performance</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{anuncio.titulo}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Select value={periodo} onValueChange={setPeriodo}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            {PERIODOS.map((p) => (
              <SelectItem key={p.value} value={p.value}>
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Card do anúncio */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <img
              src={anuncio.thumbnail}
              alt=""
              className="h-32 w-[200px] shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle>{anuncio.titulo}</CardTitle>
                <StatusBadge status={anuncio.status} />
              </div>
              <CardDescription className="mt-1">{anuncio.descricao}</CardDescription>
              <p className="text-muted-foreground text-sm mt-2">
                Período: {anuncio.periodoInicio} — {anuncio.periodoFim}
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Cards de métricas */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <IndicatorCard
          label="Total Exibições"
          value={anuncio.exibicoes.toLocaleString("pt-BR")}
          badge={<VariacaoBadge valor={variacaoPeriodo} />}
        />
        <IndicatorCard
          label="Créditos Consumidos"
          value={anuncio.creditosConsumidos.toLocaleString("pt-BR")}
        />
        <IndicatorCard
          label="Média Exibições/Dia"
          value={mediaExibicoesDia.toLocaleString("pt-BR")}
        />
        <IndicatorCard
          label="Variação vs Período Anterior"
          value={<VariacaoBadge valor={variacaoPeriodo} />}
        />
      </div>

      {/* Gráfico histórico */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Exibições</CardTitle>
          <CardDescription>Evolução semanal deste anúncio</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[280px] w-full">
            <AreaChart data={tendencia} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillExibicoesDetalhe" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-exibicoes)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--color-exibicoes)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="semana" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => v.toLocaleString()} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="exibicoes"
                stroke="var(--color-exibicoes)"
                fill="url(#fillExibicoesDetalhe)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
