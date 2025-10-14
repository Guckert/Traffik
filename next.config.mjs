/** @type {import('next').NextConfig} */
const nextConfig = {
  // keep your existing Image Optimization config
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 1) Force apex -> www with a *permanent* redirect (308)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'traffik.nz' }], // apex
        destination: 'https://www.traffik.nz/:path*',
        permanent: true, // 308 (better SEO signal than 307)
      },
    ];
  },

  // 2) Give static brand assets long-lived, immutable caching
  async headers() {
    return [
      {
        source:
          '/:file(logo\\.png|logo-112\\.png|favicon-16x16\\.png|favicon-32x32\\.png|apple-touch-icon\\.png|android-chrome-192x192\\.png)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;

