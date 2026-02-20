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
import { TrendingUp, TrendingDown, Trophy } from "lucide-react"
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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import {
  getLojistaById,
  getAnunciosLojista,
  getTendenciaSemanal,
  MOCK_METRICAS_LOJISTA,
} from "@/data/mock"
import type { Anuncio, StatusAnuncio } from "@/data/mock"

const PERIODOS = [
  { value: "esta-semana", label: "Esta semana" },
  { value: "este-mes", label: "Este mês" },
  { value: "ultimos-30", label: "Últimos 30 dias" },
] as const

const chartConfig = {
  exibicoes: { label: "Exibições", color: "hsl(var(--chart-1))" },
  creditosConsumidos: { label: "Créditos Consumidos", color: "hsl(var(--chart-2))" },
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

export function VisaoLojistaAdmin() {
  const { id } = useParams<{ id: string }>()
  const [periodo, setPeriodo] = useState<string>("este-mes")
  const [chartMetric, setChartMetric] = useState<"exibicoes" | "creditos">("exibicoes")

  const lojista = id ? getLojistaById(id) : undefined
  const metricas = MOCK_METRICAS_LOJISTA
  const anuncios = getAnunciosLojista()
  const tendencia = getTendenciaSemanal()

  const chartData = tendencia.map((s) => ({
    ...s,
    creditosConsumidos: s.creditosConsumidos,
  }))

  const chartConfigFiltered: ChartConfig =
    chartMetric === "exibicoes"
      ? { exibicoes: chartConfig.exibicoes }
      : { creditosConsumidos: chartConfig.creditosConsumidos }

  if (!lojista) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-muted-foreground">Lojista não encontrado.</p>
        <Link to="/" className="text-primary mt-2 hover:underline">
          Voltar ao painel
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb + Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Performance de Anúncios</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{lojista.nome}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-2xl font-semibold tracking-tight mt-2">{lojista.nome}</h1>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
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
          <span className="text-muted-foreground text-xs">
            Última atualização: {metricas.ultimaAtualizacao}
          </span>
        </div>
      </div>

      {/* Cards de resumo (read-only, mesmo layout da Tela 1.1) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <IndicatorCard
          label="Saldo Total de Créditos"
          value={metricas.saldoTotalCreditos.toLocaleString("pt-BR")}
          description={
            <p className="text-muted-foreground text-xs">
              {metricas.creditosPagos.toLocaleString("pt-BR")} pagos · {metricas.creditosBonus.toLocaleString("pt-BR")} bônus
            </p>
          }
        />
        <IndicatorCard
          label="Créditos Consumidos no Período"
          value={metricas.creditosConsumidosPeriodo.toLocaleString("pt-BR")}
          badge={<VariacaoBadge valor={metricas.variacaoCreditosConsumidos} />}
        />
        <IndicatorCard
          label="Total de Exibições no Período"
          value={metricas.totalExibicoesPeriodo.toLocaleString("pt-BR")}
          badge={<VariacaoBadge valor={metricas.variacaoExibicoes} />}
        />
        <IndicatorCard
          label="Total de Anúncios Ativos"
          value={metricas.totalAnunciosAtivos}
        />
      </div>

      {/* Gráfico de tendência */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Tendência</CardTitle>
            <CardDescription>Evolução semanal</CardDescription>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setChartMetric("exibicoes")}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                chartMetric === "exibicoes"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Exibições
            </button>
            <button
              type="button"
              onClick={() => setChartMetric("creditos")}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                chartMetric === "creditos"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              Créditos Consumidos
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfigFiltered} className="h-[280px] w-full">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillExibAdminLoj" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-exibicoes)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--color-exibicoes)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fillCreditosAdminLoj" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-creditosConsumidos)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--color-creditosConsumidos)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="semana" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => v.toLocaleString()} />
              <ChartTooltip content={<ChartTooltipContent />} />
              {chartMetric === "exibicoes" ? (
                <Area
                  type="monotone"
                  dataKey="exibicoes"
                  stroke="var(--color-exibicoes)"
                  fill="url(#fillExibAdminLoj)"
                  strokeWidth={2}
                />
              ) : (
                <Area
                  type="monotone"
                  dataKey="creditosConsumidos"
                  stroke="var(--color-creditosConsumidos)"
                  fill="url(#fillCreditosAdminLoj)"
                  strokeWidth={2}
                />
              )}
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Lista de anúncios (read-only, sem link para detalhe) */}
      <Card>
        <CardHeader>
          <CardTitle>Anúncios</CardTitle>
          <CardDescription>Ordenados por exibições</CardDescription>
        </CardHeader>
        <CardContent>
          {anuncios.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center">
              Este lojista ainda não possui anúncios.
            </p>
          ) : (
            <div className="space-y-4">
              {anuncios.map((anuncio) => (
                <div
                  key={anuncio.id}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <img
                      src={anuncio.thumbnail}
                      alt=""
                      className="h-20 w-[120px] shrink-0 rounded-md object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-medium truncate">{anuncio.titulo}</h3>
                        <StatusBadge status={anuncio.status} />
                      </div>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {anuncio.periodoInicio} — {anuncio.periodoFim}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">Exibições</span>
                        <p className="font-medium tabular-nums">{anuncio.exibicoes.toLocaleString("pt-BR")}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Créditos</span>
                        <p className="font-medium tabular-nums">{anuncio.creditosConsumidos.toLocaleString("pt-BR")}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="size-4 text-muted-foreground" />
                        <span className="font-medium">#{anuncio.ranking}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
