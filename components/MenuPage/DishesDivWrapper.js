import React from "react";
import { motion } from "framer-motion";

const DishesDivWrapper = (props) => {
  return (
    <motion.div
      className="w-[100vw] h-[calc(100vh-140px)] mt-2 mb-40 flex flex-wrap gap-y-6 gap-x-2 content-start overflow-y-scroll justify-center md:px-3 md:gap-x-5"
      key={"dishes_wrapper"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
    >
      {props.children}
      {/* Psudo elements to fill in the blanks of flex wrap */}
      <div className="w-[183px] md:w-[248px]"></div>
      <div className="w-[183px] md:w-[248px]"></div>
      <div className="w-[183px] md:w-[248px]"></div>
    </motion.div>
  );
};

export default DishesDivWrapper;
