import React from "react";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-8C4BT53JDY" />
      )}
      {children}
    </>
  );
}
