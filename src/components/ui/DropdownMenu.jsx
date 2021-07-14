import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownItem from "./DropdownItem";
// import BaseButton from './BaseButton'

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const icons = {
    arrow: <i className="fas fa-chevron-right"></i>,
    config: <i class="fas fa-cog"></i>,
    themes: <i class="fas fa-swatchbook"></i>,
  };

  function calHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  console.log(menuHeight);

  return (
    <div className="dropdown-menu" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={300}
        classNames="menu-primary"
        onEnter={calHeight}
      >
        <ul className="menu">
          <DropdownItem
            leftIcon={icons.config}
            rightIcon={icons.arrow}
            setActiveMenu={setActiveMenu}
            goToMenu="settings"
          >
            test
          </DropdownItem>
          <DropdownItem leftIcon={icons.themes}>test2</DropdownItem>
        </ul>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={300}
        classNames="menu-secondary"
        onEnter={calHeight}
      >
        <ul className="menu">
          <DropdownItem
            leftIcon={icons.config}
            rightIcon={icons.arrow}
            setActiveMenu={setActiveMenu}
            goToMenu="main"
          >
            test3
          </DropdownItem>
          <DropdownItem leftIcon={icons.themes}>test4</DropdownItem>
          <DropdownItem leftIcon={icons.themes}>test5</DropdownItem>
          <DropdownItem leftIcon={icons.themes}>test6</DropdownItem>
        </ul>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
