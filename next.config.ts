import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  // Pin the workspace root: a stray /Users/package-lock.json otherwise makes
  // Next.js infer the wrong root (known checker_pro i18n gotcha).
  turbopack: {
    root: path.join(__dirname),
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
