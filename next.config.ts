import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lv.almokhlif3od.com",
      },
      {
        protocol: "https",
        hostname: "oud.azureedge.net",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
