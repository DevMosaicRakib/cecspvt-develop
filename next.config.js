/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['admin.cecsengineer.com',"admin.cecsengineer.comundefined"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: `${process.env.NEXT_PUBLIC_STRAPI_SERVER_PROTOCOL}`,
        hostname: `${process.env.NEXT_PUBLIC_STRAPI_SERVER_HOST}`,
        port: `${process.env.NEXT_PUBLIC_STRAPI_SERVER_PORT}`,
      },
    ],
  },
};

module.exports = nextConfig;
