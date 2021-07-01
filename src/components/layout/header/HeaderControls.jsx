import React from "react";
import BaseButton from "../../ui/BaseButton";
import ConfigOption from "./ConfigOption";
import SearchBar from "./SearchBar";

function HeaderControls({
  handleSearchTerm,
  searchTerm,
  handleSubmit,
  selectTheme,
}) {
  return (
    <ul className="controls">
      <li>
        <SearchBar
          handleSearchTerm={handleSearchTerm}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
        />
      </li>
      <li>
        <BaseButton mode="link" link="/">
          <i className="fas fa-home"></i> Home
        </BaseButton>
      </li>
      <li>
        <BaseButton mode="link" link="/auth/singup">
          <i className="fas fa-sign-in-alt"></i> Sign Up
        </BaseButton>
      </li>
      <li>
        <BaseButton mode="select">
          <ConfigOption selectTheme={selectTheme} />
        </BaseButton>
      </li>
    </ul>
  );
}

export default HeaderControls;
