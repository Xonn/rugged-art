/** @type {import('next').NextConfig} */

const nextConfig = {
  // Generate a deployable static site. Strapi is contacted only while the
  // frontend is built, not when a visitor opens a page.
  output: 'export',
  turbopack: {
    root: __dirname,
  },
  images: {
    // The Next image optimizer needs a running Next server and is not
    // available with a static export.
    unoptimized: true,
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
