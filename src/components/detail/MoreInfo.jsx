import React from "react";

function MoreInfo({ movie }) {
  const {
    genres,
    vote_average,
    release_date,
    runtime,
    overview,
    budget,
  } = movie;

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
    <div className="more-info-container">
      <div className="more-info">
        <span>
          <i className="fas fa-star-half-alt"></i> {vote_average}
        </span>
        <span>
          <i className="fas fa-calendar-alt"></i> {release_date}
        </span>
        <span>
          <i className="fas fa-clock"></i> {runtimeHour}h:{runtimeMin}m
        </span>
        {budget > 0 && (
          <span>
            <i className="fas fa-money-bill-wave"></i> {budgetCom}
          </span>
        )}
      </div>
      <div className="genres">{genresList}</div>
      <div className="overview">
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MoreInfo;
