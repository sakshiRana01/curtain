/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.ddecor.com"], // allow images from this host
  },
};

export default nextConfig;
