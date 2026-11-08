/*
  Тонкая обёртка над dataLayer для событий сайта.
  Не ломается без подключённого контейнера: если dataLayer
  не инициализирован, создаём массив, события подхватит GTM
  или любой другой подписчик, когда его подключат.
*/

export type AnalyticsParams = Record<
  string,
  string | number | boolean | undefined
>;

export function track(event: string, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...params });
}
