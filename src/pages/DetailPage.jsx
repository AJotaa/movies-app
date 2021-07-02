import React, { Component } from "react";
import TheSpinner from "../components/ui/TheSpinner.jsx";
import DetailSection from "../components/detail/DetailSection.jsx";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../config.js";
import BackButton from "../components/ui/BackButton.jsx";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      loading: true,
    };
    this.getMovie = this.getMovie.bind(this);
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
    this.setState({
      movie: loadMovie,
      loading: false,
    });

    console.log(loadMovie);
  }

  render() {
    const { movie, loading } = this.state;
    const backdrop = movie
      ? `url('${IMAGE_BASE_URL}original${movie.backdrop_path}')`
      : "#000";
    const backgroundStyle = {
      background: backdrop,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    };

    return (
      <div>
        {loading ? (
          <TheSpinner />
        ) : (
          <React.Fragment>
            <BackButton />
            <DetailSection backgroundStyle={backgroundStyle} movie={movie} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default DetailPage;
