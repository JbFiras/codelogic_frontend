/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export', // Enable static export
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '**',
      },
    ],
    deviceSizes: [640, 750, 1080, 1200, 1920], // Adjust for responsive images
    formats: ['image/avif', 'image/webp'], // Use modern formats
    unoptimized: true,
  },

  // Add custom headers
  async headers() {
    return [
      {
        source: '/_next/static/:path*', // Match all static assets in the `_next/static/` folder
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }, // Cache for 1 year
        ],
      },
      {
        source: '/:path*{/}*', // Optionally set caching for other routes
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }, // Disable caching for HTML files
        ],
      },
    ];
  },
};

export default nextConfig;
