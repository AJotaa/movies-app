import React from "react";
import { Link } from "react-router-dom";
import HeaderControls from "./HeaderControls";

function TheHeader({
  handleSearchTerm,
  searchTerm,
  handleSubmit,
  selectTheme,
}) {
  return (
    <header id="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <i className="fas fa-ticket-alt"></i>
            <span>MoviesApp</span>
          </Link>
        </div>
        <HeaderControls
          handleSearchTerm={handleSearchTerm}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
          selectTheme={selectTheme}
        />
      </nav>
    </header>
  );
}

export default TheHeader;
