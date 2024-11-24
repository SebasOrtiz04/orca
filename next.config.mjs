/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images:{
    formats:['image/avif','image/webp'],
    domains:['res.cloudinary.com']
  },
  env: {
    NEXT_URL_BASE_API: process.env.NEXT_URL_BASE_API,
  },
};

export default nextConfig
