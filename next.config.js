const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {},
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/index',
  //       permanent: true,
  //     },
  //   ];
  // },
});

module.exports = nextConfig;
