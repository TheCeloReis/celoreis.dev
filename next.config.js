/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  i18n: {
    locales: ["en", "pt", "sp", "fr"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
