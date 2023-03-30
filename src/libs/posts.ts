import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";

const additionalLocales = ["pt", "es", "fr"];

export type PostContent = {
  readonly date: string;
  readonly title: string;
  readonly description: string;
  readonly slug: string;
  readonly tags: string[];
  readonly thumbnail: string;
  readonly fullPath: string;
  readonly locale: string;
  readonly content: string;
};

const postsDirectory = path.join(process.cwd(), "content/blog");
const originalPostsDirectory = path.join(postsDirectory, "en");

const getPost = (
  fullPath: string,
  options?: { locale?: string }
): PostContent[] => {
  const posts: PostContent[] = [];

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  if (!options?.locale || options.locale === "en") {
    posts.push({
      date: matterResult.data.date as string,
      title: matterResult.data.title as string,
      description: (matterResult.data.description as string) ?? "",
      slug: matterResult.data.slug as string,
      tags: (matterResult.data.tags as string[]) ?? [],
      thumbnail: matterResult.data.thumbnail as string,
      fullPath,
      locale: "en",
      content: matterResult.content,
    });
  }

  if (options?.locale === "en") {
    return posts;
  }

  (options?.locale ? [options.locale] : additionalLocales).forEach((locale) => {
    const originalFullPath = fullPath.replace("/en/", `/${locale}/`);
    if (!fs.existsSync(originalFullPath)) {
      return;
    }

    const localeFileContents = fs.readFileSync(originalFullPath, "utf8");
    const localeMatterResult = matter(localeFileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    });

    posts.push({
      date: matterResult.data.date as string,
      title: localeMatterResult.data.title as string,
      description: (localeMatterResult.data.description as string) ?? "",
      slug: matterResult.data.slug as string,
      tags: (matterResult.data.tags as string[]) ?? [],
      thumbnail: matterResult.data.thumbnail as string,
      fullPath: originalFullPath,
      locale,
      content: localeMatterResult.content,
    });
  });

  return posts;
};

export const getPosts: (options?: { locale?: string }) => PostContent[] = ({
  locale,
} = {}) => {
  const originalPosts = fs.readdirSync(originalPostsDirectory);

  const posts: PostContent[] = [];

  originalPosts.forEach((originalPostFileName) => {
    const fullPath = path.join(originalPostsDirectory, originalPostFileName);

    const post = getPost(fullPath, { locale });

    posts.push(...post);
  });

  return posts.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    if (aDate > bDate) {
      return -1;
    }

    if (aDate < bDate) {
      return 1;
    }

    return 0;
  });
};

export const getPostBySlug: (slug: string, locale: string) => PostContent = (
  slug,
  locale
) => {
  const post = fs
    .readdirSync(originalPostsDirectory)
    .find(
      (originalPostFileName) =>
        originalPostFileName.replace(".mdx", "").slice(11) === slug
    );

  if (!post) {
    throw new Error(`Cannot find post with slug ${slug}`);
  }

  const originalPostFullPath = path.join(originalPostsDirectory, post);

  const postWithTranslations = getPost(originalPostFullPath);

  const postWithLocale = postWithTranslations.find(
    (post) => post.locale === locale
  );
  if (!postWithLocale) {
    throw new Error(`Cannot find post with locale ${locale}`);
  }

  return postWithLocale;
};
