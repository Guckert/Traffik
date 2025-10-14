// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.traffik.nz';
  const now = new Date();

  // List the routes you want indexed (exclude thank-you, etc.)
  const pages: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'];
    priority: number;
  }> = [
    { path: '/',              changeFrequency: 'weekly',  priority: 1.0 },
    { path: '/services',      changeFrequency: 'monthly', priority: 0.8 },
    { path: '/audit',         changeFrequency: 'monthly', priority: 0.8 },
    { path: '/gbp',           changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ai-visibility', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/service-area',  changeFrequency: 'monthly', priority: 0.6 },
    { path: '/contact',       changeFrequency: 'yearly',  priority: 0.5 },
    { path: '/privacy',       changeFrequency: 'yearly',  priority: 0.3 },
    { path: '/terms',         changeFrequency: 'yearly',  priority: 0.3 },
    { path: '/refunds',       changeFrequency: 'yearly',  priority: 0.3 },
  ];

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
