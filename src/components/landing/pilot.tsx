import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { ClipboardList, Scale, ArrowRight, Ban } from "lucide-react";
import { PILOT } from "@/lib/content/shared";

/*
  Состав и условия пилота [БАЗА]. Цены сервиса нет: стоимость по запросу,
  смета фиксируется до старта. Тарифы B2C и разбор экономики B2B
  живут в отдельных секциях контуров.
*/

export function PilotConditionsSection({
  ctaLabel = "Обсудить пилот",
  ctaHref = "#contact",
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <Section id="pilot">
      <SectionHeader
        eyebrow={PILOT.eyebrow}
        titleDark={PILOT.titleDark}
        titleMuted={PILOT.titleMuted}
        lead={PILOT.lead}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Состав пилота */}
        <div className="rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
            <ClipboardList className="h-5 w-5 text-stone-500" aria-hidden="true" />
            <h3 className="text-base font-semibold text-stone-900">Состав пилота</h3>
          </div>
          <dl className="px-6 py-2">
            {PILOT.composition.map((row) => (
              <div key={row.term} className="border-b border-stone-100 py-3.5 last:border-b-0">
                <dt className="text-sm font-semibold text-stone-900">{row.term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-stone-700">{row.desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Условия */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-stone-200 bg-white">
            <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
              <Scale className="h-5 w-5 text-stone-500" aria-hidden="true" />
              <h3 className="text-base font-semibold text-stone-900">Условия</h3>
            </div>
            <ul className="divide-y divide-stone-100 px-6 py-2">
              {PILOT.conditions.map((c) => (
                <li key={c.title} className="py-3.5">
                  <h4 className="text-sm font-semibold text-stone-900">{c.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-stone-700">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            size="lg"
            className="w-full text-base font-semibold sm:w-auto sm:self-start"
          >
            <a href={ctaHref}>
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* Честный фильтр «Кому не подойдёт» для страницы пилота. */
export function PilotNotFitSection() {
  return (
    <Section id="notfit" className="pb-0 md:pb-0">
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 sm:p-10">
        <h2 className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-stone-900">
          <Ban className="h-6 w-6 text-stone-500" aria-hidden="true" />
          Кому не подойдёт
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-700">
          Честные ограничения лучше узнать до пилота, а не после.
        </p>
        <ul className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {PILOT.notFit.map((n, i) => (
            <li key={n.title} className="border-t border-stone-300 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                Ограничение {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2.5 text-base font-semibold text-stone-900">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-700">{n.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
