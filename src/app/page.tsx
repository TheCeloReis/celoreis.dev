import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celo Reis",
  description: "Celo Reis personal website",
  openGraph: {
    images: [
      {
        url: "https://celoreis.dev/images/uploads/og-image.png",
        width: 1200,
        height: 630,
        alt: "Celo Reis",
      },
    ],
  },
};

const Page = () => {
  redirect("/en/about-me");
};

export default Page;
