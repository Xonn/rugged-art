/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Static export is only for the production build. Local development keeps
  // the normal Next.js server so HMR and request-time rendering work.
  ...(isProduction ? { output: 'export' } : {}),
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
