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
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { FirstCycleSection } from "@/components/landing/first-cycle";
import { PilotConditionsSection } from "@/components/landing/pilot";
import {
  VerificationSection,
  BusinessExampleSection,
  BusinessEconomicsSection,
  BusinessPricingSection,
} from "@/components/landing/business-blocks";
import { SegmentedLeadForm } from "@/components/landing/lead-form";
import { BUSINESS_HERO, BUSINESS_SEGMENTS } from "@/lib/content/business-content";
import type { BusinessRole } from "@/lib/content/types";

/*
  Контур B2B (/business): B2B и консалтинг (дефолт), техно-продукты.
  Порядок: hero с чипами, три уровня верификации, микро-пример,
  кейс, узнавание, что меняется, механика, доверие, первый цикл,
  экономика, пилот, стоимость по кейсу, вопросы, форма.
*/

export const metadata: Metadata = {
  title: "NarrativeFox для консалтинга, B2B и техно-продуктов: экспертиза превращается в публикации",
  description:
    "Присылаете голосовые после встреч, документы и changelog: система ведёт базу подтверждённых фактов, собирает цепочки публикаций и держит расписание. Гипотеза не станет текстом, чувствительные данные не покинут контур.",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "NarrativeFox: контент-маркетинг вашей экспертизы под контролем",
    description:
      "Для практик, B2B-компаний и техно-продуктов. Верификация фактов, приватность, 15-30 минут в неделю основателя.",
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
          <SegmentCase segments={BUSINESS_SEGMENTS} />
          <SegmentMirror segments={BUSINESS_SEGMENTS} />
          <HowItWorksSection index="05" />
          <SegmentTrust segments={BUSINESS_SEGMENTS} />
          <FirstCycleSection index="07" />
          <ChannelsLine segments={BUSINESS_SEGMENTS} />
          <BusinessEconomicsSection />
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
