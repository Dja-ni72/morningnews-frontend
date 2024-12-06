/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.vox-cdn.com', 'techcrunch.com'],
  },
};

module.exports = nextConfig;
