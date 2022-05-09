import React from "react";
import styles from "../../styles/about.module.css";

const Heading = ({ order, title }) => {
  return (
    <div className={styles.heading__component__container}>
      <h1 className={styles.heading__component__heading}>{order}</h1>
      <p className={styles.heading__component__title}>{title}</p>
    </div>
  );
};

export default Heading;
