import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/general_component.module.css";

const Loader = () => {
  return (
    <motion.div className={styles.loader__div__container}>
      <motion.img
        key={"loader"}
        id={"loader"}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: [0.5, 0, 0, 1] }}
        src="/image.webp"
        alt="loader-img"
        height={100}
        width={100}
      />
    </motion.div>
  );
};

export default Loader;
