import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, ...rest }: AppProps) {
  return <Component {...pageProps} />;
}
