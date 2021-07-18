import React from "react";
import { Link } from "react-router-dom";

function BaseButton({ mode, link, children, click }) {
  if (mode === "link") {
    return (
      <div id="base-button">
        <Link to={link}>{children}</Link>
      </div>
    );
  } else if (mode === "nav") {
    return (
      <div id="base-button">
        <button className="nav-button" onClick={click}>
          {children}
        </button>
      </div>
    );
  } else if (mode === "left") {
    return (
      <button className="light-button" onClick={click}>
        <i className="fas fa-chevron-left"></i>
      </button>
    );
  } else if (mode === "right") {
    return (
      <button className="light-button" onClick={click}>
        <i className="fas fa-chevron-right"></i>
      </button>
    );
  } else {
    return (
      <div id="base-button" onClick={click}>
        <button className="alt-button">{children}</button>
      </div>
    );
  }
}

export default BaseButton;
