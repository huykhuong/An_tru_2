import React from "react";
import styles from "../../styles/dish__detail.module.css";

const TitleAndPrice = ({ vn_name, eng_name, price }) => {
  return (
    <section className={styles.dish__detail__title__and__price__container}>
      {/* <p className="invisible lg:visible lg:mb-[250px] lg:italic">
        Dùng chuột trái để kéo qua
      </p> */}
      <h1 className={styles.dish__detail__title__and__price__vietnamese__name}>
        Cơm chiên Omurice
      </h1>
      <div
        className={
          styles.dish__detail__title__and__price__extra__details__container
        }
      >
        <div
          className={
            styles.dish__detail__title__and__price__eng__name__and__price
          }
        >
          <p className={styles.dish__detail__title__and__price__eng__name}>
            Omurice Fried Rice
          </p>
          <p className={styles.dish__detail__title__and__price__price}>73</p>
        </div>
        <p
          className={
            styles.dish__detail__title__and__price__laptop__allery__text
          }
        >
          Lưu ý: sản phẩm có chứa nhiều sữa
        </p>
      </div>
    </section>
  );
};

export default TitleAndPrice;
