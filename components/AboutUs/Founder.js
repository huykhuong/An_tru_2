import React from "react";
import Image from "next/image";
import styles from "../../styles/about.module.css";

const Founder = ({ name }) => {
  return (
    <div className={styles.founder__component__div__container}>
      <div className={styles.founder__img__container}>
        <Image
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          layout="fill"
          objectFit="contain"
          className={styles.founder__img}
          alt="founder-img"
        />
      </div>
      <p className={styles.founder__name}>{name}</p>
    </div>
  );
};

export default Founder;
