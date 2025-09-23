import type { NextConfig } from "next";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },
};

export default nextConfig;
