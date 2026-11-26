/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pluggy.ai',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // No CORS headers: the API is only called by this app's own pages.
};

module.exports = nextConfig;