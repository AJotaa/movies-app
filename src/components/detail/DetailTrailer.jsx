import React, { useState } from "react";
import YouTube from "react-youtube";
import { CSSTransition } from "react-transition-group";
import TheSpinner from "../ui/TheSpinner";

function DetailTrailer({ showTrailer, trailerId }) {
  const [trailerIsReady, setTrailerIsReady] = useState(false);
  const [loadTrailer, setLoadTrailer] = useState(false);

  function handleLoadTrailer() {
    setLoadTrailer(!loadTrailer);

    if (showTrailer === true) {
      const elementTo = document.getElementById("trailer");
      elementTo && elementTo.scrollIntoView();
    }
  }

  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const spinnerStyle = { position: "absolute", height: "480px" };

  return (
    <CSSTransition
      in={showTrailer}
      unmountOnExit
      timeout={300}
      classNames="trailer-transition"
      onEntered={handleLoadTrailer}
      onExit={handleLoadTrailer}
    >
      <div className="movie-trailer" id="trailer">
        {loadTrailer && !trailerIsReady ? (
          <TheSpinner mode="small" style={spinnerStyle} />
        ) : null}
        {loadTrailer && (
          <YouTube
            videoId={trailerId}
            opts={opts}
            style={{ position: "absolute" }}
            onReady={() => setTrailerIsReady(true)}
          />
        )}
      </div>
    </CSSTransition>
  );
}

export default DetailTrailer;
