import { Section, SectionHeader, Artifact, FactBadge } from "./bits";
import { Mic, FileText, Table2, ArrowRight, AudioLines } from "lucide-react";
import { BEFORE_AFTER, VISIBILITY_CHAIN, VOICE_EXAMPLE } from "@/lib/content/solo-content";

/*
  Контурные блоки B2C: контраст «до и после» (на мобильном карточками
  без горизонтального скролла, на десктопе таблицей), цепочка видимости
  и пример живой трансформации речи.
*/

export function BeforeAfterSection() {
  return (
    <Section id="rhythm">
      <SectionHeader
        eyebrow={BEFORE_AFTER.eyebrow}
        titleDark={BEFORE_AFTER.titleDark}
        titleMuted={BEFORE_AFTER.titleMuted}
        lead={BEFORE_AFTER.lead}
      />

      {/* Мобильная версия: вертикальные карточки без горизонтального скролла */}
      <ul className="mt-10 space-y-4 md:hidden">
        {BEFORE_AFTER.rows.map((row) => (
          <li key={row[0]} className="rounded-xl border border-stone-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
              {BEFORE_AFTER.head[0]}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{row[0]}</p>
            <div className="mt-4 border-t border-stone-100 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                {BEFORE_AFTER.head[1]}
              </p>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-stone-900">
                {row[1]}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Десктопная версия: 2-колоночная таблица */}
      <div className="mt-12 hidden overflow-hidden rounded-xl border border-stone-200 bg-white md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-left">
              {BEFORE_AFTER.head.map((h) => (
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
            {BEFORE_AFTER.rows.map((row) => (
              <tr key={row[0]} className="border-b border-stone-100 align-top last:border-b-0">
                <td className="w-1/2 px-5 py-4 leading-relaxed text-stone-600">{row[0]}</td>
                <td className="w-1/2 px-5 py-4 font-medium leading-relaxed text-stone-900">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function VisibilityChainSection() {
  return (
    <Section id="visibility" tone="muted">
      <SectionHeader
        eyebrow={VISIBILITY_CHAIN.eyebrow}
        titleDark={VISIBILITY_CHAIN.titleDark}
        titleMuted={VISIBILITY_CHAIN.titleMuted}
        lead={VISIBILITY_CHAIN.lead}
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {VISIBILITY_CHAIN.steps.map((step, i) => (
          <li key={step.title} className="relative rounded-xl border border-stone-200 bg-white p-6">
            <p className="font-display text-2xl font-semibold leading-none text-stone-300">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-sm font-semibold text-stone-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.text}</p>
            {i < VISIBILITY_CHAIN.steps.length - 1 ? (
              <ArrowRight
                className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-stone-300 lg:block"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function VoiceExampleSection() {
  return (
    <Section id="voice-example">
      <SectionHeader
        eyebrow={VOICE_EXAMPLE.eyebrow}
        titleDark={VOICE_EXAMPLE.titleDark}
        titleMuted={VOICE_EXAMPLE.titleMuted}
        lead={VOICE_EXAMPLE.lead}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="min-w-0">
          <Artifact
            label={VOICE_EXAMPLE.inputLabel}
            icon={<Mic className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
            meta={<span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600"><AudioLines className="h-3.5 w-3.5" aria-hidden="true" />1:15</span>}
          >
            <blockquote className="border-l-2 border-primary/60 pl-4">
              <p className="text-sm leading-relaxed text-stone-800">
                {VOICE_EXAMPLE.inputText}
              </p>
              <footer className="mt-3 text-xs font-medium text-stone-500">
                {VOICE_EXAMPLE.inputFooter}
              </footer>
            </blockquote>
          </Artifact>
        </div>
        <div className="min-w-0 space-y-4">
          {VOICE_EXAMPLE.steps.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-xl border border-stone-200 bg-white p-5"
            >
              <span
                className="font-display text-2xl font-semibold leading-none text-stone-300"
                aria-hidden="true"
              >
                {String(i + 1)}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-sm font-semibold text-stone-900">{step.title}</h3>
                  {i === 0 ? <FactBadge kind="confirmed" /> : null}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-700">{step.text}</p>
              </div>
            </div>
          ))}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-stone-900">
              <ArrowRight className="h-4 w-4 text-stone-500" aria-hidden="true" />
              {VOICE_EXAMPLE.outputLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              {VOICE_EXAMPLE.outputText}
            </p>
          </div>
        </div>
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-2 text-xs text-stone-500">
        <FileText className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>Иллюстрация механики на собирательном примере: у вас на входе будут ваши голосовые и заметки</span>
        <Table2 className="hidden h-3.5 w-3.5 sm:inline" aria-hidden="true" />
      </p>
    </Section>
  );
}
