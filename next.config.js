/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "swiperjs.com", "www.koreanbapsang.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
  i18n: {
    locales: ["vi"],
    defaultLocale: "vi",
  },
};

module.exports = nextConfig;
