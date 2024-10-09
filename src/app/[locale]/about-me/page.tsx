import React from "react";
import fs from "fs";
import fm from "front-matter";
import Markdown from "react-markdown";

type AboutMePageProps = {
  params: {
    locale: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const content: any = fm(
  fs.readFileSync("./content/pages/about-me.md", "utf-8"),
);

const locales = Object.keys(content.attributes);

const HomePage: React.FC<AboutMePageProps> = (props) => {
  return (
    <div>
      About me {props.params.locale}
      <Markdown>{content.attributes[props.params.locale].intro}</Markdown>
    </div>
  );
};

export const generateStaticParams = async () => {
  return locales.map((locale) => ({ locale }));
};

export default HomePage;
