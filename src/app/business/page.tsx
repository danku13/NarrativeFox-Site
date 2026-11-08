import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { PageAnalytics } from "@/components/landing/page-analytics";
import { RoleProvider } from "@/components/landing/role-switcher";
import { ContourHero } from "@/components/landing/hero-contour";
import {
  SegmentCase,
  SegmentMirror,
  SegmentTrust,
  ChannelsLine,
} from "@/components/landing/segment-blocks";
import { SegmentFaq } from "@/components/landing/segment-faq";
import { FirstCycleSection } from "@/components/landing/first-cycle";
import { PilotConditionsSection } from "@/components/landing/pilot";
import {
  VerificationSection,
  BusinessExampleSection,
  BusinessEconomicsSection,
  BusinessPricingSection,
} from "@/components/landing/business-blocks";
import { SegmentedLeadForm } from "@/components/landing/lead-form";
import { Button } from "@/components/ui/button";
import { BUSINESS_HERO, BUSINESS_SEGMENTS } from "@/lib/content/business-content";
import { MECHANICS_BRIDGE } from "@/lib/content/shared";
import { ArrowRight } from "lucide-react";
import type { BusinessRole } from "@/lib/content/types";

/*
  Контур B2B (/business): B2B и консалтинг (дефолт), техно-продукты.
  Страница продаёт ценность: часы специалистов, смета против штата,
  верификация фактов и приватность. Экономика поднята выше кейса.
  Механика («как работает») живёт на /how-it-works, здесь мост.
*/

export const metadata: Metadata = {
  title: "NarrativeFox для консалтинга, B2B и техно-продуктов: экспертиза работает на видимость",
  description:
    "Часы партнёров остаются на клиентах: система собирает публикации из ваших материалов и держит расписание. Верификация фактов, приватность, участие 15-30 минут в неделю по оценке первых циклов.",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "NarrativeFox: контент-маркетинг вашей экспертизы под контролем",
    description:
      "Для практик, B2B-компаний и техно-продуктов. Верификация фактов, приватность, смета против штата с раскрытыми допущениями.",
    url: "/business",
  },
};

const VALID_ROLES: BusinessRole[] = ["b2b", "tech"];

/*
  Роль из рекламной ссылки (?role=) применяется на клиенте внутри
  RoleProvider, поэтому страница остаётся статической.
*/
export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <PageAnalytics page="/business" />
      <main className="flex-1">
        <RoleProvider
          initialRole={"b2b" as BusinessRole}
          urlRoles={VALID_ROLES}
          storageKey="nf-business-role"
          contour="business"
        >
          <ContourHero
            overline={BUSINESS_HERO.overline}
            h1Dark={BUSINESS_HERO.h1Dark}
            h1Muted={BUSINESS_HERO.h1Muted}
            chips={BUSINESS_HERO.chips}
            chipsCaption={BUSINESS_HERO.chipsCaption}
            micro={BUSINESS_HERO.micro}
            ctaPrimary={BUSINESS_HERO.ctaPrimary}
            ctaSecondary={BUSINESS_HERO.ctaSecondary}
            segments={BUSINESS_SEGMENTS}
          />
          <VerificationSection />
          <BusinessExampleSection />
          <BusinessEconomicsSection />
          <SegmentCase segments={BUSINESS_SEGMENTS} />
          <SegmentMirror segments={BUSINESS_SEGMENTS} />
          <SegmentTrust segments={BUSINESS_SEGMENTS} />

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

          <FirstCycleSection index="07" />
          <ChannelsLine segments={BUSINESS_SEGMENTS} />
          <PilotConditionsSection ctaLabel="Обсудить кейс" />
          <BusinessPricingSection />
          <SegmentFaq segments={BUSINESS_SEGMENTS} />
          <SegmentedLeadForm
            contour="business"
            segments={BUSINESS_SEGMENTS}
            fallbackLead="Опишите практику или продукт и текущие каналы. Разберём кейс и вернёмся с форматом первого цикла и сметой в течение рабочего дня."
          />
        </RoleProvider>
      </main>
      <SiteFooter />
    </div>
  );
}
