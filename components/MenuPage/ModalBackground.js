import React from "react";
import { motion } from "framer-motion";

const ModalBackground = ({ openFilterModal, setOpenFilterModal }) => {
  return (
    <motion.div
      key={"modal_background"}
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={
        openFilterModal
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
      onClick={() => setOpenFilterModal(false)}
      className="absolute z-[60] w-full top-0 bottom-0 bg-black bg-opacity-70"
    ></motion.div>
  );
};

export default ModalBackground;
