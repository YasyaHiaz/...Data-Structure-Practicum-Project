/** @type {import('next').NextConfig} */
const nextConfig = {
    image: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io"
            },
        ],
    },
};

export default nextConfig;