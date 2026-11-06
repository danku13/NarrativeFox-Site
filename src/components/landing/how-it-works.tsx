import { Section, SectionHeader } from "./bits";
import {
  Search,
  Database,
  PenLine,
  ShieldCheck,
  CalendarClock,
  ArrowRight,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

/*
  Механика работы системы (порядок блока 4 из рекомендации 2.5).
  Добавлено (по мотивам metaflow.life): честная таблица сравнения
  с альтернативой «разовый запрос в чат» и editorial-подача цифр
  на линейках, без цветных карточек.
*/

const PIPELINE = [
  {
    icon: Search,
    title: "Исследователи",
    text: "Собирают данные о рынке, конкурентах и площадках",
  },
  {
    icon: Database,
    title: "База фактов",
    text: "Хранит каждый факт с источником и статусом",
  },
  {
    icon: PenLine,
    title: "Редакторы",
    text: "Пишут и адаптируют тексты под каналы",
  },
  {
    icon: ShieldCheck,
    title: "Проверка",
    text: "Не пропускает ИИ-штампы в финальный текст",
  },
  {
    icon: CalendarClock,
    title: "Расписание",
    text: "Следит, чтобы публикации выходили по плану",
  },
];

const SYSTEM_DOES = [
  "Исследование рынка, конкурентов и площадок",
  "Ведение базы фактов с источниками и статусами",
  "Подготовка текстов и адаптация под каналы",
  "Проверка каждого текста на ИИ-штампы",
  "Расписание публикаций и напоминания об утверждении",
  "Сбор и анализ отклика по циклу",
];

const YOU_DECIDE = [
  "Приоритеты и обещания бренда",
  "Какие каналы и площадки использовать",
  "Утверждение каждого текста до публикации",
  "Правки и изменения, которые возвращаются в базу",
  "Какие факты не должны покидать компанию",
  "Продолжать ли работу после пилота",
];

const PRINCIPLES = [
  {
    title: "Факты отдельно, предположения отдельно",
    text: "У каждого утверждения в базе есть источник и статус. Предположение не станет текстом, пока вы его не подтвердите.",
  },
  {
    title: "Три рубежа вместо одного запроса",
    text: "База фактов, редактура под площадку и отдельная проверка на штампы. Штампы появляются там, где нет фактов.",
  },
  {
    title: "Ничего без утверждения",
    text: "Без вашего подтверждения ничего не публикуется. Система не пишет от вашего имени по собственной инициативе.",
  },
];

/* Честное сравнение системы с разовым запросом в чат.
   Без сфабрикованных рейтингов: сравниваем подход к работе, а не конкурентов. */
const COMPARE = [
  {
    capability: "Контекст",
    chat: "Приходится вставлять в каждый запрос заново",
    system: "База фактов хранит всё, что накоплено за цикл",
  },
  {
    capability: "Процесс",
    chat: "Пропадает вместе с чатом",
    system: "План цикла и расписание сохраняются",
  },
  {
    capability: "Качество",
    chat: "Проверяете на глаз",
    system: "Отдельная проверка на ИИ-штампы",
  },
  {
    capability: "Прежние правки",
    chat: "Только у вас в голове",
    system: "Накапливаются в базе фактов",
  },
  {
    capability: "Утверждение",
    chat: "Нет",
    system: "Каждый текст перед публикацией",
  },
];

const STATS = [
  {
    label: "Площадки",
    value: "13+",
    desc: "под которые система адаптирует тексты",
  },
  {
    label: "Ваше участие",
    value: "15-30 мин",
    desc: "в неделю на голосовые и утверждение текстов",
  },
  {
    label: "Публикации",
    value: "100%",
    desc: "выходят только после вашего утверждения",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how" tone="muted">
      <SectionHeader
        eyebrow="Как работает система"
        index="03"
        titleDark="Агенты ведут производство,"
        titleMuted="вы принимаете решения"
        lead="NarrativeFox устроен как конвейер из агентов: они ведут исследование, хранят факты, готовят и проверяют тексты, следят за расписанием и собирают отклик. Человек в этом конвейере делает одно: принимает решения."
      />

      {/* Конвейер: цепочка с иконками-стрелками вместо текстовых стрелок */}
      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {PIPELINE.map((step, i) => (
          <li key={step.title} className="relative flex items-start gap-3 lg:block">
            <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4 lg:h-full lg:w-full">
              <step.icon
                className="h-5 w-5 shrink-0 text-stone-400"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-stone-900">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            </div>
            {i < PIPELINE.length - 1 ? (
              <ArrowRight
                className="hidden h-4 w-4 shrink-0 self-center text-stone-300 lg:absolute lg:-right-2 lg:top-1/2 lg:z-10 lg:-translate-y-1/2 lg:block bg-white"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>

      {/* Переработанный блок «Система делает эту работу целиком» */}
      <div className="mt-20">
        <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
          Всю эту работу делает система
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-700">
          Исследование, подготовка материалов, адаптация
          под каналы, расписание и анализ отклика. Решения
          и утверждение остаются за вами.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-white">
            <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
              <CheckCircle2 className="h-5 w-5 text-stone-500" aria-hidden="true" />
              <h4 className="text-base font-semibold text-stone-900">
                Система выполняет
              </h4>
            </div>
            <ul className="px-6 py-2">
              {SYSTEM_DOES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-stone-100 py-3.5 last:border-b-0"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-stone-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white">
            <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
              <UserCheck className="h-5 w-5 text-stone-500" aria-hidden="true" />
              <h4 className="text-base font-semibold text-stone-900">
                Вы решаете
              </h4>
            </div>
            <ul className="px-6 py-2">
              {YOU_DECIDE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-stone-100 py-3.5 last:border-b-0"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-stone-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Принципы, включая сохранённый «Факты отдельно, предположения отдельно» */}
      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.title}
            className="border-t-2 border-stone-900 pt-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              Принцип {i + 1}
            </p>
            <h4 className="mt-3 text-lg font-semibold text-stone-900">
              {p.title}
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
              {p.text}
            </p>
          </div>
        ))}
      </div>

      {/* Честное сравнение с разовым запросом в чат */}
      <div className="mt-20">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
            Не ещё одна обёртка над чат-ботом
          </h3>
          <p className="mt-4 text-base leading-relaxed text-stone-700">
            Разовый запрос в чат и система с базой фактов, планом и
            проверкой работают по-разному. Вот основные отличия.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left">
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Что сравниваем
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Запрос в чат
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-stone-500">
                  NarrativeFox
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr key={row.capability} className="border-b border-stone-100 last:border-b-0">
                  <td className="px-5 py-3.5 font-semibold text-stone-900">
                    {row.capability}
                  </td>
                  <td className="px-5 py-3.5 text-stone-600">
                    {row.chat}
                  </td>
                  <td className="px-5 py-3.5 font-medium text-stone-900">
                    {row.system}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Процессные цифры: editorial-подача на линейках, без цветных карточек */}
      <dl className="mt-20 grid gap-10 border-y border-stone-300 py-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-stone-200">
        {STATS.map((s) => (
          <div key={s.label} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              {s.label}
            </dt>
            <dd className="font-display mt-3 text-4xl font-semibold tabular-nums tracking-tight text-stone-900 md:text-5xl">
              {s.value}
            </dd>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">
              {s.desc}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
