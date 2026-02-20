export type StatusAnuncio = "Em Veiculação" | "Pausado" | "Encerrado"

export interface Anuncio {
  id: string
  titulo: string
  descricao: string
  thumbnail: string
  status: StatusAnuncio
  periodoInicio: string
  periodoFim: string
  exibicoes: number
  creditosConsumidos: number
  ranking: number
  variacaoExibicoes?: number
  variacaoCreditos?: number
}

export interface Lojista {
  id: string
  nome: string
  anunciosCriados: number
  anunciosAtivos: number
  exibicoes: number
  creditosConsumidos: number
  statusWallet: "Ativo" | "Inativo" | "Pendente"
}

export interface MetricasSemanais {
  semana: string
  exibicoes: number
  creditosConsumidos: number
  anunciosCriados?: number
  interacoes?: number
}

export interface MetricasLojista {
  saldoTotalCreditos: number
  creditosPagos: number
  creditosBonus: number
  creditosConsumidosPeriodo: number
  variacaoCreditosConsumidos: number
  totalExibicoesPeriodo: number
  variacaoExibicoes: number
  totalAnunciosAtivos: number
  ultimaAtualizacao: string
}

export interface MetricasAdmin {
  totalAnunciosCriados: number
  variacaoAnunciosCriados: number
  anunciosAtivos: number
  variacaoAnunciosAtivos: number
  totalExibicoes: number
  variacaoExibicoes: number
  totalInteracoes: number
  variacaoInteracoes: number
  creditosConsumidos: number
  variacaoCreditos: number
  totalConversas: number
  usuariosAtivos: number
  tempoMedioSessao: string
}

const ANUNCIOS: Anuncio[] = [
  {
    id: "1",
    titulo: "Promoção Black Friday",
    descricao: "Desconto de 30% em toda a loja",
    thumbnail: "https://placehold.co/120x80/e2e8f0/64748b?text=Black+Friday",
    status: "Em Veiculação",
    periodoInicio: "01/11/2025",
    periodoFim: "30/11/2025",
    exibicoes: 15420,
    creditosConsumidos: 385,
    ranking: 1,
    variacaoExibicoes: 12.5,
    variacaoCreditos: 8.2,
  },
  {
    id: "2",
    titulo: "Novos Produtos Inverno",
    descricao: "Coleção inverno 2025",
    thumbnail: "https://placehold.co/120x80/e2e8f0/64748b?text=Inverno",
    status: "Em Veiculação",
    periodoInicio: "15/10/2025",
    periodoFim: "15/12/2025",
    exibicoes: 8920,
    creditosConsumidos: 223,
    ranking: 2,
    variacaoExibicoes: -3.1,
    variacaoCreditos: -2.4,
  },
  {
    id: "3",
    titulo: "Frete Grátis",
    descricao: "Em compras acima de R$ 99",
    thumbnail: "https://placehold.co/120x80/e2e8f0/64748b?text=Frete",
    status: "Pausado",
    periodoInicio: "01/10/2025",
    periodoFim: "31/10/2025",
    exibicoes: 5420,
    creditosConsumidos: 136,
    ranking: 3,
  },
]

const LOJISTAS: Lojista[] = [
  {
    id: "loj1",
    nome: "Loja Fashion Plus",
    anunciosCriados: 12,
    anunciosAtivos: 3,
    exibicoes: 45820,
    creditosConsumidos: 1145,
    statusWallet: "Ativo",
  },
  {
    id: "loj2",
    nome: "Eletrônicos Tech",
    anunciosCriados: 8,
    anunciosAtivos: 2,
    exibicoes: 32100,
    creditosConsumidos: 802,
    statusWallet: "Ativo",
  },
  {
    id: "loj3",
    nome: "Café & Cia",
    anunciosCriados: 5,
    anunciosAtivos: 1,
    exibicoes: 12800,
    creditosConsumidos: 320,
    statusWallet: "Pendente",
  },
]

const TENDENCIA_SEMANAL: MetricasSemanais[] = [
  { semana: "Sem 1", exibicoes: 4200, creditosConsumidos: 105 },
  { semana: "Sem 2", exibicoes: 5800, creditosConsumidos: 145 },
  { semana: "Sem 3", exibicoes: 6200, creditosConsumidos: 155 },
  { semana: "Sem 4", exibicoes: 7100, creditosConsumidos: 178 },
]

const TENDENCIA_ANUNCIO: MetricasSemanais[] = [
  { semana: "Sem 1", exibicoes: 1200, creditosConsumidos: 30 },
  { semana: "Sem 2", exibicoes: 1850, creditosConsumidos: 46 },
  { semana: "Sem 3", exibicoes: 2100, creditosConsumidos: 52 },
  { semana: "Sem 4", exibicoes: 2450, creditosConsumidos: 61 },
]

export const MOCK_METRICAS_LOJISTA: MetricasLojista = {
  saldoTotalCreditos: 2500,
  creditosPagos: 2000,
  creditosBonus: 500,
  creditosConsumidosPeriodo: 744,
  variacaoCreditosConsumidos: 8.2,
  totalExibicoesPeriodo: 29760,
  variacaoExibicoes: 12.5,
  totalAnunciosAtivos: 3,
  ultimaAtualizacao: "20/02/2025 às 14:32",
}

export const MOCK_METRICAS_ADMIN: MetricasAdmin = {
  totalAnunciosCriados: 156,
  variacaoAnunciosCriados: 15.2,
  anunciosAtivos: 42,
  variacaoAnunciosAtivos: 8.5,
  totalExibicoes: 892000,
  variacaoExibicoes: 22.3,
  totalInteracoes: 12450,
  variacaoInteracoes: 18.7,
  creditosConsumidos: 22300,
  variacaoCreditos: 12.1,
  totalConversas: 3420,
  usuariosAtivos: 89,
  tempoMedioSessao: "4m 32s",
}

export function getAnunciosLojista(): Anuncio[] {
  return [...ANUNCIOS].sort((a, b) => b.exibicoes - a.exibicoes)
}

export function getAnuncioById(id: string): Anuncio | undefined {
  return ANUNCIOS.find((a) => a.id === id)
}

export function getLojistas(): Lojista[] {
  return [...LOJISTAS]
}

export function getLojistaById(id: string): Lojista | undefined {
  return LOJISTAS.find((l) => l.id === id)
}

export function getTendenciaSemanal(): MetricasSemanais[] {
  return TENDENCIA_SEMANAL
}

export function getTendenciaAnuncio(): MetricasSemanais[] {
  return TENDENCIA_ANUNCIO
}
