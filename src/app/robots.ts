import { MetadataRoute } from 'next';

/**
 * Standard Robots.txt generator for Next.js App Router.
 * Configures crawler directives for conventional search engines,
 * modern AI/LLM retrieval agents, and social media scrapers.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://rayyan.ninety5.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/llms-full.txt', '/pricing.md'],
        disallow: ['/api/', '/tmp/'],
      },
      {
        userAgent: [
          // Conventional Search Engine Crawlers
          'Googlebot',
          'Bingbot',
          'Applebot',
          'YandexBot',
          'DuckDuckBot',
          'Baiduspider',
          'Slurp',

          // AI search discovery (allow for citations — discovery is not training)
          'OAI-SearchBot',
          'Claude-SearchBot',
          'PerplexityBot',
          'Perplexity-User',
          'ChatGPT-User',
          'meta-webindexer',
          'meta-externalfetcher',
          'Google-Extended',
          'Amazonbot',
          'cohere-ai',
          'Bytespider',

          // Potential model-training crawlers (allowed: no training opt-out intended)
          'GPTBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Meta-ExternalAgent',

          // Social Link Expansion & Rich Snippet Bots
          'Twitterbot',
          'facebookexternalhit',
          'LinkedInBot',
          'Slackbot-LinkExpanding',
          'TelegramBot',
          'Discordbot',
          'WhatsApp'
        ],
        allow: '/',
        disallow: ['/api/', '/tmp/'],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
