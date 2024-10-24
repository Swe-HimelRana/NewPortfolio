/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap', // Proxy to the API route
            },
        ];
    },
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ]
    }
}

module.exports = nextConfig
