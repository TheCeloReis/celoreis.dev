import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celo Reis",
  description: "Celo Reis personal website",
};

const Page = () => {
  redirect("/en/about-me");
};

export default Page;
