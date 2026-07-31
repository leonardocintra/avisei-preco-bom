import Link from "next/link";
import { Search, Menu, ChevronDown, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Props do subcomponente de navegação.
 * Aceita um className opcional para variantes de layout (desktop vs mobile).
 */
function NavLinks({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      <Link
        href="/cupons"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Cupons
      </Link>

      {/* Categorias com dropdown usando <details> nativo (sem JS) */}
      <details className="group relative">
        <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          Categorias
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>
        <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border bg-popover p-2 shadow-lg">
          <div className="flex flex-col gap-1">
            <Link
              href="/categorias/eletronicos"
              className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
            >
              Eletrônicos
            </Link>
            <Link
              href="/categorias/moda"
              className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
            >
              Moda
            </Link>
            <Link
              href="/categorias/casa"
              className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
            >
              Casa
            </Link>
            <Link
              href="/categorias/esportes"
              className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
            >
              Esportes
            </Link>
            <Link
              href="/categorias"
              className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent"
            >
              Ver todas
            </Link>
          </div>
        </div>
      </details>
    </nav>
  );
}

/**
 * Campo de busca. Renderizado como <form> com method GET para
 * navegação sem JS (submete para /busca?q=...).
 */
function SearchField({ className }: { className?: string }) {
  return (
    <form action="/busca" method="GET" className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        name="q"
        placeholder="Buscar cupons..."
        className="h-9 w-full rounded-lg border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </form>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop e mobile: linha principal com logo, navegação, busca, login */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo (sempre visível) */}
          <Link href="/" className="shrink-0 text-lg font-bold text-foreground">
            Avisei Preço BOM!
          </Link>

          {/* Navegação desktop — escondida no mobile */}
          <NavLinks className="hidden md:flex" />

          {/* Busca desktop — escondida no mobile (vai para baixo) */}
          <SearchField className="hidden md:block w-full max-w-xs" />

          {/* Lado direito: Entrar + hambúrguer (mobile) */}
          <div className="flex items-center gap-3">
            <Link
              href="/entrar"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-4 py-2",
                "text-sm font-medium text-foreground",
                "transition-colors hover:bg-accent",
              )}
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Entrar</span>
            </Link>

            {/* Mobile: menu hambúrguer */}
            <details className="group md:hidden">
              <summary className="flex cursor-pointer list-none items-center p-2 text-muted-foreground transition-colors hover:text-foreground">
                <span className="sr-only">Abrir menu</span>
                <Menu className="h-5 w-5" />
              </summary>

              {/* Dropdown mobile */}
              <div className="absolute left-0 right-0 top-full border-b bg-background p-4 shadow-lg">
                <div className="flex flex-col gap-4">
                  {/* Busca no topo do menu mobile */}
                  <SearchField className="w-full" />

                  {/* Links de navegação */}
                  <NavLinks className="flex-col items-start gap-3" />

                  {/* Categorias expandidas inline no mobile */}
                  <div className="flex flex-col gap-1 border-t pt-3">
                    <span className="px-3 text-xs font-semibold uppercase text-muted-foreground">
                      Categorias
                    </span>
                    <Link
                      href="/categorias/eletronicos"
                      className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
                    >
                      Eletrônicos
                    </Link>
                    <Link
                      href="/categorias/moda"
                      className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
                    >
                      Moda
                    </Link>
                    <Link
                      href="/categorias/casa"
                      className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
                    >
                      Casa
                    </Link>
                    <Link
                      href="/categorias/esportes"
                      className="rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent"
                    >
                      Esportes
                    </Link>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Mobile: campo de busca abaixo da linha principal */}
        <div className="pb-3 md:hidden">
          <SearchField className="w-full" />
        </div>
      </div>
    </header>
  );
}
