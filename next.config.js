/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
