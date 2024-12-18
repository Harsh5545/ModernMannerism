/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com', // Gmail profile picture URL pattern
            },
            {
                hostname: 'https://scontent.xx.fbcdn.net/*', // Facebook profile picture URL pattern
            },
            {
                hostname: 'https://avatars.githubusercontent.com/*', // GitHub profile picture URL pattern
            },
        ],
    },
};

export default nextConfig;



