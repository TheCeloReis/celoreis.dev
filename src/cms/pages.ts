import fs from "fs";
import path from "path";
import { LocaleType } from "@/utils/constants";
import fm from "front-matter";

export type CommonPageType = {
  title: string;
  intro: string;
  description: string;
};

export const getAboutMePage = (locale: LocaleType) => {
  const file = fs.readFileSync(
    path.join(process.cwd(), `./content/pages/about-me.md`),
    "utf-8",
  );

  const content =
    fm<Record<LocaleType, CommonPageType>>(file).attributes[locale];

  return content;
};

export const getBlogPage = (locale: LocaleType) => {
  const file = fs.readFileSync(
    path.join(process.cwd(), `./content/pages/blog.md`),
    "utf-8",
  );

  const content =
    fm<Record<LocaleType, CommonPageType>>(file).attributes[locale];

  return content;
};
