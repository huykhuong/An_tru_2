import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import styles from "../../styles/menu.module.css";

const DishCard = ({ dishName, dishImg, dishPrice, index }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const switchPage = (path) => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "dish_detail" }));
    setTimeout(() => {
      router.push(path);
    }, 1100);
  };

  return (
    <>
      <div
        className={styles.menu__mobile__dish__card__div__container}
        onClick={() => switchPage("/menu/1")}
      >
        <img
          className={styles.menu__mobile__dish__card__image}
          src={
            dishImg ? dishImg : "https://swiperjs.com/demos/images/nature-1.jpg"
          }
          alt={dishName}
        />
        <p className={styles.menu__mobile__dish__card__name}>{dishName}</p>
        <p className={styles.menu__mobile__dish__card__price}>{dishPrice}</p>
      </div>

      <div className={styles.menu__laptop__dish__card__div__container}>
        <div
          className={`${styles.menu__laptop__dish__card__image} group hover:bg-[url('https://raw.githubusercontent.com/taimoorshahzada/Gallery-Landing-Page-Website-using-HTML-CSS-and-GSAP/main/3.jpg')]`}
        >
          <div
            className={styles.menu__laptop__dish__card__contents__container}
            onClick={() => switchPage("/menu/1")}
          >
            <p
              className={`${styles.menu__laptop__dish__card__name} group-hover:text-white ease-[cubic-bezier(0.19, 1, 0.22, 1)]`}
            >
              {dishName}
            </p>

            <div
              className={`${styles.menu__laptop__dish__card__index} group-hover:text-white ease-[cubic-bezier(0.19, 1, 0.22, 1) ]`}
            >
              {index + 1}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishCard;
