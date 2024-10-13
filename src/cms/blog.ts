import { LOCALES, LocaleType } from "@/utils/constants";
import fs from "fs";
import path from "path";
import fm from "front-matter";
import dayjs from "dayjs";

const BLOG_DIRECTORY = path.join(process.cwd(), "./content/blog-posts");

type BlogPost = {
  seo: {
    title: string;
    description: string;
    image: string;
  };
  title: string;
  body: string;
  date: string;
  tags: string;
  slug: string;
};

export const getAllPosts = (locale: LocaleType) => {
  const fileNames = fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".md"));

  const files = fileNames.map((fileName) => {
    return fs.readFileSync(path.join(BLOG_DIRECTORY, fileName), "utf-8");
  });

  const content = files.map((file, index) => {
    const content = fm<Record<LocaleType, BlogPost>>(file).attributes[locale];

    return {
      ...content,
      slug: fileNames[index].substring(11).replace(".md", ""),
    };
  });

  return content.sort((a, b) => {
    return dayjs(b.date).unix() - dayjs(a.date).unix();
  });
};

export const generateStaticBlogParams = () => {
  return LOCALES.map((locale) => ({ locale }));
};
