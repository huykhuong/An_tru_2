import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/menu.module.css";

const BottomFilterModal = (props) => {
  return (
    <motion.section
      className={styles.menu__laptop__filter__modal__section__div__container}
      key={"modal"}
      initial={{ y: "100%" }}
      animate={props.openFilterModal ? { y: 0 } : { y: "100%" }}
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.menu__laptop__filter__modal__close__button}
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
      {/* <p
        onClick={() => {
          props.setOpenFilterModal(false);
        }}
        className="cursor-pointer absolute bottom-5 right-7 font-medium mt-[55px] lg:hidden"
      >
        Đóng
      </p> */}
    </motion.section>
  );
};

export default BottomFilterModal;
