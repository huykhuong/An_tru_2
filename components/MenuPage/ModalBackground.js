import React from "react";
import styles from "../../styles/menu.module.css";

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
      className={`${styles.menu__laptop__modal__background} ${
        openFilterModal
          ? "visible bg-opacity-70 bg-black"
          : "invisible bg-opacity-0 bg-black"
      }`}
      onClick={() => setOpenFilterModal(false)}
    ></div>
  );
};

export default ModalBackground;
