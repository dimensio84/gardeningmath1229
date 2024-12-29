import { useState } from 'react';
import type { BlogPost } from '../data/blogPosts';

interface UsePaginationProps {
  items: BlogPost[];
  itemsPerPage: number;
}

export function usePagination({ items, itemsPerPage }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentItems,
    currentPage,
    totalPages,
    setCurrentPage,
  };
}