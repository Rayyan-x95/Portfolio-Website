import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rayyan.ninety5.in';
  
  const staticRoutes: {
    route: string;
    priority: number;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  }[] = [
    { route: '', priority: 1.0, changeFrequency: 'daily' },
    { route: '/about', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/work', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/blogs', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/links', priority: 0.9, changeFrequency: 'weekly' },
    { route: '/services', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/labs', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/uses', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/guestbook', priority: 0.7, changeFrequency: 'monthly' },
    { route: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { route: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => {
    let isoDate = '2026-01-01';
    if (post.date.includes('JUN')) {
      const day = post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '20';
      isoDate = `2026-06-${day}`;
    } else if (post.date.includes('FEB')) {
      const day = post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '10';
      isoDate = `2026-02-${day}`;
    } else if (post.date.includes('JAN')) {
      const day = post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '01';
      isoDate = `2026-01-${day}`;
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(isoDate).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  return [...staticEntries, ...blogEntries];
}

