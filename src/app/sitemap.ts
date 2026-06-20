import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rayyan.ninety5.in';
  
  const routes = [
    '',
    '/work',
    '/about',
    '/services',
    '/contact',
    '/blogs',
    '/labs',
    '/guestbook',
    '/links',
    '/privacy',
    '/terms',
    '/uses',
  ];

  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '/work' || route === '/blogs' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route === '/work' || route === '/blogs' ? 0.8 : 0.5,
  }));

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date.includes("JUN") 
      ? `2026-06-${post.date.match(/\d+/)?.[0]?.padStart(2, '0') || '20'}`
      : `2026-01-01`),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
