import type { NextConfig } from "next";

// Your GitHub repo is "LakshmiRasoi" → site lives at crazzylazy.github.io/LakshmiRasoi
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/LakshmiRasoi";

const nextConfig: NextConfig = {
  output: "export",       // static HTML export — required for GitHub Pages
  basePath,
  trailingSlash: true,    // generates /about/index.html instead of /about.html
  images: {
    unoptimized: true,    // next/image optimization server not available on static hosts
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
