import { blogPosts } from '../data/blogPosts';
import type { SitemapURL, SitemapConfig } from './sitemapTypes';
import { DEFAULT_SITEMAP_CONFIG, PAGE_PRIORITIES, PAGE_CHANGE_FREQUENCIES } from './sitemapConstants';

function generateMainPages(config: SitemapConfig): SitemapURL[] {
  return [
    {
      loc: `${config.baseURL}/`,
      changefreq: PAGE_CHANGE_FREQUENCIES.home,
      priority: PAGE_PRIORITIES.home
    }
  ];
}

function generateToolPages(config: SitemapConfig): SitemapURL[] {
  const tools = ['seed-calculator', 'watering-schedule', 'plant-spacing'];
  return tools.map(tool => ({
    loc: `${config.baseURL}/${tool}`,
    changefreq: PAGE_CHANGE_FREQUENCIES.tools,
    priority: PAGE_PRIORITIES.tools
  }));
}

function generateBlogPages(config: SitemapConfig): SitemapURL[] {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const mainBlogPage = {
    loc: `${config.baseURL}/blog`,
    changefreq: PAGE_CHANGE_FREQUENCIES.blog,
    priority: PAGE_PRIORITIES.blog
  };

  const blogPostPages = blogPosts.map(post => ({
    loc: `${config.baseURL}/blog/${post.id}`,
    lastmod: currentDate,
    changefreq: PAGE_CHANGE_FREQUENCIES.blogPosts,
    priority: PAGE_PRIORITIES.blogPosts
  }));

  return [mainBlogPage, ...blogPostPages];
}

function generateInfoPages(config: SitemapConfig): SitemapURL[] {
  return [
    {
      loc: `${config.baseURL}/about`,
      changefreq: PAGE_CHANGE_FREQUENCIES.about,
      priority: PAGE_PRIORITIES.about
    },
    {
      loc: `${config.baseURL}/privacy`,
      changefreq: PAGE_CHANGE_FREQUENCIES.privacy,
      priority: PAGE_PRIORITIES.privacy
    }
  ];
}

export function generateSitemapURLs(config: SitemapConfig = DEFAULT_SITEMAP_CONFIG): SitemapURL[] {
  return [
    ...generateMainPages(config),
    ...generateToolPages(config),
    ...generateBlogPages(config),
    ...generateInfoPages(config)
  ];
}

export function generateSitemapXML(urls: SitemapURL[]): string {
  const xmlUrls = urls
    .map(url => `
  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls}
</urlset>`;
}