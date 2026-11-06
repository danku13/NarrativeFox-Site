"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { FORM } from "@/lib/content/shared";
import type { Contour, EntryPoint, SegmentContent, SegmentState } from "@/lib/content/types";
import { useRole } from "./role-switcher";

/*
  Единственный защищённый канал связи: короткая форма с антиспамом.
  Вместе с заявкой уходит контекст воронки: контур, роль и точка входа.
  Антиспам: honeypot-поле + временная ловушка (elapsedMs) на сервере.
*/

type Status = "idle" | "sending" | "success" | "error";

export function LeadForm({
  contour,
  segment = "",
  entryPoint = "final_form",
  titleDark = "Покажем, как это",
  titleMuted = "заработает у вас",
  lead,
  submitLabel,
  index,
}: {
  contour: Contour;
  segment?: SegmentState;
  entryPoint?: EntryPoint;
  titleDark?: string;
  titleMuted?: string;
  lead: string;
  submitLabel?: string;
  index?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const openedAt = useRef<number>(0);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

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
          contour,
          segment,
          entryPoint,
        }),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (res.ok && json?.ok) {
        setStatus("success");
        form.reset();
        const w = window as unknown as { dataLayer?: unknown[] };
        w.dataLayer?.push({ event: "nf_lead_sent", contour, segment, entryPoint });
      } else {
        setStatus("error");
        setError(json?.error ?? FORM.errors.fallback);
      }
    } catch {
      setStatus("error");
      setError(FORM.errors.network);
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-b border-stone-200/60 bg-background py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <div className="flex items-baseline justify-between gap-6 border-t border-stone-300 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              {FORM.eyebrow}
            </p>
            {index ? (
              <span
                className="font-display text-sm font-semibold tabular-nums text-stone-400"
                aria-hidden="true"
              >
                {index}
              </span>
            ) : null}
          </div>
          <h2 className="font-display mt-7 text-3xl font-semibold leading-[1.1] tracking-tight text-stone-900 md:text-4xl">
            {titleDark}
            <span className="block text-stone-500">{titleMuted}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-700 md:text-lg">
            {lead}
          </p>
          <ul className="mt-8 space-y-3">
            {FORM.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
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
                {FORM.successTitle}
              </h3>
              <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-stone-700">
                {FORM.successText}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-stone-800">
                  {FORM.labels.name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={120}
                  autoComplete="name"
                  placeholder={FORM.placeholders.name}
                  className="border-stone-300 bg-white focus-visible:ring-primary/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-field" className="text-sm font-medium text-stone-800">
                  {FORM.labels.contact}
                </Label>
                <Input
                  id="contact-field"
                  name="contact"
                  required
                  minLength={3}
                  maxLength={200}
                  placeholder={FORM.placeholders.contact}
                  className="border-stone-300 bg-white focus-visible:ring-primary/40"
                />
                <p className="text-xs text-stone-500">
                  Например: @ivan_petrov или ivan@company.ru
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-stone-800">
                  {FORM.labels.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  minLength={20}
                  maxLength={5000}
                  rows={4}
                  placeholder={FORM.placeholders.message}
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
                    {FORM.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {submitLabel ?? FORM.submit}
                  </>
                )}
              </Button>
              <p className="text-center text-xs leading-relaxed text-stone-500">
                {FORM.privacy}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* Финальная форма контурной страницы: заголовок и подводка активной роли. */
export function SegmentedLeadForm({
  contour,
  segments,
  entryPoint = "final_form",
  fallbackLead,
}: {
  contour: "solo" | "business";
  segments: Record<string, SegmentContent>;
  entryPoint?: EntryPoint;
  fallbackLead: string;
}) {
  const { role } = useRole();
  const segment = segments[role] ?? Object.values(segments)[0];
  return (
    <LeadForm
      contour={contour}
      segment={segment.key}
      entryPoint={entryPoint}
      titleDark="Заявка на пилот"
      titleMuted={segment.chip.toLowerCase()}
      lead={segment.ctaLead || fallbackLead}
    />
  );
}
