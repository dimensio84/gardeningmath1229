import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from '../components/Navigation';
import type { BlogPost } from '../data/blogPosts';

interface BlogListingProps {
  posts: BlogPost[];
}

export function BlogListing({ posts }: BlogListingProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <div className="flex items-center mb-8">
        <BookOpen className="h-8 w-8 text-green-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800">Garden Tips & Articles</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}