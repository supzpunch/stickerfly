/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stickerfly.uk',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
}

module.exports = nextConfig 