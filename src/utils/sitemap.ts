import { generateSitemapURLs, generateSitemapXML } from './sitemapGenerator';
import { DEFAULT_SITEMAP_CONFIG } from './sitemapConstants';
import { blogPosts } from '../data/blog';

// Generate sitemap content
export function generateSitemap() {
  const urls = generateSitemapURLs({
    ...DEFAULT_SITEMAP_CONFIG,
    baseURL: 'https://gardeningmath.com'
  });

  // Add ebook page
  urls.push({
    loc: `${DEFAULT_SITEMAP_CONFIG.baseURL}/free-ebook`,
    changefreq: 'monthly',
    priority: 0.9
  });

  return generateSitemapXML(urls);
}

// Generate robots.txt content
export function generateRobotsTxt() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${DEFAULT_SITEMAP_CONFIG.baseURL}/sitemap.xml`;
}