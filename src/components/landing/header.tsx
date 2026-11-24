import { Button } from "@/components/ui/button";
import { APP_LINKS, APP_NAV, CTA_SIGNUP, SITE_NAV } from "@/lib/content/site-meta";

/*
  Липкая шапка, единая для всех страниц сайта v3.0.
  Навигация по маршрутам лендинга плюс пункт «Тарифы и оплата»:
  он ведёт на витрину приложения, там цены, оплата и документы.
  Одно основное действие: регистрация в приложении.

  Раздел продуктовой части отделён от разделов лендинга: внешняя
  ссылка открывается в новой вкладке, чтобы страница не терялась.
*/

const NAV = [...SITE_NAV, ...APP_NAV];

function isExternal(href: string) {
  return href.startsWith("http");
}

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
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={isExternal(item.href) ? "_blank" : undefined}
              rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="shrink-0 font-semibold">
          <a href={APP_LINKS.signup} target="_blank" rel="noopener noreferrer">
            {CTA_SIGNUP}
          </a>
        </Button>
      </div>
    </header>
  );
}
