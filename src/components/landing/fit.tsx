import { Section, SectionHeader } from "./bits";

/*
  Кому подходит (рекомендации 2.2 и 2.5): один основной сегмент,
  «знакомые ситуации» сжаты до трёх, честный список «кому не подойдёт».
  Editorial: caps-мета вместо иконок.
*/

const SITUATIONS = [
  {
    meta: "Ситуация 01",
    title: "Публикации выходят нерегулярно",
    text: "Посты появляются, когда находится время. Без системы ритм держится несколько недель, потом сходит на нет, и канал приходится оживлять заново.",
  },
  {
    meta: "Ситуация 02",
    title: "Подрядчик не понимает продукт и рынок",
    text: "Каждый новый подрядчик начинает с нуля и просит материалы, которые у вас уже есть. Тексты получаются общими, а правки съедают время, которое вы хотели сэкономить.",
  },
  {
    meta: "Ситуация 03",
    title: "Статьи не связаны с заявками",
    text: "Непонятно, что дала та или иная публикация. Отклик не измеряется, и решение, продолжать или менять подход, приходится принимать вслепую.",
  },
];

const NOT_FIT = [
  {
    meta: "Ограничение 01",
    title: "Задачи шире контента",
    text: "Реклама, брендинг, мероприятия и PR это задачи штатной команды или агентства. Мы отвечаем только за контент.",
  },
  {
    meta: "Ограничение 02",
    title: "Аудитория не читает контент",
    text: "В некоторых нишах решения принимают и без публичного контента. На разборе каналов скажем об этом прямо и не станем продавать пилот.",
  },
  {
    meta: "Ограничение 03",
    title: "Нужен только текст на заказ",
    text: "Для одиночных текстов дешевле копирайтер. Система окупается в цикле: исследование, план, адаптация и анализ отклика.",
  },
];

export function FitSection() {
  return (
    <Section id="fit">
      <SectionHeader
        eyebrow="Кому подходит"
        index="04"
        titleDark="Для основателей B2B"
        titleMuted="без выделенного маркетолога"
        lead="NarrativeFox рассчитан на B2B-компании, где контентом занимается сам основатель или команда в свободное от основных задач время."
      />

      <ul className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
        {SITUATIONS.map((s) => (
          <li key={s.title} className="border-t border-stone-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              {s.meta}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-stone-900">
              {s.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
              {s.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-stone-900">
            Кому не подойдёт
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-700">
            Честные ограничения лучше узнать до пилота, а не после.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {NOT_FIT.map((n) => (
              <li key={n.title} className="border-t border-stone-300 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {n.meta}
                </p>
                <h4 className="mt-2.5 text-base font-semibold text-stone-900">
                  {n.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  {n.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
