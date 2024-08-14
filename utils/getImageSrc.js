export function getImageSrc(src) {
    const isProd = process.env.NODE_ENV === 'production'
    return isProd ? `.${src}` : src
}