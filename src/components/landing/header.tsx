import { Button } from "@/components/ui/button";
import { B2C_PILOT_CTA } from "@/lib/content/solo-content";

/*
  Липкая шапка B2C-посадочной NarrativeFox.
  Адаптивные отступы для экранов от 320px.
*/

const NAV = [
  { href: "/#scenarios", label: "Для кого" },
  { href: "/#demo", label: "Пример работы" },
  { href: "/#tariffs", label: "Пилот и тарифы" },
  { href: "/how-it-works", label: "Как устроена система" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      className={`flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}
      aria-label="NarrativeFox, на главную"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary font-display text-base font-bold text-primary-foreground">
        N
      </span>
      <span className="truncate font-display text-base font-bold tracking-tight text-stone-900 sm:text-lg">
        NarrativeFox
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
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
        <Button asChild size="sm" className="shrink-0 px-3 text-xs font-semibold sm:px-3.5 sm:text-sm">
          <a
            href={B2C_PILOT_CTA.href}
            target={B2C_PILOT_CTA.isExternal ? "_blank" : undefined}
            rel={B2C_PILOT_CTA.isExternal ? "noreferrer" : undefined}
          >
            {B2C_PILOT_CTA.shortLabel}
          </a>
        </Button>
      </div>
    </header>
  );
}
