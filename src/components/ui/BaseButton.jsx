import React from "react";
import { Link } from "react-router-dom";

function BaseButton({ mode, link, children, click }) {
  if (mode === "link") {
    return (
      <div id="base-button">
        <Link to={link}>{children}</Link>
      </div>
    );
  } else if (mode === "select") {
    return (
      <div id="base-button">
        <button className="select-button">{children}</button>
      </div>
    );
  } else {

    return (
    <div id="base-button" onClick={click}>
      <button className="alt-button">{children}</button>
    </div>
    )
  }
}

export default BaseButton;
