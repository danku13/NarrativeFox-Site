"use client";

import { Button } from "@/components/ui/button";
import { Artifact, StatusDot } from "./bits";
import { RoleChips, useRole } from "./role-switcher";
import { Check, Circle, Loader2, ListChecks } from "lucide-react";
import { HERO_PLAN } from "@/lib/content/shared";
import type { RoleKey, SegmentContent } from "@/lib/content/types";

/*
  Hero контура (/solo, /business): надстрочка и H1 контура,
  чипы ролей, подзаголовок активной роли, мокап «План цикла».
*/

export function ContourHero({
  overline,
  h1Dark,
  h1Muted,
  chips,
  chipsCaption,
  micro,
  ctaPrimary,
  ctaSecondary,
  segments,
  howItWorksHref = "/how-it-works",
}: {
  overline: string;
  h1Dark: string;
  h1Muted: string;
  chips: { key: RoleKey; label: string }[];
  chipsCaption?: string;
  micro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  segments: Record<string, SegmentContent>;
  howItWorksHref?: string;
}) {
  const { role } = useRole();
  const segment = segments[role] ?? Object.values(segments)[0];

  return (
    <section id="top" className="border-b border-stone-200/60 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            {segment.overline || overline}
          </p>
          <h1 className="font-display mt-6 text-[2rem] font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-[2.4rem] lg:text-[2.9rem]">
            <span className="block">{h1Dark}</span>
            <span className="block text-stone-500">{h1Muted}</span>
          </h1>
          <RoleChips items={chips} caption={chipsCaption} />
          <p className="mt-6 text-base leading-relaxed text-stone-700 sm:text-lg">
            {segment.heroLead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="text-base font-semibold">
              <a href="#contact">{ctaPrimary}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-stone-300 text-base font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
            >
              <a href={howItWorksHref}>{ctaSecondary}</a>
            </Button>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-stone-600">{micro}</p>
        </div>

        <div className="lg:justify-self-end">
          <Artifact
            label={HERO_PLAN.label}
            meta={<StatusDot label={HERO_PLAN.statusLabel} />}
            icon={<ListChecks className="h-3.5 w-3.5 text-stone-500" aria-hidden="true" />}
            className="w-full max-w-md lg:w-[26rem]"
          >
            <div className="space-y-5">
              <ol className="space-y-2.5" aria-label="План текущего цикла">
                {HERO_PLAN.items.map((item) => (
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
                        <Check className="h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
                        <span className="text-sm text-stone-500 line-through decoration-stone-300">
                          {item.text}
                        </span>
                      </>
                    ) : null}
                    {item.state === "active" ? (
                      <>
                        <Loader2 className="h-4 w-4 shrink-0 animate-spin text-primary" aria-hidden="true" />
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
                        <Circle className="h-4 w-4 shrink-0 text-stone-300" aria-hidden="true" />
                        <span className="text-sm text-stone-600">{item.text}</span>
                      </>
                    ) : null}
                  </li>
                ))}
              </ol>
              <div className="border-t border-stone-100 pt-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm" className="font-semibold">
                    {HERO_PLAN.approveLabel}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-stone-300 font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                  >
                    {HERO_PLAN.editLabel}
                  </Button>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-stone-500">
                  {HERO_PLAN.note}
                </p>
              </div>
            </div>
          </Artifact>
          <p className="mt-3 max-w-md text-center text-xs leading-relaxed text-stone-500 lg:text-left">
            {HERO_PLAN.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
