const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {},
});

module.exports = nextConfig;
