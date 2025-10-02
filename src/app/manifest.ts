import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Traffik - AI Web Optimisation',
    short_name: 'Traffik',
    description: 'AI website audits and Google Business Profile optimization for NZ businesses',
    start_url: '/',
    display: 'standalone',
    background_color: '#07090b',
    theme_color: '#00dcc0',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
