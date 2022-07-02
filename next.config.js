const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_HOST}/:path*`, // Matched parameters can be used in the destination
      },
    ];
  },
  // 忽略ts打包错误
  typescript: {
    ignoreBuildErrors: true,
  },
  // 打包构建的目录
  // distDir: 'build',
};

module.exports = nextConfig;
