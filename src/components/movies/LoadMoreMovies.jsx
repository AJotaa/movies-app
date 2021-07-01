import React from "react";
import { Link } from "react-router-dom";

function LoadMoreMovies({ currentPage, totalPages, search }) {
  const newPagePrev = currentPage <= 1 ? currentPage : currentPage - 1;
  const newPageNext = currentPage >= totalPages ? totalPages : currentPage + 1;

  let pathPrev = null;
  let pathNext = null;

  if (!search) {
    pathPrev = currentPage <= 2 ? "/" : `/page/${newPagePrev}`;
    pathNext = `/page/${newPageNext}`;
  } else {
    pathPrev =
      currentPage <= 2
        ? `/search/${search}/page/1`
        : `/search/${search}/page/${newPagePrev}`;
    pathNext = `/search/${search}/page/${newPageNext}`;
  }

  return (
    <div className="container">
      <div className="load-controls">
        <Link to={pathPrev}>
          <button>
            <i className="fas fa-chevron-left"></i>
          </button>
        </Link>
        <span>{currentPage}</span>
        <Link to={pathNext}>
          <button>
            <i className="fas fa-chevron-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default LoadMoreMovies;
