import React from 'react';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from '../components/Navigation';
import type { BlogPost as BlogPostType } from '../data/blogPosts';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const createMarkup = (content: string) => {
    const styledContent = content.replace(
      /<a\s+href="([^"]+)">/g,
      '<a href="$1" class="text-blue-600 hover:text-blue-800 underline">'
    );
    return { __html: styledContent };
  };

  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>
      
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-8"
      />
      
      <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
        <span className="text-green-600">{post.author}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
      
      {post.content ? (
        <div className="prose prose-green max-w-none prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p 
              key={index} 
              className="mb-4 text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={createMarkup(paragraph)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Full content coming soon...</p>
      )}
    </article>
  );
}