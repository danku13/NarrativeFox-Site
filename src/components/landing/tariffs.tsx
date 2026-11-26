"use client";

import { useState } from "react";
import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { B2C_PILOT_CTA, TARIFFS, type BillingPeriodKey } from "@/lib/content/solo-content";
import { ArrowRight, Check } from "lucide-react";

/*
  Актуальная тарифная матрица B2C (danku13/NarrativeFox):
  адаптивная вёрстка для 320px+ и десктопа (1024px+).
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
      <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
        {TARIFFS.entryTiers.map((tier) => {
          const isPilot = tier.key === "pilot";
          return (
            <div
              key={tier.key}
              className={
                isPilot
                  ? "flex min-w-0 flex-col justify-between rounded-xl border-2 border-stone-900 bg-white p-5 shadow-sm sm:p-6"
                  : "flex min-w-0 flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 sm:p-6"
              }
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                    {tier.badge}
                  </span>
                  <span className="shrink-0 whitespace-nowrap rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-700">
                    {tier.period}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-semibold text-stone-900">
                    {tier.name}
                  </h3>
                  <p className="font-display whitespace-nowrap text-2xl font-semibold tabular-nums text-stone-900">
                    {tier.price}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{tier.desc}</p>
              </div>
              {isPilot ? (
                <div className="mt-5 border-t border-stone-100 pt-5">
                  <Button
                    asChild
                    size="default"
                    className="h-auto w-full whitespace-normal py-2.5 text-center font-semibold leading-snug"
                  >
                    <a
                      href={B2C_PILOT_CTA.href}
                      target={B2C_PILOT_CTA.isExternal ? "_blank" : undefined}
                      rel={B2C_PILOT_CTA.isExternal ? "noreferrer" : undefined}
                    >
                      <span>{B2C_PILOT_CTA.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Переключатель длительности для регулярных тарифов */}
      <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
          Регулярные тарифы после пилота
        </p>
        <div
          role="tablist"
          aria-label="Период оплаты тарифа"
          className="grid w-full grid-cols-3 rounded-lg border border-stone-200 bg-white p-1 sm:inline-flex sm:w-auto"
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
                    ? "flex items-center justify-center gap-1 whitespace-nowrap rounded-md bg-stone-900 px-2 py-2 text-xs font-semibold text-white transition-colors sm:gap-1.5 sm:px-3.5 sm:text-sm"
                    : "flex items-center justify-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-stone-600 transition-colors hover:text-stone-900 sm:gap-1.5 sm:px-3.5 sm:text-sm"
                }
              >
                <span>{p.label}</span>
                {p.badge ? (
                  <span
                    className={
                      active
                        ? "rounded-full bg-white/15 px-1.5 py-0.5 text-[10px] font-medium text-white sm:text-[11px]"
                        : "rounded-full bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium text-stone-600 sm:text-[11px]"
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
                  ? "relative flex min-w-0 flex-col rounded-xl border-2 border-stone-900 bg-white p-5 shadow-sm sm:p-7"
                  : "relative flex min-w-0 flex-col rounded-xl border border-stone-200 bg-white p-5 sm:p-7"
              }
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-5 rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-white sm:left-6">
                  Частый выбор
                </span>
              ) : null}
              <h3 className="font-display text-xl font-semibold text-stone-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 lg:min-h-[3rem]">
                {plan.for}
              </p>

              <div className="mt-5 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                  <p className="font-display whitespace-nowrap text-2xl font-semibold tabular-nums text-stone-900">
                    {priceInfo.amount}
                    <span className="ml-1 text-sm font-normal text-stone-500">
                      {priceInfo.suffix}
                    </span>
                  </p>
                  {priceInfo.discount ? (
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                      {priceInfo.discount}
                    </span>
                  ) : null}
                </div>
              </div>

              <dl className="mt-5 divide-y divide-stone-100 border-t border-stone-100">
                <div className="flex items-center justify-between gap-3 py-3">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.platforms}</dt>
                  <dd className="shrink-0 whitespace-nowrap text-sm font-semibold tabular-nums text-stone-900">
                    {plan.platforms}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3 py-3">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.postsPerWeek}</dt>
                  <dd className="shrink-0 whitespace-nowrap text-sm font-semibold tabular-nums text-stone-900">
                    {plan.postsPerWeek}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-3 pt-3">
                  <dt className="text-sm text-stone-600">{TARIFFS.featureLabels.cycles}</dt>
                  <dd className="shrink-0 text-right">
                    <span className="block whitespace-nowrap text-sm font-semibold tabular-nums text-stone-900">
                      {plan.cyclesMain}
                    </span>
                    <span className="block whitespace-nowrap text-xs text-stone-500">
                      {plan.cyclesSub}
                    </span>
                  </dd>
                </div>
              </dl>
            </li>
          );
        })}
      </ul>

      {/* Общее для всех тарифов и докупки */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="min-w-0 rounded-xl border border-stone-200 bg-white p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            Включено во все платные тарифы
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {TARIFFS.includedInAll.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 rounded-xl border border-stone-200 bg-white p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            Докупки при росте
          </p>
          <dl className="mt-4 divide-y divide-stone-100">
            {TARIFFS.addons.map((addon) => (
              <div
                key={addon.title}
                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-3 first:pt-0 last:pb-0"
              >
                <dt className="text-sm text-stone-700">{addon.title}</dt>
                <dd className="shrink-0 whitespace-nowrap text-sm font-semibold tabular-nums text-stone-900">
                  {addon.price}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Повтор CTA под матрицей */}
      <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-stone-200 bg-white p-5 sm:p-6 lg:flex-row lg:items-center">
        <p className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
          <span>{TARIFFS.note}</span>
        </p>
        <Button
          asChild
          size="lg"
          className="h-auto w-full shrink-0 whitespace-normal py-3 text-center text-base font-semibold leading-snug lg:w-auto"
        >
          <a
            href={B2C_PILOT_CTA.href}
            target={B2C_PILOT_CTA.isExternal ? "_blank" : undefined}
            rel={B2C_PILOT_CTA.isExternal ? "noreferrer" : undefined}
          >
            <span>{TARIFFS.cta}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Section>
  );
}
