import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog-data';

/**
 * Safely converts date strings like "JUN 20, 2026" or standard ISO strings
 * into a valid W3C ISO date-time string for sitemap crawlers.
 */
function parsePostDate(dateStr: string): string {
  try {
    const parsed = new Date(dateStr);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  } catch {
    // Fallback to manual regex parsing if Date constructor fails
  }

  const months: Record<string, string> = {
    JAN: '01', FEB: '02', MAR: '03', APR: '04', MAY: '05', JUN: '06',
    JUL: '07', AUG: '08', SEP: '09', OCT: '10', NOV: '11', DEC: '12'
  };

  const match = dateStr.match(/([A-Za-z]+)\s+(\d+),\s+(\d{4})/);
  if (match) {
    const month = months[match[1].toUpperCase()] || '01';
    const day = match[2].padStart(2, '0');
    const year = match[3];
    return `${year}-${month}-${day}T00:00:00.000Z`;
  }

  return '2026-06-20T00:00:00.000Z';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rayyan.ninety5.in';

  // Find the most recent blog post date to accurately represent site update cadence
  const latestBlogDate = posts.length > 0 ? parsePostDate(posts[0].date) : new Date().toISOString();

  interface StaticRouteConfig {
    route: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    lastModified: string;
    images?: string[];
  }

  const staticRoutes: StaticRouteConfig[] = [
    {
      route: '',
      priority: 1.0,
      changeFrequency: 'weekly',
      lastModified: latestBlogDate,
      images: [`${baseUrl}/og-image.png`, `${baseUrl}/profile.webp`],
    },
    {
      route: '/about',
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: '2026-06-20T00:00:00.000Z',
      images: [`${baseUrl}/profile.webp`],
    },
    {
      route: '/work',
      priority: 0.9,
      changeFrequency: 'weekly',
      lastModified: '2026-06-20T00:00:00.000Z',
      images: [`${baseUrl}/og-image.png`],
    },
    {
      route: '/blogs',
      priority: 0.9,
      changeFrequency: 'weekly',
      lastModified: latestBlogDate,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      route: '/services',
      priority: 0.9,
      changeFrequency: 'monthly',
      lastModified: '2026-06-20T00:00:00.000Z',
      images: [`${baseUrl}/og-image.png`],
    },
    {
      route: '/labs',
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: '2026-06-18T00:00:00.000Z',
      images: [`${baseUrl}/og-image.png`],
    },
    {
      route: '/uses',
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: '2026-06-15T00:00:00.000Z',
      images: [`${baseUrl}/og-image.png`],
    },
    {
      route: '/links',
      priority: 0.7,
      changeFrequency: 'monthly',
      lastModified: '2026-06-20T00:00:00.000Z',
      images: [`${baseUrl}/profile.webp`],
    },
    {
      route: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: '2026-06-20T00:00:00.000Z',
      images: [`${baseUrl}/og-image.png`],
    },
    {
      route: '/guestbook',
      priority: 0.6,
      changeFrequency: 'daily',
      lastModified: new Date().toISOString(),
      images: [`${baseUrl}/og-image.png`],
    },
    {
      route: '/privacy',
      priority: 0.3,
      changeFrequency: 'yearly',
      lastModified: '2026-01-01T00:00:00.000Z',
    },
    {
      route: '/terms',
      priority: 0.3,
      changeFrequency: 'yearly',
      lastModified: '2026-01-01T00:00:00.000Z',
    },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ route, priority, changeFrequency, lastModified, images }) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency,
      priority,
      ...(images ? { images } : {}),
    })
  );

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const postIsoDate = parsePostDate(post.date);

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postIsoDate,
      changeFrequency: 'monthly' as const,
      priority: post.featured ? 0.85 : 0.8,
      images: [`${baseUrl}/og-image.png`],
    };
  });

  return [...staticEntries, ...blogEntries];
}
