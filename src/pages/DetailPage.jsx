import React, { Component } from "react";
import movieTrailer from "movie-trailer";

import { API_URL, API_KEY } from "../config.js";
import TheSpinner from "../components/ui/TheSpinner.jsx";
import DetailSection from "../components/detail/DetailSection.jsx";
import BackButton from "../components/ui/BackButton.jsx";
import DetailCredits from "../components/detail/DetailCredits.jsx";
import DetailTrailer from "../components/detail/DetailTrailer.jsx";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      castAndCrew: null,
      trailerId: null,
      showTrailer: false,
      loading: true,
    };
    this.getMovie = this.getMovie.bind(this);
    this.playTrailer = this.playTrailer.bind(this);
    this.getCast = this.getCast.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getMovie();
    this.getCast();
  }

  async getMovie() {
    const { movieId } = this.props.match.params;
    let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    try {
      const response = await fetch(endpoint);
      const loadMovie = await response.json();
      const trailerId = await movieTrailer(loadMovie.title);

      this.setState({
        movie: loadMovie,
        trailerId,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getCast() {
    const { movieId } = this.props.match.params;
    let endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    try {
      const response = await fetch(endpoint);
      const loadCast = await response.json();

      this.setState({
        castAndCrew: loadCast,
      });
    } catch (error) {
      console.log(error);
    }
  }

  playTrailer() {
    const trailerArray = this.state.trailerId.split("=");
    const selectTrailerId = trailerArray.length - 1;
    this.setState({
      showTrailer: !this.state.showTrailer,
      trailerId: trailerArray[selectTrailerId],
    });
  }

  render() {
    const { movie, loading, trailerId, showTrailer, castAndCrew } = this.state;

    const haveCastAndCrew = () => {
      if (!loading) {
        if (
          castAndCrew.cast.length > 0 ||
          castAndCrew.crew.length > 0 ||
          movie.production_companies.length > 0
        ) {
          return true;
        } else return false;
      }
    };

    return (
      <div>
        {loading ? (
          <TheSpinner />
        ) : (
          <React.Fragment>
            <BackButton />

            <DetailSection
              movie={movie}
              trailerOpt={{ showTrailer, haveTrailer: trailerId }}
              playTrailer={this.playTrailer}
            />
            <DetailTrailer showTrailer={showTrailer} trailerId={trailerId} />
            {haveCastAndCrew() && (
              <DetailCredits
                castAndCrew={castAndCrew}
                movieCompanies={movie.production_companies}
              />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default DetailPage;
