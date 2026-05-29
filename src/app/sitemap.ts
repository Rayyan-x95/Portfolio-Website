import { MetadataRoute } from 'next';

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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/work' || route === '/blogs' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/work' || route === '/blogs' ? 0.8 : 0.5,
  }));
}
