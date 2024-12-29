import React from 'react';
import type { BlogPost } from '../data/blogPosts';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
  author?: string;
}

export function SEO({ title, description, type = 'website', image, author }: SEOProps) {
  const siteName = 'GardeningMath';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      
      {/* Article specific */}
      {type === 'article' && author && (
        <>
          <meta property="article:author" content={author} />
          <meta name="author" content={author} />
        </>
      )}
    </>
  );
}

export function BlogSEO({ post }: { post: BlogPost }) {
  return (
    <SEO
      title={post.title}
      description={post.excerpt}
      type="article"
      image={post.imageUrl}
      author={post.author}
    />
  );
}