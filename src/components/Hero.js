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
      </motion.h1>
    </div>
  );
}

export default Hero;