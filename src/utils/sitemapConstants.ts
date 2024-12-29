import type { SitemapConfig } from './sitemapTypes';

export const DEFAULT_SITEMAP_CONFIG: SitemapConfig = {
  baseURL: 'https://gardeningmath.com',
  defaultChangeFreq: 'monthly',
  defaultPriority: 0.5
};

export const PAGE_PRIORITIES = {
  home: 1.0,
  tools: 0.9,
  blog: 0.8,
  blogPosts: 0.7,
  about: 0.6,
  privacy: 0.5
} as const;

export const PAGE_CHANGE_FREQUENCIES = {
  home: 'weekly',
  tools: 'monthly',
  blog: 'weekly',
  blogPosts: 'monthly',
  about: 'monthly',
  privacy: 'yearly'
} as const;