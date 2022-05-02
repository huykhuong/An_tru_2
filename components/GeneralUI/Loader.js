import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div className="bg-[#3A563E] w-full h-screen flex justify-center items-center font-medium text-xl">
      <motion.img
        key={"loader"}
        id={"loader"}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: [0.5, 0, 0, 1] }}
        src="/image.webp"
        height={100}
        width={100}
      />
    </motion.div>
  );
};

export default Loader;
