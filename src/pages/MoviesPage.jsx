import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import HeroImage from "../components/movies/hero_image/HeroImage.jsx";
import MoviesSection from "../components/movies/MoviesSection.jsx";
import TheSpinner from "../components/ui/TheSpinner.jsx";
import { API_URL, API_KEY } from "../config.js";

class MoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 0,
      totalPages: 0,
      topMovies: null,
      selectedMovie: 0,
      loading: false,
      error: null,
    };

    this.getMovies = this.getMovies.bind(this);
    this.selectControl = this.selectControl.bind(this);
  }

  intervalId = 0;

  componentDidMount() {
    const { page, search } = this.props;

    if (!this.props.search) {
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
      this.getMovies(endpoint);
    } else {
      const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}`;
      this.getMovies(endpoint);
    }

    // interval of the heroimage
    this.intervalId = setInterval(() => {
      this.selectControl("next", false);
    }, 5000);
  }

  componentDidUpdate(previusProps) {
    const { page, search } = this.props;

    if (previusProps.page !== page || previusProps.search !== search) {
      let endpoint = "";

      if (!search) {
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
      } else {
        endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${page}`;
      }
      window.scrollTo(0, 0);
      this.getMovies(endpoint);
    }
  }

  async getMovies(endpoint) {
    try {
      this.setState({
        loading: true,
      });
      const { topMovies } = this.state;
      const { search } = this.props;

      const response = await fetch(endpoint);
      const loadMovies = await response.json();

      const loadTop = (await loadMovies.results)
        ? loadMovies.results.slice(0, 5)
        : null;

      if (loadMovies.page === 1 && !search) {
        this.setState({
          movies: [...loadMovies.results],
          topMovies: topMovies || loadTop,
          currentPage: loadMovies.page,
          totalPages: loadMovies.total_pages,
          loading: false,
          serched: null,
        });
      } else {
        this.setState({
          movies: [...loadMovies.results],
          currentPage: loadMovies.page,
          totalPages: loadMovies.total_pages,
          topMovies: null,
          loading: false,
        });
      }
    } catch (error) {
      alert(error);
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  selectControl(value, clicked) {
    const { selectedMovie, topMovies } = this.state;
    let selection = 0;

    if (clicked) {
      clearInterval(this.intervalId);
    }

    if (topMovies && value === "next") {
      if (selectedMovie === topMovies.length - 1) {
        selection = 0;
      } else {
        selection = selectedMovie + 1;
      }
    } else if (value === "prev") {
      if (selectedMovie === 0) {
        selection = topMovies.length - 1;
      } else {
        selection = selectedMovie - 1;
      }
    }

    this.setState({
      selectedMovie: selection,
    });
  }

  render() {
    const {
      topMovies,
      movies,
      loading,
      selectedMovie,
      currentPage,
      totalPages,
    } = this.state;

    const { search } = this.props;

    return (
      <div id="movies">
        {loading ? (
          <TheSpinner />
        ) : currentPage === 1 && topMovies ? (
          <React.Fragment>
            <HeroImage
              topMovies={topMovies}
              selectedMovie={selectedMovie}
              selectControl={this.selectControl}
            />
            <MoviesSection
              topMovies={topMovies}
              movies={movies}
              currentPage={currentPage}
            />
          </React.Fragment>
        ) : (
          <MoviesSection
            movies={movies}
            currentPage={currentPage}
            totalPages={totalPages}
            search={search}
          />
        )}
      </div>
    );
  }
}

export default withRouter(MoviesPage);
