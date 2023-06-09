import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Interactive Comments Section</title>
        <meta
          name="description"
          content="A frontend mentor project - Interactive Comments Section"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
