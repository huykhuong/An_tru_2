import React, { useRef } from "react";
import { motion } from "framer-motion";

const DishesDivWrapper = (props) => {
  const onWheel = (e) => {
    // e.preventDefault();
    const container = document.getElementById("dishes_wrapper");
    const containerScrollPosition =
      document.getElementById("dishes_wrapper").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  const scrollRef = useRef();

  return (
    <motion.div
      ref={scrollRef}
      id="dishes_wrapper"
      className="bg-[#c2f4ab] bg-opacity-30 w-[100%] mx-auto mt-[86.797px] mb-[63.5px] flex flex-wrap gap-y-4 gap-x-2 content-start overflow-y-auto justify-center md:px-3 md:gap-x-5 lg:scrollbar-hide lg:overflow-x-auto lg:justify-start lg:gap-x-0 lg:px-0 lg:my-0 lg:flex-nowrap lg:h-[100vh] lg:mx-0 lg:bg-transparent"
      key={"dishes_wrapper"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
      onWheel={onWheel}
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
