import { useState } from "react";

export function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  function handlerPrevPage() {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  }
  function handlerNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  }

  return {
    currentData,
    currentPage,
    totalPages,
    handlerPrevPage,
    handlerNextPage,
  };
}
