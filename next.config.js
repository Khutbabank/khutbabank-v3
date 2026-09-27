/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'img.khutbabank.com',
            },
        ],
    },
    outputFileTracingIncludes: {
        '**/*': [
            './node_modules/pg-cloudflare/dist/**',
            './node_modules/pg-cloudflare/esm/**',
        ],
    },
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev());
