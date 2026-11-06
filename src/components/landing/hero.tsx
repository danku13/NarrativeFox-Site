import { Button } from "@/components/ui/button";
import { Artifact, StatusDot } from "./bits";
import { Check, Circle, Loader2, ListChecks } from "lucide-react";

/*
  Первый экран вокруг задачи клиента (рекомендация 2.1).
  Editorial: двухцветный заголовок, крупный кегль.
  Артефакт показывает живой план агентов с состояниями шагов
  (приём из metaflow.life) + утверждение: вся история продукта
  в одном мокапе: агенты работают, вы утверждаете.
*/

const PLAN = [
  { state: "done", text: "Разбор рынка и конкурентов" },
  { state: "done", text: "База фактов: 12 карточек" },
  { state: "active", text: "Черновик для Хабра: конвейер проверки" },
  { state: "queued", text: "Адаптация под Telegram и VC.ru" },
  { state: "queued", text: "Отчёт по отклику" },
] as const;

export function Hero() {
  return (
    <section id="top" className="border-b border-stone-200/60 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            NarrativeFox · для основателей B2B
          </p>
          <h1 className="font-display mt-6 text-[2rem] font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-[2.6rem] lg:text-[3.3rem]">
            <span className="block">Контент-маркетинг</span>
            <span className="block">для B2B</span>
            <span className="block text-stone-500">без целого отдела</span>
          </h1>
          <p className="mt-7 text-base leading-relaxed text-stone-700 sm:text-lg">
            NarrativeFox превращает ваши голосовые сообщения, заметки
            и документы в стратегию, публикации для разных площадок
            и регулярный разбор отклика. Тексты и ключевые решения
            утверждаете вы, остальное делает система.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="text-base font-semibold">
              <a href="#contact">Обсудить пилот</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-stone-300 text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
            >
              <a href="#example">Посмотреть пример работы</a>
            </Button>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-stone-600">
            Ответим в течение рабочего дня. Контакты нужны
            только для ответа на заявку.
          </p>
        </div>

        {/* Живой план агентов: состояния шагов + утверждение */}
        <div className="lg:justify-self-end">
          <Artifact
            label="План цикла"
            meta={<StatusDot label="агенты работают" />}
            icon={<ListChecks className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
            className="w-full max-w-md lg:w-[26rem]"
          >
            <div className="space-y-5">
              <ol className="space-y-2.5" aria-label="План текущего цикла">
                {PLAN.map((item) => (
                  <li
                    key={item.text}
                    className={
                      item.state === "active"
                        ? "flex items-center gap-3 rounded-lg border border-primary/40 bg-primary/5 px-3 py-2.5"
                        : "flex items-center gap-3 px-3 py-2.5"
                    }
                  >
                    {item.state === "done" ? (
                      <>
                        <Check
                          className="h-4 w-4 shrink-0 text-stone-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-stone-500 line-through decoration-stone-300">
                          {item.text}
                        </span>
                      </>
                    ) : null}
                    {item.state === "active" ? (
                      <>
                        <Loader2
                          className="h-4 w-4 shrink-0 animate-spin text-primary"
                          aria-hidden="true"
                        />
                        <span className="flex-1 text-sm font-medium text-stone-900">
                          {item.text}
                        </span>
                        <span className="rounded-full border border-stone-200 bg-white px-2 py-0.5 text-[11px] font-medium text-stone-500">
                          Редактор
                        </span>
                      </>
                    ) : null}
                    {item.state === "queued" ? (
                      <>
                        <Circle
                          className="h-4 w-4 shrink-0 text-stone-300"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-stone-600">{item.text}</span>
                      </>
                    ) : null}
                  </li>
                ))}
              </ol>
              <div className="border-t border-stone-100 pt-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm" className="font-semibold">
                    Утвердить черновик
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                  >
                    Править
                  </Button>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-stone-500">
                  Без вашего подтверждения ничего не публикуется. Идёт вторая
                  неделя из четырёх.
                </p>
              </div>
            </div>
          </Artifact>
          <p className="mt-3 max-w-md text-center text-xs leading-relaxed text-stone-500 lg:text-left">
            Агенты ведут план, вы утверждаете результаты. Полный разбор
            в примере ниже.
          </p>
        </div>
      </div>
    </section>
  );
}
