import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const SITE_URL = "https://narrativefox.tech";

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

const TITLE = "NarrativeFox: контент-маркетинг для B2B без целого отдела";
const DESCRIPTION =
  "NarrativeFox превращает ваши голосовые сообщения, заметки и документы в стратегию, публикации для разных площадок и регулярный разбор того, какой отклик они дают. Тексты и ключевые решения утверждаете вы, остальное делает система.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "NarrativeFox",
    "контент-маркетинг",
    "контент-маркетинг для B2B",
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
      "Голосовые сообщения, заметки и документы превращаются в стратегию, публикации для площадок и разбор отклика. Решения утверждаете вы, остальное делает система.",
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "NarrativeFox",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NarrativeFox: контент-маркетинг для B2B без целого отдела",
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
      </body>
    </html>
  );
}
