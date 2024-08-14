/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/travel-to-feel',
    assetPrefix: '/travel-to-feel/',
    images: {
        remotePatterns: {
            protocol: 'https',
            hostname: 'dtote.github.io',
            pathname: 'travel-to-feel'
        }
    }
};

export default nextConfig;
