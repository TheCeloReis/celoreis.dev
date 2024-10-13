import fs from "fs";
import path from "path";
import { LocaleType } from "@/utils/constants";
import fm from "front-matter";

export type ExperienceType = {
  startDate: string;
  endDate?: string;
  description: string;
  skills: string;
  location: string;
  company: string;
  jobTitle: string;
  image: string;
};

const experiencesDirectory = path.join(process.cwd(), "./content/experiences");

export const getExperiences = (locale: LocaleType) => {
  const fileNames = fs
    .readdirSync(experiencesDirectory)
    .filter((file) => file.endsWith(".md"));

  const files = fileNames.map((fileName) => {
    return fs.readFileSync(path.join(experiencesDirectory, fileName), "utf-8");
  });

  const content = files.map((file) => {
    return fm<Record<LocaleType, ExperienceType>>(file).attributes[locale];
  });

  return content;
};
