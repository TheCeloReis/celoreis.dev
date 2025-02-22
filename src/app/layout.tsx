import React from "react";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celo Reis",
  description: "Celo Reis personal website",
  openGraph: {
    images: [
      {
        url: "https://celoreis.dev/images/uploads/og_image.png",
        width: 1200,
        height: 630,
        alt: "Celo Reis",
      },
    ],
  },
};

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
