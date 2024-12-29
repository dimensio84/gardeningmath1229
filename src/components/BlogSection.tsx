import React from 'react';
import { blogPosts } from '../data/blog';
import { BlogCard } from './BlogCard';
import { BookOpen } from 'lucide-react';
import { Link } from './Navigation';

export function BlogSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="mt-12 md:mt-16">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Latest Garden Tips</h2>
        </div>
        <Link
          href="/blog"
          className="text-green-600 hover:text-green-700 font-medium transition-colors text-sm md:text-base"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {recentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}