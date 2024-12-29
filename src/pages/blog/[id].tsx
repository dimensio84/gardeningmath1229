import React from 'react';
import { blogPosts } from '../../data/blog';
import { BlogSEO } from '../../components/SEO';
import { BlogPost } from '../BlogPost';

export function BlogPostPage() {
  const slug = window.location.pathname.split('/blog/')[1];
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
        <a href="/blog" className="text-green-600 hover:text-green-700">Return to Blog</a>
      </div>
    );
  }

  return (
    <>
      <BlogSEO post={post} />
      <BlogPost post={post} />
    </>
  );
}