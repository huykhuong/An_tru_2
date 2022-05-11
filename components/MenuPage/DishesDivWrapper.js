import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/menu.module.css";

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
      className={styles.menu__mobile__laptop__dish__card__wrapper}
      key={"dishes_wrapper"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
      onWheel={onWheel}
    >
      {props.children}
      {/* Psudo elements to fill in the blanks of flex wrap */}
      <div className={styles.menu__mobile__psudo__dish__card}></div>
      <div className={styles.menu__mobile__psudo__dish__card}></div>
      <div className={styles.menu__mobile__psudo__dish__card}></div>
    </motion.div>
  );
};

export default DishesDivWrapper;
