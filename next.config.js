/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//   reactStrictMode: true,
//   env: {
//     api: process.env.APIURL,
//   },
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   register: true,
//   scope: '/app',
//   sw: 'service-worker.js'
// })
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     api: process.env.APIURL,
//   },
// }


// module.exports = withPWA
// const withPWA = require("next-pwa");
// module.exports = withPWA({
//   reactStrictMode: true,
//   env: {
//     api: process.env.APIURL,
//   },
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development',
//     register: true,
//     scope: '/',
//     sw: 'service-worker.js'
//   },
// });


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
});

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    api: process.env.APIURL,
  }
});
module.exports = nextConfig;