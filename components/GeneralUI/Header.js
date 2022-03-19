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

  return (
    <header className="relative">
      {/* Contents */}
      <div className="flex justify-between items-start absolute top-0 bottom-0 left-0 right-0 z-50 w-[90%] h-fit mx-auto mt-5">
        {/* Logo and list items */}
        <div className="flex flex-col">
          <motion.h3
            key={"logo"}
            className={`${openMenuState ? "mb-16" : "mb-0"}`}
            animate={{ color: `${openMenuState ? "#fff" : "#000"}` }}
            transition={{ duration: `${openMenuState ? 1 : 0}` }}
            onClick={() => {
              dispatch(uiActions.setOpenMenuFalse());
              dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
              switchPage("/");
            }}
          >
            AN TRÚ
          </motion.h3>

          <nav>
            <div
              className={`${
                openMenuState ? "h-full" : "h-0 overflow-hidden"
              } text-white text-4xl space-y-[5px] font-medium`}
            >
              <motion.h1
                key={"home"}
                animate={
                  openMenuState ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={
                  openMenuState
                    ? { duration: 1, delay: 0.2 }
                    : { duration: 0, delay: 0 }
                }
                onClick={() => {
                  dispatch(uiActions.setOpenMenuFalse());
                  dispatch(
                    uiActions.setPageExitingFrom({ exitingPage: "home" })
                  );
                  switchPage("/");
                }}
                className="italic text-[#999999]"
              >
                Trang chủ
              </motion.h1>

              <motion.h1
                key={"menu"}
                animate={
                  openMenuState ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={
                  openMenuState
                    ? { duration: 1, delay: 0.2 }
                    : { duration: 0, delay: 0 }
                }
                onClick={() => {
                  dispatch(uiActions.setOpenMenuFalse());
                  dispatch(
                    uiActions.setPageExitingFrom({ exitingPage: "menu" })
                  );
                  switchPage("/menu");
                }}
              >
                Menu
              </motion.h1>

              <motion.h1
                key={"about"}
                animate={
                  openMenuState ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={
                  openMenuState
                    ? { duration: 1, delay: 0.2 }
                    : { duration: 0, delay: 0 }
                }
              >
                Về chúng tôi
              </motion.h1>

              <motion.h1
                key={"contact"}
                animate={
                  openMenuState ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={
                  openMenuState
                    ? { duration: 1, delay: 0.2 }
                    : { duration: 0, delay: 0 }
                }
              >
                Liên hệ
              </motion.h1>
            </div>
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
          className="lg:hidden"
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
        initial={{ y: "100%" }}
        animate={openMenuState ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 1, ease: [0.5, 0, 0, 1] }}
        className="h-screen w-full bg-black absolute top-0 z-40"
      >
        {" "}
        <FooterIcons />
      </motion.div>
    </header>
  );
};

export default Header;
