import React, { useState } from "react";
import TheSpinner from "../../ui/TheSpinner";

function HeroImageImg({ backdrop, title }) {
  const [imgLoading, setImgLoading] = useState(true);
  return (
    <React.Fragment>
      {imgLoading && <TheSpinner />}
      <img src={backdrop} alt={title} onLoad={() => setImgLoading(false)} />
    </React.Fragment>
  );
}

export default HeroImageImg;
