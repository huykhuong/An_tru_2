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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        {loading ? <Loader /> : <Component {...pageProps} />}
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
