import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { PageAnalytics } from "@/components/landing/page-analytics";
import { LeadForm } from "@/components/landing/lead-form";
import { LegacyForRedirect } from "@/components/landing/legacy-redirect";
import { Artifact, Section, SectionHeader } from "@/components/landing/bits";
import { BeforeAfterSection } from "@/components/landing/solo-blocks";
import { TariffsSection } from "@/components/landing/tariffs";
import { FaqSection } from "@/components/landing/faq";
import { Button } from "@/components/ui/button";
import {
  B2C_DEMO,
  B2C_FAQ,
  B2C_HERO,
  B2C_PILOT_CTA,
  B2C_SCENARIOS,
} from "@/lib/content/solo-content";
import { MECHANICS_BRIDGE } from "@/lib/content/shared";
import { ArrowRight, Check, CheckCircle2, FileText, Mic } from "lucide-react";

/*
  Главная B2C-посадочная NarrativeFox (компактная структура без дублей):
  Hero -> два B2C-сценария -> ритм до/после -> демонстрация продукта ->
  мост к механике -> пилот 990 ₽ и тарифная матрица -> 5 B2C FAQ -> форма.
*/

export const metadata: Metadata = {
  title: "NarrativeFox: публикуйтесь регулярно, сохраняя свой голос",
  description:
    "NarrativeFox помогает превращать ваши идеи и материалы в черновики для разных площадок. Ничего не выходит без вашего утверждения. Платный пилот за 990 ₽ на 2 недели, тарифы от 2 490 ₽/мес.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "NarrativeFox: публикуйтесь регулярно, сохраняя свой голос",
    description:
      "Превращаем голосовые и заметки в черновики для разных площадок. Ничего не выходит без вашего утверждения. Платный пилот 990 ₽ / 2 недели.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LegacyForRedirect />
      <SiteHeader />
      <PageAnalytics page="/" />
      <main className="flex-1">
        {/* Первый экран: B2C value proposition и CTA на пилот за 990 ₽ */}
        <section id="top" className="border-b border-stone-200/60 bg-background">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                {B2C_HERO.overline}
              </p>
              <h1 className="font-display mt-6 text-[2.2rem] font-semibold leading-[1.06] tracking-tight text-stone-900 sm:text-[3rem] lg:text-[3.6rem]">
                <span className="block">{B2C_HERO.h1Dark}</span>
                <span className="block text-stone-500">{B2C_HERO.h1Muted}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg">
                {B2C_HERO.lead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-auto whitespace-normal py-3 text-center text-base font-semibold"
                >
                  <a
                    href={B2C_PILOT_CTA.href}
                    target={B2C_PILOT_CTA.isExternal ? "_blank" : undefined}
                    rel={B2C_PILOT_CTA.isExternal ? "noreferrer" : undefined}
                  >
                    <span>{B2C_HERO.ctaPrimary}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-stone-300 text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                >
                  <a href="/how-it-works">{B2C_HERO.ctaSecondary}</a>
                </Button>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-stone-600">
                {B2C_HERO.micro}
              </p>
            </div>
          </div>
        </section>

        {/* Два B2C-сценария на одной странице без развилки на входе */}
        <Section id="scenarios" tone="muted">
          <SectionHeader
            eyebrow={B2C_SCENARIOS.eyebrow}
            titleDark={B2C_SCENARIOS.titleDark}
            titleMuted={B2C_SCENARIOS.titleMuted}
            lead={B2C_SCENARIOS.lead}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {B2C_SCENARIOS.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {item.badge}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  {item.summary}
                </p>
                <ul className="mt-6 space-y-3 border-t border-stone-100 pt-6">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Короткий контраст ритма: 3 строки */}
        <BeforeAfterSection />

        {/* Демонстрация продукта: 1 исходник -> 2 черновика -> утверждение */}
        <Section id="demo" tone="muted">
          <SectionHeader
            eyebrow={B2C_DEMO.eyebrow}
            titleDark={B2C_DEMO.titleDark}
            titleMuted={B2C_DEMO.titleMuted}
            lead={B2C_DEMO.lead}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col gap-6">
              <Artifact
                label={B2C_DEMO.sourceLabel}
                icon={<Mic className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
                meta={B2C_DEMO.sourceMeta}
              >
                <blockquote className="border-l-2 border-primary/60 pl-4">
                  <p className="text-sm leading-relaxed text-stone-800">
                    {B2C_DEMO.sourceText}
                  </p>
                </blockquote>
              </Artifact>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                  <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                  {B2C_DEMO.approvalTitle}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
                  {B2C_DEMO.approvalText}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {B2C_DEMO.drafts.map((draft) => (
                <Artifact
                  key={draft.channel}
                  label={draft.channel}
                  icon={<FileText className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
                  meta={draft.format}
                >
                  <p className="text-sm leading-relaxed text-stone-800">
                    {draft.text}
                  </p>
                </Artifact>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            {B2C_DEMO.disclaimer}
          </p>
        </Section>

        {/* Мост к подробной механике */}
        <section id="mechanics-bridge" className="border-b border-stone-200/60 bg-background py-12 md:py-14">
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

        {/* Единый блок пилота 990 ₽ и тарифной матрицы */}
        <TariffsSection />

        {/* 5 ключевых B2C-вопросов */}
        <FaqSection
          items={B2C_FAQ}
          eyebrow="Частые вопросы"
          titleDark="Голос, оплата"
          titleMuted="и доступы"
          lead="Коротко о главном перед стартом пилота."
        />

        {/* Регистрация на пилот за 990 ₽ */}
        <LeadForm
          contour="solo"
          entryPoint="pilot_cta"
          titleDark="Зарегистрироваться на пилот"
          titleMuted="за 990 ₽ на 2 недели"
          submitLabel={B2C_PILOT_CTA.label}
          lead="Оставьте контакты и укажите ваши каналы: пришлём ссылку на оплату Платного пилота 990 ₽ (2 недели) и запустим работу на ваших материалах. Ответим в течение рабочего дня."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
