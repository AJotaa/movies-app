import React, { Component } from "react";
import MoviesSection from "../components/movies/MoviesSection.jsx";
import TheSpinner from "../components/ui/TheSpinner.jsx";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../config.js";

class CollectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionInfo: null,
      movies: [],
      loading: true,
      error: null,
    };

    this.getCollection = this.getCollection.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getCollection();
  }

  async getCollection() {
    const { collectionId } = this.props.match.params;
    let endpoint = `${API_URL}collection/${collectionId}?api_key=${API_KEY}&language=en-US`;

    const response = await fetch(endpoint);
    const loadCollection = await response.json();
    await this.setState({
      collectionInfo: loadCollection,
      movies: loadCollection.parts,
      loading: false,
    });

    console.log(loadCollection);
  }

  render() {
    const { collectionInfo, movies, loading } = this.state;

    const backdrop = collectionInfo
      ? `url('${IMAGE_BASE_URL}original${collectionInfo.backdrop_path}')`
      : "#000";
    const backgroundStyle = {
      background: backdrop,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxWidth: "100vw",
    };

    console.log(backdrop);
    return (
      <div id="movies">
        {loading ? (
          <TheSpinner />
        ) : (
          <div className="collection" style={backgroundStyle}>
            <div className="back-shadow">
              <MoviesSection movies={movies} collectionInfo={collectionInfo} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CollectionPage;
