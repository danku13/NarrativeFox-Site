import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { PageAnalytics } from "@/components/landing/page-analytics";
import { LeadForm } from "@/components/landing/lead-form";
import { LegacyForRedirect } from "@/components/landing/legacy-redirect";
import { Section, SectionHeader } from "@/components/landing/bits";
import { Button } from "@/components/ui/button";
import { GATEWAY_HERO, VALUE_STRIP, MECHANICS_BRIDGE } from "@/lib/content/shared";
import { GATEWAY_FORK, GATEWAY_PILOT_FRAME } from "@/lib/content/gateway";
import { ArrowRight } from "lucide-react";

/*
  Гейтвей-главная: оффер в единицах посетителя, развилка контуров,
  полоса доказательств ценности, рамка пилота и форма.
  Механика («как работает») живёт отдельно на /how-it-works,
  здесь только однострочный мост. Старые рекламные ссылки вида
  /?for=expert ведут в свой контур с предвыбранной ролью.
*/

export const metadata: Metadata = {
  title: "NarrativeFox: регулярные публикации в вашем тоне, без вечеров над текстами",
  description:
    "Голосовые и заметки на входе. План, черновики и расписание на ваших каналах на выходе, отклик разбирается по итогам цикла. Решения и утверждение каждого текста за вами.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NarrativeFox: публикации идут, вечера остаются вашими",
    description:
      "Система ведёт контент-маркетинг из ваших материалов: план, тексты в вашем тоне, расписание, разбор отклика. Утверждение каждого текста за вами.",
    url: "/",
  },
};

export default function GatewayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LegacyForRedirect />
      <SiteHeader />
      <PageAnalytics page="/" />
      <main className="flex-1">
        {/* Hero: оффер в единицах посетителя */}
        <section id="top" className="border-b border-stone-200/60 bg-background">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                NarrativeFox · система контент-маркетинга
              </p>
              <h1 className="font-display mt-6 text-[2.2rem] font-semibold leading-[1.06] tracking-tight text-stone-900 sm:text-[3rem] lg:text-[3.6rem]">
                <span className="block">{GATEWAY_HERO.h1Dark}</span>
                <span className="block text-stone-500">{GATEWAY_HERO.h1Muted}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
                {GATEWAY_HERO.lead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="text-base font-semibold">
                  <a href="#contact">{GATEWAY_HERO.ctaPrimary}</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-stone-300 text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                >
                  <a href="/how-it-works">{GATEWAY_HERO.ctaSecondary}</a>
                </Button>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                {GATEWAY_HERO.micro}
              </p>
            </div>
          </div>
        </section>

        {/* Развилка контуров */}
        <Section id="fork" tone="muted">
          <SectionHeader
            eyebrow={GATEWAY_FORK.eyebrow}
            titleDark={GATEWAY_FORK.titleDark}
            titleMuted={GATEWAY_FORK.titleMuted}
            lead={GATEWAY_FORK.lead}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {GATEWAY_FORK.cards.map((card) => (
              <div
                key={card.href}
                className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                  {card.meta}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-stone-700">{card.roles}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{card.task}</p>
                <div className="mt-6 flex flex-col gap-2.5 border-t border-stone-100 pt-6 sm:flex-row">
                  {card.buttons.map((btn, i) => (
                    <Button
                      key={btn.href}
                      asChild
                      variant={i === 0 ? "default" : "outline"}
                      className={
                        i === 0
                          ? "font-semibold"
                          : "border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                      }
                    >
                      <a href={btn.href}>
                        {btn.label}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Полоса доказательств ценности */}
        <Section id="value">
          <SectionHeader
            eyebrow={VALUE_STRIP.eyebrow}
            titleDark={VALUE_STRIP.titleDark}
            titleMuted={VALUE_STRIP.titleMuted}
          />
          <dl className="mt-12 grid gap-6 lg:grid-cols-3">
            {VALUE_STRIP.items.map((v) => (
              <div key={v.label} className="rounded-xl border border-stone-200 bg-white p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {v.label}
                </dt>
                <dd className="font-display mt-3 text-2xl font-semibold tracking-tight text-stone-900">
                  {v.value}
                </dd>
                <dd className="mt-3 text-sm leading-relaxed text-stone-600">{v.desc}</dd>
                {v.href ? (
                  <dd className="mt-4">
                    <a
                      href={v.href}
                      target={v.href.startsWith("http") ? "_blank" : undefined}
                      rel={v.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      {v.linkLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </dd>
                ) : null}
              </div>
            ))}
          </dl>
        </Section>

        {/* Мост к механике: весь «как работает» на отдельной странице */}
        <section id="mechanics-bridge" className="border-b border-stone-200/60 bg-stone-50 py-12 md:py-14">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 px-4 sm:flex-row sm:items-center sm:px-6">
            <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
              {MECHANICS_BRIDGE.text}
            </p>
            <Button
              asChild
              variant="outline"
              className="shrink-0 border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
            >
              <a href={MECHANICS_BRIDGE.href}>
                {MECHANICS_BRIDGE.link}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        {/* Рамка пилота */}
        <Section id="pilot-frame" tone="muted">
          <SectionHeader
            eyebrow={GATEWAY_PILOT_FRAME.eyebrow}
            titleDark={GATEWAY_PILOT_FRAME.titleDark}
            titleMuted={GATEWAY_PILOT_FRAME.titleMuted}
          />
          <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {GATEWAY_PILOT_FRAME.points.map((p) => (
              <div key={p.term} className="border-t border-stone-200 pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {p.term}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-stone-700">{p.desc}</dd>
              </div>
            ))}
          </dl>
          <Button
            asChild
            variant="outline"
            className="mt-10 border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
          >
            <a href="/pilot">
              {GATEWAY_PILOT_FRAME.link}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </Section>

        {/* Форма заявки */}
        <LeadForm
          contour="gateway"
          entryPoint="final_form"
          lead="Коротко опишите, чем вы занимаетесь и где публикуетесь. Мы разберём каналы и предложим формат первого цикла. Ответим в течение рабочего дня."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
