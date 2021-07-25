import React, { Component } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { CSSTransition } from "react-transition-group";
import { API_URL, API_KEY } from "../config.js";
import TheSpinner from "../components/ui/TheSpinner.jsx";
import DetailSection from "../components/detail/DetailSection.jsx";
import BackButton from "../components/ui/BackButton.jsx";
import DetailCredits from "../components/detail/DetailCredits.jsx";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      castAndCrew: null,
      trailerId: null,
      showTrailer: false,
      loadTrailer: false,
      loading: true,
    };
    this.getMovie = this.getMovie.bind(this);
    this.playTrailer = this.playTrailer.bind(this);
    this.loadTrailer = this.loadTrailer.bind(this);
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

  async playTrailer() {
    let trailerArray = await this.state.trailerId.split("=");
    let selectTrailerId = (await trailerArray.length) - 1;
    this.setState({
      showTrailer: !this.state.showTrailer,
      trailerId: trailerArray[selectTrailerId],
    });
  }

  loadTrailer() {
    this.setState({
      loadTrailer: !this.state.loadTrailer,
    });
    if (this.state.showTrailer === true) {
      setTimeout(function () {
        const elementTo = document.getElementById("trailer");
        elementTo && elementTo.scrollIntoView();
      }, 300);
    }
  }

  render() {
    const { movie, loading, trailerId, showTrailer, loadTrailer, castAndCrew } =
      this.state;

    const opts = {
      height: "480",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
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
            <CSSTransition
              in={showTrailer}
              unmountOnExit
              timeout={300}
              classNames="trailer-transition"
              onEntering={this.loadTrailer}
              onExit={this.loadTrailer}
            >
              <div className="movie-trailer" id="trailer">
                {loadTrailer && <YouTube videoId={trailerId} opts={opts} />}
              </div>
            </CSSTransition>
            {castAndCrew.cast.length > 0 ||
            castAndCrew.crew.length > 0 ||
            movie.production_companies.length > 0 ? (
              <DetailCredits
                castAndCrew={castAndCrew}
                movieCompanies={movie.production_companies}
              />
            ) : null}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default DetailPage;
