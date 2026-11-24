import type { Metadata } from "next";
import { SiteHeader } from "@/components/landing/header";
import { SiteFooter } from "@/components/landing/footer";
import { PageAnalytics } from "@/components/landing/page-analytics";
import { Section, SectionHeader } from "@/components/landing/bits";
import { PilotConditionsSection, PilotNotFitSection } from "@/components/landing/pilot";
import { TariffsSection } from "@/components/landing/tariffs";
import { PilotContourView } from "@/components/landing/pilot-contour";
import {
  BusinessEconomicsSection,
  BusinessPricingSection,
} from "@/components/landing/business-blocks";
import { PilotFaqSection } from "@/components/landing/faq";
import { LeadForm } from "@/components/landing/lead-form";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/*
  /pilot: условия пилота и тарификация по контуру.
  ?contour=solo показывает тарифы B2C, ?contour=business показывает
  разбор экономики и стоимость по кейсу. Без параметра показана
  развилка с подписями: страница самодостаточна для прямого входа.
  Выбор контура читается на клиенте (PilotContourView), поэтому
  страница остаётся статической.

  Цены B2C показаны открыто: сетка тарифов одна для /solo, /business
  и /pilot, цифры приходят из src/lib/content/tariffs.ts. Для B2B
  цена по-прежнему собирается под кейс, потому что зависит от объёма
  исследования и приватности.
*/

export const metadata: Metadata = {
  title: "Пилот NarrativeFox: один цикл за четыре недели и тарифы",
  description:
    "Состав пилота: 4 недели, 2-3 ваших канала, 6-9 публикаций, около часа на старте и 15-30 минут в неделю. Тарифы от 2 490 ₽ в месяц, оплата картой или через СБП. Для компаний смета собирается по кейсу.",
  alternates: { canonical: "/pilot" },
  openGraph: {
    title: "NarrativeFox: условия пилота и тарифы",
    description:
      "Один полный цикл за четыре недели. Тарифы от 2 490 ₽ в месяц, оплата картой или через СБП.",
    url: "/pilot",
  },
};

export default function PilotPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <PageAnalytics page="/pilot" />
      <main className="flex-1">
        {/* Заголовок страницы */}
        <Section id="pilot-top" tone="muted" className="pb-0 md:pb-0">
          <SectionHeader
            eyebrow="Пилот и стоимость"
            titleDark="Проверка подхода"
            titleMuted="на вашем материале"
            lead="В пилоте решение о продолжении вы принимаете по фактам: состав фиксирован, отклик измеряется, смета известна до старта. Ничего не выходит без вашего утверждения: каждый текст вы видите до публикации."
          />
        </Section>

        {/* Состав и условия: одинаковы для всех */}
        <PilotConditionsSection />

        {/* Тарификация и форма по контуру: развилка на клиенте */}
        <PilotContourView
          solo={<TariffsSection />}
          business={
            <>
              <BusinessEconomicsSection />
              <BusinessPricingSection />
            </>
          }
          all={
            <>
              {/* Сетка тарифов видна сразу: посетитель не гадает о цене */}
              <TariffsSection />
              <Section id="pricing-fork">
                <SectionHeader
                  eyebrow="Стоимость"
                  titleDark="Тариф или смета:"
                  titleMuted="зависит от контура"
                  lead="Сетка выше действует для экспертов, авторов и небольших практик. Для компаний и техно-продуктов смета собирается под кейс: рядом ориентир штатной альтернативы с допущениями."
                />
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                      Контур 1 · B2C
                    </p>
                    <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-stone-900">
                      Сетка тарифов
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-700">
                      Эксперты, мастера, консультанты, авторы каналов и подкастов.
                      Оси тарифа: площадки, частота публикаций и число циклов.
                      Цены и лимиты в сетке выше, оплата картой или через СБП.
                    </p>
                    <div className="mt-6 flex flex-col gap-2 border-t border-stone-100 pt-6">
                      <Button asChild className="font-semibold sm:self-start">
                        <a href="/pilot?contour=solo">
                          Посмотреть тарифы
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                      Контур 2 · B2B
                    </p>
                    <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-stone-900">
                      Смета по кейсу
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-700">
                      Консалтинговые и юридические практики, B2B-сервисы, SaaS
                      и devtools. На смету влияют объём исследования, число
                      каналов, приватность и глубина экспертизы. Рядом: ориентир
                      штатной альтернативы, около 230 тысяч ₽ в месяц, с допущениями.
                    </p>
                    <div className="mt-6 flex flex-col gap-2 border-t border-stone-100 pt-6">
                      <Button asChild className="font-semibold sm:self-start">
                        <a href="/pilot?contour=business">
                          Разобрать экономику кейса
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Section>
            </>
          }
          soloForm={
            <LeadForm
              contour="solo"
              entryPoint="tariff_cta"
              titleDark="Заявка на пилот"
              titleMuted="для экспертов и авторов"
              lead="Коротко опишите дело и текущие каналы. Разберём их, подберём тариф и предложим формат первого цикла. Ответим в течение рабочего дня."
            />
          }
          businessForm={
            <LeadForm
              contour="business"
              entryPoint="case_discuss_cta"
              titleDark="Заявка на разбор кейса"
              titleMuted="для компаний и техно-продуктов"
              submitLabel="Обсудить кейс"
              lead="Опишите практику или продукт и текущие каналы. Вернёмся с форматом первого цикла и сметой в течение рабочего дня."
            />
          }
          allForm={
            <LeadForm
              contour="gateway"
              entryPoint="final_form"
              lead="Не уверены, какой контур ваш? Коротко опишите, чем занимаетесь и где публикуетесь: подберём формат первого цикла и назовём смету. Ответим в течение рабочего дня."
            />
          }
        >
          <PilotNotFitSection />
          <PilotFaqSection />
        </PilotContourView>
      </main>
      <SiteFooter />
    </div>
  );
}
