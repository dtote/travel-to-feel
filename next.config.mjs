/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/travel-to-feel' : '',
    assetPrefix: isProd ? '/travel-to-feel/' : '',
};

export default nextConfig;
