import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { TARIFF_GRID } from "@/lib/content/tariffs";
import { APP_LINKS } from "@/lib/content/site-meta";
import { Check, CreditCard } from "lucide-react";

/*
  Тарифы B2C: единый блок для /solo, /business и /pilot.
  Цены и лимиты приходят из src/lib/content/tariffs.ts, ссылки на витрину
  и документы из src/lib/content/site-meta.ts.

  Модератор платёжного сервиса смотрит блок как новый пользователь:
  ему нужны цена, лимиты, способ оплаты и документы в одном экране.
  Поэтому цена стоит в карточке сверху, а под сеткой идут докупки,
  ссылка на страницу тарифов, способ оплаты и юридические ссылки.
*/

export function TariffsSection({ id = "tariffs" }: { id?: string }) {
  return (
    <Section id={id} tone="muted">
      <SectionHeader
        eyebrow={TARIFF_GRID.eyebrow}
        titleDark={TARIFF_GRID.titleDark}
        titleMuted={TARIFF_GRID.titleMuted}
        lead={TARIFF_GRID.lead}
      />

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {TARIFF_GRID.plans.map((plan) => (
          <li
            key={plan.key}
            className={
              plan.featured
                ? "relative flex flex-col rounded-xl border-2 border-stone-900 bg-white p-6 shadow-sm sm:p-7"
                : "relative flex flex-col rounded-xl border border-stone-200 bg-white p-6 sm:p-7"
            }
          >
            {plan.featured ? (
              <span className="absolute -top-3 left-6 rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-white">
                Частый выбор
              </span>
            ) : null}
            <h3 className="font-display text-xl font-semibold text-stone-900">
              {plan.name}
            </h3>
            <p className="mt-2 min-h-10 text-sm leading-relaxed text-stone-600">
              {plan.for}
            </p>

            <div className="mt-5 border-t border-stone-100 pt-5">
              <p className="font-display text-3xl font-semibold tracking-tight text-stone-900">
                {plan.price}
              </p>
              <p className="mt-1 text-xs text-stone-500">{plan.priceNote}</p>
            </div>

            <dl className="mt-5 space-y-3">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-600">
                  {TARIFF_GRID.featureLabels.platforms}
                </dt>
                <dd className="text-sm font-semibold tabular-nums text-stone-900">
                  {plan.platforms}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-600">
                  {TARIFF_GRID.featureLabels.posts}
                </dt>
                <dd className="text-right text-sm font-semibold text-stone-900">
                  {plan.posts}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-600">
                  {TARIFF_GRID.featureLabels.cycles}
                </dt>
                <dd className="text-right text-sm font-semibold text-stone-900">
                  {plan.cycles}
                </dd>
              </div>
            </dl>

            <p className="mt-auto pt-6 text-xs leading-relaxed text-stone-500">
              <Check className="mr-1.5 inline h-3.5 w-3.5 text-stone-500" aria-hidden="true" />
              Память бренда, база знаний и платформенные ключи ИИ включены
            </p>
          </li>
        ))}
      </ul>

      {/* Докупки: снимают возражение «а если объёма не хватит» */}
      <div className="mt-6 rounded-xl border border-stone-200 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
          {TARIFF_GRID.addonsTitle}
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {TARIFF_GRID.addons.map((addon) => (
            <li key={addon.term} className="flex items-baseline justify-between gap-4">
              <span className="text-sm text-stone-700">
                <span className="font-semibold text-stone-900">{addon.term}</span>
                {", "}
                {addon.desc}
              </span>
              <span className="shrink-0 text-sm font-semibold tabular-nums text-stone-900">
                {addon.price}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Условия, оплата, документы и переход в приложение */}
      <div className="mt-6 flex flex-col gap-6 rounded-xl border border-stone-200 bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2.5">
          <p className="text-sm leading-relaxed text-stone-700">
            <a
              href={APP_LINKS.pricing}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-stone-900 underline underline-offset-2 hover:text-primary"
            >
              {TARIFF_GRID.pricingLink}
            </a>
          </p>
          <p className="flex items-center gap-2 text-sm leading-relaxed text-stone-700">
            <CreditCard className="h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
            {TARIFF_GRID.payment}
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            {TARIFF_GRID.docsLabel}{" "}
            {TARIFF_GRID.docs.map((doc, i) => (
              <span key={doc.href}>
                {i > 0 ? ", " : ""}
                <a
                  href={APP_LINKS[doc.href]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-stone-900"
                >
                  {doc.label}
                </a>
              </span>
            ))}
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-2">
          <Button asChild size="lg" className="text-base font-semibold">
            <a href={APP_LINKS.signup} target="_blank" rel="noopener noreferrer">
              {TARIFF_GRID.cta}
            </a>
          </Button>
          <p className="max-w-64 text-xs leading-relaxed text-stone-500">
            {TARIFF_GRID.ctaNote}
          </p>
        </div>
      </div>
    </Section>
  );
}
