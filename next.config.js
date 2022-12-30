/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: { domains: ['i.imgur.com', 'img.youtube.com'] },

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },

  async rewrites() {
    return [{ source: '/home', destination: '/' }];
  },
};

module.exports = nextConfig;
