/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [{ source: '/home', destination: '/' }];
  },
};

// module.exports = nextConfig

module.exports = nextConfig;
