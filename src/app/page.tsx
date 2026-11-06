import { SiteHeader } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { ExampleSection } from "@/components/landing/example";
import { FirstCycleSection } from "@/components/landing/first-cycle";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { FitSection } from "@/components/landing/fit";
import { PilotSection } from "@/components/landing/pilot";
import { FaqSection } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/footer";

/*
  NarrativeFox: посадочная страница.
  Порядок блоков по рекомендации 2.5:
  результат и сегмент, сквозной пример, первый цикл, механика,
  кому подходит, пилот и цена, вопросы, финальный призыв.
*/

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ExampleSection />
        <FirstCycleSection />
        <HowItWorksSection />
        <FitSection />
        <PilotSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
