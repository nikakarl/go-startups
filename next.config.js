/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["default", "en", "es", "fr", "ua"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
};
