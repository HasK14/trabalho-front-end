import React from "react";
import "../components/Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  goToPage,
  previousPage,
  nextPage,
}) => {
  const getPaginationRange = () => {
    let startPage = currentPage - 4;
    let endPage = currentPage + 5;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(10, totalPages);
    }

    if (endPage > totalPages) {
      startPage = Math.max(1, totalPages - 9);
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <div className="pagination-container">
      <button onClick={() => goToPage(1)}>Primeira</button>
      <button onClick={previousPage} disabled={currentPage === 1}>
        Anterior
      </button>
      {getPaginationRange().map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Próxima
      </button>
      <button onClick={() => goToPage(totalPages)}>Última</button>
    </div>
  );
};

export default Pagination;
