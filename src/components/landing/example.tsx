import { Section, SectionHeader, Artifact, FactBadge } from "./bits";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AudioLines,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  FileText,
  Mic,
  Newspaper,
  PencilLine,
  BarChart3,
  ShieldCheck,
  Table2,
  XCircle,
} from "lucide-react";

/*
  Сквозной пример (/how-it-works): шесть шагов на материале самого
  NarrativeFox. Мокапы наполнены реальным содержимым: голосовое,
  карточки фактов с номерами, карта цикла, перехват штампов,
  экран утверждения с памятью решений, вывод цикла.
  Честность: пример собран системой на собственном материале.
*/

const STEP_TITLE = "text-lg font-semibold text-stone-900";
const STEP_TEXT = "mt-3 text-sm leading-relaxed text-stone-700 sm:text-base";

/* Шаг 1: что присылают на вход */
const INPUT_ITEMS = [
  {
    icon: Mic,
    label: "Голосовое, 1:48",
    text: "«Нам нужно чётко объяснить на сайте, почему пилот ограничен 2-3 каналами, хотя внутри системы заложены адаптеры под 13+ площадок. Когда человек пытается запустить сразу 8 каналов в первый месяц, он тонет в согласованиях».",
    footer: "Основатель, после разбора первых пилотов",
  },
  {
    icon: FileText,
    label: "Текстовая заметка",
    text: "«Обязательно зафиксировать правило: ни один факт о клиенте не попадает в черновик, если у него стоит статус Внутренний».",
    footer: "Заметка из рабочего чата команды",
  },
  {
    icon: Table2,
    label: "Таблица",
    text: "Сравнение_сметы_пилота_и_редакции.xlsx",
    footer: "Файл без подготовки, как есть",
  },
];

/* Шаг 2: карточки базы фактов */
const FACTS = [
  {
    id: "Факт #104",
    text: "Лимит пилота: 2-3 канала и 6-9 публикаций за 4 недели",
    source: "Смета пилота, строка 4",
    status: "confirmed" as const,
    statusLabel: "Подтверждён · можно в паблик",
  },
  {
    id: "Факт #109",
    text: "Участие пользователя после первой недели: 15-30 минут в неделю",
    source: "Замеры первых циклов",
    status: "confirmed" as const,
    statusLabel: "Подтверждён · можно в паблик",
  },
  {
    id: "Предположение #112",
    text: "Пользователи хотят полную автопубликацию без премодерации",
    source: "Гипотеза из разбора рынка",
    status: "assumed" as const,
    statusLabel: "Отклонено основателем · правило: 100% публикаций только после утверждения",
  },
];

/* Шаг 3: карта цикла */
const CYCLE_NODES = [
  {
    week: "Неделя 2",
    title: "Почему разовые промпты в чат-бот не складываются в маркетинг",
    note: "Разбор потери контекста",
  },
  {
    week: "Неделя 3",
    title: "Как устроена база фактов и почему система не путает гипотезы с твёрдыми данными",
    note: "Разбор механики",
  },
  {
    week: "Неделя 4",
    title: "Экономика четырёхнедельного цикла: что происходит после выхода первых 6-9 публикаций",
    note: "Разбор с цифрами",
  },
];

/* Шаг 4: конвейер проверки на штампы */
const STAMPS = [
  {
    bad: "«В современном мире контент-маркетинга компании сталкиваются с вызовом»",
    verdict: "Удалено: пустая водная конструкция",
  },
  {
    bad: "«Система возьмёт маркетинг целиком, ваше участие не понадобится»",
    verdict: "Заблокировано стоп-листом: запрещено обещать результат без участия человека",
  },
];

const CLEAN_TEXT =
  "«На стартовой неделе вы тратите около часа на калибровку направления, дальше уходит 15-30 минут в неделю на проверку и утверждение готовых текстов»";

export function ExampleSection() {
  return (
    <Section id="example" tone="muted">
      <SectionHeader
        eyebrow="Пример работы системы"
        titleDark="Сквозной пример:"
        titleMuted="от материалов до отклика"
        lead="Один цикл целиком на материале самого NarrativeFox: что присылается на вход, какие факты извлекает система, как выглядит карта цикла, что перехватывает проверка на штампы и что именно утверждает человек. Мы сами ведём каналы NarrativeFox этой системой."
      />

      <ol className="mt-14 space-y-16 md:space-y-20">
        {/* Шаг 1: вход */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                01
              </span>
              <h3 className={STEP_TITLE}>Вход: вы присылаете материал</h3>
            </div>
            <p className={STEP_TEXT}>
              Готовить ничего не нужно. Голосовые на бегу, заметки из рабочего
              чата, документы и таблицы без вычитки. Система расшифровывает
              звук и разбирает файлы: в дело идут факты, а не общие фразы.
            </p>
          </div>
          <Artifact
            label="Приём материалов"
            meta="3 материала за день"
            icon={<ClipboardList className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <ul className="space-y-3">
              {INPUT_ITEMS.map((item) => (
                <li key={item.label} className="rounded-lg border border-stone-200 p-3.5">
                  <p className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                    <item.icon className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-800">{item.text}</p>
                  <p className="mt-2 text-xs text-stone-500">{item.footer}</p>
                </li>
              ))}
            </ul>
          </Artifact>
        </li>

        {/* Шаг 2: база фактов */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                02
              </span>
              <h3 className={STEP_TITLE}>Система собирает базу фактов</h3>
            </div>
            <p className={STEP_TEXT}>
              Из материалов появляются карточки утверждений. У каждой номер,
              источник и статус: подтверждён или предположение. Гипотеза не
              станет текстом, пока её не подтвердит человек. Отклонённые
              предположения тоже хранятся: чтобы не возвращаться к ним заново.
            </p>
          </div>
          <Artifact
            label="Реестр фактов"
            meta="3 карточки из базы"
            icon={<ClipboardList className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <ul className="space-y-3">
              {FACTS.map((f) => (
                <li key={f.id} className="rounded-lg border border-stone-200 p-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                      {f.id}
                    </p>
                    <FactBadge kind={f.status} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-stone-900">{f.text}</p>
                  <p className="mt-2 text-xs text-stone-500">Источник: {f.source}</p>
                  <p className="mt-1 text-xs text-stone-500">{f.statusLabel}</p>
                </li>
              ))}
            </ul>
          </Artifact>
        </li>

        {/* Шаг 3: карта цикла */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                03
              </span>
              <h3 className={STEP_TITLE}>Система предлагает карту цикла</h3>
            </div>
            <p className={STEP_TEXT}>
              Цепочка связанных тем на четыре недели: от простого к сложному,
              каждое следующее материал опирается на предыдущее. План можно
              поменять до старта, карта пересоберётся за несколько минут.
            </p>
          </div>
          <Artifact
            label="Карта цикла"
            meta="Цикл 1 · цепочка из 3 тем"
            icon={<CalendarRange className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <ol className="space-y-3">
              {CYCLE_NODES.map((node, i) => (
                <li key={node.title} className="flex gap-3.5 rounded-lg border border-stone-200 p-3.5">
                  <span
                    className="font-display text-2xl font-semibold leading-none text-stone-300"
                    aria-hidden="true"
                  >
                    {String(i + 1)}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                      {node.week}
                    </p>
                    <p className="mt-1 text-sm font-medium text-stone-900">{node.title}</p>
                    <p className="mt-1 text-xs text-stone-500">{node.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Artifact>
        </li>

        {/* Шаг 4: тексты и проверка на штампы */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                04
              </span>
              <h3 className={STEP_TITLE}>Тексты под площадки и проверка</h3>
            </div>
            <p className={STEP_TEXT}>
              Черновик собирается из фактов и адаптируется под формат площадки.
              Перед показом вам он проходит конвейер проверки: водные конструкции
              и запрещённые обещания перехватываются до публикации.
            </p>
          </div>
          <div className="space-y-4">
            <Artifact
              label="Конвейер проверки"
              meta="2 перехвата"
              icon={<ShieldCheck className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
            >
              <ul className="space-y-3">
                {STAMPS.map((s) => (
                  <li key={s.bad} className="rounded-lg border border-stone-200 p-3.5">
                    <p className="rounded bg-red-50 px-2 py-1 text-sm text-stone-400 line-through">
                      {s.bad}
                    </p>
                    <p className="mt-2 flex items-start gap-2 text-xs font-medium text-stone-700">
                      <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
                      {s.verdict}
                    </p>
                  </li>
                ))}
                <li className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                    Чистый вариант в черновике
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-800">{CLEAN_TEXT}</p>
                </li>
              </ul>
            </Artifact>
            <Tabs defaultValue="tg">
              <TabsList className="grid w-full grid-cols-3 bg-stone-100">
                <TabsTrigger value="tg" className="text-xs sm:text-sm">
                  Telegram
                </TabsTrigger>
                <TabsTrigger value="habr" className="text-xs sm:text-sm">
                  Хабр
                </TabsTrigger>
                <TabsTrigger value="vc" className="text-xs sm:text-sm">
                  VC.ru
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="tg"
                className="mt-4 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    NF
                  </span>
                  <p className="text-sm font-semibold text-stone-900">NarrativeFox</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  Пилот сознательно узкий: 2-3 канала и 6-9 публикаций за 4
                  недели. Адаптеры под 13+ площадок остаются про запас: сначала
                  проверяем подход на ваших каналах, масштаб приходит потом.
                </p>
                <p className="mt-3 text-xs font-medium text-stone-500">3 абзаца · 620 знаков</p>
              </TabsContent>
              <TabsContent
                value="habr"
                className="mt-4 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"
              >
                <h4 className="text-sm font-semibold text-stone-900">
                  Почему разовые промпты не складываются в маркетинг
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
                  Разбираем потерю контекста: каждый новый запрос в чат начинает
                  с нуля, а система хранит базу фактов, план цикла и историю
                  правок. В статье: схема конвейера, примеры перехваченных
                  штампов и метрики первого цикла.
                </p>
                <p className="mt-3 text-xs font-medium text-stone-500">Статья · 7 800 знаков · 3 раздела</p>
              </TabsContent>
              <TabsContent
                value="vc"
                className="mt-4 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"
              >
                <h4 className="text-sm font-semibold text-stone-900">
                  Экономика четырёхнедельного цикла
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
                  Управленческая история: что происходит после выхода первых
                  6-9 публикаций, какие метрики фиксируем до старта и по каким
                  критериям решаем, продолжать ли цикл. С таблицей сравнения
                  со штатной альтернативой и раскрытыми допущениями.
                </p>
                <p className="mt-3 text-xs font-medium text-stone-500">Колонка · 4 200 знаков</p>
              </TabsContent>
            </Tabs>
          </div>
        </li>

        {/* Шаг 5: утверждение и память решений */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                05
              </span>
              <h3 className={STEP_TITLE}>Вы направляете: память решений</h3>
            </div>
            <p className={STEP_TEXT}>
              Утверждение с точным временем выхода, правка или отклонение.
              Каждое решение уходит в профиль правил: следующий текст пишется
              с его учётом. Вот что система уже запомнила о стиле этого проекта.
            </p>
          </div>
          <Artifact
            label="Экран утверждения"
            meta="Черновик · цикл 1"
            icon={<FileText className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <Button size="sm" className="font-semibold">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Утвердить к выходу в четверг, 11:00
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                >
                  <PencilLine className="h-4 w-4" aria-hidden="true" />
                  Внести правку
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-stone-300 font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                >
                  Отклонить
                </Button>
              </div>
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-3.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Запомненные решения в профиле проекта
                </p>
                <ol className="mt-3 space-y-2.5">
                  {[
                    "Не использовать длинное и среднее тире в пунктуации",
                    "Не называть входящие голосовые словом из журналистики",
                    "Всегда раскрывать допущения при сравнении со штатной альтернативой",
                  ].map((rule, i) => (
                    <li key={rule} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-white text-[11px] font-semibold text-stone-500">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-stone-700">{rule}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Artifact>
        </li>

        {/* Шаг 6: вывод цикла */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                06
              </span>
              <h3 className={STEP_TITLE}>Вывод цикла и план следующего</h3>
            </div>
            <p className={STEP_TEXT}>
              Итоговая карточка четвёртой недели: что вышло, какой отклик
              собрало и что система предлагает изменить. План следующего
              цикла собирается уже с учётом этого вывода, вам остаётся
              его утвердить.
            </p>
          </div>
          <Artifact
            label="Отчёт по циклу"
            meta="Неделя 4 · сводка"
            icon={<BarChart3 className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <div className="space-y-5">
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
                  <dt className="text-xs font-medium text-stone-500">Публикации</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-stone-900">8</dd>
                </div>
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
                  <dt className="text-xs font-medium text-stone-500">Каналы</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-stone-900">2</dd>
                </div>
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
                  <dt className="text-xs font-medium text-stone-500">Утверждение текста</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-stone-900">
                    2.5 мин
                  </dd>
                </div>
              </dl>
              <div className="rounded-lg border border-stone-200 p-3.5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-stone-900">Разбор отклика</p>
                  <FactBadge kind="confirmed" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  Материалы с конкретными таблицами сравнения дали в 2.4 раза
                  больше дочитываний и переходов к заявке, чем общие рассуждения
                  о процессе.
                </p>
              </div>
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-3.5">
                <p className="text-sm font-medium text-stone-900">
                  Рекомендация системы на цикл 2
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  Увеличить долю разборов с фактурой и подключить третий канал
                  дистрибуции.
                </p>
                <Button size="sm" className="mt-3.5 font-semibold">
                  Утвердить план цикла 2
                </Button>
              </div>
            </div>
          </Artifact>
        </li>
      </ol>

      <div className="mt-14 flex flex-col items-start gap-4 rounded-xl border border-stone-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-stone-700">
          Так проходит один цикл: от первого голосового до отчёта и нового
          плана. Ничего не выходит без вашего утверждения: без вашего
          решения не публикуется ни один текст. В пилоте то же самое
          повторится на вашем материале и в ваших каналах.
        </p>
        <Button
          asChild
          variant="outline"
          className="shrink-0 border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
        >
          <a href="/pilot">
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            Условия пилота
          </a>
        </Button>
      </div>
    </Section>
  );
}
