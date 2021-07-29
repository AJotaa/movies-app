import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../config.js";

function Movie({ release_date, vote_average, id, poster_path, title }) {
  const date = release_date ? release_date.split("-") : "";
  const altImg =
    "https://reinobajito.com/wp-content/uploads/2014/10/img-placeholder-dark-vertical.jpg";

  const showImage = poster_path
    ? `${IMAGE_BASE_URL}${IMAGE_SIZE.medium}${poster_path}`
    : altImg;

  let ratingColor = function () {
    if (vote_average >= 7.5) {
      return "#009432";
    } else if (vote_average >= 5.5) {
      return "#FFC312";
    } else if (vote_average >= 3.5) {
      return "#EE5A24";
    } else if (vote_average) {
      return "#EA2027";
    }
  };

  const moviePath = `/movie/${id}`;

  return (
    <li className="movie">
      <Link to={moviePath}>
        <img src={showImage} alt={title} />
        <div className="overview">
          <div className="overview-container">
            <h4>{title}</h4>
            <div className="movie-resume">
              <span>{release_date ? date[0] : "TBA"}</span>
              <div
                className="rating"
                style={{ backgroundColor: ratingColor() }}
              >
                <span>{vote_average ? vote_average : ""}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Movie;
