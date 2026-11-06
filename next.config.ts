import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Автономная сборка: продакшен запускается как node .next/standalone/server.js
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Отключает плавающий индикатор dev-сервера в углу экрана
  devIndicators: false,
};

export default nextConfig;
