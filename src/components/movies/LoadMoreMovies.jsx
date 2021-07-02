import React from "react";
import { Link } from "react-router-dom";
import BaseButton from "../ui/BaseButton";

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
          <BaseButton mode="left" />
        </Link>
        <span>{currentPage}</span>
        <Link to={pathNext}>
          <BaseButton mode="right" />
        </Link>
      </div>
    </div>
  );
}
export default LoadMoreMovies;
