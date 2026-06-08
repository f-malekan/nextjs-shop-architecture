import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "weshoops.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "eynakchi.com",
      },
      { protocol: "https", hostname: "s4.uupload.ir" },
    ],
  },
};

export default nextConfig;
