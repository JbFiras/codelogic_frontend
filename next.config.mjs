/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  trailingSlash: true, // Adds a trailing slash to all paths
  images: {
    domains: [''], // Add allowed domains here
  },
};

export default nextConfig;
