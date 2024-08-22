/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

// const nextConfig = {
//     output: isProd ? 'export' : 'standalone',
//     basePath: isProd ? '/travel-to-feel' : '',
//     assetPrefix: isProd ? '/travel-to-feel/' : '',
// };

const nextConfig = {
    output: isProd ? 'export' : 'standalone',
    basePath: '',
    assetPrefix: '',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config
    },
}

export default nextConfig
