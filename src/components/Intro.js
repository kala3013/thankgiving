import React from "react";
import { motion } from "framer-motion";

function Intro({ enterSite }) {
  return (
    <div className="intro">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        🌟 A Special Surprise 🌟
      </motion.h1>

      <p>This website is dedicated to the person who guided me for 12 days ❤️</p>

      <button onClick={enterSite}>
        Enter the Memory Website 💖
      </button>

    </div>
  );
}

export default Intro;