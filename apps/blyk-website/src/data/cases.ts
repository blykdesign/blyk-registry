import { IMAGES } from "../assets/images"

export const CASES_DATA: Record<
  string,
  {
    title: string
    meta: string
    resultado: string
    contexto: string
    desafio: string
    resultadoTexto: string
    image: string
  }
> = {
  fintrack: {
    title: "FinTrack",
    meta: "Fintech",
    resultado: "+40% conversão",
    image: IMAGES.cases.fintech,
    contexto:
      "FinTrack é uma plataforma de gestão financeira para pequenos negócios. O produto já existia, mas a taxa de conversão do onboarding era baixa e o churn nos primeiros 30 dias era alto.",
    desafio:
      "Entender por que usuários abandonavam o onboarding e não retornavam. Identificar pontos de fricção e oportunidades de melhoria no fluxo de ativação.",
    resultadoTexto:
      "Com Discovery, identificamos os principais pontos de abandono. Redesenhamos o onboarding com foco em time-to-value e reduzimos a fricção em etapas críticas. O resultado: +40% na conversão de onboarding e melhora de 25% na retenção do primeiro mês.",
  },
  "sala-health": {
    title: "Sala Health",
    meta: "Healthtech",
    resultado: "Redução de 60% no onboarding",
    image: IMAGES.cases.health,
    contexto:
      "Sala Health é uma healthtech que conecta pacientes a profissionais de saúde. O produto tinha um onboarding longo e complexo, com muitas etapas e informações solicitadas.",
    desafio:
      "Simplificar o onboarding sem perder informações essenciais. Melhorar a experiência do usuário nas primeiras interações e reduzir o tempo até o primeiro valor.",
    resultadoTexto:
      "Com pesquisa e mapeamento de jornada, identificamos etapas redundantes e informações que poderiam ser coletadas posteriormente. Redesenhamos o fluxo para um onboarding progressivo. Resultado: redução de 60% no tempo de onboarding e aumento na satisfação (NPS +15 pontos).",
  },
  eduprime: {
    title: "EduPrime",
    meta: "Edtech",
    resultado: "NPS de 72",
    image: IMAGES.cases.edtech,
    contexto:
      "EduPrime é uma plataforma de educação online para profissionais. O produto tinha boa base de usuários, mas o NPS era baixo e havia reclamações recorrentes sobre a experiência de uso.",
    desafio:
      "Entender as principais dores dos usuários e melhorar a experiência de produto para aumentar satisfação e retenção.",
    resultadoTexto:
      "Com Discovery e entrevistas, mapeamos as principais dores. Redesenhamos fluxos críticos (busca de cursos, progresso, certificados) e melhoramos a usabilidade geral. Resultado: NPS de 72 (antes 45) e aumento de 30% na conclusão de cursos.",
  },
}
