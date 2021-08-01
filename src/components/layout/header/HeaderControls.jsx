import React from "react";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import DropdownMenu from "../../ui/DropdownMenu";
import DropdownItem from "../../ui/DropdownItem";

function HeaderControls({
  handleSearchTerm,
  searchTerm,
  handleSubmit,
  selectTheme,
}) {
  const icons = {
    home: <i className="fas fa-home"></i>,
    signup: <i className="fas fa-sign-in-alt"></i>,
    more: <i className="fas fa-ellipsis-v"></i>,
    arrow: <i className="fas fa-chevron-right"></i>,
    settings: <i className="fas fa-cog"></i>,
    themes: <i className="fas fa-swatchbook"></i>,
  };

  const itemsPrimary = [
    {
      type: "nav",
      body: "Themes",
      left: icons.themes,
      right: icons.arrow,
      value: "themes",
    },
  ];
  const itemsSecondary = {
    settings: [
      {
        body: "test",
        left: icons.settings,
      },
    ],
    themes: [
      {
        type: "theme",
        body: "Original",
        left: icons.themes,
        value: "original",
      },
      {
        type: "theme",
        body: "Forest",
        left: icons.themes,
        value: "green",
      },
      {
        type: "theme",
        body: "Candy",
        left: icons.themes,
        value: "pink",
      },
    ],
  };

  const itemsMovilPrimnary = [
    {
      type: "link",
      body: "Home",
      left: icons.home,
      value: "/",
    },
    {
      type: "link",
      body: "Sign Up",
      left: icons.signup,
      value: "/auth/signup",
    },
    {
      type: "nav",
      body: "Themes",
      left: icons.themes,
      right: icons.arrow,
      value: "themes",
    },
  ];

  return (
    <ul className="controls">
      <li>
        <SearchBar
          handleSearchTerm={handleSearchTerm}
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
        />
      </li>
      <NavItem mode="link" icon={icons.home} text="Home" link="/" />
      <NavItem
        mode="link"
        icon={icons.signup}
        text="Sign Up"
        link="/auth/signup"
      />
      <NavItem mode="dropdown" icon={icons.more} text="More">
        <DropdownMenu
          selectTheme={selectTheme}
          itemsPrimary={itemsPrimary}
          itemsSecondary={itemsSecondary}
        />
      </NavItem>
      <span className="movil-menu" style={{ margin: 0 }}>
        <NavItem mode="dropdown" icon={icons.more} text="More">
          <DropdownMenu
            selectTheme={selectTheme}
            itemsPrimary={itemsMovilPrimnary}
            itemsSecondary={itemsSecondary}
          >
            <DropdownItem>
              <NavItem mode="link" icon={icons.home} text="Home" link="/" />
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
      </span>
    </ul>
  );
}

export default HeaderControls;
