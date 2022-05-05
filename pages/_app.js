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
          <meta name="robots" content="noodp,index,follow" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,minimum-scale=1height=device-height,target-densitydpi=device-dpi,viewport-fit=cover"
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no"
          />
          <meta name="theme-color" content="#3A563E"></meta>

          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
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
