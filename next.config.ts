import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tocchan-web.sakura.ne.jp",
      },
    ],
  },
};

export default nextConfig;
