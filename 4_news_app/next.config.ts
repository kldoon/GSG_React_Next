import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [  // This will allow all external hosts/domains
      {
        hostname: "**",
      },
    ],
    domains: ['loremflickr.com']  // This to allow specific domains only
  }
};

export default nextConfig;
