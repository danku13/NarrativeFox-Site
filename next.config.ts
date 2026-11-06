import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Автономная сборка: продакшен запускается как node .next/standalone/server.js
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Корень приложения: чтобы standalone-сборка не зависела от того,
  // лежит ли репозиторий внутри чужой директории с package.json
  turbopack: {
    root: import.meta.dirname,
  },
  // Отключает плавающий индикатор dev-сервера в углу экрана
  devIndicators: false,
};

export default nextConfig;
