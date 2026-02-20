import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { MetodoPage } from "./pages/MetodoPage"
import { ServicosPage } from "./pages/ServicosPage"
import { CasesPage } from "./pages/CasesPage"
import { CaseStudyPage } from "./pages/CaseStudyPage"
import { ContatoPage } from "./pages/ContatoPage"
import { BlogPage } from "./pages/BlogPage"
import { BlogPostPage } from "./pages/BlogPostPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="metodo" element={<MetodoPage />} />
        <Route path="servicos" element={<ServicosPage />} />
        <Route path="cases" element={<CasesPage />} />
        <Route path="cases/:slug" element={<CaseStudyPage />} />
        <Route path="contato" element={<ContatoPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
      </Route>
    </Routes>
  )
}
