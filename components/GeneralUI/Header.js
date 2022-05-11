import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import styles from "../../styles/general_component.module.css";

const Header = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const openMenuState = useSelector((state) => state.uiReducer.openMenu);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisableBtn(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [disableBtn]);

  const switchPage = (path) => {
    setTimeout(() => {
      router.push(path);
    }, 1100);
  };

  const selectedOptionStyle = "italic text-[#999999]";

  return (
    <header className={styles.header}>
      {/* Contents */}
      <div
        className={`${
          styles.header__main__contents__area__div__container
        } bg-[#fbfbfb] ${
          router.pathname === "/menu" ||
          router.pathname === "/menu/[slug]" ||
          router.pathname === "/"
            ? "lg:bg-transparent"
            : ""
        } `}
      >
        {/* Logo and list items */}
        <img
          src="/logo.png"
          alt="logo-img"
          onClick={() => {
            dispatch(uiActions.setOpenMenuFalse());
            dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
            switchPage("/");
          }}
          className={`${
            router.pathname === "/menu/[slug]" && !openMenuState
              ? "lg:invisible"
              : "lg:visible"
          } ${styles.header__logo__image}`}
        />

        {/* Menu button */}
        <button
          onClick={() => {
            dispatch(uiActions.toggleOpenMenu());
            setDisableBtn(true);
          }}
          disabled={disableBtn}
          className={`${
            openMenuState ? "invisible" : "visible"
          } transition-all duration-200`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.header__burger__menu__icon}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Blur black background */}
      <div
        className={`${styles.header__blur__black__background} ${
          openMenuState
            ? "visible bg-opacity-70 bg-black"
            : "invisible bg-opacity-0 bg-black"
        } ease-[0.85, 0.01, 0.4, 1]`}
        onClick={() => {
          dispatch(uiActions.toggleOpenMenu(false));
          setDisableBtn(true);
        }}
      ></div>

      {/* Green background */}
      <motion.div
        key={"menu"}
        style={{ originY: 1 }}
        initial={{ scaleY: 0 }}
        animate={openMenuState ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.65, ease: [0.85, 0.01, 0.4, 1] }}
        className={styles.header__menu__green__column__container}
      >
        <div className={styles.header__menu__green__column__inner__container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.header__menu__green__column__close__button}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => {
              dispatch(uiActions.toggleOpenMenu());
              setDisableBtn(true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <nav className={styles.header__menu__green__column__nav__section}>
            <p
              onClick={() => {
                if (router.pathname === "/") return;
                dispatch(uiActions.setOpenMenuFalse());
                dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
                switchPage("/");
              }}
              className={`${
                router.pathname === "/" ? selectedOptionStyle : "text-white"
              } ${
                openMenuState ? "visible opacity-100" : "invisible opacity-0"
              } ${styles.header__menu__green__column__nav__button}`}
            >
              Trang chủ
            </p>

            <p
              onClick={() => {
                if (router.pathname === "/menu") return;
                dispatch(uiActions.setOpenMenuFalse());
                dispatch(uiActions.setPageExitingFrom({ exitingPage: "menu" }));
                dispatch(uiActions.setSelectedFilterOption({ value: 0 }));
                switchPage("/menu");
              }}
              className={`${
                router.pathname === "/menu" ||
                router.pathname === "/menu/[slug]"
                  ? selectedOptionStyle
                  : "text-white"
              } ${
                openMenuState ? "visible opacity-100" : "invisible opacity-0"
              } ${styles.header__menu__green__column__nav__button}`}
            >
              Menu
            </p>

            <p
              onClick={() => {
                if (router.pathname === "/about") return;
                dispatch(uiActions.setOpenMenuFalse());
                dispatch(
                  uiActions.setPageExitingFrom({ exitingPage: "about" })
                );
                switchPage("/about");
              }}
              className={`${
                router.pathname === "/about"
                  ? selectedOptionStyle
                  : "text-white"
              } ${
                openMenuState ? "visible opacity-100" : "invisible opacity-0"
              } ${styles.header__menu__green__column__nav__button}`}
            >
              Về chúng tôi
            </p>
          </nav>
        </div>

        <p
          className={`${styles.header__menu__green__column__copyright__text} ${
            openMenuState ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          Copyright © 2022 An Trú - Vegetarian house
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
