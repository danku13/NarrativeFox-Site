import { Logo } from "./header";
import { Button } from "@/components/ui/button";
import {
  APP_LINKS,
  CTA_SIGNUP,
  SELLER,
  SELLER_PHONE,
  SITE_NAV,
  telHref,
} from "@/lib/content/site-meta";

/*
  Подвал: разделы сайта, переход в приложение, юридические ссылки
  и реквизиты продавца.

  Реквизиты нужны не только посетителю, но и модератору платёжного
  сервиса: он проверяет, кто продаёт услугу, по какому документу
  принимается оплата и куда писать по возврату.

  Телефон выводится только когда значение задано: для модерации
  Robokassa он обязателен, но номер даёт основатель (SELLER_PHONE).
*/

const LEGAL = [
  { href: APP_LINKS.offer, label: "Оферта" },
  { href: APP_LINKS.privacy, label: "Политика обработки персональных данных" },
  { href: APP_LINKS.refund, label: "Оплата и возврат" },
  { href: APP_LINKS.pricing, label: "Тарифы и оплата" },
];

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-stone-600">
              Система ведёт контент-маркетинг: план, тексты в вашем тоне,
              расписание и разбор отклика. Ничего не выходит без вашего
              утверждения.
            </p>
            <Button asChild className="font-semibold">
              <a href={APP_LINKS.signup} target="_blank" rel="noopener noreferrer">
                {CTA_SIGNUP}
              </a>
            </Button>
          </div>

          <nav aria-label="Разделы сайта">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
              Разделы
            </p>
            <ul className="mt-4 space-y-2.5">
              {SITE_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Документы и оплата">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
              Документы и оплата
            </p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Реквизиты продавца */}
        <div className="mt-10 border-t border-stone-200/70 pt-6">
          <p className="text-sm leading-relaxed text-stone-600">
            Продавец: {SELLER.name} · {SELLER.status} · ИНН {SELLER.inn} ·{" "}
            <a
              href={`mailto:${SELLER.email}`}
              className="underline underline-offset-2 hover:text-stone-900"
            >
              {SELLER.email}
            </a>
            {SELLER_PHONE ? (
              <>
                {" · "}
                <a
                  href={telHref(SELLER_PHONE)}
                  className="underline underline-offset-2 hover:text-stone-900"
                >
                  {SELLER_PHONE}
                </a>
              </>
            ) : null}
          </p>
          <p className="mt-2 text-sm text-stone-500">
            Сервис для лиц старше 18 лет.
          </p>
          <p className="mt-2 text-sm text-stone-500">
            © 2026 NarrativeFox. Контент-маркетинг ведёт система.
          </p>
        </div>
      </div>
    </footer>
  );
}
