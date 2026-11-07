import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { PageAnalytics } from "@/components/landing/page-analytics";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { LeadForm } from "@/components/landing/lead-form";
import { LegacyForRedirect } from "@/components/landing/legacy-redirect";
import { Section, SectionHeader } from "@/components/landing/bits";
import { Button } from "@/components/ui/button";
import { GATEWAY_HERO, EXAMPLE_STEPS } from "@/lib/content/shared";
import {
  GATEWAY_FORK,
  GATEWAY_PILOT_FRAME,
  GATEWAY_EXAMPLE,
} from "@/lib/content/gateway";
import { ArrowRight } from "lucide-react";

/*
  Гейтвей-главная: рамка продукта, развилка контуров B2C и B2B,
  ядро механики, превью сквозного примера, рамка пилота и форма.
  Старые рекламные ссылки вида /?for=expert бесшовно ведут
  в свой контур с предвыбранной ролью (развитка на клиенте,
  чтобы страница оставалась статической).
*/

export const metadata: Metadata = {
  title: "NarrativeFox: контент-маркетинг ведёт система, вы направляете",
  description:
    "Присылаете голосовые, заметки и документы. NarrativeFox сам собирает стратегию и цепочки публикаций, готовит тексты для площадок, разбирает отклик и учится на ваших решениях. Ваша задача: направлять.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NarrativeFox: маркетинг ведёт система",
    description:
      "Голосовые и заметки на входе. Стратегия, тексты и расписание на выходе. Ничего не выходит без вашего утверждения.",
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
        {/* Hero: над-аудиторная рамка */}
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

        {/* Ядро механики: конвейер, списки, принципы, сравнение, цифры */}
        <HowItWorksSection />

        {/* Превью сквозного примера */}
        <Section id="example-preview">
          <SectionHeader
            eyebrow={GATEWAY_EXAMPLE.eyebrow}
            titleDark={GATEWAY_EXAMPLE.titleDark}
            titleMuted={GATEWAY_EXAMPLE.titleMuted}
            lead={GATEWAY_EXAMPLE.lead}
          />
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_STEPS.map((step) => (
              <li key={step.n} className="rounded-xl border border-stone-200 bg-white p-5">
                <p className="font-display text-2xl font-semibold leading-none text-stone-300">
                  {step.n}
                </p>
                <h3 className="mt-3 text-sm font-semibold text-stone-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-stone-200 bg-white p-6 sm:flex-row sm:items-center">
            <p className="text-xs leading-relaxed text-stone-500">{GATEWAY_EXAMPLE.note}</p>
            <Button
              asChild
              variant="outline"
              className="shrink-0 border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
            >
              <a href="/how-it-works">
                {GATEWAY_EXAMPLE.link}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Section>

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
