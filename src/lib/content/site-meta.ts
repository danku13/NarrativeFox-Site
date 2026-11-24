/*
  Ссылки в приложение и реквизиты продавца: одна точка правды для всего лендинга.
  Витрина продукта, касса и юридические документы живут на app.narrativefox.tech,
  поэтому переходы собраны здесь, а не расписаны по компонентам.

  Правило проекта: длинных и средних тире в исходниках сайта нет,
  сторож: scripts/check-content.mjs.
*/

export const APP_LINKS = {
  /* Тарифы, оплата и документы: витрина приложения. */
  pricing: "https://app.narrativefox.tech/pricing",
  signup: "https://app.narrativefox.tech/signup",
  offer: "https://app.narrativefox.tech/offer",
  privacy: "https://app.narrativefox.tech/privacy",
  /* Страница «Оплата и возврат». Готовит отдельная задача в приложении,
     ссылка стоит сразу: модератору платёжного сервиса она нужна на сайте. */
  refund: "https://app.narrativefox.tech/refund",
} as const;

/* Реквизиты продавца: их проверяет модератор платёжного сервиса. */
export const SELLER = {
  name: "Кузьмичев Даниил Михайлович",
  status: "плательщик НПД",
  inn: "732898917218",
  email: "info@narrativefox.tech",
} as const;

/*
  Телефон продавца. Для модерации Robokassa телефон обязателен: без него
  заявку на подключение кассы не подтверждают. Номера пока нет, поэтому
  по умолчанию строка пустая и контакт в подвале не выводится.
  Значение даёт основатель, формат: +7 999 123-45-67.
*/
export const SELLER_PHONE = "";

/* Разделы лендинга: общий список для шапки и подвала. */
export const SITE_NAV = [
  { href: "/solo", label: "Для экспертов и авторов" },
  { href: "/business", label: "Для B2B и техно-продуктов" },
  { href: "/how-it-works", label: "Как устроена система" },
  { href: "/pilot", label: "Пилот и стоимость" },
] as const;

/* Продуктовая часть сайта: витрина приложения. */
export const APP_NAV = [
  { href: APP_LINKS.pricing, label: "Тарифы и оплата" },
] as const;

export const CTA_SIGNUP = "Начать бесплатно";

/* Ссылка на телефон в формате tel: без пробелов и скобок. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
