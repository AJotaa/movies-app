import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../../config.js";

function HeroImgCover({ selectedMovies }) {
  const {
    title,
    vote_average,
    release_date,
    overview,
    poster_path,
    id,
  } = selectedMovies;

  const poster = `${IMAGE_BASE_URL}w200${poster_path}`;

  const date = release_date ? release_date.split("-") : "";

  const moviePath = `/movie/${id}`;

  return (
    <div className="cover">
      <div className="poster">
        <Link to={moviePath}>
          <img src={poster} alt="" />
        </Link>
      </div>
      <div className="cover-info">
        <h2>{title}</h2>
        <div className="year-rating">
          <span>
            <i className="fas fa-star-half-alt"></i> {vote_average}
          </span>
          <span>
            <i className="fas fa-calendar-alt"></i> {date[0]}
          </span>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default HeroImgCover;
