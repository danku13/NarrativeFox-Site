import { Section, SectionHeader } from "./bits";
import { MECHANICS, CHAT_COMPARE, STATS } from "@/lib/content/shared";
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
  Механика работы системы [БАЗА]: конвейер, «система выполняет /
  вы направляете», самообучение, принципы, сравнение с чат-ботом, цифры.
  Используется на гейтвее и в обоих контурах.
*/

const PIPELINE_ICONS = [Search, Database, PenLine, ShieldCheck, CalendarClock];

export function HowItWorksSection({ index }: { index?: string }) {
  return (
    <Section id="how" tone="muted">
      <SectionHeader
        eyebrow={MECHANICS.eyebrow}
        index={index}
        titleDark={MECHANICS.titleDark}
        titleMuted={MECHANICS.titleMuted}
        lead={MECHANICS.lead}
      />

      {/* Конвейер: цепочка с иконками-стрелками вместо текстовых стрелок */}
      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {MECHANICS.pipeline.map((step, i) => {
          const Icon = PIPELINE_ICONS[i] ?? Search;
          return (
            <li key={step.title} className="relative flex items-start gap-3 lg:block">
              <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4 lg:h-full lg:w-full">
                <Icon className="h-5 w-5 shrink-0 text-stone-400" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-stone-900">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{step.text}</p>
                </div>
              </div>
              {i < MECHANICS.pipeline.length - 1 ? (
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 self-center text-stone-300 lg:absolute lg:-right-2 lg:top-1/2 lg:z-10 lg:-translate-y-1/2 lg:block bg-white"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      {/* Система выполняет / Вы направляете */}
      <div className="mt-20">
        <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
          Всю механику делает система
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-700">
          {MECHANICS.learningTitle}: {MECHANICS.learningText}
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-stone-200 bg-white">
            <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
              <CheckCircle2 className="h-5 w-5 text-stone-500" aria-hidden="true" />
              <h4 className="text-base font-semibold text-stone-900">
                {MECHANICS.systemDoesTitle}
              </h4>
            </div>
            <ul className="px-6 py-2">
              {MECHANICS.systemDoes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-stone-100 py-3.5 last:border-b-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-stone-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-stone-200 bg-white">
            <div className="flex items-center gap-2.5 border-b border-stone-200 px-6 py-4">
              <UserCheck className="h-5 w-5 text-stone-500" aria-hidden="true" />
              <h4 className="text-base font-semibold text-stone-900">
                {MECHANICS.youDecideTitle}
              </h4>
            </div>
            <ul className="px-6 py-2">
              {MECHANICS.youDecide.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-stone-100 py-3.5 last:border-b-0"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-stone-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Принципы */}
      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {MECHANICS.principles.map((p, i) => (
          <div key={p.title} className="border-t-2 border-stone-900 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              Принцип {i + 1}
            </p>
            <h4 className="mt-3 text-lg font-semibold text-stone-900">{p.title}</h4>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-700">{p.text}</p>
          </div>
        ))}
      </div>

      {/* Сравнение с разовым запросом в чат */}
      <div className="mt-20">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
            {CHAT_COMPARE.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-stone-700">{CHAT_COMPARE.lead}</p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-200 text-left">
                {CHAT_COMPARE.head.map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-stone-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CHAT_COMPARE.rows.map((row) => (
                <tr key={row.capability} className="border-b border-stone-100 last:border-b-0">
                  <td className="px-5 py-3.5 font-semibold text-stone-900">{row.capability}</td>
                  <td className="px-5 py-3.5 text-stone-600">{row.chat}</td>
                  <td className="px-5 py-3.5 font-medium text-stone-900">{row.system}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Цифры: editorial-подача на линейках */}
      <dl className="mt-20 grid gap-10 border-y border-stone-300 py-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-stone-200">
        {STATS.map((s) => (
          <div key={s.label} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              {s.label}
            </dt>
            <dd className="font-display mt-3 text-4xl font-semibold tabular-nums tracking-tight text-stone-900 md:text-5xl">
              {s.value}
            </dd>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">{s.desc}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex justify-start">
        <a
          href="#contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Обсудить пилот
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
