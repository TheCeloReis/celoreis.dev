/* eslint-disable @next/next/no-img-element */
import React from "react";
import fs from "fs";
import fm from "front-matter";
import Markdown from "react-markdown";
import { AboutMePageContent } from "./about";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Experiences from "@/components/templates/Experiences";
import { LocaleType } from "@/utils/constants";

dayjs.extend(relativeTime);

type AboutMePageProps = {
  params: {
    locale: LocaleType;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CONTENT: any = fm(
  fs.readFileSync("./content/pages/about-me.md", "utf-8"),
);

const locales = Object.keys(CONTENT.attributes);

const HomePage: React.FC<AboutMePageProps> = (props) => {
  const content: AboutMePageContent = CONTENT.attributes[props.params.locale];

  return (
    <div className="mx-auto max-w-3xl px-4">
      <h1 className="text-center text-5xl">{content.title}</h1>

      <Markdown>{content.intro}</Markdown>

      <Experiences locale={props.params.locale} />
    </div>
  );
};

export const generateStaticParams = async () => {
  return locales.map((locale) => ({ locale }));
};

export default HomePage;
