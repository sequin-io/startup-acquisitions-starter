import Head from "next/head";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Startup Acquisitions</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
