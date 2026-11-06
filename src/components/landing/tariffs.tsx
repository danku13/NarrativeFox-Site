import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { TARIFFS } from "@/lib/content/solo-content";
import { Check } from "lucide-react";

/*
  Тарифы контура B2C. Оси объёма: активные проекты, площадки,
  частота публикаций. Цена: по запросу, ценовая политика в проработке.
*/

export function TariffsSection() {
  return (
    <Section id="tariffs" tone="muted">
      <SectionHeader
        eyebrow={TARIFFS.eyebrow}
        titleDark={TARIFFS.titleDark}
        titleMuted={TARIFFS.titleMuted}
        lead={TARIFFS.lead}
      />

      <ul className="mt-14 grid gap-6 lg:grid-cols-3">
        {TARIFFS.plans.map((plan) => (
          <li
            key={plan.name}
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
            <dl className="mt-5 space-y-3 border-t border-stone-100 pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.projects}</dt>
                <dd className="text-sm font-semibold tabular-nums text-stone-900">
                  {plan.projects}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.platforms}</dt>
                <dd className="text-sm font-semibold tabular-nums text-stone-900">
                  {plan.platforms}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.posts}</dt>
                <dd className="text-sm font-semibold tabular-nums text-stone-900">
                  {plan.posts}
                </dd>
              </div>
            </dl>
            <div className="mt-6 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                {TARIFFS.priceCaption}
              </p>
              <p className="font-display mt-1 text-lg font-semibold text-stone-900">
                {plan.price}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-stone-200 bg-white p-6 sm:flex-row sm:items-center">
        <p className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
          {TARIFFS.note}
        </p>
        <Button asChild size="lg" className="shrink-0 text-base font-semibold">
          <a href="#contact">{TARIFFS.cta}</a>
        </Button>
      </div>
    </Section>
  );
}
