/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                hostname: 'https://scontent.xx.fbcdn.net/*',
            },
            {
                hostname: 'https://avatars.githubusercontent.com/*',
            },
        ],
    },
};

export default nextConfig;



