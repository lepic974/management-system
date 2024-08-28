/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverActions: true
    },
    transpilePackages: ['lucide-react'],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "unsplash.com",
                pathname: "**"
            }
        ]
    },
    output: "standalone"
};

export default nextConfig
