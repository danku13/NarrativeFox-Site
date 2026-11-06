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
} from "lucide-react";

/*
  Сквозной пример (рекомендация 2.3): интервью, факты, карта публикаций,
  адаптация под каналы, утверждение, отклик и выводы.
  Честная подпись: пример собран на материале самого NarrativeFox,
  это не клиентский кейс.
  Каждый шаг: текст слева, артефакт справа, шаги разделены 80px.
  Никаких слипшихся блоков: внутри карточек явные отступы.
*/

const STEP_TITLE = "text-lg font-semibold text-stone-900";
const STEP_TEXT = "mt-3 text-sm leading-relaxed text-stone-700 sm:text-base";

export function ExampleSection() {
  return (
    <Section id="example" tone="muted">
      <SectionHeader
        eyebrow="Пример работы системы"
        index="01"
        titleDark="Сквозной пример:"
        titleMuted="от интервью до отклика"
        lead={
          <>
            Один цикл целиком: что рассказал основатель, какие факты из
            этого извлекла система, чем отличаются тексты для разных площадок,
            что именно вы утверждаете и какой отклик это дало.
          </>
        }
      />
      <p className="mt-6 max-w-2xl rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm leading-relaxed text-stone-600">
        Пример собран на материале самого NarrativeFox. Это демонстрация
        того, как устроена система, а не клиентский кейс.
      </p>

      <ol className="mt-14 space-y-16 md:space-y-20">
        {/* Шаг 1: интервью */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                01
              </span>
              <h3 className={STEP_TITLE}>Интервью с основателем</h3>
            </div>
            <p className={STEP_TEXT}>
              Разговор занимает около 30 минут. Расшифровка становится
              исходным материалом: дальше в дело идут только факты из
              неё и из документов компании, а не общие фразы о рынке.
            </p>
          </div>
          <Artifact
            label="Расшифровка интервью"
            meta="34 минуты · 8 400 знаков"
            icon={<Mic className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 px-3 py-2.5">
                <AudioLines className="h-4 w-4 text-stone-500" aria-hidden="true" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-200">
                  <div className="h-full w-2/5 rounded-full bg-stone-400" />
                </div>
                <span className="text-xs font-medium tabular-nums text-stone-500">
                  12:40 / 34:00
                </span>
              </div>
              <blockquote className="border-l-2 border-primary/60 pl-4">
                <p className="text-sm leading-relaxed text-stone-800">
                  «Мы начинали с ручного ведения контента: канал вёл я сам и
                  быстро понял, что основателю не хватает не идей, а
                  производственной цепочки. Тогда мы собрали агентов под
                  конкретные задачи: исследовать, хранить факты, писать,
                  проверять, отчитываться».
                </p>
                <footer className="mt-3 text-xs font-medium text-stone-500">
                  Интервью с основателем NarrativeFox
                </footer>
              </blockquote>
            </div>
          </Artifact>
        </li>

        {/* Шаг 2: карточки фактов */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                02
              </span>
              <h3 className={STEP_TITLE}>Карточки фактов</h3>
            </div>
            <p className={STEP_TEXT}>
              Система раскладывает интервью на отдельные факты. У каждого
              факта есть источник и статус: «подтверждено» или
              «предположение». Предположения не попадают в тексты, пока вы их
              не проверите.
            </p>
          </div>
          <Artifact
            label="База фактов"
            meta="3 карточки из 12"
            icon={<ClipboardList className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <ul className="space-y-3">
              <li className="rounded-lg border border-stone-200 p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-stone-900">
                    Каждый факт хранится с источником и статусом
                  </p>
                  <FactBadge kind="confirmed" />
                </div>
                <p className="mt-2 text-xs text-stone-500">
                  Источник: интервью, 08:12
                </p>
              </li>
              <li className="rounded-lg border border-stone-200 p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-stone-900">
                    Проверка на ИИ-штампы идёт отдельным рубежом после
                    редактуры
                  </p>
                  <FactBadge kind="confirmed" />
                </div>
                <p className="mt-2 text-xs text-stone-500">
                  Источник: интервью, 09:47
                </p>
              </li>
              <li className="rounded-lg border border-stone-200 p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-stone-900">
                    Разборы процессов собирают больше целевых действий, чем
                    короткие заметки
                  </p>
                  <FactBadge kind="assumed" />
                </div>
                <p className="mt-2 text-xs text-stone-500">
                  Гипотеза. Проверим на первом цикле публикаций
                </p>
              </li>
            </ul>
          </Artifact>
        </li>

        {/* Шаг 3: карта публикаций */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                03
              </span>
              <h3 className={STEP_TITLE}>Карта публикаций</h3>
            </div>
            <p className={STEP_TEXT}>
              Из фактов и ваших целей система собирает план цикла:
              какая тема, в каком канале, на какой неделе. План можно
              поменять до старта, карта пересоберётся за несколько минут.
            </p>
          </div>
          <Artifact
            label="Карта публикаций"
            meta="Цикл 1 · 4 недели"
            icon={<CalendarRange className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-left">
                    <th className="pb-2 pr-4 text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Неделя
                    </th>
                    <th className="pb-2 pr-4 text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Telegram
                    </th>
                    <th className="pb-2 pr-4 text-xs font-semibold uppercase tracking-wide text-stone-500">
                      Хабр
                    </th>
                    <th className="pb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                      VC.ru
                    </th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  <tr className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-stone-900">1</td>
                    <td className="py-3 pr-4">Зачем базе фактов статусы</td>
                    <td className="py-3 pr-4">Как устроен конвейер проверки текста</td>
                    <td className="py-3">Почему основателю не нужна ещё одна нейросеть</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="py-3 pr-4 font-medium text-stone-900">2</td>
                    <td className="py-3 pr-4">Что система считает целевым действием</td>
                    <td className="py-3 pr-4">Разбор: схема атрибуции без самообмана</td>
                    <td className="py-3">Честные ограничения системы ИИ-агентов</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-stone-900">3-4</td>
                    <td className="py-3 pr-4">Ответы на вопросы читателей</td>
                    <td className="py-3 pr-4">Итоги цикла: что сработало</td>
                    <td className="py-3">Планы на следующий цикл</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-stone-500">
              Сейчас: 2 темы опубликованы, 3 на утверждении, 4 в черновике
            </p>
          </Artifact>
        </li>

        {/* Шаг 4: адаптация под каналы */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                04
              </span>
              <h3 className={STEP_TITLE}>Адаптация под каналы</h3>
            </div>
            <p className={STEP_TEXT}>
              Один и тот же факт звучит по-разному: в Telegram это
              короткая заметка, на Хабре технический разбор, на VC.ru
              история про управленческое решение. Вы видите все версии
              рядом.
            </p>
          </div>
          <div>
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
                  <p className="text-sm font-semibold text-stone-900">
                    NarrativeFox
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  Основателю не хватает не идей, а производственной цепочки.
                  Поэтому у нас каждый факт хранится с источником, а текст
                  проходит проверку на ИИ-штампы отдельным этапом.
                  Если коротко: факт, который нельзя проверить, в публикацию
                  не попадает.
                </p>
                <p className="mt-3 text-xs font-medium text-stone-500">
                  3 абзаца · 640 знаков
                </p>
              </TabsContent>
              <TabsContent
                value="habr"
                className="mt-4 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"
              >
                <h4 className="text-sm font-semibold text-stone-900">
                  Как устроен конвейер проверки текста
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
                  Мы разбираем производственную цепочку: исследовательские
                  агенты собирают факты, база присваивает каждому статус и
                  источник, редактор собирает черновик, а отдельная проверка
                  отсеивает ИИ-штампы. В статье показываем схему
                  конвейера и примеры фрагментов до и после проверки.
                </p>
                <p className="mt-3 text-xs font-medium text-stone-500">
                  Статья · 7 800 знаков · 3 раздела
                </p>
              </TabsContent>
              <TabsContent
                value="vc"
                className="mt-4 rounded-xl border border-stone-200 bg-white p-4 sm:p-5"
              >
                <h4 className="text-sm font-semibold text-stone-900">
                  Почему основателю не нужна ещё одна нейросеть
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-700">
                  История про управленческое решение: мы перестали соревноваться
                  с чат-ботами в скорости генерации и собрали систему,
                  где у каждой роли своя задача. Главный вывод: ценность
                  не в самих текстах, а в том, что
                  у каждого утверждения есть источник, а у цикла есть измеримый
                  отклик.
                </p>
                <p className="mt-3 text-xs font-medium text-stone-500">
                  Колонка · 4 200 знаков
                </p>
              </TabsContent>
            </Tabs>
            <p className="mt-4 text-xs leading-relaxed text-stone-500">
              Во всех трёх версиях факты одни и те же, из шага 2
            </p>
          </div>
        </li>

        {/* Шаг 5: утверждение */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                05
              </span>
              <h3 className={STEP_TITLE}>Утверждение</h3>
            </div>
            <p className={STEP_TEXT}>
              Перед публикацией вы видите текст целиком и можете его
              править. В этом примере основатель убрал громкую формулировку
              и заменил её проверяемой. Правка вернулась в базу фактов,
              и следующий текст уже учитывает её.
            </p>
          </div>
          <Artifact
            label="Черновик на утверждении"
            meta="Хабр · перед публикацией"
            icon={<FileText className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <div className="space-y-4">
              <div className="rounded-lg border border-stone-200 p-3.5 text-sm leading-relaxed text-stone-700">
                <p>
                  Проверка на ИИ-штампы{" "}
                  <span className="rounded bg-red-50 px-1 text-stone-400 line-through">
                    подняла конверсию текстов в 3 раза
                  </span>{" "}
                  <span className="rounded bg-emerald-50 px-1 font-medium text-emerald-900">
                    изменила структуру черновиков: штампы ушли, факты остались
                  </span>
                  .
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm" className="font-semibold">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Утвердить публикацию
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                >
                  <PencilLine className="h-4 w-4" aria-hidden="true" />
                  Отправить на правку
                </Button>
              </div>
              <p className="text-xs leading-relaxed text-stone-500">
                Правку внёс основатель. Причина: «конверсия в 3 раза» не
                подтверждена данными, поэтому формулировку заменили на
                проверяемую.
              </p>
            </div>
          </Artifact>
        </li>

        {/* Шаг 6: отклик и выводы */}
        <li className="grid gap-8 border-t border-stone-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <div className="flex items-baseline gap-4">
              <span
                className="font-display text-4xl font-semibold leading-none text-stone-300 md:text-5xl"
                aria-hidden="true"
              >
                06
              </span>
              <h3 className={STEP_TITLE}>Отклик и выводы</h3>
            </div>
            <p className={STEP_TEXT}>
              После публикаций система собирает отклик: переходы, целевые
              действия, вопросы читателей. По итогам цикла готовит
              короткий отчёт: что сработало, что нет и что поменять в
              следующем цикле. Гипотезу из шага 2 проверили
              на данных этого цикла.
            </p>
          </div>
          <Artifact
            label="Отчёт по циклу"
            meta="Неделя 4 · сводка"
            icon={<BarChart3 className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
          >
            <div className="space-y-5">
              <dl className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
                  <dt className="text-xs font-medium text-stone-500">
                    Переходы
                  </dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-stone-900">
                    480
                  </dd>
                </div>
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
                  <dt className="text-xs font-medium text-stone-500">
                    Целевые действия
                  </dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-stone-900">
                    14
                  </dd>
                </div>
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-3">
                  <dt className="text-xs font-medium text-stone-500">
                    Вопросы читателей
                  </dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-stone-900">
                    6
                  </dd>
                </div>
              </dl>
              <div className="rounded-lg border border-stone-200 p-3.5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-stone-900">
                    Гипотеза подтверждена частично
                  </p>
                  <FactBadge kind="confirmed" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  Разбор конвейера на Хабре дал больше целевых действий, чем
                  короткие заметки: 8 из 14. Но заметки в Telegram собрали
                  больше вопросов, а вопрос читателя это, по сути, тоже заявка.
                </p>
              </div>
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-3.5">
                <p className="text-sm font-medium text-stone-900">
                  Вывод цикла
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  В следующем цикле делаем два подробных разбора вместо
                  трёх заметок и одну тему из вопросов читателей.
                </p>
              </div>
            </div>
          </Artifact>
        </li>
      </ol>

      <div className="mt-14 flex flex-col items-start gap-4 rounded-xl border border-stone-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-stone-700">
          Так проходит один цикл: от интервью до отчёта и нового
          плана. В пилоте то же самое повторится на вашем
          материале и в ваших каналах.
        </p>
        <Button asChild variant="outline" className="shrink-0 border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900">
          <a href="#pilot">
            <Newspaper className="h-4 w-4" aria-hidden="true" />
            Что входит в пилот
          </a>
        </Button>
      </div>
    </Section>
  );
}
