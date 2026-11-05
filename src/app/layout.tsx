import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://narrativefox.tech";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  style: ["normal", "italic"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const TITLE = "NarrativeFox — агентская система продвижения";
const DESCRIPTION =
  "Система ИИ-агентов ведёт контент-маркетинг вашего бизнеса: стратегия на фактах, тексты под 13+ площадок, публикации по расписанию. Решения остаются за вами.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NarrativeFox",
    "контент-маркетинг",
    "ИИ-агенты",
    "продвижение бизнеса",
    "Telegram",
    "VC.ru",
    "Хабр",
    "Дзен",
  ],
  authors: [{ name: "Daniel Kuzmichev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "NarrativeFox",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NarrativeFox — система ИИ-агентов ведёт ваш маркетинг. Решения — за вами.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfcf8",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NarrativeFox",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Daniel Kuzmichev",
    url: "https://t.me/danku13",
  },
  sameAs: ["https://t.me/danku13"],
};

/**
 * До отрисовки помечаем документ классом `js`: CSS прячет .reveal только
 * при работающем JS. Если гидрация не случится за 3 секунды — класс
 * снимается, и контент появляется статично (страховка от «вечной
 * невидимости» секций при сбойном бандле).
 */
const jsClassScript = `document.documentElement.classList.add("js");setTimeout(function(){document.documentElement.classList.contains("reveal-ready")||document.documentElement.classList.remove("js")},3e3);`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsClassScript }} />
      </head>
      <body
        className={`${display.variable} ${body.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
