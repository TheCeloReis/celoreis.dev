import { LOCALES, LocaleType } from "@/utils/constants";

import fs from "fs";
import path from "path";
import fm from "front-matter";
import dayjs from "dayjs";
import { readingTime } from "@/utils/readingTime";

const BLOG_DIRECTORY = path.join(process.cwd(), "./content/blog-posts");

type BlogPost = {
  seo: {
    title: string;
    description: string;
    image?: string;
  };
  title: string;
  body: string;
  date: string;
  tags: string;
  slug: string;
  thumbnail: string;

  readingTime: string;
};

export const getAllPosts = (locale: LocaleType): BlogPost[] => {
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
      readingTime: readingTime(content.body, locale),
    };
  });

  return content.sort((a, b) => {
    return dayjs(b.date).unix() - dayjs(a.date).unix();
  });
};

export const getPostBySlug = (
  slug: string,
  locale: LocaleType,
): BlogPost | null => {
  const fileNames = fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".md"));

  const file = fileNames.find((fileName) => fileName.includes(slug));

  if (!file) {
    return null;
  }

  const content = fs.readFileSync(path.join(BLOG_DIRECTORY, file), "utf-8");

  const post = fm<Record<LocaleType, BlogPost>>(content).attributes[locale];

  return {
    ...post,
    slug: file.substring(11).replace(".md", ""),
    readingTime: readingTime(post.body, locale),
  };
};

export const generateStaticBlogParams = () => {
  const posts = getAllPosts(LOCALES[0]);

  return posts
    .map((post) => LOCALES.map((locale) => ({ locale, post_slug: post.slug })))
    .flat();
};
