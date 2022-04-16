import React from "react";
import { motion } from "framer-motion";

const BottomFilterModal = (props) => {
  return (
    <motion.section
      className="w-full h-[200px] bg-white rounded-t-lg absolute z-[60] bottom-0 p-6 lg:w-[300px] lg:h-full lg:flex lg:flex-col lg:absolute lg:top-0 lg:right-0 lg:justify-center lg:bg-[#3A563E]"
      key={"modal"}
      initial={{ y: "100%" }}
      animate={props.openFilterModal ? { y: 0 } : { y: "100%" }}
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
    >
      {props.children}
      <h1
        onClick={() => {
          props.setOpenFilterModal(false);
        }}
        className="cursor-pointer absolute bottom-5 right-7 font-medium mt-[55px]"
      >
        Đóng
      </h1>
    </motion.section>
  );
};

export default BottomFilterModal;
