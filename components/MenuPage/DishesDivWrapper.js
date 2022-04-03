import React from "react";
import { motion } from "framer-motion";

const DishesDivWrapper = (props) => {
  const onWheel = (e) => {
    // e.preventDefault();
    const container = document.getElementById("container");
    const containerScrollPosition =
      document.getElementById("container").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  // const scrollRef = useRef();

  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     return;
  //   }

  //   const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
  //     new LocomotiveScroll.default({
  //       el: scrollRef.current,
  //       smooth: true,
  //       direction: "horizontal",
  //     });
  //   });

  //   // return () => scroll.destroy();
  // }, []);

  return (
    <motion.div
      id="container"
      className="w-[100%] mx-auto h-[calc(100vh-140px)] mt-2 mb-40 flex flex-wrap gap-y-4 gap-x-2 content-start overflow-y-scroll justify-center md:px-3 md:gap-x-5 lg:overflow-x-auto lg:justify-start lg:gap-x-0 lg:px-0 lg:my-0 lg:scrollbar-hide lg:flex-nowrap lg:h-[100vh] lg:mx-0"
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
