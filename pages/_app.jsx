import Head from "next/head";
import Footer from "../components/Footer";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <div style={{ zIndex: -1 }} className="fixed inset-0">
        <canvas className="w-full h-full" id="main-canvas"></canvas>
      </div>
      <div className="relative">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
