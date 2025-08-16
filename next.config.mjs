/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.ddecor.com","drapestory.in"], // allow images from this host
  },
};

export default nextConfig;
