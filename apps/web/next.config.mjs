import withTM from "next-transpile-modules";

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  future: { strictPostcssConfiguration: true },
  // experimental: { concurrentFeatures: true, serverComponents: true },
  // i18n: { locales: ["ja"], defaultLocale: "ja" },
};

export default withTM(["ui", "next-ui"])(nextConfig);
