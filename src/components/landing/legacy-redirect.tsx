"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEGACY_FOR_ROUTES } from "@/lib/content/gateway";

/*
  Наследие рекламных ссылок вида /?for=expert. В серверной сборке
  параметр разбирали на сервере с redirect(); статический экспорт
  рендерит все страницы заранее, поэтому развилка уходит на клиент:
  посетитель мягко уводится в свой контур с предвыбранной ролью.
*/

export function LegacyForRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const forParam = params.get("for");
      const target = forParam ? LEGACY_FOR_ROUTES[forParam] : undefined;
      if (target) {
        router.replace(target);
      }
    } catch {
      // без доступа к параметрам страница работает как обычный гейтвей
    }
  }, [router]);

  return null;
}
