import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "../store";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/GeneralUI/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

    Router.events.on("routeChangeError", () => {
      setLoading(false);
    });
    return () => {
      Router.events.off("routeChangeStart", () => {});
      Router.events.off("routeChangeComplete", () => {});
      Router.events.off("routeChangeError", () => {});
    };
  }, [Router.events]);

  return (
    <Provider store={store}>
      <AnimatePresence>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,minimum-scale=1height=device-height,target-densitydpi=device-dpi,viewport-fit=cover"
          />
          <meta name="theme-color" content="#3A563E"></meta>
          <meta property="og:image" content="/logo.png"></meta>
        </Head>

        {loading ? (
          <Loader />
        ) : (
          typeof window !== "undefined" && <Component {...pageProps} />
        )}
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
