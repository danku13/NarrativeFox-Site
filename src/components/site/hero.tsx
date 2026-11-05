import { ArrowUpRight, Mail } from "lucide-react";
import { EMAIL, TG_URL } from "./header";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="kicker">
            Агентская система продвижения<span className="dot" aria-hidden="true">·</span>для бизнеса без маркетингового отдела
          </p>

          <h1 id="hero-title" className="display-1">
            Рой агентов ведёт ваш маркетинг. Решения — за вами.
          </h1>

          <p className="deck">
            NarrativeFox строит стратегию на фактах о вашем бизнесе, готовит тексты
            для 13+ площадок и публикует их по расписанию. Telegram, VC.ru, Хабр,
            Дзен — там, где вас уже проверяют клиенты. Вы утверждаете решения,
            остальное делает система.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={TG_URL} target="_blank" rel="noopener noreferrer">
              Написать в Telegram
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
            <a className="btn btn-outline" href={`mailto:${EMAIL}`}>
              <Mail size={15} strokeWidth={2} aria-hidden="true" />
              {EMAIL}
            </a>
          </div>

          <p className="hero-note">Отвечает основатель лично, обычно в течение дня.</p>
        </div>

        <dl className="hero-facts" aria-label="Коротко о системе">
          <div className="hero-fact">
            <dt>Кто рядом с системой</dt>
            <dd>Основатели малого и среднего бизнеса, ИП, соло-фаундеры, CMO небольших агентств и команд.</dd>
          </div>
          <div className="hero-fact">
            <dt>Что закрывает</dt>
            <dd>Стратегию, факты, тексты, публикации и замер результата — одним контуром, без найма отдела.</dd>
          </div>
          <div className="hero-fact">
            <dt>Как устроено участие</dt>
            <dd>Вы просматриваете и утверждаете ключевые решения. Без вашего «да» ничего не выходит в свет.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
