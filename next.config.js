const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {},
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:8080/:path*', // Matched parameters can be used in the destination
      },
    ];
  },
});

module.exports = nextConfig;
