import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const config = {
  baseURL: 'https://gardeningmath.com',
  defaultChangeFreq: 'monthly',
  defaultPriority: 0.5
};

// Define all site URLs
const urls = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/seed-calculator', changefreq: 'monthly', priority: 0.9 },
  { path: '/watering-schedule', changefreq: 'monthly', priority: 0.9 },
  { path: '/plant-spacing', changefreq: 'monthly', priority: 0.9 },
  { path: '/free-ebook', changefreq: 'monthly', priority: 0.9 },
  { path: '/blog', changefreq: 'weekly', priority: 0.8 },
  { path: '/about', changefreq: 'monthly', priority: 0.6 },
  { path: '/privacy', changefreq: 'yearly', priority: 0.5 }
];

// Blog posts (would typically come from a database or CMS)
const blogPosts = [
  { id: '14', slug: 'flower-garden-spacing-techniques' },
  { id: '13', slug: 'spacing-for-vegetable-gardens' },
  { id: '10', slug: 'how-to-use-seed-calculator' },
  { id: '9', slug: 'tomato-varieties-guide' },
  { id: '8', slug: 'how-to-grow-tomatoes' },
  { id: '7', slug: 'when-to-plant-fall-garden' },
  { id: '6', slug: 'understanding-plants-to-seed' },
  { id: '1', slug: 'essential-spring-gardening-tips' }
];

// Add blog posts to URLs
blogPosts.forEach(post => {
  urls.push({
    path: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  });
});

// Generate sitemap XML
function generateSitemapXML(urls) {
  const xmlUrls = urls
    .map(url => `
  <url>
    <loc>${config.baseURL}${url.path}</loc>${url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls}
</urlset>`;
}

// Generate robots.txt content
function generateRobotsTxt() {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${config.baseURL}/sitemap.xml`;
}

// Ensure the public directory exists
const publicDir = join(__dirname, '..', 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir);
}

// Generate and write sitemap.xml
const sitemap = generateSitemapXML(urls);
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap);
console.log('✓ Generated sitemap.xml');

// Generate and write robots.txt
const robotsTxt = generateRobotsTxt();
writeFileSync(join(publicDir, 'robots.txt'), robotsTxt);
console.log('✓ Generated robots.txt');