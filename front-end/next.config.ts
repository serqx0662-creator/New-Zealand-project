import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Настройка для картинок из Strapi
  images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '1337',
          pathname: '/uploads/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
      ],
    },
  // Твой существующий редирект
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;