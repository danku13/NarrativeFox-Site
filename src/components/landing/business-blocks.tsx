import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Database, Filter, Mic, FileCode2, ArrowRight } from "lucide-react";
import {
  VERIFICATION,
  BUSINESS_EXAMPLE,
  BUSINESS_ECONOMICS,
  BUSINESS_PRICING,
} from "@/lib/content/business-content";

/*
  Контурные блоки B2B (/business): три уровня верификации,
  микро-пример «от фактуры к цепочке касаний», экономика
  и блок «стоимость по кейсу» вместо прайса.
*/

const LEVEL_ICONS = [Database, ShieldCheck, Filter];

export function VerificationSection() {
  return (
    <Section id="verification">
      <SectionHeader
        eyebrow={VERIFICATION.eyebrow}
        titleDark={VERIFICATION.titleDark}
        titleMuted={VERIFICATION.titleMuted}
        lead={VERIFICATION.lead}
      />
      <ol className="mt-12 grid gap-6 lg:grid-cols-3">
        {VERIFICATION.levels.map((level, i) => {
          const Icon = LEVEL_ICONS[i] ?? ShieldCheck;
          return (
            <li key={level.title} className="flex flex-col rounded-xl border border-stone-200 bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100">
                  <Icon className="h-5 w-5 text-stone-600" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-stone-500">
                  {level.tag}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-stone-900">{level.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">{level.text}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

export function BusinessExampleSection() {
  return (
    <Section id="micro-example" tone="muted">
      <SectionHeader
        eyebrow={BUSINESS_EXAMPLE.eyebrow}
        titleDark={BUSINESS_EXAMPLE.titleDark}
        titleMuted={BUSINESS_EXAMPLE.titleMuted}
        lead={BUSINESS_EXAMPLE.lead}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
        <div className="space-y-4">
          {BUSINESS_EXAMPLE.input.map((item) => (
            <div key={item.label} className="rounded-xl border border-stone-200 bg-white p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                {item.label.includes("Голосовое") ? (
                  <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <FileCode2 className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {item.label}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-700">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
            Работа системы
          </p>
          <ul className="mt-3 space-y-3">
            {BUSINESS_EXAMPLE.work.map((w) => (
              <li key={w} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-stone-700">{w}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          {BUSINESS_EXAMPLE.chain.map((m, i) => (
            <div key={m.title} className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-semibold text-stone-900">{m.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">{m.text}</p>
            </div>
          ))}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-stone-900">
              <ArrowRight className="h-4 w-4 text-stone-500" aria-hidden="true" />
              {BUSINESS_EXAMPLE.outputLabel}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-700">
              {BUSINESS_EXAMPLE.outputText}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function BusinessEconomicsSection() {
  return (
    <Section id="economics">
      <SectionHeader
        eyebrow={BUSINESS_ECONOMICS.eyebrow}
        titleDark={BUSINESS_ECONOMICS.titleDark}
        titleMuted={BUSINESS_ECONOMICS.titleMuted}
        lead="Цикл системы не имеет фиксированного прайса: смета собирается под кейс. Ориентиры ниже помогают понять, с чем её сравнивать."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
          <h3 className="text-base font-semibold text-stone-900">
            {BUSINESS_ECONOMICS.staffTitle}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
            {BUSINESS_ECONOMICS.staffLead}
          </p>
          <dl className="mt-6 divide-y divide-stone-100 border-t border-stone-200">
            {BUSINESS_ECONOMICS.staffItems.map((item) => (
              <div key={item.role} className="flex items-baseline justify-between gap-6 py-3">
                <dt className="text-sm text-stone-700">{item.role}</dt>
                <dd className="shrink-0 text-sm font-semibold tabular-nums text-stone-900">
                  {item.price}
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-6 py-3.5">
              <dt className="text-sm font-semibold text-stone-900">
                {BUSINESS_ECONOMICS.staffTotalLabel}
              </dt>
              <dd className="font-display shrink-0 text-2xl font-semibold tabular-nums text-stone-900">
                {BUSINESS_ECONOMICS.staffTotal}
              </dd>
            </div>
          </dl>
          <div className="mt-6 border-t border-stone-100 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
              {BUSINESS_ECONOMICS.assumptionsTitle}
            </p>
            <ul className="mt-3 space-y-2.5">
              {BUSINESS_ECONOMICS.assumptions.map((a) => (
                <li key={a} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-stone-600">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
          <div>
            <h3 className="text-base font-semibold text-stone-900">
              {BUSINESS_ECONOMICS.hoursTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">
              {BUSINESS_ECONOMICS.hoursText}
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
            <p className="text-sm leading-relaxed text-stone-700">
              Стоимость цикла системы уточняем по кейсу: смета фиксируется до старта
              и не меняется посреди работы.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Вместо прайса: заявка на разбор кейса. */
export function BusinessPricingSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="rounded-xl border-2 border-stone-900 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          {BUSINESS_PRICING.eyebrow}
        </p>
        <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-stone-900">
          {BUSINESS_PRICING.titleDark}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-700">
          {BUSINESS_PRICING.lead}
        </p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
          {BUSINESS_PRICING.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-stone-700">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <Button asChild size="lg" className="mt-7 text-base font-semibold">
          <a href="#contact">{BUSINESS_PRICING.cta}</a>
        </Button>
      </div>
    );
  }
  return (
    <Section id="pricing" tone="muted">
      <SectionHeader
        eyebrow={BUSINESS_PRICING.eyebrow}
        titleDark={BUSINESS_PRICING.titleDark}
        titleMuted={BUSINESS_PRICING.titleMuted}
        lead={BUSINESS_PRICING.lead}
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {BUSINESS_PRICING.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-stone-500" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-stone-700">{b}</p>
          </li>
        ))}
      </ul>
      <Button asChild size="lg" className="mt-8 text-base font-semibold">
        <a href="#contact">{BUSINESS_PRICING.cta}</a>
      </Button>
    </Section>
  );
}
