/*
  Сетка тарифов B2C: единый источник для блока на /solo, /business и /pilot.
  Цифры взяты из docs/product/pricing-and-unit-economics.md §1 в репозитории
  приложения NarrativeFox (сетка от 2026-11-20).

  На сайте сетка справочная: актуальные цены, оплата и документы живут
  на витрине приложения, ссылки в APP_LINKS. Цена на сайте и на витрине
  обязана совпадать, при смене сетки правится оба места.

  Оси тарифа: площадки, публикации в неделю на площадку, циклы и посты.
*/

export type TariffPlan = {
  key: string;
  name: string;
  for: string;
  price: string;
  priceNote: string;
  platforms: string;
  posts: string;
  cycles: string;
  featured: boolean;
};

export const TARIFF_GRID = {
  eyebrow: "Тарифы",
  titleDark: "Три объёма работы,",
  titleMuted: "цена без сюрпризов",
  lead: "Тариф задаёт объём: сколько площадок ведётся, как часто выходят публикации и сколько циклов проходит за месяц. Память бренда и база знаний входят в каждый тариф, платформенные ключи ИИ тоже.",
  featureLabels: {
    platforms: "Площадки",
    posts: "Публикации",
    cycles: "Циклы в месяц",
  },
  plans: [
    {
      key: "start",
      name: "Старт",
      for: "Один канал ожил: первый устойчивый цикл публикаций",
      price: "2 490 ₽ / мес",
      priceNote: "при оплате за месяц",
      platforms: "до 2",
      posts: "до 3 в неделю на площадку",
      cycles: "12 циклов, до 24 постов",
      featured: false,
    },
    {
      key: "pro",
      name: "Профессионал",
      for: "Несколько направлений и площадок без авралов",
      price: "5 990 ₽ / мес",
      priceNote: "при оплате за месяц",
      platforms: "до 4",
      posts: "до 6 в неделю на площадку",
      cycles: "24 цикла, до 96 постов",
      featured: true,
    },
    {
      key: "expert",
      name: "Эксперт",
      for: "Вся мощность адаптации и переупаковки архива",
      price: "14 990 ₽ / мес",
      priceNote: "при оплате за месяц",
      platforms: "до 6",
      posts: "до 12 в неделю на площадку",
      cycles: "48 циклов, до 288 постов",
      featured: false,
    },
  ] as TariffPlan[],
  addonsTitle: "Докупки к любому тарифу",
  addons: [
    { term: "+1 площадка", price: "590 ₽ / мес", desc: "если каналов стало больше" },
    { term: "Пакет +4 цикла", price: "790 ₽", desc: "разовая докупка на расчётный период" },
  ],
  pricingLink: "Актуальные цены и условия: на странице тарифов",
  payment: "Оплата картой или через СБП",
  docsLabel: "Документы:",
  docs: [
    { href: "offer", label: "оферта" },
    { href: "privacy", label: "политика обработки персональных данных" },
    { href: "refund", label: "оплата и возврат" },
  ] as { href: "offer" | "privacy" | "refund"; label: string }[],
  cta: "Начать бесплатно",
  ctaNote: "Регистрация и оплата в приложении. Тариф можно сменить в любой момент.",
};
