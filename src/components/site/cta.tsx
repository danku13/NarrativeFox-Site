import { ArrowUpRight, Mail } from "lucide-react";
import { EMAIL, TG_URL } from "./header";

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap">
        <p className="kicker">Следующий шаг за вами</p>
        <h2 id="cta-title" className="display-2" style={{ marginTop: 18 }}>
          Покажем, как это будет работать у вас
        </h2>
        <p className="cta-text">
          Расскажите о бизнесе — на созвоне разберём, что о вас видит клиент в
          поиске, и ваши каналы, покажем первые шаги системы. Без презентаций
          на сорок слайдов: конкретика по вашей ситуации.
        </p>

        <div className="cta-actions">
          <a className="btn btn-paper" href={TG_URL} target="_blank" rel="noopener noreferrer" data-goal="tg-click">
            Написать в Telegram
            <span className="btn-note">@danku13</span>
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className="btn btn-ghost" href={`mailto:${EMAIL}`} data-goal="mail-click">
            <Mail size={15} strokeWidth={2} aria-hidden="true" />
            {EMAIL}
          </a>
        </div>

        <p className="hero-note">Отвечает основатель лично — обычно в течение рабочего дня.</p>

        <p className="founder-note">
          За NarrativeFox — <strong>Daniel Kuzmichev</strong>: стратегия, система
          и каждое сообщение в Telegram. Без менеджеров и передачи «менеджеру
          по работе с клиентами».
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap row">
        <p className="wordmark" style={{ margin: 0 }}>
          NarrativeFox
          <span className="fox-dot" aria-hidden="true" />
        </p>
        <p className="footer-contacts">
          <a href={TG_URL} target="_blank" rel="noopener noreferrer" data-goal="tg-click">Telegram — @danku13</a>
          <a href={`mailto:${EMAIL}`} data-goal="mail-click">{EMAIL}</a>
        </p>
        <p style={{ margin: 0 }}>© 2026 NarrativeFox</p>
      </div>
    </footer>
  );
}
