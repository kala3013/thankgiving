import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        💖 Thank You Sister 💖
      </motion.h1>

      <p>
        Thank you for training me in MERN Stack for 12 amazing days.
        Your support and teaching means a lot to me.
      </p>
    </div>
  );
}

export default Hero;