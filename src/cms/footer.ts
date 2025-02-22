import fs from "fs";
import path from "path";
import { LocaleType } from "@/utils/constants";
import fm from "front-matter";

export type FooterType = {
  title: string;
  description: string;
  copyright: string;
  language: string;
};

export const getFooter = (locale: LocaleType) => {
  const file = fs.readFileSync(
    path.join(process.cwd(), "./content/templates/footer.md"),
    "utf-8",
  );

  const content = fm<Record<LocaleType, FooterType>>(file).attributes[locale];

  return content;
};
