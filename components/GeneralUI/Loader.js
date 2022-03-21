import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="w-full h-screen flex justify-between items-center"
      key={"loader"}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: [0.5, 0, 0, 1] }}
    >
      Loading
    </motion.div>
  );
};

export default Loader;
