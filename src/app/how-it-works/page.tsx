import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { PageAnalytics } from "@/components/landing/page-analytics";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { ExampleSection } from "@/components/landing/example";
import { LeadForm } from "@/components/landing/lead-form";

/*
  /how-it-works: вся механика системы в одном месте.
  Сначала конвейер и разделение ролей (что делает система,
  что решает человек, принципы, сравнение с чат-ботом, цифры),
  затем сквозной пример из шести шагов с мокапами артефактов
  на материале самого NarrativeFox. Со страниц офферов сюда
  ведёт однострочный мост.
*/

export const metadata: Metadata = {
  title: "Как устроена система NarrativeFox: конвейер, роли и сквозной пример",
  description:
    "Механика целиком: конвейер этапов, база фактов с источниками, что делает система и что решает человек, сравнение с разовыми запросами в чат и сквозной пример цикла из шести шагов.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "NarrativeFox: как система ведёт цикл, от материалов до отклика",
    description:
      "Конвейер, роли человека и системы, принципы, проверка формулировок и сквозной пример с артефактами на собственном материале.",
    url: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <PageAnalytics page="/how-it-works" />
      <main className="flex-1">
        <HowItWorksSection />
        <ExampleSection />
        <LeadForm
          contour="gateway"
          entryPoint="final_form"
          lead="Хотите так же на своём материале? Коротко опишите, чем занимаетесь и где публикуетесь: разберём каналы и предложим формат первого цикла."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
