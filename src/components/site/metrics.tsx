"use client";

import { useEffect } from "react";

/**
 * Минимальная измеримость цели страницы — перехода в личный контакт.
 *
 * Яндекс.Метрика подключается только если при сборке задан номер счётчика
 * (NEXT_PUBLIC_YM_ID): без переменной код ничего не грузит. Клик по любой
 * ссылке с data-goal="tg-click" / "mail-click" отправляет цель reachGoal.
 * Цели с этими идентификаторами нужно создать в интерфейсе Метрики.
 */

const YM_ID = process.env.NEXT_PUBLIC_YM_ID;

type YmFn = ((...args: unknown[]) => void) & {
  a?: unknown[][];
  l?: number;
};

type YmWindow = Window & { ym?: YmFn };

export function Metrics() {
  useEffect(() => {
    const w = window as YmWindow;

    if (YM_ID && !w.ym) {
      const ym: YmFn = (...args: unknown[]) => {
        (ym.a = ym.a || []).push(args);
      };
      ym.l = Date.now();
      w.ym = ym;
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://mc.yandex.ru/metrika/tag.js";
      document.head.appendChild(s);
      ym(Number(YM_ID), "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest("[data-goal]") as HTMLElement | null;
      if (el && YM_ID && typeof w.ym === "function") {
        w.ym(Number(YM_ID), "reachGoal", el.dataset.goal);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
