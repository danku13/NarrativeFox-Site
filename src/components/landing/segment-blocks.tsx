"use client";

import { Section, SectionHeader } from "./bits";
import { Button } from "@/components/ui/button";
import { useRole } from "./role-switcher";
import { PILOT } from "@/lib/content/shared";
import type { SegmentContent } from "@/lib/content/types";
import { CalendarRange, CheckCircle2, HelpCircle } from "lucide-react";

/*
  Сегментные слои контурной страницы. Тексты берутся у активной роли,
  каркасы секций одинаковы для всех ролей и контуров.
*/

function useSegment(segments: Record<string, SegmentContent>): SegmentContent {
  const { role } = useRole();
  return segments[role] ?? Object.values(segments)[0];
}

/* Кейс «Как это выглядит у вас» + мини-мокап цепочки. */
export function SegmentCase({
  segments,
}: {
  segments: Record<string, SegmentContent>;
}) {
  const segment = useSegment(segments);
  const chain = [
    { status: "published", text: "Тема 1: опубликовано" },
    { status: "review", text: "Тема 2: на утверждении" },
    { status: "draft", text: "Тема 3: в черновике" },
  ];
  return (
    <Section id="case" tone="muted">
      <SectionHeader
        eyebrow="Как это выглядит у вас"
        titleDark={`Кейс: ${segment.chip.toLowerCase()}`}
        titleMuted="три строки, один цикл"
        lead={segment.portrait}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          { term: "Вход", text: segment.caseStudy.input },
          { term: "Система", text: segment.caseStudy.system },
          { term: "Выход", text: segment.caseStudy.output },
        ].map((row) => (
          <div key={row.term} className="rounded-xl border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              {row.term}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-700">{row.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Button asChild size="lg" className="text-base font-semibold sm:self-start">
          <a href="#contact">Хочу так же</a>
        </Button>
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
            <CalendarRange className="h-4 w-4 text-stone-500" aria-hidden="true" />
            <p className="text-xs font-semibold text-stone-700">
              Цепочка публикаций этого цикла
            </p>
          </div>
          <ul className="mt-3 space-y-2.5">
            {chain.map((item) => (
              <li key={item.status} className="flex items-center gap-3">
                <span
                  className={
                    item.status === "published"
                      ? "h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                      : item.status === "review"
                        ? "h-2 w-2 shrink-0 rounded-full bg-amber-400"
                        : "h-2 w-2 shrink-0 rounded-full bg-stone-300"
                  }
                  aria-hidden="true"
                />
                <span
                  className={
                    item.status === "published"
                      ? "text-sm text-stone-500 line-through decoration-stone-300"
                      : "text-sm text-stone-700"
                  }
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* «Узнаёте себя» и «Что меняется». */
export function SegmentMirror({
  segments,
}: {
  segments: Record<string, SegmentContent>;
}) {
  const segment = useSegment(segments);
  return (
    <>
      <Section id="mirror">
        <SectionHeader
          eyebrow="Узнаёте себя"
          titleDark="Знакомые ситуации"
          titleMuted="из практики"
          lead={`Три признака, что этот контур про вас. Если узнали себя хотя бы в одном, дальше по странице будет полезно.`}
        />
        <ul className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {segment.pains.map((pain, i) => (
            <li key={pain} className="border-t border-stone-200 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                Боль {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-base font-medium leading-relaxed text-stone-900">
                «{pain}»
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="changes" tone="muted">
        <SectionHeader
          eyebrow="Что меняется"
          titleDark={segment.mainClaim}
          titleMuted="шесть конкретных сдвигов"
        />
        <ul className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {segment.claims.map((claim, i) => (
            <li key={claim} className="flex items-start gap-3 border-t border-stone-200 pt-5">
              <span className="font-display mt-0.5 text-2xl font-semibold leading-none text-stone-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-stone-700">{claim}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

/* «Продукт для вас, если», возражения, «Кому не подойдёт». */
export function SegmentTrust({
  segments,
}: {
  segments: Record<string, SegmentContent>;
}) {
  const segment = useSegment(segments);
  const notFit = [...PILOT.notFit, { title: "Специфика контура", text: segment.notFit }];
  return (
    <>
      <Section id="fit">
        <SectionHeader
          eyebrow="Продукт для вас, если"
          titleDark="Три ситуации,"
          titleMuted="в которых система полезна"
        />
        <ul className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {segment.situations.map((situation, i) => (
            <li key={situation} className="border-t border-stone-200 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                Ситуация {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-base font-medium leading-relaxed text-stone-900">
                {situation}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="objections" tone="muted">
        <SectionHeader
          eyebrow="Возражения и ответы"
          titleDark="Честные ответы"
          titleMuted="на главные сомнения"
          lead="Сомнения, которые звучат чаще всего. Отвечаем прямо."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {segment.objections.map((item) => (
            <div key={item.q} className="rounded-xl border border-stone-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-stone-400" aria-hidden="true" />
                <p className="text-base font-semibold leading-relaxed text-stone-900">
                  «{item.q}»
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="notfit">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
            Кому не подойдёт
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-700">
            Эти ограничения лучше узнать до пилота.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {notFit.map((n, i) => (
              <li key={n.title} className="border-t border-stone-300 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  Ограничение {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2.5 text-base font-semibold text-stone-900">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">{n.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start gap-4 border-t border-stone-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-stone-700">
              Если ни одно ограничение не про вас: покажем, как система заработает
              на вашем материале.
            </p>
            <Button asChild size="lg" className="shrink-0 text-base font-semibold">
              <a href="#contact">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Обсудить пилот
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

/* Строка типичных каналов активной роли, идёт после первого цикла. */
export function ChannelsLine({
  segments,
}: {
  segments: Record<string, SegmentContent>;
}) {
  const segment = useSegment(segments);
  return (
    <div className="border-b border-stone-200/60 bg-stone-50 px-4 py-6 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
          Типичные каналы
        </span>
        <span className="text-sm text-stone-700">{segment.channels}</span>
      </div>
    </div>
  );
}
