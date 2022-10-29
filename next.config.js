/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org']
  },
  experimental: {
    appDir: true,
    // enableUndici: true   use this if Node < v18
  },
};

module.exports = nextConfig;