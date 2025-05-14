import type { NextConfig } from "next";

module.exports = {
  images: {
    remotePatterns: [new URL('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/**')],
  },
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

