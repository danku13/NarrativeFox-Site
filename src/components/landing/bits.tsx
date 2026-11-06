import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/*
  Общие элементы секций. Editorial-система по мотивам разбора metaflow.life:
  - заголовок секции из двух строк: тёмная + приглушённая (stone-500);
  - над заголовком тонкая линейка, слева eyebrow капсом, справа индекс секции;
  - больше воздуха между секциями (py-20 / md:py-28);
  - основной текст ограничен ~65 знаками.
*/

export function Section({
  id,
  className,
  children,
  tone = "default",
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-b border-stone-200/60 py-20 md:py-28",
        tone === "muted" && "bg-stone-50",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  index,
  titleDark,
  titleMuted,
  lead,
}: {
  eyebrow: string;
  index?: string;
  titleDark: string;
  titleMuted?: string;
  lead?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-baseline justify-between gap-6 border-t border-stone-300 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          {eyebrow}
        </p>
        {index ? (
          <span
            className="font-display text-sm font-semibold tabular-nums text-stone-400"
            aria-hidden="true"
          >
            {index} <span className="text-stone-300">/ 07</span>
          </span>
        ) : null}
      </div>
      <h2 className="font-display mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-stone-900 md:text-[2.75rem]">
        {titleDark}
        {titleMuted ? (
          <span className="block text-stone-500">{titleMuted}</span>
        ) : null}
      </h2>
      {lead ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-700 md:text-lg">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* Карточка-артефакт: имитация экрана продукта.
   Верхняя панель с меткой, контент с явными внутренними отступами. */
export function Artifact({
  label,
  meta,
  icon,
  children,
  className,
}: {
  label: string;
  meta?: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm",
        className
      )}
    >
      <figcaption className="flex items-center justify-between gap-3 border-b border-stone-200 bg-stone-50 px-4 py-2.5">
        <span className="flex items-center gap-2 text-xs font-semibold text-stone-700">
          {icon}
          {label}
        </span>
        {meta ? (
          <span className="text-xs font-medium text-stone-500">{meta}</span>
        ) : null}
      </figcaption>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  );
}

/* Бейдж статуса факта: цвет дублируется иконкой и текстом,
   значение не кодируется только оттенком (правило доступности). */
export function FactBadge({ kind }: { kind: "confirmed" | "assumed" }) {
  if (kind === "confirmed") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">
        <svg
          viewBox="0 0 16 16"
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M3 8.5l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Подтверждено
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800">
      <span className="text-[11px] leading-none" aria-hidden="true">
        ?
      </span>
      Предположение
    </span>
  );
}

/* Живая точка статуса: цвет + текст, для мокапов работы агентов. */
export function StatusDot({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {label}
    </span>
  );
}
