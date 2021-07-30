import React from "react";

function TheSpinner({ mode, style }) {
  if (mode === "small") {
    return (
      <div id="the-spinner" style={style}>
        <div></div>
        <div className="lds-dual-ring"></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div id="the-spinner" className="container">
        <div className="spinner-container">
          <div></div>
          <div className="lds-dual-ring"></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default TheSpinner;
