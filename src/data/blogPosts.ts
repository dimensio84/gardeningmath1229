import { slugify } from '../utils/slugify';

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

export const blogPosts: BlogPost[] = [
  {
    id: '13',
    title: 'Spacing for Vegetable Gardens',
    slug: slugify('Spacing for Vegetable Gardens'),
    excerpt: 'Master the art of vegetable garden spacing with our comprehensive guide to maximize yields and maintain healthy plant growth.',
    content: `Proper spacing in your vegetable garden is more than just following numbers on a seed packet – it's about understanding how plants grow and interact with each other. Let's dive into the essential principles of vegetable garden spacing that will help you maximize your harvest while maintaining healthy plants.

Understanding Spacing Basics

The key to successful vegetable garden spacing lies in balancing several crucial factors:

1. Root Development
Each vegetable type has specific root patterns and depths. For example:
- Shallow-rooted: Lettuce, spinach, radishes (4-6 inches)
- Medium-rooted: Peppers, beans, cucumbers (12-24 inches)
- Deep-rooted: Tomatoes, squash, asparagus (24-36+ inches)

2. Above-Ground Growth
Consider both the width and height of mature plants:
- Compact plants: Bush beans, carrots, radishes
- Medium spread: Peppers, eggplants, cabbage
- Large spread: Tomatoes, squash, pumpkins

Optimal Spacing Guidelines

Here's a quick reference guide for common vegetables:

Root Vegetables:
- Carrots: 2-3 inches between plants, 12-18 inches between rows
- Beets: 3-4 inches between plants, 12-18 inches between rows
- Radishes: 2-3 inches between plants, 12 inches between rows

Leafy Greens:
- Lettuce: 6-8 inches between plants (leaf), 10-12 inches (head)
- Spinach: 3-4 inches between plants, 12-18 inches between rows
- Kale: 12-18 inches between plants, 24 inches between rows

Fruiting Vegetables:
- Tomatoes: 18-36 inches between plants, 36-48 inches between rows
- Peppers: 12-18 inches between plants, 24-36 inches between rows
- Cucumbers: 12 inches between plants, 36-48 inches between rows

Advanced Spacing Techniques

1. Intensive Planting
For small gardens, consider these space-saving methods:
- Square foot gardening
- Vertical growing systems
- Interplanting compatible crops

2. Succession Planting
Plan your spacing to accommodate:
- Early season crops
- Mid-season replacements
- Fall garden vegetables

3. Companion Planting
Some vegetables grow better together:
- Tomatoes + Basil
- Carrots + Onions
- Lettuce + Radishes

Common Spacing Mistakes to Avoid

1. Overcrowding
- Reduces air circulation
- Increases disease risk
- Limits nutrient availability

2. Excessive Spacing
- Wastes garden space
- Allows more weed growth
- Reduces overall yield

3. Ignoring Mature Size
- Plants competing for resources
- Shading smaller plants
- Difficult maintenance access

Tips for Success

1. Use a planting grid or template
2. Consider irrigation needs when spacing
3. Leave adequate pathways for maintenance
4. Account for trellises and supports early
5. Document successful spacing combinations

Frequently Asked Questions

Q: How do I adjust spacing for raised beds?
A: In raised beds, you can typically reduce row spacing by 20% due to better soil conditions and easier access. However, maintain recommended spacing between individual plants.

Q: Should I follow the same spacing for container gardens?
A: Container spacing often differs from in-ground gardens. Choose containers that provide adequate room for root development, and reduce the number of plants per container rather than reducing spacing.

Q: What about spacing for vertical growing?
A: When growing vertically, maintain recommended spacing between plants but reduce row spacing since plants will grow upward rather than outward. Ensure your support structure can handle the weight of mature plants.`,
    author: 'Maria Santos',
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
    readTime: '8 min read',
    categories: ['vegetables', 'gardening-basics', 'planning'],
    publishedAt: '2024-03-15'
  },
  ...blogPosts
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());