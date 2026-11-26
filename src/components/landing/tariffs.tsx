"use client";

import { useState } from "react";
import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { B2C_PILOT_CTA, TARIFFS, type BillingPeriodKey } from "@/lib/content/solo-content";
import { ArrowRight, Check, Sparkles } from "lucide-react";

/*
  Актуальная тарифная матрица B2C (danku13/NarrativeFox):
  входной ряд (Демо 0 ₽ / 3 дня и Платный пилот 990 ₽ / 2 недели),
  переключатель длительности (1 / 3 / 6 месяцев),
  три платных тарифа (Старт 2 490 ₽, Профессионал 5 990 ₽, Эксперт 14 990 ₽),
  включённые возможности, докупки и блок про платформенные ключи vs BYOK.
*/

export function TariffsSection() {
  const [period, setPeriod] = useState<BillingPeriodKey>("month");

  return (
    <Section id="tariffs" tone="muted">
      <SectionHeader
        eyebrow={TARIFFS.eyebrow}
        titleDark={TARIFFS.titleDark}
        titleMuted={TARIFFS.titleMuted}
        lead={TARIFFS.lead}
      />

      {/* Входной ряд: Демо и Платный пилот */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {TARIFFS.entryTiers.map((tier) => {
          const isPilot = tier.key === "pilot";
          return (
            <div
              key={tier.key}
              className={
                isPilot
                  ? "flex flex-col justify-between rounded-xl border-2 border-stone-900 bg-white p-6 shadow-sm"
                  : "flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6"
              }
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                    {tier.badge}
                  </span>
                  <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700">
                    {tier.period}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-stone-900">
                    {tier.name}
                  </h3>
                  <p className="font-display text-2xl font-semibold tabular-nums text-stone-900">
                    {tier.price}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{tier.desc}</p>
              </div>
              {isPilot ? (
                <div className="mt-5 border-t border-stone-100 pt-5">
                  <Button asChild size="default" className="w-full font-semibold sm:w-auto">
                    <a
                      href={B2C_PILOT_CTA.href}
                      target={B2C_PILOT_CTA.isExternal ? "_blank" : undefined}
                      rel={B2C_PILOT_CTA.isExternal ? "noreferrer" : undefined}
                    >
                      {B2C_PILOT_CTA.label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Переключатель длительности для регулярных тарифов */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
          Регулярные тарифы после пилота
        </p>
        <div
          role="tablist"
          aria-label="Период оплаты тарифа"
          className="inline-flex rounded-lg border border-stone-200 bg-white p-1"
        >
          {TARIFFS.periods.map((p) => {
            const active = period === p.key;
            return (
              <button
                key={p.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setPeriod(p.key)}
                className={
                  active
                    ? "flex items-center gap-1.5 rounded-md bg-stone-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors sm:text-sm"
                    : "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-xs font-medium text-stone-600 transition-colors hover:text-stone-900 sm:text-sm"
                }
              >
                <span>{p.label}</span>
                {p.badge ? (
                  <span
                    className={
                      active
                        ? "rounded-full bg-white/15 px-1.5 py-0.5 text-[11px] font-medium text-white"
                        : "rounded-full bg-stone-100 px-1.5 py-0.5 text-[11px] font-medium text-stone-600"
                    }
                  >
                    {p.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* Сетка трёх регулярных тарифов: Старт / Профессионал / Эксперт */}
      <ul className="mt-6 grid gap-6 lg:grid-cols-3">
        {TARIFFS.plans.map((plan) => {
          const priceInfo = plan.prices[period];
          return (
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

              <div className="mt-5 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3.5">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-2xl font-semibold tabular-nums text-stone-900">
                    {priceInfo.amount}
                    <span className="ml-1 text-sm font-normal text-stone-500">
                      {priceInfo.suffix}
                    </span>
                  </p>
                  {priceInfo.discount ? (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                      {priceInfo.discount}
                    </span>
                  ) : null}
                </div>
              </div>

              <dl className="mt-5 space-y-3 border-t border-stone-100 pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.platforms}</dt>
                  <dd className="text-sm font-semibold tabular-nums text-stone-900">
                    {plan.platforms}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.postsPerWeek}</dt>
                  <dd className="text-sm font-semibold tabular-nums text-stone-900">
                    {plan.postsPerWeek}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.cycles}</dt>
                  <dd className="text-right text-sm font-semibold tabular-nums text-stone-900">
                    {plan.cycles}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.knowledge}</dt>
                  <dd className="text-sm font-semibold text-stone-900">{plan.knowledge}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.archive}</dt>
                  <dd className="text-sm font-semibold text-stone-900">{plan.archive}</dd>
                </div>
              </dl>
            </li>
          );
        })}
      </ul>

      {/* Что включено во все тарифы + Докупки */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            Включено во все платные тарифы
          </p>
          <ul className="mt-4 space-y-2.5">
            {TARIFFS.includedInAll.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-5 rounded-xl border border-stone-200 bg-white p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              Докупки (Add-ons)
            </p>
            <dl className="mt-4 space-y-3">
              {TARIFFS.addons.map((addon) => (
                <div
                  key={addon.title}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-stone-100 pb-3 last:border-b-0 last:pb-0"
                >
                  <dt className="text-sm font-medium text-stone-800">{addon.title}</dt>
                  <dd className="text-sm font-semibold tabular-nums text-stone-900">
                    {addon.price}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-stone-900">
              <Sparkles className="h-3.5 w-3.5 text-stone-600" aria-hidden="true" />
              {TARIFFS.byokTitle}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-600">{TARIFFS.byokText}</p>
          </div>
        </div>
      </div>

      {/* Повтор CTA под матрицей */}
      <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-stone-200 bg-white p-6 lg:flex-row lg:items-center">
        <p className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
          {TARIFFS.note}
        </p>
        <Button asChild size="lg" className="shrink-0 text-base font-semibold">
          <a
            href={B2C_PILOT_CTA.href}
            target={B2C_PILOT_CTA.isExternal ? "_blank" : undefined}
            rel={B2C_PILOT_CTA.isExternal ? "noreferrer" : undefined}
          >
            {TARIFFS.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Section>
  );
}
