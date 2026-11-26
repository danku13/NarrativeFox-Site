import { Button } from "@/components/ui/button";
import { B2C_PILOT_CTA } from "@/lib/content/solo-content";

/*
  Липкая шапка B2C-посадочной NarrativeFox.
  Публичная навигация сфокусирована на B2C-сценарии и пилоте за 990 ₽.
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
