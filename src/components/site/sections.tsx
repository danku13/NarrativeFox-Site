import { ArrowRight, ShieldCheck, X } from "lucide-react";
import { TG_URL } from "./header";

/* ---------- Полоса цифр ---------- */

const STATS = [
  { num: "13", sup: true, lbl: "площадок в сетке — начинаем с тех, где сидит ваша аудитория" },
  { num: "15–30", sup: false, lbl: "минут наговорить о бизнесе голосом — этого хватает для старта" },
  { num: "100%", sup: false, lbl: "публикаций выходят только после вашего подтверждения" },
];

export function Stats() {
  return (
    <section className="stats" aria-label="Система в цифрах">
      <div className="wrap stats-row">
        {STATS.map((s) => (
          <div className="stat" key={s.num}>
            <p className="num">
              {s.num}
              {s.sup && <sup>+</sup>}
            </p>
            <p className="lbl">{s.lbl}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 01 · Знакомая картина ---------- */

const PAINS = [
  {
    title: "«Я не пишу — бизнес не растёт»",
    text: "Продукт, клиенты, операционка съедают вечер. До постов руки доходят в лучшем случае раз в месяц: подписчики отвыкают и глушат канал, а Дзен после паузы разгоняется неделями.",
  },
  {
    title: "Копирайтер не знает вашу тему",
    text: "Внешнему автору не хватает знания продукта и рынка. Правите тексты сами — и теряете ещё один вечер, только уже с подрядчиком.",
  },
  {
    title: "Тексты от ИИ гладкие и мёртвые",
    text: "Шаблонные обороты, одинаковые ритмы, «в современном мире». Читатель чувствует синтетику за секунды и листает дальше, а на Хабре такой пост ещё и заминусуют в комментариях.",
  },
  {
    title: "Один текст летит во все каналы",
    text: "Telegram, Дзен и VC.ru устроены по-разному, но в них уходит одна и та же копипаста. Конверсия из неё — близкая к нулю.",
  },
  {
    title: "Охваты есть, заявок нет",
    text: "Просмотры и лайки не связываются со сделками. Разобрать, какой пост привёл клиента, не получается — контент ведётся вслепую.",
  },
  {
    title: "Вас гуглят перед сделкой",
    text: "Клиент или инвестор ищет вас по названию — и находит пустоту или прошлогодние обещания. Для длинных B2B-циклов это потерянные контракты.",
  },
];

export function Problems() {
  return (
    <section id="problems" aria-labelledby="problems-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num" aria-hidden="true">01</span>
          <h2 id="problems-title">Знакомая картина</h2>
        </div>
        <p className="sec-lead reveal">Шесть ситуаций, в которых живут большинство небольших бизнесов. Узнаёте хотя бы две — это про ваш бизнес.</p>

        <div className="pain-list">
          {PAINS.map((p, i) => (
            <article className="pain reveal" key={p.title}>
              <span className="idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="pain-close body-text reveal">
          Дело не в лени и не в людях. Регулярный маркетинг — это полноценная
          работа: исследование, стратегия, продакшн, аналитика. Нанимать под неё
          команду дорого, тянуть самому — некогда.
        </p>
      </div>
    </section>
  );
}

/* ---------- 02 · Что делает система ---------- */

const CASCADE = [
  {
    label: "Шаг первый",
    title: "Доверие",
    text: "Регулярные полезные публикации там, где вас проверяют: VC.ru, Хабр, Telegram, Дзен. Аудитория привыкает к вашему голосу и экспертизе.",
  },
  {
    label: "Шаг второй",
    title: "Действие",
    text: "Каждая кампания ведёт к целевому действию: заявке, вопросу в личку, переходу, записи на разбор. Действие задаётся до того, как написан текст.",
  },
  {
    label: "Шаг третий",
    title: "Сделка",
    text: "Заявки превращаются в выручку. Система видит отклик — переходы, вопросы, заявки, — связывает его с публикациями и пересобирает план от того, что сработало.",
  },
];

export function WhatItIs() {
  return (
    <section id="what" aria-labelledby="what-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num" aria-hidden="true">02</span>
          <h2 id="what-title">Система делает эту работу целиком</h2>
        </div>

        <div className="measure body-text reveal">
          <p>
            NarrativeFox — агентская система продвижения. Специализированные
            агенты делят работу между собой: одни исследуют ваш рынок, другие
            хранят факты о бизнесе, третьи выстраивают послания, пишут и
            проверяют тексты, готовят публикации по каналам. Роль человека —
            решения: что обещаем, что публикуем, что меняем.
          </p>
        </div>

        <div className="gap-demo reveal" aria-labelledby="gap-title">
          <h3 id="gap-title">Почему это не «ещё один текст из нейросети»</h3>
          <p className="body-text">
            Штампы появляются там, где нет фактов. У системы они есть — ваши.
            Дальше цепочка: база фактов → драматургия под площадку → отдельная
            проверка против ИИ-штампов. Три рубежа, а не один запрос в чат-бот.
          </p>
          <div className="xmp">
            <figure className="xmp-card">
              <figcaption>Типичный ИИ-текст</figcaption>
              <blockquote>
                «Мы предлагаем комплексный подход к продвижению вашего бизнеса
                и помогаем достигать новых высот в современном конкурентном мире».
              </blockquote>
            </figure>
            <figure className="xmp-card fox">
              <figcaption>Текст на фактах вашего бизнеса</figcaption>
              <blockquote>
                «Клиент ждёт отгрузку за день, а не «комплексный подход».
                Поэтому ходовые позиции всегда на складе, а ответ на запрос —
                в течение 20 минут».
              </blockquote>
            </figure>
          </div>
          <p className="caption">Иллюстрация принципа: слева — текст без опоры на факты, справа — на фактах конкретного бизнеса.</p>
        </div>

        <div className="cascade reveal" style={{ marginTop: "clamp(32px, 5vw, 52px)" }}>
          {CASCADE.map((c, i) => (
            <div className="step" key={c.title}>
              {i > 0 && <span className="arrow" aria-hidden="true">↓</span>}
              <p className="kicker">{c.label}</p>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <figure className="pullquote reveal">
          <div className="mark" aria-hidden="true">&ldquo;</div>
          <blockquote>
            Мы меряем не охваты, а действия: заявки, вопросы, записи. Охваты — фон, а не результат.
          </blockquote>
          <figcaption>Принцип, по которому работает система</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- 03 · Как работает ---------- */

const PHASES = [
  {
    title: "Разговор вместо брифа",
    text: "Вы наговариваете голосом, что продаёте, кому и чем отличаетесь. 15–30 минут вместо анкеты на сорок полей. Остальное система достраивает из ваших материалов и открытых источников — и показывает, откуда взято каждое утверждение, а что пока допущение.",
  },
  {
    title: "Факты отдельно, предположения отдельно",
    text: "Всё, что известно о вашем бизнесе и рынке, хранится с маркировкой: подтверждено или пока предположение. Предположения не прикидываются фактами — их проверяют серией публикаций и откликом аудитории.",
  },
  {
    title: "Цепочки, а не отдельные посты",
    text: "Сначала появляется карта публикаций: какое послание, в каком порядке, на какой площадке. Вы правите карту за секунды. Тексты пишутся потом — под утверждённую драматургию, а не наоборот.",
  },
  {
    title: "Выход и петля",
    text: "Публикации выходят по расписанию на ваших каналах. Система собирает отклик и делает выводы по сериям публикаций — что сработало, что нет, что проверить дальше — и пересобирает план. Цикл повторяется без вашего участия в рутине.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num" aria-hidden="true">03</span>
          <h2 id="how-title">Как работает</h2>
        </div>
        <p className="sec-lead reveal">Четыре фазы. Внутри — специализированные роли агентов и проверки между этапами, снаружи — понятный процесс, в котором каждый шаг виден и правится.</p>

        <div className="phases">
          {PHASES.map((p, i) => (
            <article className="phase reveal" key={p.title}>
              <span className="no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>

        <div className="invariant reveal">
          <ShieldCheck size={20} strokeWidth={1.75} aria-hidden="true" />
          <p>
            <strong>Публикация всегда выходит с вашего подтверждения.</strong>{" "}
            После вашего «да» выходит ровно тот текст, который вы видели, — без
            правок за вашей спиной. Это принцип системы, а не настройка,
            которую можно забыть включить.
          </p>
        </div>

        <p className="inline-cta reveal">
          Хотите увидеть то же самое на своих каналах?{" "}
          <a className="link" href={TG_URL} target="_blank" rel="noopener noreferrer" data-goal="tg-click">Напишите пару строк в Telegram</a>{" "}
          — разберём ещё до созвона.
        </p>
      </div>
    </section>
  );
}

/* ---------- 04 · Чего не делаем ---------- */

const NOT_DOING = [
  {
    strong: "Не спамим чужие пространства.",
    rest: " Холодные рассылки и авто-комментарии в чужих чатах — не метод. Это баны и репутационные риски для B2B.",
  },
  {
    strong: "Не публикуем без вашего «да».",
    rest: " Даже когда вы делегируете системе рутинные решения, публикация остаётся за человеком.",
  },
  {
    strong: "Не выдаём предположения за факты.",
    rest: " Маркировка «подтверждено» и «пока предположение» обязательна для каждого утверждения в системе.",
  },
  {
    strong: "Не пишем «пластиковым» языком.",
    rest: " За ИИ-штампами следит отдельная проверка: текст обязан звучать как живой человек из вашей ниши.",
  },
  {
    strong: "Не выносим чувствительное.",
    rest: " Суммы сделок, имена клиентов и детали под NDA помечаются и не попадают в публикации без вашего решения.",
  },
  {
    strong: "Не обещаем вирусных охватов в первый месяц.",
    rest: " Обещаем систему, которая работает регулярно, проверяет гипотезы и копит результат.",
  },
];

export function NotDoing() {
  return (
    <section id="limits" aria-labelledby="limits-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num" aria-hidden="true">04</span>
          <h2 id="limits-title">Чего мы не делаем</h2>
        </div>
        <p className="sec-lead reveal">Границы системы — такие же правила, как и возможности. Лучше знать их сразу.</p>

        <div className="no-list">
          {NOT_DOING.map((n) => (
            <div className="no-item reveal" key={n.strong}>
              <X size={15} strokeWidth={2.25} aria-hidden="true" />
              <p>
                <strong>{n.strong}</strong>
                {n.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 · Кому подходит ---------- */

const AUDIENCES = [
  {
    role: "Соло-фаундер · ИП",
    title: "Пишете сами и между делом",
    text: "Система забирает рутину целиком: темы, тексты, расписание, площадки. Вам остаются голос и решения — то, что не отдать никому.",
  },
  {
    role: "Основатели малого бизнеса",
    title: "Маркетолога в штате нет",
    text: "Полный контур — стратегия, продакшн, публикации, замер — за долю стоимости отдела. Без найма, онбординга и микроменеджмента.",
  },
  {
    role: "Средний бизнес · команда",
    title: "Несколько основателей — несколько голосов",
    text: "У каждого своя ветка каналов и своя интонация, но общая база фактов и единое позиционирование. Ветки не разъезжаются, аналитика — консолидированная.",
  },
  {
    role: "CMO агентств и компаний",
    title: "Команда — над стратегией",
    text: "Продакшн-мощность без расширения штата: рутину и план публикаций держит система. Команда остаётся над стратегией, клиентами и большими решениями.",
  },
];

export function Audiences() {
  return (
    <section id="for" aria-labelledby="for-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num" aria-hidden="true">05</span>
          <h2 id="for-title">Кому подходит</h2>
        </div>

        <div className="audiences">
          {AUDIENCES.map((a) => (
            <article className="aud reveal" key={a.role}>
              <p className="role">{a.role}</p>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 · Сколько стоит ---------- */

export function Economics() {
  return (
    <section id="price" aria-labelledby="price-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num" aria-hidden="true">06</span>
          <h2 id="price-title">Сколько это стоит</h2>
        </div>

        <div className="econ">
          <div className="body-text reveal">
            <p>
              Ориентир — 15–30 тысяч рублей в месяц за полный контур:
              стратегию, тексты, публикации и аналитику. Для сравнения: сбор
              команды из маркетолога-стратега, копирайтера и SMM обходится
              примерно в 250 тысяч в месяц плюс ваше время на управление ими.
            </p>
            <p>
              Почему вилка ниже команды: продакшн выполняют агенты, а не люди
              на зарплате. Вы платите за работу контура целиком, а не за рабочие
              часы специалистов.
            </p>
            <p>
              Точная вилка зависит от числа каналов и объёма публикаций —
              соберём её под ваш случай после первого созвона, до любых
              обязательств.
            </p>
          </div>

          <div className="econ-nums reveal" aria-label="Сравнение стоимости">
            <div className="econ-num fox">
              <span className="val">15–30 тыс ₽</span>
              <span className="what">в месяц — полный контур на системе</span>
            </div>
            <div className="econ-num">
              <span className="val">≈ 250 тыс ₽</span>
              <span className="what">в месяц — штатная команда с сопутствующими расходами</span>
            </div>
            <div className="econ-num fox">
              <span className="val">220–235 тыс ₽</span>
              <span className="what">разница каждый месяц — остаётся в вашем бизнесе</span>
            </div>
          </div>
        </div>

        <p className="econ-honest body-text reveal">
          Честно про сроки: контент-маркетинг — накопительный канал. Первые
          целевые действия обычно приходят в течение первого цикла, устойчивый
          поток — через два-три месяца системной работы.
        </p>
      </div>
    </section>
  );
}

/* ---------- 07 · Что дальше ---------- */

const STEPS = [
  {
    title: "Пишете пару строк",
    text: "В Telegram или на почту: о бизнесе, каналах и цели. Этого достаточно для старта.",
  },
  {
    title: "Созвон на 30 минут",
    text: "Разбираем ваши каналы и то, что о вас видит клиент в поиске. Вы задаёте вопросы и получаете картину, что можно улучшить.",
  },
  {
    title: "Пилот",
    text: "Собираем первую цепочку публикаций под ваш сегмент. Вы видите тексты, карту шагов и процесс в работе.",
  },
  {
    title: "Решение",
    text: "Смотрите реальные материалы и метрики первого цикла — качество текстов и работу системы. Поток заявок приходит на горизонте двух-трёх месяцев. Продолжаем — или расходимся без обязательств.",
  },
];

export function NextSteps() {
  return (
    <section id="steps" aria-labelledby="steps-title">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num" aria-hidden="true">07</span>
          <h2 id="steps-title">Что дальше</h2>
        </div>
        <p className="sec-lead reveal">Четыре шага от первого сообщения до работающего контура.</p>

        <div className="steps">
          {STEPS.map((s, i) => (
            <article className="step-card reveal" key={s.title}>
              <span className="no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" style={{ color: "var(--accent-ink)", marginTop: 10 }} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
