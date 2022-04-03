import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import FooterIcons from "./FooterIcons";

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
        className={`flex justify-between items-start sticky top-0 bottom-0 left-0 right-0 z-50 w-full px-5 py-5 h-fit mx-auto md:px-10 lg:px-36 2xl:px-[280px] ${
          router.pathname === "/menu" || router.pathname === "/menu/[slug]"
            ? "lg:absolute"
            : "sticky"
        }`}
      >
        {/* Logo and list items */}
        <div className="flex flex-col">
          <motion.h3
            key={"logo"}
            animate={{ color: `${openMenuState ? "#fff" : "#000"}` }}
            transition={{ duration: `${openMenuState ? 1 : 0}` }}
            onClick={() => {
              dispatch(uiActions.setOpenMenuFalse());
              dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
              switchPage("/");
            }}
            className={`${
              router.pathname === "/menu/[slug]" && !openMenuState
                ? "invisible"
                : "visible"
            } lg:cursor-pointer`}
          >
            AN TRÚ
          </motion.h3>

          <nav
            className={`${
              openMenuState ? "h-full" : "h-0 overflow-hidden"
            } absolute top-20 text-4xl space-y-[5px] font-medium`}
          >
            <motion.h1
              key={"home"}
              animate={openMenuState ? { opacity: 1 } : { opacity: 0 }}
              transition={
                openMenuState
                  ? { duration: 1, delay: 0.5 }
                  : { duration: 0, delay: 0 }
              }
              onClick={() => {
                if (router.pathname === "/") return;
                dispatch(uiActions.setOpenMenuFalse());
                dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
                switchPage("/");
              }}
              className={`${
                router.pathname === "/" ? selectedOptionStyle : "text-white"
              } lg:cursor-pointer`}
            >
              Trang chủ
            </motion.h1>

            <motion.h1
              key={"menu"}
              animate={openMenuState ? { opacity: 1 } : { opacity: 0 }}
              transition={
                openMenuState
                  ? { duration: 1, delay: 0.5 }
                  : { duration: 0, delay: 0 }
              }
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
              } lg:cursor-pointer`}
            >
              Menu
            </motion.h1>

            <motion.h1
              key={"about"}
              animate={openMenuState ? { opacity: 1 } : { opacity: 0 }}
              transition={
                openMenuState
                  ? { duration: 1, delay: 0.5 }
                  : { duration: 0, delay: 0 }
              }
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
              } lg:cursor-pointer`}
            >
              Về chúng tôi
            </motion.h1>

            {/* <motion.h1
              key={"contact"}
              animate={openMenuState ? { opacity: 1 } : { opacity: 0 }}
              transition={
                openMenuState
                  ? { duration: 1, delay: 0.5 }
                  : { duration: 0, delay: 0 }
              }
              className={`${router.pathname === "/contact"
                ? selectedOptionStyle
                : "text-white"
                }`}
            >
              Liên hệ
            </motion.h1> */}
          </nav>
        </div>

        {/* Menu button */}
        <motion.button
          key={"menuButton"}
          animate={{ color: `${openMenuState ? "#fff" : "#000"}` }}
          transition={{ duration: `${openMenuState ? 1 : 0}` }}
          onClick={() => {
            dispatch(uiActions.toggleOpenMenu());
            setDisableBtn(true);
          }}
          disabled={disableBtn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>

      {/* Black background */}
      <motion.div
        key={"menu"}
        style={{ originY: 1 }}
        initial={{ scaleY: 0 }}
        animate={openMenuState ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: [0.85, 0.01, 0.4, 1] }}
        className="h-screen w-full bg-black absolute top-0 z-40"
      >
        {" "}
        <FooterIcons />
      </motion.div>
    </header>
  );
};

export default Header;
