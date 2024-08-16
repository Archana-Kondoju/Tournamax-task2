// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode for highlighting potential problems
    swcMinify: true, // Enables minification using SWC
    experimental: {
      appDir: true, // Use experimental app directory feature (if applicable)
    },
  };
  
  module.exports = nextConfig;
  