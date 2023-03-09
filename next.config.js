/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    api: process.env.APIURL,
  },
}

module.exports = nextConfig
