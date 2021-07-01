import React from "react";

function TheSpinner() {
  return (
    <div className="container">
      <div className="spinner-container">
        <div></div>
        <div className="lds-dual-ring"></div>
        <div></div>
      </div>
    </div>
  );
}

export default TheSpinner;
