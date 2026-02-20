import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { RelatorioPerformance } from "@/pages/RelatorioPerformance"
import { DetalheAnuncio } from "@/pages/DetalheAnuncio"
import { PainelAdmin } from "@/pages/PainelAdmin"
import { VisaoLojistaAdmin } from "@/pages/VisaoLojistaAdmin"

function AppRoutes() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith("/admin")

  return (
    <Routes>
      <Route element={<Layout role={isAdmin ? "admin" : "operador"} />}>
        {/* Operador (Lojista) */}
        <Route path="/" element={<RelatorioPerformance />} />
        <Route path="/anuncio/:id" element={<DetalheAnuncio />} />

        {/* Admin */}
        <Route path="/admin" element={<PainelAdmin />} />
        <Route path="/admin/lojista/:id" element={<VisaoLojistaAdmin />} />
      </Route>
    </Routes>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
