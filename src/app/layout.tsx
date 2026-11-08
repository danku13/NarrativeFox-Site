import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const SITE_URL = "https://narrativefox.tech";
const YM_ID = 114125409;

const sansBody = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const sansDisplay = Manrope({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const TITLE = "NarrativeFox: регулярные публикации в вашем тоне, без вечеров над текстами";
const DESCRIPTION =
  "Присылаете голосовые, заметки и документы. Система собирает из них план и черновики, держит расписание на ваших каналах и разбирает отклик. Утверждение каждого текста за вами.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s",
  },
  description: DESCRIPTION,
  keywords: [
    "NarrativeFox",
    "контент-маркетинг",
    "контент-маркетинг для B2B",
    "контент-маркетинг для экспертов",
    "ИИ-агенты",
    "Telegram",
    "Хабр",
    "VC.ru",
  ],
  authors: [{ name: "Daniel Kuzmichev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description:
      "Голосовые и заметки на входе. План, тексты в вашем тоне и расписание на выходе, отклик разбирается по итогам цикла.",
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "NarrativeFox",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NarrativeFox: регулярные публикации в вашем тоне",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${sansBody.variable} ${sansDisplay.variable} antialiased font-sans`}
      >
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');
ym(${YM_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://mc.yandex.ru/watch/${YM_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
