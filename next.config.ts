import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // trailingSlash: true,
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
