import { Outlet, Link, useLocation } from "react-router-dom"
import { BarChart3, LayoutDashboard } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"
type Role = "operador" | "admin"

interface LayoutProps {
  role: Role
}

export function Layout({ role }: LayoutProps) {
  const location = useLocation()
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-2 py-4">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BarChart3 className="size-5" />
            </div>
            <span className="font-semibold text-sidebar-foreground">Elara</span>
          </div>
          <div className="px-2 pb-2">
            <div className="flex gap-1 rounded-md bg-muted p-1">
              <Link
                to="/"
                className={`flex-1 rounded px-2 py-1 text-center text-xs font-medium transition-colors ${
                  role === "operador"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Lojista
              </Link>
              <Link
                to="/admin"
                className={`flex-1 rounded px-2 py-1 text-center text-xs font-medium transition-colors ${
                  role === "admin"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Admin
              </Link>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navegação</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {role === "operador" && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === "/" || location.pathname.startsWith("/anuncio")}
                    >
                      <Link to="/">
                        <LayoutDashboard className="size-4" />
                        <span>Relatório</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
                {role === "admin" && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === "/admin" || location.pathname.startsWith("/admin/lojista")}
                    >
                      <Link to="/admin">
                        <BarChart3 className="size-4" />
                        <span>Performance de Anúncios</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="min-h-svh flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
