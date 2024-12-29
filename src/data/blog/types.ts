export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  imageUrl: string;
  readTime: string;
  categories: string[];
  publishedAt: string;
}