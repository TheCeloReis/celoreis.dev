import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
        <link rel="manifest" href="/site.webmanifest" />

        <title>Celo Reis - Frontend Developer</title>
        <meta name="title" content="Celo Reis - Frontend Developer" />
        <meta
          name="description"
          content="I'm a Frontend Developer, highly skilled within the React ecosystem. I've built many performant, scalable, and well-tested applications. Let's build something!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celoreis.dev" />
        <meta property="og:title" content="Celo Reis - Frontend Developer" />
        <meta
          property="og:description"
          content="I'm a Frontend Developer, highly skilled within the React ecosystem. I've built many performant, scalable, and well-tested applications. Let's build something!"
        />
        <meta
          property="og:image"
          content="https://celoreis.dev/logo-meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://celoreis.dev" />
        <meta
          property="twitter:title"
          content="Celo Reis - Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="I'm a Frontend Developer, highly skilled within the React ecosystem. I've built many performant, scalable, and well-tested applications. Let's build something!"
        />
        <meta
          property="twitter:image"
          content="https://celoreis.dev/logo-meta."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
