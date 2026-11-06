import { Section, SectionHeader, Artifact, FactBadge } from "./bits";
import { Mic, FileText, Table2, ArrowRight, AudioLines } from "lucide-react";
import { BEFORE_AFTER, VOICE_EXAMPLE } from "@/lib/content/solo-content";

/*
  Контурные блоки B2C (/solo): контраст «до и после» на уровне
  личного ритма жизни и микро-пример живой трансформации речи.
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
      <div className="mt-12 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full min-w-[560px] border-collapse text-sm">
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
              <tr key={row[0]} className="border-b border-stone-100 last:border-b-0 align-top">
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

export function VoiceExampleSection() {
  return (
    <Section id="voice-example" tone="muted">
      <SectionHeader
        eyebrow={VOICE_EXAMPLE.eyebrow}
        titleDark={VOICE_EXAMPLE.titleDark}
        titleMuted={VOICE_EXAMPLE.titleMuted}
        lead={VOICE_EXAMPLE.lead}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div>
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
        <div className="space-y-4">
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
              <div>
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
      <p className="mt-6 flex items-center gap-2 text-xs text-stone-500">
        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
        Иллюстрация механики на собирательном примере: у вас на входе будут ваши голосовые и заметки
        <Table2 className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
      </p>
    </Section>
  );
}
