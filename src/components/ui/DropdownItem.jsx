import React from "react";

function DropdownItem({
  children,
  leftIcon,
  rightIcon,
  setActiveMenu,
  goToMenu,
}) {
  return (
    <li
      className="dropdown-item"
      style={{ margin: 0 }}
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-left">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </li>
  );
}

export default DropdownItem;
