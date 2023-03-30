import { useAnalytics } from "@/libs/firebase";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return <Component {...pageProps} />;
}
