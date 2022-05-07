import Head from "next/head";
import Header from "../components/GeneralUI/Header";
import MainContent from "../components/LandingPage/MainContent";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import { uiActions } from "../store/ui-slice";

export default function Home() {
  const pageWillBeExitingFrom = useSelector(
    (state) => state.uiReducer.pageExitingFrom
  );

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      if (as !== "/") {
        dispatch(uiActions.setPageExitingFrom({ exitingPage: "" }));
        setTimeout(() => {
          router.replace(as);
        }, 1100);
      }
    });
  }, [router]);

  useEffect(() => {
    dispatch(uiActions.setPageExitingFrom({ exitingPage: "home" }));
  }, [dispatch]);

  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });

  return (
    <Fragment>
      <Head>
        <title>Nhà hàng chay An Trú</title>
        <meta name="description" content="Trang chủ nhà hàng chay An Trú" />
        <meta
          name="keywords"
          content="An Trú, An Tru, nhà hàng chay An Trú, nhà hàng chay, đồ ăn chay, vegetarian restaurant"
        />
        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nhà hàng chay An Trú" />
        <meta
          property="og:description"
          content="Trang chủ nhà hàng chay An Trú"
        />
        <meta property="og:url" content="https://antruveggie.vn" />
        <meta property="og:site_name" content="Nhà hàng chay An Trú" />
        {/* <link
          rel="preload"
          href="https://images.unsplash.com/photo-1630492782892-74f99406dc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          as="image"
        /> */}
        <link rel="canonical" href="https://antruveggie.vn" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="short icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>

      <Header />

      <motion.main
        id="home_page"
        key={"home_page"}
        initial={{ opacity: 0 }}
        animate={
          pageWillBeExitingFrom === "home" ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 0.6 }}
      >
        <MainContent />
      </motion.main>
    </Fragment>
  );
}
