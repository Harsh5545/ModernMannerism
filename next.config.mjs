/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true,
    }

});
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

export default withPWA(nextConfig);



