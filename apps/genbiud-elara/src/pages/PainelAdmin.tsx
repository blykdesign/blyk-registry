import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
import { IndicatorCard } from "@/components/ui/indicator-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import {
  getLojistas,
  getTendenciaSemanal,
  MOCK_METRICAS_ADMIN,
} from "@/data/mock"

const PERIODOS = [
  { value: "esta-semana", label: "Esta semana" },
  { value: "este-mes", label: "Este mês" },
  { value: "ultimos-30", label: "Últimos 30 dias" },
] as const

const chartConfig = {
  exibicoes: { label: "Exibições", color: "hsl(var(--chart-1))" },
  anunciosCriados: { label: "Anúncios Criados", color: "hsl(var(--chart-2))" },
  creditosConsumidos: { label: "Créditos Consumidos", color: "hsl(var(--chart-3))" },
  interacoes: { label: "Interações", color: "hsl(var(--chart-4))" },
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

export function PainelAdmin() {
  const [periodo, setPeriodo] = useState<string>("este-mes")
  const navigate = useNavigate()

  const metricas = MOCK_METRICAS_ADMIN
  const lojistas = getLojistas()
  const tendencia = getTendenciaSemanal()

  const chartData = tendencia.map((s) => ({
    ...s,
    anunciosCriados: Math.round(s.exibicoes / 100),
    interacoes: Math.round(s.exibicoes * 0.15),
  }))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Performance de Anúncios</h1>
          <p className="text-muted-foreground mt-1">
            Métricas globais de anúncios e adoção
          </p>
        </div>
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

      {/* Cards de métricas principais */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <IndicatorCard
          label="Total Anúncios Criados"
          value={metricas.totalAnunciosCriados}
          badge={<VariacaoBadge valor={metricas.variacaoAnunciosCriados} />}
        />
        <IndicatorCard
          label="Anúncios Ativos"
          value={metricas.anunciosAtivos}
          badge={<VariacaoBadge valor={metricas.variacaoAnunciosAtivos} />}
        />
        <IndicatorCard
          label="Total Exibições"
          value={metricas.totalExibicoes.toLocaleString("pt-BR")}
          badge={<VariacaoBadge valor={metricas.variacaoExibicoes} />}
        />
        <IndicatorCard
          label="Total Interações"
          value={metricas.totalInteracoes.toLocaleString("pt-BR")}
          badge={<VariacaoBadge valor={metricas.variacaoInteracoes} />}
        />
        <IndicatorCard
          label="Créditos Consumidos"
          value={metricas.creditosConsumidos.toLocaleString("pt-BR")}
          badge={<VariacaoBadge valor={metricas.variacaoCreditos} />}
        />
      </div>

      {/* Cards de uso */}
      <div className="grid gap-4 sm:grid-cols-3">
        <IndicatorCard
          label="Total Conversas"
          value={metricas.totalConversas.toLocaleString("pt-BR")}
        />
        <IndicatorCard
          label="Usuários Ativos"
          value={metricas.usuariosAtivos}
        />
        <IndicatorCard
          label="Tempo Médio Sessão"
          value={metricas.tempoMedioSessao}
        />
      </div>

      {/* Gráfico com tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Evolução</CardTitle>
          <CardDescription>Métricas ao longo do tempo</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="exibicoes">
            <TabsList>
              <TabsTrigger value="exibicoes">Exibições</TabsTrigger>
              <TabsTrigger value="anuncios">Anúncios Criados</TabsTrigger>
              <TabsTrigger value="creditos">Créditos Consumidos</TabsTrigger>
              <TabsTrigger value="interacoes">Interações</TabsTrigger>
            </TabsList>
            <TabsContent value="exibicoes" className="mt-4">
              <ChartContainer config={{ exibicoes: chartConfig.exibicoes }} className="h-[280px] w-full">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillExibAdmin" x1="0" y1="0" x2="0" y2="1">
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
                    fill="url(#fillExibAdmin)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </TabsContent>
            <TabsContent value="anuncios" className="mt-4">
              <ChartContainer config={{ anunciosCriados: chartConfig.anunciosCriados }} className="h-[280px] w-full">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillAnunciosAdmin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-anunciosCriados)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="var(--color-anunciosCriados)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="semana" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => v.toLocaleString()} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="anunciosCriados"
                    stroke="var(--color-anunciosCriados)"
                    fill="url(#fillAnunciosAdmin)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </TabsContent>
            <TabsContent value="creditos" className="mt-4">
              <ChartContainer config={{ creditosConsumidos: chartConfig.creditosConsumidos }} className="h-[280px] w-full">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillCreditosAdmin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-creditosConsumidos)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="var(--color-creditosConsumidos)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="semana" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => v.toLocaleString()} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="creditosConsumidos"
                    stroke="var(--color-creditosConsumidos)"
                    fill="url(#fillCreditosAdmin)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </TabsContent>
            <TabsContent value="interacoes" className="mt-4">
              <ChartContainer config={{ interacoes: chartConfig.interacoes }} className="h-[280px] w-full">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillInteracoesAdmin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-interacoes)" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="var(--color-interacoes)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="semana" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => v.toLocaleString()} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="interacoes"
                    stroke="var(--color-interacoes)"
                    fill="url(#fillInteracoesAdmin)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Tabela Adoção por Lojista */}
      <Card>
        <CardHeader>
          <CardTitle>Adoção por Lojista</CardTitle>
          <CardDescription>Clique em uma linha para ver o detalhe do lojista</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead className="text-right">Anúncios Criados</TableHead>
                <TableHead className="text-right">Ativos</TableHead>
                <TableHead className="text-right">Exibições</TableHead>
                <TableHead className="text-right">Créditos Consumidos</TableHead>
                <TableHead>Status Wallet</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lojistas.map((lojista) => (
                <TableRow
                  key={lojista.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/admin/lojista/${lojista.id}`)}
                >
                  <TableCell className="font-medium">{lojista.nome}</TableCell>
                  <TableCell className="text-right">{lojista.anunciosCriados}</TableCell>
                  <TableCell className="text-right">{lojista.anunciosAtivos}</TableCell>
                  <TableCell className="text-right tabular-nums">{lojista.exibicoes.toLocaleString("pt-BR")}</TableCell>
                  <TableCell className="text-right tabular-nums">{lojista.creditosConsumidos.toLocaleString("pt-BR")}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        lojista.statusWallet === "Ativo"
                          ? "default"
                          : lojista.statusWallet === "Pendente"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {lojista.statusWallet}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
