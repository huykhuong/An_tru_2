import Head from "next/head";
import Header from "../components/GeneralUI/Header";
import MainContent from "../components/LandingPage/MainContent";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "../store/ui-slice";

export default function Home() {
  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      {pageWillBeExitingFrom == "home" && (
        <motion.main
          key={"home_page"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MainContent />
        </motion.main>
      )}
    </>
  );
}
