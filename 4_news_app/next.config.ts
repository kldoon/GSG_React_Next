import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [  // This will allow all external hosts/domains
      {
        hostname: "**",
      },
    ],
    domains: ['loremflickr.com']  // This to allow specific domains only
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          }
        ],
      },
    ];
  },
};

export default nextConfig;
