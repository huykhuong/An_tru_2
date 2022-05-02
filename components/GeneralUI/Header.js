import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

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
    <header className="relative">
      {/* Contents */}
      <div
        className={`fixed flex justify-between items-center top-0 bg-[#fbfbfb] bottom-0 left-0 right-0 z-40 w-full px-5 py-4 h-fit mx-auto md:px-10 lg:py-5 lg:max-w-[1650px] xl:max-w-[1400px] ${
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
            dispatch(uiActions.setSelectedFilterOption({ value: 0 }));
            switchPage("/");
          }}
          className={`${
            router.pathname === "/menu/[slug]" && !openMenuState
              ? "lg:invisible"
              : "lg:visible"
          } w-[50px] lg:w-[60px] lg:cursor-pointer relative z-30`}
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
            className="h-5 w-5 lg:h-7 lg:w-7"
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
        className={`fixed bg-black top-0 left-0 w-full h-screen z-40 ${
          openMenuState ? "visible bg-opacity-70" : "invisible bg-opacity-0"
        } transition-all duration-[0.65s] ease-[0.85, 0.01, 0.4, 1]`}
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
        className="h-screen w-full bg-[#3A563E] fixed top-0 right-0 bottom-0 z-40 flex flex-col lg:w-[300px]"
      >
        <div className="flex flex-col items-center flex-grow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white ml-auto mr-10 mt-16 lg:cursor-pointer"
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
          <nav className="mt-20 text-4xl space-y-[10px] font-medium">
            <h1
              onClick={() => {
                if (router.pathname === "/") return;
                dispatch(uiActions.setOpenMenuFalse());
                dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
                dispatch(uiActions.setSelectedFilterOption({ value: 0 }));
                switchPage("/");
              }}
              className={`${
                router.pathname === "/" ? selectedOptionStyle : "text-white"
              } ${
                openMenuState ? "visible opacity-100" : "invisible opacity-0"
              } transition-all duration-200  lg:cursor-pointer`}
            >
              Trang chủ
            </h1>

            <h1
              onClick={() => {
                if (router.pathname === "/menu") return;
                dispatch(uiActions.setOpenMenuFalse());
                dispatch(uiActions.setPageExitingFrom({ exitingPage: "menu" }));
                switchPage("/menu");
              }}
              className={`${
                router.pathname === "/menu" ||
                router.pathname === "/menu/[slug]"
                  ? selectedOptionStyle
                  : "text-white"
              } ${
                openMenuState ? "visible opacity-100" : "invisible opacity-0"
              } transition-all duration-200 lg:cursor-pointer`}
            >
              Menu
            </h1>

            <h1
              onClick={() => {
                if (router.pathname === "/about") return;
                dispatch(uiActions.setOpenMenuFalse());
                dispatch(
                  uiActions.setPageExitingFrom({ exitingPage: "about" })
                );
                dispatch(uiActions.setSelectedFilterOption({ value: 0 }));
                switchPage("/about");
              }}
              className={`${
                router.pathname === "/about"
                  ? selectedOptionStyle
                  : "text-white"
              } ${
                openMenuState ? "visible opacity-100" : "invisible opacity-0"
              } transition-all duration-200 lg:cursor-pointer`}
            >
              Về chúng tôi
            </h1>
          </nav>
        </div>
        <p
          className={`text-white text-center pb-10 ${
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
