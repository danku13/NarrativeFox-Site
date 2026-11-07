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
import { BeforeAfterSection, VoiceExampleSection } from "@/components/landing/solo-blocks";
import { TariffsSection } from "@/components/landing/tariffs";
import { SegmentedLeadForm } from "@/components/landing/lead-form";
import { SOLO_HERO, SOLO_SEGMENTS } from "@/lib/content/solo-content";
import type { SoloRole } from "@/lib/content/types";

/*
  Контур B2C (/solo): эксперты и мастера (дефолт), блогеры и авторы.
  Порядок: hero с чипами, до и после, живой пример речи, кейс,
  узнавание, что меняется, механика, доверие, первый цикл,
  пилот и тарифы, вопросы, форма.
*/

export const metadata: Metadata = {
  title: "NarrativeFox для экспертов, мастеров и авторов: публикации без вечеров над текстом",
  description:
    "Наговаривайте голосовые и скидывайте заметки: система сама достаёт темы, держит расписание и пишет черновики в вашей манере речи. Ничего не выходит без вашего утверждения.",
  alternates: { canonical: "/solo" },
  openGraph: {
    title: "NarrativeFox: займитесь делом, рутину публикаций ведёт система",
    description:
      "Для сольных практик, мастеров и авторов. Живой тон, регулярность без выгорания, 15-30 минут в неделю.",
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
          <VoiceExampleSection />
          <SegmentCase segments={SOLO_SEGMENTS} />
          <SegmentMirror segments={SOLO_SEGMENTS} />
          <HowItWorksSection index="05" />
          <SegmentTrust segments={SOLO_SEGMENTS} />
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
