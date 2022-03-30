import React from "react";
import { motion } from "framer-motion";

const DishesDivWrapper = (props) => {
  return (
    <motion.div
      className="w-[100vw] mx-auto h-[calc(100vh-140px)] mt-2 mb-40 flex flex-wrap gap-y-4 gap-x-2 content-start overflow-y-scroll justify-center md:px-3 lg:px-0 md:gap-x-5 lg:gap-x-0 lg:overflow-x-auto lg:scrollbar-hide lg:flex-nowrap lg:scrollbar-hide lg:h-[calc(100vh-170px)] lg:mx-0 "
      key={"dishes_wrapper"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
    >
      {props.children}
      {/* Psudo elements to fill in the blanks of flex wrap */}
      <div className="w-[183px] md:w-[248px] lg:hidden"></div>
      <div className="w-[183px] md:w-[248px] lg:hidden"></div>
      <div className="w-[183px] md:w-[248px] lg:hidden"></div>
    </motion.div>
  );
};

export default DishesDivWrapper;
