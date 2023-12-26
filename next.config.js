/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars1.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            }
        ]
    }
}

module.exports = nextConfig
