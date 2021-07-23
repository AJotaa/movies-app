import React from "react";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import HeroImgControls from "./HeroImgControls.jsx";
import HeroImgCover from "./HeroImgCover.jsx";
import { IMAGE_BASE_URL } from "../../../config.js";

function HeroImage({ topMovies, selectControl, selectedMovie }) {

  const heroMovie = topMovies.map((m, i) => {
    let backdrop = `${IMAGE_BASE_URL}original${m.backdrop_path}`;
    return (
      <CSSTransition
        key={m.id}
        unmountOnExit
        in={i === selectedMovie}
        timeout={300}
        classNames="hero-img-transition"
      >
        <div className="hero-img-container">
          <img src={backdrop} alt={m.title} />
          <HeroImgCover selectedMovies={m} />
        </div>
      </CSSTransition>
    );
  });

  return (
    <motion.div
      className="hero-image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {heroMovie}
      <HeroImgControls selectControl={selectControl} />
    </motion.div>
  );
}

export default HeroImage;
