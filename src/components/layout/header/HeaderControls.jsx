import React from "react";
import BaseButton from "../../ui/BaseButton";
import ConfigOption from "./ConfigOption";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
// import DropdownItem from "../../ui/DropdownItem";
import DropdownMenu from "../../ui/DropdownMenu";

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
      <NavItem
        mode="link"
        icon={<i className="fas fa-home"></i>}
        text="Home"
        link="/"
      />
      <NavItem
        mode="link"
        icon={<i className="fas fa-sign-in-alt"></i>}
        text="Sign Up"
        link="/auth/singup"
      />
      <li>
        <BaseButton mode="select">
          <ConfigOption selectTheme={selectTheme} />
        </BaseButton>
      </li>
      <NavItem
        mode="dropdown"
        icon={<i className="fas fa-ellipsis-v"></i>}
        text="More"
      >
        <DropdownMenu>
          {/* <DropdownItem>test</DropdownItem>
          <DropdownItem>test2</DropdownItem> */}
        </DropdownMenu>
      </NavItem>
    </ul>
  );
}

export default HeaderControls;
