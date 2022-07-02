import withLess from 'next-with-less';

/** @type {import('next').NextConfig} */
const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {},
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://106.13.233.140:8081/:path*', // Matched parameters can be used in the destination
      },
    ];
  },
  // 忽略ts打包错误
  typescript: {
    ignoreBuildErrors: true,
  },
  // 打包构建的目录
  distDir: 'build',
});

module.exports = nextConfig;
