import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <motion.div
      id="not-found"
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      
      <h1>
        You are lost... Please try <Link to="/">this link</Link>
      </h1>
    </motion.div>
  );
}

export default NotFoundPage;
