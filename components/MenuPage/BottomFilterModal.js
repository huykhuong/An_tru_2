import React from "react";
import { motion } from "framer-motion";

const BottomFilterModal = (props) => {
  return (
    <motion.section
      className="w-full h-[200px] bg-white rounded-t-lg absolute z-[60] bottom-0 p-6 lg:w-[300px] lg:h-full lg:flex lg:flex-col lg:top-0 lg:right-0 lg:justify-start lg:bg-[#3A563E]"
      key={"modal"}
      initial={{ y: "100%" }}
      animate={props.openFilterModal ? { y: 0 } : { y: "100%" }}
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="hidden h-6 w-6 text-white ml-auto mr-10 mt-16 lg:cursor-pointer lg:inline lg:mb-20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        onClick={() => {
          props.setOpenFilterModal(false);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {props.children}
      <h1
        onClick={() => {
          props.setOpenFilterModal(false);
        }}
        className="cursor-pointer absolute bottom-5 right-7 font-medium mt-[55px] lg:hidden"
      >
        Đóng
      </h1>
    </motion.section>
  );
};

export default BottomFilterModal;
