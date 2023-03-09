/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  sw: 'service-worker.js',
  disable: process.env.NODE_ENV === 'development',
  scope: '/',
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  fallbacks: {
    image: '/icon-512x512.png'
  }
});

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    api: process.env.APIURL,
  }
});
module.exports = nextConfig;