/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.shopclues.com",
      "hips.hearstapps.com",
      "images.immediate.co.uk",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
