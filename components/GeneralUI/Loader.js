import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="absolute top-1/2 right-1/2"
      key={"loader"}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: [0.5, 0, 0, 1] }}
    >
      Loading
    </motion.div>
  );
};

export default Loader;
