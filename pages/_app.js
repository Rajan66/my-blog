import "@styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Nav from '@components/Nav'
import Head from "next/head";
import Footer from "@components/Footer";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Head>
        <title>P-Blog | Home</title>
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
