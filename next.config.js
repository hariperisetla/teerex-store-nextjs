/** @type {import('next').NextConfig} */
const nextConfig = {
  // Whitelisting image url for next.js
  images: {
    domains: ["geektrust.s3.ap-southeast-1.amazonaws.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
