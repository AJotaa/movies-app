import React from "react";

function HeroImgControls({ selectControl }) {
  return (
    <div className="controls">
      <button
        onClick={() => selectControl("prev", true)}
        className="prevButton"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={() => selectControl("next", true)}
        className="nextButton"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default HeroImgControls;
