import React from "react";
import SearchBar from "./SearchBar";
import NavItem from "./NavItem";
import DropdownMenu from "../../ui/DropdownMenu";

function HeaderControls({
  handleSearchTerm,
  searchTerm,
  handleSubmit,
  selectTheme,
}) {
  const icons = {
    home: <i className="fas fa-home"></i>,
    singup: <i className="fas fa-sign-in-alt"></i>,
    more: <i className="fas fa-ellipsis-v"></i>,
    arrow: <i className="fas fa-chevron-right"></i>,
    settings: <i class="fas fa-cog"></i>,
    themes: <i class="fas fa-swatchbook"></i>,
  };

  const itemsPrimary = [
    {
      type: "nav",
      body: "Settings",
      left: icons.settings,
      right: icons.arrow,
      value: "settings",
    },
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
        value: "original"
      },
      {
        type: "theme",
        body: "Forest",
        left: icons.themes,
        value: "green"
      },
      {
        type: "theme",
        body: "Candy",
        left: icons.themes,
        value: "pink"
      },
    ]
  };

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
        icon={icons.home}
        text="Home"
        link="/"
      />
      <NavItem
        mode="link"
        icon={icons.singup}
        text="Sign Up"
        link="/auth/singup"
      />
      <NavItem
        mode="dropdown"
        icon={icons.more}
        text="More"
      >
        <DropdownMenu
          selectTheme={selectTheme}
          itemsPrimary={itemsPrimary}
          itemsSecondary={itemsSecondary}
        />
      </NavItem>
    </ul>
  );
}

export default HeaderControls;
