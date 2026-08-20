import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'cohere-ai',
          'FacebookBot',
          'LinkedInBot',
          'Twitterbot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://rayyan.ninety5.in/sitemap.xml',
    host: 'https://rayyan.ninety5.in',
  };
}

