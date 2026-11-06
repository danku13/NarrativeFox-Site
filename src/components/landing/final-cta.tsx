"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

/*
  Единственный защищённый канал связи (рекомендация, раздел 3):
  короткая форма с антиспамом вместо публичной почты и личных контактов.
  Антиспам: скрытое honeypot-поле + временная ловушка (elapsedMs),
  проверка на сервере + лимит частоты.
*/

type Status = "idle" | "sending" | "success" | "error";

export function FinalCta() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const openedAt = useRef<number>(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("contact"),
          message: data.get("message"),
          website: data.get("website"),
          elapsedMs: Date.now() - openedAt.current,
        }),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (res.ok && json?.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json?.error ?? "Не удалось отправить заявку. Попробуйте ещё раз.");
      }
    } catch {
      setStatus("error");
      setError("Кажется, пропал интернет. Проверьте соединение и попробуйте ещё раз.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-b border-stone-200/60 bg-background py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <div className="flex items-baseline justify-between gap-6 border-t border-stone-300 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Следующий шаг
            </p>
            <span
              className="font-display text-sm font-semibold tabular-nums text-stone-400"
              aria-hidden="true"
            >
              07 <span className="text-stone-300">/ 07</span>
            </span>
          </div>
          <h2 className="font-display mt-7 text-3xl font-semibold leading-[1.1] tracking-tight text-stone-900 md:text-4xl">
            Покажем, как это
            <span className="block text-stone-500">заработает у вас</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-700 md:text-lg">
            Коротко опишите бизнес и текущие каналы. Мы разберём их и предложим
            формат первого цикла. Ответим в течение рабочего дня.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Разбор ваших каналов без обязательств",
              "Формат и смета пилота до старта",
              "Ответ в течение рабочего дня",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-stone-500"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-stone-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          {status === "success" ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-10 w-10 text-stone-500" aria-hidden="true" />
              <h3 className="font-display mt-5 text-xl font-semibold text-stone-900">
                Заявка отправлена
              </h3>
              <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-stone-700">
                Спасибо. Разберём ваши каналы и ответим в течение рабочего дня.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-stone-800">
                  Имя
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={120}
                  autoComplete="name"
                  placeholder="Как к вам обращаться"
                  className="border-stone-300 bg-white focus-visible:ring-primary/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-sm font-medium text-stone-800">
                  Куда ответить
                </Label>
                <Input
                  id="contact"
                  name="contact"
                  required
                  minLength={3}
                  maxLength={200}
                  placeholder="Telegram или email"
                  className="border-stone-300 bg-white focus-visible:ring-primary/40"
                />
                <p className="text-xs text-stone-500">
                  Например: @ivan_petrov или ivan@company.ru
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-stone-800">
                  Чем занимаетесь и где публикуетесь
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  minLength={20}
                  maxLength={5000}
                  rows={4}
                  placeholder="Например: B2B-поставка промышленного оборудования. Сейчас только Telegram-канал, публикации нерегулярные."
                  className="resize-none border-stone-300 bg-white focus-visible:ring-primary/40"
                />
              </div>

              {/* Honeypot: скрыт от людей, заполняется ботами */}
              <div className="hidden" aria-hidden="true">
                <Label htmlFor="website">Ваш сайт (не заполняйте)</Label>
                <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              {error ? (
                <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800">
                  {error}
                </p>
              ) : null}

              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="w-full text-base font-semibold"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Отправляем
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Обсудить пилот
                  </>
                )}
              </Button>
              <p className="text-center text-xs leading-relaxed text-stone-500">
                Спам не рассылаем: контакты нужны только для ответа
                на заявку.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
