import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { PageAnalytics } from "@/components/landing/page-analytics";
import { RoleProvider } from "@/components/landing/role-switcher";
import { ContourHero } from "@/components/landing/hero-contour";
import {
  SegmentCase,
  SegmentTrust,
  ChannelsLine,
} from "@/components/landing/segment-blocks";
import { SegmentFaq } from "@/components/landing/segment-faq";
import { FirstCycleSection } from "@/components/landing/first-cycle";
import { PilotConditionsSection } from "@/components/landing/pilot";
import {
  BeforeAfterSection,
  VisibilityChainSection,
  VoiceExampleSection,
} from "@/components/landing/solo-blocks";
import { TariffsSection } from "@/components/landing/tariffs";
import { SegmentedLeadForm } from "@/components/landing/lead-form";
import { Button } from "@/components/ui/button";
import { SOLO_HERO, SOLO_SEGMENTS } from "@/lib/content/solo-content";
import { MECHANICS_BRIDGE } from "@/lib/content/shared";
import { ArrowRight } from "lucide-react";
import type { SoloRole } from "@/lib/content/types";

/*
  Контур B2C (/solo): эксперты и мастера (дефолт), блогеры и авторы.
  Страница продаёт ценность: время, регулярность, видимость.
  Механика («как работает») живёт на /how-it-works, здесь мост.
  Порядок: hero, неделя до и после, цепочка видимости, живой пример,
  кейс, ситуации и возражения, мост к механике, первый цикл,
  пилот и тарифы, вопросы, форма.
*/

export const metadata: Metadata = {
  title: "NarrativeFox для экспертов, мастеров и авторов: регулярный контент без вечеров",
  description:
    "Голосовые и заметки становятся публикациями по расписанию в вашем тоне. Канал живёт ровно, видимость растёт за пределы сарафанного радио, утверждение каждого текста за вами.",
  alternates: { canonical: "/solo" },
  openGraph: {
    title: "NarrativeFox: контент выходит регулярно, ваше время остаётся вашим",
    description:
      "Для сольных практик, мастеров и авторов. Живой тон, регулярность без выгорания, участие от 15-30 минут в неделю по оценке первых циклов.",
    url: "/solo",
  },
};

const VALID_ROLES: SoloRole[] = ["expert", "blogger"];

/*
  Роль из рекламной ссылки (?role=) применяется на клиенте внутри
  RoleProvider, поэтому страница остаётся статической.
*/
export default function SoloPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <PageAnalytics page="/solo" />
      <main className="flex-1">
        <RoleProvider
          initialRole={"expert" as SoloRole}
          urlRoles={VALID_ROLES}
          storageKey="nf-solo-role"
          contour="solo"
        >
          <ContourHero
            overline={SOLO_HERO.overline}
            h1Dark={SOLO_HERO.h1Dark}
            h1Muted={SOLO_HERO.h1Muted}
            chips={SOLO_HERO.chips}
            chipsCaption={SOLO_HERO.chipsCaption}
            micro={SOLO_HERO.micro}
            ctaPrimary={SOLO_HERO.ctaPrimary}
            ctaSecondary={SOLO_HERO.ctaSecondary}
            segments={SOLO_SEGMENTS}
          />
          <BeforeAfterSection />
          <VisibilityChainSection />
          <VoiceExampleSection />
          <SegmentCase segments={SOLO_SEGMENTS} />
          <SegmentTrust segments={SOLO_SEGMENTS} />

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
          <ChannelsLine segments={SOLO_SEGMENTS} />
          <PilotConditionsSection ctaLabel="Обсудить пилот" />
          <TariffsSection />
          <SegmentFaq segments={SOLO_SEGMENTS} />
          <SegmentedLeadForm
            contour="solo"
            segments={SOLO_SEGMENTS}
            fallbackLead="Коротко опишите дело и текущие каналы. Мы разберём их и предложим формат первого цикла. Ответим в течение рабочего дня."
          />
        </RoleProvider>
      </main>
      <SiteFooter />
    </div>
  );
}
