import React from 'react';
import { Clock } from 'lucide-react';
import type { BlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a 
      href={`/blog/${post.slug}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-40 md:h-48 object-cover"
      />
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <span className="text-green-600">{post.author}</span>
        </div>
      </div>
    </a>
  );
}