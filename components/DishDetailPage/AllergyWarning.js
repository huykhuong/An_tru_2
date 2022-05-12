import React from "react";
import styles from "../../styles/dish__detail.module.css";

const AllergicWarning = ({ warning }) => {
  return (
    <section
      className={styles.dish__detail__mobile__allergy__warning__container}
    >
      <p className={styles.dish__detail__mobile__allergy__warning__text}>
        Lưu ý: sản phẩm có chứa nhiều sữa
      </p>
    </section>
  );
};

export default AllergicWarning;
