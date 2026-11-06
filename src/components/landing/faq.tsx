import { Section, SectionHeader } from "./bits";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BASE_FAQ, PILOT_FAQ } from "@/lib/content/shared";

/*
  FAQ с фиксированным набором вопросов: базовый набор или набор
  страницы пилота. Сегментные вопросы добавляет SegmentFaq.
*/

export function FaqSection({
  items = BASE_FAQ,
  eyebrow = "Вопросы и ответы",
  titleDark = "Данные, доступы, утверждение",
  titleMuted = "и аналитика",
  lead = "Ответы на вопросы, которые чаще всего возникают до пилота. Если вашего вопроса нет, задайте его в форме ниже.",
  id = "faq",
}: {
  items?: { q: string; a: string }[];
  eyebrow?: string;
  titleDark?: string;
  titleMuted?: string;
  lead?: string;
  id?: string;
}) {
  return (
    <Section id={id}>
      <SectionHeader
        eyebrow={eyebrow}
        titleDark={titleDark}
        titleMuted={titleMuted}
        lead={lead}
      />
      <Accordion type="single" collapsible className="mt-12">
        {items.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-stone-200">
            <AccordionTrigger className="py-5 text-left text-base font-semibold text-stone-900 hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

/* FAQ страницы пилота: вопросы про результаты и атрибуцию. */
export function PilotFaqSection() {
  return (
    <FaqSection
      items={[...PILOT_FAQ, ...BASE_FAQ.slice(0, 6)]}
      eyebrow="Вопросы о пилоте"
      titleDark="Результаты, атрибуция"
      titleMuted="и данные"
      lead="Что спрашивают перед стартом пилота: как измеряем отклик, когда ждать эффекта и что происходит с данными."
    />
  );
}
