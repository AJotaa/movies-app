import React from "react";

function DropdownItem({
  children,
  leftIcon,
  rightIcon,
  value,
  clickEvent
}) {

  return (
    <li
      className="dropdown-item"
      style={{ margin: 0 }}
      onClick={() => value && clickEvent(value)}
    >
      <span className="icon-left">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </li>
  );
}

export default DropdownItem;
