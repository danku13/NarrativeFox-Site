import { Logo } from "./header";

/*
  Подвал B2C-сайта NarrativeFox.
  Навигация повторяет актуальные B2C-разделы без B2B-ссылок.
*/

const NAV = [
  { href: "/#scenarios", label: "Для кого" },
  { href: "/#demo", label: "Пример работы" },
  { href: "/#tariffs", label: "Пилот и тарифы" },
  { href: "/how-it-works", label: "Как устроена система" },
  { href: "/pilot", label: "Условия пилота" },
];

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-stone-500">
            © 2026 NarrativeFox. Регулярные публикации в вашем голосе.
          </p>
        </div>
        <nav aria-label="Навигация в подвале">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
