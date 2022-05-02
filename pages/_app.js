import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "../store";
import { Router } from "next/router";
import { useState } from "react";
import Loader from "../components/GeneralUI/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", () => {
    setLoading(false);
  });

  return (
    <Provider store={store}>
      <AnimatePresence>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,minimum-scale=1height=device-height,target-densitydpi=device-dpi"
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=no"
          />
          <meta
            name="theme-color"
            content="#242e52"
            media="(prefers-color-scheme: dark)"
          />
          <meta
            name="theme-color"
            content="#242e52"
            media="(prefers-color-scheme: light)"
          />
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          /> */}
          <link
            rel="icon"
            type="image/png"
            sizes="256 x 256"
            href="favicon.ico"
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
