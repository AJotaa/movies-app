import React, { Component } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { CSSTransition } from "react-transition-group";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../config.js";
import TheSpinner from "../components/ui/TheSpinner.jsx";
import DetailSection from "../components/detail/DetailSection.jsx";
import BackButton from "../components/ui/BackButton.jsx";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      loading: true,
      haveTrailer: null,
      trailer: null,
      showTrailer: false,
      loadTrailer: false,
    };
    this.getMovie = this.getMovie.bind(this);
    this.playTrailer = this.playTrailer.bind(this);
    this.loadTrailer = this.loadTrailer.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getMovie();
  }

  async getMovie() {
    const { movieId } = this.props.match.params;
    let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    const response = await fetch(endpoint);
    const loadMovie = await response.json();
    const haveTrailer = await movieTrailer(loadMovie.title);

    this.setState({
      movie: loadMovie,
      loading: false,
      haveTrailer,
    });
  }

  async playTrailer() {
    let trailerArray = await this.state.haveTrailer.split("=");
    let selectTrailerId = (await trailerArray.length) - 1;
    this.setState({
      showTrailer: !this.state.showTrailer,
      trailer: trailerArray[selectTrailerId],
    });
  }

  loadTrailer() {
    this.setState({
      loadTrailer: !this.state.loadTrailer,
    });
    if (this.state.showTrailer === true) {
      setTimeout(function () {
        const elementTo = document.getElementById("trailer");
        elementTo ? elementTo.scrollIntoView() : window.scroll(0, 480);
      }, 300);
    }
  }

  render() {
    const { movie, loading, haveTrailer, trailer, showTrailer, loadTrailer } =
      this.state;
    const backdrop = movie
      ? `url('${IMAGE_BASE_URL}original${movie.backdrop_path}')`
      : "#000";
    const backgroundStyle = {
      background: backdrop,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    };

    const opts = {
      height: "420",
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
              backgroundStyle={backgroundStyle}
              movie={movie}
              haveTrailer={haveTrailer}
              showTrailer={showTrailer}
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
                {loadTrailer && <YouTube videoId={trailer} opts={opts} />}
              </div>
            </CSSTransition>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default DetailPage;
