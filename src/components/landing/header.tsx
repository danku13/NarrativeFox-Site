import { Button } from "@/components/ui/button";

/*
  Липкая шапка, единая для всех страниц сайта v3.0.
  Навигация по маршрутам: контуры, разбор системы, пилот.
  Одно основное действие, без конкурирующих кнопок.
*/

const NAV = [
  { href: "/solo", label: "Для экспертов и авторов" },
  { href: "/business", label: "Для B2B и техно-продуктов" },
  { href: "/how-it-works", label: "Как устроена система" },
  { href: "/pilot", label: "Пилот и стоимость" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="NarrativeFox, на главную"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-base font-bold text-primary-foreground">
        N
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-stone-900">
        NarrativeFox
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="font-semibold">
          <a href="#contact">Обсудить пилот</a>
        </Button>
      </div>
    </header>
  );
}
