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
        allow: '/',
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

          // Frontier AI & Generative Search Crawlers (GEO / LLM Ingestion)
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'Google-Extended',
          'Amazonbot',
          'cohere-ai',
          'Meta-ExternalAgent',
          'Bytespider',

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
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
