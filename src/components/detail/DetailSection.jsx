import React from "react";
import { motion } from "framer-motion";
import MovieInfo from "./MovieInfo";
import { IMAGE_BASE_URL } from "../../config.js";
import { Link } from "react-router-dom";

function DetailSection({ movie, backgroundStyle, trailerOpt, playTrailer }) {
  return (
    <motion.section
      id="detail-page"
      style={backgroundStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="back-shadow">
        <div className="detail-container container">
          <div className="movie-detail">
            <MovieInfo
              movie={movie}
              trailerOpt={trailerOpt}
              playTrailer={playTrailer}
            />
          </div>

          {movie.belongs_to_collection && (
            <div
              className="collection"
              title={movie.belongs_to_collection.name}
            >
              <Link to={`/collection/${movie.belongs_to_collection.id}`}>
                <img
                  src={`${IMAGE_BASE_URL}w300${movie.belongs_to_collection.poster_path}`}
                  alt=""
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default DetailSection;
