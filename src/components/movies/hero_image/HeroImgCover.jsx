import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../../config.js";
import TheSpinner from "../../ui/TheSpinner.jsx";

function HeroImgCover({ selectedMovies }) {
  const [imgLoading, setImgLoading] = useState(true);

  const { title, vote_average, release_date, overview, poster_path, id } =
    selectedMovies;

  const poster = `${IMAGE_BASE_URL}${IMAGE_SIZE.small}${poster_path}`;

  const date = release_date ? release_date.split("-") : "";

  const moviePath = `/movie/${id}`;

  return (
    <div className="cover">
      <div className="poster">
        <Link to={moviePath}>
          {imgLoading && <TheSpinner mode="small" />}
          <img src={poster} alt="" onLoad={() => setImgLoading(false)} />
        </Link>
      </div>
      <div className="cover-info">
        <Link to={moviePath}>
          <h2>{title}</h2>
        </Link>
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
