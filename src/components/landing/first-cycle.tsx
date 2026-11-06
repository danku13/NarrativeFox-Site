import { Section, SectionHeader } from "./bits";
import { FIRST_CYCLE } from "@/lib/content/shared";

/*
  Что вы получаете за первый цикл [БАЗА]: чек-лист по неделям.
  Строка типичных каналов идёт следом (сегментный слой).
*/

export function FirstCycleSection({ index }: { index?: string }) {
  return (
    <Section id="cycle">
      <SectionHeader
        eyebrow={FIRST_CYCLE.eyebrow}
        index={index}
        titleDark={FIRST_CYCLE.titleDark}
        titleMuted={FIRST_CYCLE.titleMuted}
        lead={FIRST_CYCLE.lead}
      />
      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {FIRST_CYCLE.items.map((item) => (
          <li key={item.title} className="border-t border-stone-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              {item.meta}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-stone-900">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-700">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
