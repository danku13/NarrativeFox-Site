import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NarrativeFox — агентская система продвижения",
  description:
    "Рой ИИ-агентов ведёт маркетинг вашего бизнеса: стратегия на фактах, тексты для 13+ площадок, публикации по расписанию. Решения остаются за вами.",
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
  openGraph: {
    title: "NarrativeFox — агентская система продвижения",
    description:
      "Рой ИИ-агентов ведёт маркетинг вашего бизнеса: стратегия на фактах, тексты для 13+ площадок, публикации по расписанию. Решения остаются за вами.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
