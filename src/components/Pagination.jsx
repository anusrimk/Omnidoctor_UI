import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage = 1, totalPages = 1 }) => {
  const getPageNumbers = () => {
    if (totalPages <= 8) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, 6, "...", totalPages - 1, totalPages];
    }

    // if (currentPage >= totalPages - 3) {
    //   return [1, 2, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    // }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className="mt-4 flex items-center gap-2">
      <button className="px-3 py-1 bg-gray-100 flex rounded shadow-sm hover:bg-teal-100">
        <ChevronLeft size={20} className="-mr-3" />
        <ChevronLeft size={20} />
      </button>
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`px-3 py-1 rounded shadow-sm ${
              page === currentPage
                ? "bg-teal-500 text-white"
                : "bg-gray-100 hover:bg-teal-100"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button className="px-3 py-1 bg-gray-100 flex rounded shadow-sm hover:bg-teal-100">
        <ChevronRight size={20} className="-mr-3" />
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
