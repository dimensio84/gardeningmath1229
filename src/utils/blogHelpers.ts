import type { BlogPost } from '../data/blogPosts';

export function filterPosts(
  posts: BlogPost[],
  search: string,
  category: string | null
): BlogPost[] {
  return posts.filter((post) => {
    const matchesSearch = search === '' || 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
      
    const matchesCategory = !category || post.categories?.includes(category);
    
    return matchesSearch && matchesCategory;
  });
}

export function getCategories(posts: BlogPost[]): { id: string; name: string; count: number }[] {
  const categoryCounts = posts.reduce((acc, post) => {
    post.categories?.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categoryCounts).map(([id, count]) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    count,
  }));
}