"use client";

import { Section, SectionHeader } from "./bits";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRole } from "./role-switcher";
import { BASE_FAQ } from "@/lib/content/shared";
import type { SegmentContent } from "@/lib/content/types";

/*
  FAQ контурной страницы: базовые вопросы плюс два вопроса активной роли.
*/

export function SegmentFaq({
  segments,
}: {
  segments: Record<string, SegmentContent>;
}) {
  const { role } = useRole();
  const segment = segments[role] ?? Object.values(segments)[0];
  const items = [...BASE_FAQ, ...segment.faq];

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="Вопросы и ответы"
        titleDark="Данные, доступы, утверждение"
        titleMuted="и аналитика"
        lead="Ответы на вопросы, которые чаще всего возникают до пилота. Если вашего вопроса нет, задайте его в форме ниже."
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
