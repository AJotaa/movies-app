import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };

    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchTerm(e) {
    let newSearch = e.target.value;
    this.setState({
      searchTerm: newSearch,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;

    await this.props.history.push(`/search/${searchTerm}`);

    this.setState({
      searchTerm: "",
    });
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={this.handleSearchTerm}
        />
      </form>
    );
  }
}

export default withRouter(SearchBar);
