import React from "react";

const ModalBackground = ({ openFilterModal, setOpenFilterModal }) => {
  return (
    <div
      // initial={{ opacity: 0, visibility: "hidden" }}
      // animate={
      //   openFilterModal
      //     ? { opacity: 1, visibility: "visible" }
      //     : { opacity: 0, visibility: "hidden" }
      // }
      // transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
      className={`absolute z-[60] w-full top-0 bottom-0 transition-all bg-black duration-[0.65s] ${
        openFilterModal ? "visible bg-opacity-70" : "invisible bg-opacity-0"
      }`}
      onClick={() => setOpenFilterModal(false)}
    ></div>
  );
};

export default ModalBackground;
