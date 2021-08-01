import React from "react";
import { Link } from "react-router-dom";

function DropdownItem({
  children,
  leftIcon,
  rightIcon,
  value,
  clickEvent,
  type,
}) {
  if (type === "link") {
    return (
      <li style={{ margin: 0 }}>
        <Link to={value} className="dropdown-item">
          <span className="icon-left">{leftIcon}</span>

          {children}

          <span className="icon-right">{rightIcon}</span>
        </Link>
      </li>
    );
  } else {
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
}

export default DropdownItem;
