import React from "react";
import { IMAGE_BASE_URL } from "../../config.js";

function DetailCredits({ castAndCrew, movieCompanies }) {
  const cast = castAndCrew && castAndCrew.cast.slice(0, 10);
  const directors =
    castAndCrew && castAndCrew.crew.filter((item) => item.job === "Director");

  const castActors =
    cast &&
    cast.map((a) => {
      return (
        <li key={a.cast_id} className="cast-items">
          <span>{a.name}</span>
          <span>{a.character}</span>
        </li>
      );
    });

  const crewDirectors =
    directors &&
    directors.map((d) => {
      return <li key={d.credit_id}>{d.name}</li>;
    });

  const pordCompanies =
    movieCompanies &&
    movieCompanies.map((item) => {
      return (
        <li className="companie-item" title={item.name}>
          {item.logo_path ? (
            <img
              src={`${IMAGE_BASE_URL}w154${item.logo_path}`}
              alt={item.name}
            />
          ) : (
            <span>{item.name}</span>
          )}
        </li>
      );
    });

  const directorsTitle = directors.length === 1 ? "Director" : "Directors";
  return (
    <div className="detail-credits">
      <div className="container">
        <div className="cast-and-directors">
          {castActors.length > 0 && (
            <div className="cast">
              <h3>
                <i className="fas fa-theater-masks"></i> Cast
              </h3>
              <ul className="cast-list">
                <li>
                  <h4>Actor</h4>
                  <h4>Character</h4>
                </li>
                {castActors}
              </ul>
            </div>
          )}
          {crewDirectors.length > 0 && (
            <div className="directors">
              <h3>
                <i className="fas fa-film"></i> {directorsTitle}
              </h3>
              <ul>{crewDirectors}</ul>
            </div>
          )}
        </div>
        {pordCompanies.length > 0 && (
          <div className="prod-companies">
            <ul className="companies-list">{pordCompanies}</ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailCredits;
