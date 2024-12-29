export function generateRobotsTxt(sitemapURL: string = 'https://gardeningmath.com/sitemap.xml'): string {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${sitemapURL}`;
}