import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH to "/repo-name" for project pages (username.github.io/repo-name)
// Leave empty for user/org pages (username.github.io)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
