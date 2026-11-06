import type { NextConfig } from "next";

/*
  Два продакшен-режима сборки:

  1. Сервер (по умолчанию): output "standalone", продакшен запускается
     как node .next/standalone/server.js. В сборку входит API заявок.

  2. GitHub Pages (NEXT_OUTPUT=export, скрипт build:static): статический
     экспорт в каталог out/. Домен narrativefox.tech привязан к корню
     сайта, поэтому basePath не нужен; NEXT_BASE_PATH задаётся только
     для хостинга вида user.github.io/repo.
*/

const isStaticExport = process.env.NEXT_OUTPUT === "export";
const basePath = (process.env.NEXT_BASE_PATH ?? "").trim();

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  // В статике каждая страница лежит как catalog/index.html:
  // так чистые ссылки вида /solo работают на любом статическом хостинге.
  ...(isStaticExport ? { trailingSlash: true } : {}),
  ...(basePath ? { basePath } : {}),
  // Оптимизация картинок недоступна без сервера: отдаём как есть.
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Корень приложения: чтобы сборка не зависела от того,
  // лежит ли репозиторий внутри чужой директории с package.json
  turbopack: {
    root: import.meta.dirname,
  },
  // Отключает плавающий индикатор dev-сервера в углу экрана
  devIndicators: false,
};

export default nextConfig;
