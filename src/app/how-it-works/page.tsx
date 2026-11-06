import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { ExampleSection } from "@/components/landing/example";
import { LeadForm } from "@/components/landing/lead-form";

/*
  /how-it-works: полный разбор конвейера на сквозном примере
  из шести шагов с наполненными мокапами артефактов.
*/

export const metadata: Metadata = {
  title: "Как устроена система NarrativeFox: сквозной пример от материалов до отклика",
  description:
    "Шесть шагов работы системы на материале самого NarrativeFox: приём материалов, база фактов с источниками и статусами, карта цикла, проверка на ИИ-штампы, утверждение с памятью решений, вывод цикла.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "NarrativeFox: один цикл целиком, от материалов до отклика",
    description:
      "Сквозной пример с артефактами: что присылаете, какие факты извлекаются, что перехватывает проверка и что утверждает человек.",
    url: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
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
