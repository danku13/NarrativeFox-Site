import { ArrowUpRight } from "lucide-react";

export const TG_URL = "https://t.me/danku13";
export const EMAIL = "danku13@yandex.ru";

const NAV = [
  { href: "#how", label: "Как работает" },
  { href: "#for", label: "Кому подходит" },
  { href: "#price", label: "Сколько стоит" },
  { href: "#steps", label: "Что дальше" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a href="#top" className="wordmark" aria-label="NarrativeFox — на начало страницы">
          NarrativeFox
          <span className="fox-dot" aria-hidden="true" />
        </a>

        <nav className="nav-links" aria-label="Разделы страницы">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href={TG_URL} target="_blank" rel="noopener noreferrer" data-goal="tg-click">
          <span className="btn-full">Написать в Telegram</span>
          <span className="btn-short">Telegram</span>
          <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
