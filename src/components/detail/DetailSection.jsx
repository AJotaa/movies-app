import React, { useState } from "react";
import { motion } from "framer-motion";
import DetailInfo from "./DetailInfo";
import { IMAGE_BASE_URL, IMAGE_SIZE } from "../../config.js";
import { Link } from "react-router-dom";
import TheSpinner from "../ui/TheSpinner";

function DetailSection({ movie, trailerOpt, playTrailer }) {
  const [imgLoading, setImgLoading] = useState(true);

  const backdrop =
    movie && movie.backdrop_path
      ? `url('${IMAGE_BASE_URL}${IMAGE_SIZE.xLarge}${movie.backdrop_path}')`
      : "url(https://sublenceevents.com/wp-content/uploads/2017/08/img_placeholder.jpg)";
  const backgroundStyle = {
    background: backdrop,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const altImg =
    "https://reinobajito.com/wp-content/uploads/2014/10/img-placeholder-dark-vertical.jpg";

  const showImage =
    movie.belongs_to_collection && movie.belongs_to_collection.poster_path
      ? `${IMAGE_BASE_URL}${IMAGE_SIZE.small}${movie.belongs_to_collection.poster_path}`
      : altImg;

  return (
    <motion.section
      id="detail-page"
      style={backgroundStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="back-shadow">
        <div className="detail-container container">
          <DetailInfo
            movie={movie}
            trailerOpt={trailerOpt}
            playTrailer={playTrailer}
          />

          {movie.belongs_to_collection && (
            <Link to={`/collection/${movie.belongs_to_collection.id}`}>
              <div
                className="collection"
                title={movie.belongs_to_collection.name}
              >
                {imgLoading && <TheSpinner mode="small" />}
                <img
                  src={showImage}
                  alt=""
                  onLoad={() => setImgLoading(false)}
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default DetailSection;
