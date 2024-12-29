export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface SitemapConfig {
  baseURL: string;
  defaultChangeFreq: SitemapURL['changefreq'];
  defaultPriority: number;
}