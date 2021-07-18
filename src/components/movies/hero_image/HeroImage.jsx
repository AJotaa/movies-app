import React from "react";
import { motion } from "framer-motion";
import HeroImgControls from "./HeroImgControls.jsx";
import HeroImgCover from "./HeroImgCover.jsx";
import { IMAGE_BASE_URL } from "../../../config.js";

function HeroImage({ topMovies, selectControl, selectedMovie }) {
  const selectedMovies = topMovies[selectedMovie];

  const { backdrop_path, title } = selectedMovies;
  const backdrop = `${IMAGE_BASE_URL}original${backdrop_path}`;

  return (
    <motion.div
      className="hero-image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={backdrop} alt={title} />
      
      <HeroImgCover selectedMovies={selectedMovies} />
      <HeroImgControls selectControl={selectControl} />
    </motion.div>
  );
}

export default HeroImage;
