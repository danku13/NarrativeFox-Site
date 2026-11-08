"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/*
  События чтения и кликов на всех страницах сайта:
  - nf_section_view: секция с id впервые попала в вьюпорт;
  - nf_cta_click: клик по ссылке, ведущей к форме, в другой маршрут
    или в Telegram-канал проекта.
  Подключается один раз на страницу, параметры: путь страницы.
*/

const CTA_PREFIXES = ["/solo", "/business", "/pilot", "/how-it-works"];

export function PageAnalytics({ page }: { page: string }) {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const seen = new Set<string>();
    let io: IntersectionObserver | null = null;

    if (sections.length && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const id = (entry.target as HTMLElement).id;
            if (id && !seen.has(id)) {
              seen.add(id);
              track("nf_section_view", { page, section: id });
            }
          }
        },
        { threshold: 0.35 }
      );
      sections.forEach((s) => io?.observe(s));
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const isCta =
        href.includes("#contact") ||
        href.includes("t.me/") ||
        CTA_PREFIXES.some((p) => href === p || href.startsWith(`${p}?`));
      if (!isCta) return;
      track("nf_cta_click", {
        page,
        href,
        label: (anchor.textContent ?? "").trim().slice(0, 80),
      });
    }

    document.addEventListener("click", onClick);
    return () => {
      io?.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, [page]);

  return null;
}
