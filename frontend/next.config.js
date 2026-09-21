/** @type {import('next').NextConfig} */

const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // The local Strapi server is not reliably reachable by the Next image
    // optimizer during development. Keep direct media URLs locally and use
    // the optimizer in production.
    unoptimized: process.env.NODE_ENV !== 'production',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'rugged-art.onrender.com',
      },
      {
        protocol: 'https',
        hostname: '*.neon.tech', // Autorise tous les sous-domaines de stockage Neon
      },
    ],
  },
}

module.exports = nextConfig
