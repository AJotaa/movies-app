import React from "react";
import BaseButton from "../ui/BaseButton";

function MovieInfo({ movie, trailerOpt, playTrailer }) {
  const {
    title,
    tagline,
    genres,
    vote_average,
    release_date,
    runtime,
    overview,
    budget,
  } = movie;

  const trailerIcon = !trailerOpt.showTrailer ? (
    <i class="fas fa-play-circle"></i>
  ) : (
    <i class="fas fa-stop-circle"></i>
  );

  const genresList = genres
    ? genres.map((item) => {
        return (
          <span key={item.id}>
            <i className="fas fa-circle"></i> {item.name}
          </span>
        );
      })
    : "";

  let runtimeHour = 0;
  let runtimeMin = 0;
  if (runtime) {
    runtimeHour = Math.floor(runtime / 60);
    runtimeMin = runtime % 60;
  }

  const budgetCom = `$${budget / 1000000}M`;

  return (
    <ul className="more-info-container">
      <li>
        <h1 className="title">{title}</h1>
      </li>
      {tagline && (
        <li>
          <h2 className="tagline">
            <i>{tagline}</i>
          </h2>
        </li>
      )}
      <li>
        <div className="more-info">
          <span>
            <i className="fas fa-star-half-alt"></i>{" "}
            {vote_average ? vote_average : "N/A"}
          </span>
          <span>
            <i className="fas fa-calendar-alt"></i>{" "}
            {release_date ? release_date : "TBA"}
          </span>
          <span>
            <i className="fas fa-clock"></i>{" "}
            {runtime ? `${runtimeHour}h:${runtimeMin}m` : "N/A"}
          </span>
          {budget > 0 && (
            <span>
              <i className="fas fa-money-bill-wave"></i> {budgetCom}
            </span>
          )}
          {trailerOpt.haveTrailer && (
            <BaseButton mode="nav" click={playTrailer}>
              {trailerIcon} Trailer
            </BaseButton>
          )}
        </div>
      </li>
      <li>
        <div className="genres">{genresList}</div>
      </li>
      <li>
        <div className="overview">
          <p>{overview}</p>
        </div>
      </li>
    </ul>
  );
}

export default MovieInfo;
