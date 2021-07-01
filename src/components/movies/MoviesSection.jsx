import React from "react";
import { motion } from "framer-motion";
import Movie from "./Movie.jsx";
import LoadMoreMovies from "./LoadMoreMovies.jsx";

function MoviesSection({
  movies,
  currentPage,
  totalPages,
  topMovies,
  search,
  collectionInfo,
}) {
  const movie = movies.map((movie) => {
    return <Movie {...movie} key={movie.id} />;
  });

  const marginStyle = !topMovies ? { paddingTop: "60px" } : null;

  function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  const sectioTitle = !search
    ? "Popular Movies"
    : `Results for "${capitalizeWords(search)}"`;

  if (movies.length === 0) {
    return (
      <div className="movies-section container" style={marginStyle}>
        <div className="title">
          <h2>not movies found for "{sectioTitle}"</h2>
        </div>
      </div>
    );
  } else {
    return (
      <motion.section
        className="movies-section container"
        style={marginStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {!collectionInfo ? (
          <React.Fragment>
            <div className="title">
              <h1>{sectioTitle}</h1>
            </div>
            <div className="movies-list">
              <ul className="movies-container">{movie}</ul>
            </div>
            <LoadMoreMovies
              currentPage={currentPage}
              totalPages={totalPages}
              search={search}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="collection-info">
              <div className="title">
                <h1>{collectionInfo.name}</h1>
              </div>
              <p>{collectionInfo.overview}</p>
            </div>
            <div className="movies-list">
              <ul className="movies-container">{movie}</ul>
            </div>
          </React.Fragment>
        )}
      </motion.section>
    );
  }
}

export default MoviesSection;
