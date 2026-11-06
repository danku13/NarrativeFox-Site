import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { ClipboardList, Scale, ArrowRight } from "lucide-react";

/*
  Пилот и цена (рекомендация 2.4): конкретный состав, критерии продолжения,
  условия прекращения. Сравнение со штатом подано постатейной сметой
  (приём из metaflow.life): строки с ролями и ориентировочными ценами,
  допущения раскрыты рядом.
*/

const COMPOSITION = [
  { term: "Длительность", desc: "4 недели, один полный цикл" },
  { term: "Каналы", desc: "От 2 до 3 на выбор, например Telegram, Хабр, VC.ru" },
  { term: "Публикации", desc: "От 6 до 9 материалов за цикл" },
  { term: "Исследование", desc: "Разбор рынка, конкурентов и текущих каналов" },
  { term: "Ваше участие", desc: "2 интервью по 30 минут и утверждение текстов" },
  { term: "Доступы", desc: "Каналы остаются вашими, доступы можно отозвать" },
  { term: "Кто публикует", desc: "Система, после вашего утверждения каждого текста" },
  {
    term: "Стоимость запуска",
    desc: "От 15 до 30 тысяч ₽ в зависимости от числа каналов. Точную смету фиксируем до старта, после короткого разбора",
  },
];

const CONDITIONS = [
  {
    title: "Критерий продолжения",
    text: "Решение о продолжении по итогам отчёта принимаете вы. До старта фиксируем ориентир, при котором продолжать работу имеет смысл: например, число целевых действий или качество материалов.",
  },
  {
    title: "Прекращение работы",
    text: "В любой момент, без минимального срока. База фактов, тексты и стратегия в полном объёме остаются у вас.",
  },
  {
    title: "После пилота",
    text: "Если продолжаете, система работает ежемесячными циклами. Смета зависит от числа каналов и объёма публикаций и известна заранее.",
  },
];

/* Постатейная смета альтернативного штата: ориентиры, не гарантия */
const STAFF_ITEMS = [
  { role: "Контент-маркетолог, полная занятость", price: "125 тыс ₽" },
  { role: "Редактор, полная занятость", price: "75 тыс ₽" },
  { role: "Аналитик, четверть ставки", price: "30 тыс ₽" },
];

const ASSUMPTIONS = [
  "Сравниваем объём работ: число публикаций и исследований в месяц, а не должности",
  "В штате: контент-маркетолог, редактор и аналитика на четверть ставки",
  "Штатная команда при этом решает более широкий круг задач, чем система",
];

export function PilotSection() {
  return (
    <Section id="pilot" tone="muted">
      <SectionHeader
        eyebrow="Пилот и цена"
        index="05"
        titleDark="Один полный цикл"
        titleMuted="за четыре недели"
        lead="На пилоте система работает с вашим бизнесом, вашими материалами и каналами. Состав фиксирован, смета известна до старта."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Состав пилота */}
        <div className="rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
            <ClipboardList className="h-5 w-5 text-stone-500" aria-hidden="true" />
            <h3 className="text-base font-semibold text-stone-900">
              Состав пилота
            </h3>
          </div>
          <dl className="px-6 py-2">
            {COMPOSITION.map((row) => (
              <div
                key={row.term}
                className="border-b border-stone-100 py-3.5 last:border-b-0"
              >
                <dt className="text-sm font-semibold text-stone-900">
                  {row.term}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-stone-700">
                  {row.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Условия */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-stone-200 bg-white">
            <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
              <Scale className="h-5 w-5 text-stone-500" aria-hidden="true" />
              <h3 className="text-base font-semibold text-stone-900">
                Условия
              </h3>
            </div>
            <ul className="divide-y divide-stone-100 px-6 py-2">
              {CONDITIONS.map((c) => (
                <li key={c.title} className="py-3.5">
                  <h4 className="text-sm font-semibold text-stone-900">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-stone-700">
                    {c.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <Button asChild size="lg" className="w-full text-base font-semibold sm:w-auto sm:self-start">
            <a href="#contact">
              Обсудить пилот
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>

      {/* Сравнение со штатом: постатейная смета с раскрытыми допущениями */}
      <div className="mt-10 rounded-xl border border-stone-200 bg-white p-6 sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-base font-semibold text-stone-900">
              Для сравнения: штат с тем же объёмом работ
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
              При сопоставимом объёме работ выходит около 230 тысяч ₽ в
              месяц. Это оценка для сравнения, а не гарантия экономии.
            </p>
            <dl className="mt-6 divide-y divide-stone-100 border-t border-stone-200">
              {STAFF_ITEMS.map((item) => (
                <div
                  key={item.role}
                  className="flex items-baseline justify-between gap-6 py-3"
                >
                  <dt className="text-sm text-stone-700">{item.role}</dt>
                  <dd className="shrink-0 text-sm font-semibold tabular-nums text-stone-900">
                    {item.price}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-6 py-3.5">
                <dt className="text-sm font-semibold text-stone-900">
                  Итого, в месяц
                </dt>
                <dd className="font-display shrink-0 text-2xl font-semibold tabular-nums text-stone-900">
                  230 тыс ₽
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:border-l lg:border-stone-100 lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
              Допущения сравнения
            </p>
            <ul className="mt-4 space-y-3">
              {ASSUMPTIONS.map((a) => (
                <li key={a} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-stone-600">{a}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-stone-500">
              Цены по строкам: ориентиры рынка РФ для найма в 2026 году.
              Точная смета пилота фиксируется до старта.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
