import React, { useState } from 'react';
import { blogPosts } from '../../data/blog';
import { SEO } from '../../components/SEO';
import { BlogListing } from '../BlogListing';
import { BlogSearch } from '../../components/BlogSearch';
import { BlogCategories } from '../../components/BlogCategories';
import { Pagination } from '../../components/Pagination';
import { usePagination } from '../../hooks/usePagination';
import { filterPosts, getCategories } from '../../utils/blogHelpers';

const POSTS_PER_PAGE = 9;

export function BlogListingPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredPosts = filterPosts(blogPosts, search, selectedCategory);
  const categories = getCategories(blogPosts);
  
  const {
    currentItems: paginatedPosts,
    currentPage,
    totalPages,
    setCurrentPage
  } = usePagination({
    items: filteredPosts,
    itemsPerPage: POSTS_PER_PAGE
  });

  return (
    <>
      <SEO
        title="Garden Tips & Articles"
        description="Expert gardening advice, tips, and tutorials to help you grow a thriving garden. Learn about seed calculations, plant spacing, watering schedules, and more."
      />
      <div className="max-w-7xl mx-auto">
        <BlogSearch value={search} onChange={setSearch} />
        <BlogCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <BlogListing posts={paginatedPosts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}