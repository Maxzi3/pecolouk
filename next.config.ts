/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "cdn.sanity.io",
      "unsplash.com",
    ],
  },
};

module.exports = nextConfig;
