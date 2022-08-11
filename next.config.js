/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ['i.imgur.com'] },
  experimental: { images: { allowFutureImage: true } },

  async rewrites() {
    return [{ source: '/home', destination: '/' }];
  },
};

// module.exports = nextConfig

module.exports = nextConfig;
