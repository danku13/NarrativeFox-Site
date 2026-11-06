/* Типы контент-моделей сайта v3.0: два контура, четыре роли. */

export type SoloRole = "expert" | "blogger";
export type BusinessRole = "b2b" | "tech";
export type RoleKey = SoloRole | BusinessRole;

/* Макро-контур, из которого отправлена заявка. */
export type Contour = "gateway" | "solo" | "business";

/* Роль внутри контура. Пустая строка: роль неизвестна. */
export type SegmentState = RoleKey | "";

/* Какая кнопка открыла форму. */
export type EntryPoint =
  | "hero_cta"
  | "case_want_same"
  | "numbers_cta"
  | "fit_passed_cta"
  | "pilot_cta"
  | "tariff_cta"
  | "case_discuss_cta"
  | "final_form"
  | "sticky_header";

export interface SegmentContent {
  key: RoleKey;
  chip: string;
  overline: string;
  heroLead: string;
  portrait: string;
  mainClaim: string;
  claims: string[];
  pains: string[];
  caseStudy: {
    input: string;
    system: string;
    output: string;
  };
  situations: string[];
  objections: { q: string; a: string }[];
  notFit: string;
  channels: string;
  faq: { q: string; a: string }[];
  ctaLead: string;
}
