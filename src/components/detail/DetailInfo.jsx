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
    <i className="fas fa-play-circle"></i>
  ) : (
    <i className="fas fa-stop-circle"></i>
  );

  const genresList = genres
    ? genres.map((item) => {
        return (
          <li key={item.id}>
            <i className="fas fa-circle"></i> {item.name}
          </li>
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
    <div className="detail-info">
      <div className="detail-info-container">
        <div className="title">
          <h1>{title}</h1>
        </div>
        {tagline && (
          <div className="tagline">
            <h2>
              <i>{tagline}</i>
            </h2>
          </div>
        )}
        <div className="more-info">
          <ul>
            <li>
              <i className="fas fa-star-half-alt"></i>{" "}
              {vote_average ? vote_average : "N/A"}
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i>{" "}
              {release_date ? release_date : "TBA"}
            </li>
            <li>
              <i className="fas fa-clock"></i>{" "}
              {runtime ? `${runtimeHour}h:${runtimeMin}m` : "N/A"}
            </li>
            {budget > 0 && (
              <li>
                <i className="fas fa-money-bill-wave"></i> {budgetCom}
              </li>
            )}
            {trailerOpt.haveTrailer && (
              <li>
                <BaseButton mode="nav" click={playTrailer}>
                  {trailerIcon} Trailer
                </BaseButton>
              </li>
            )}
          </ul>
        </div>
        <div className="genres">
          <ul>{genresList}</ul>
        </div>
        <div className="overview">
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
