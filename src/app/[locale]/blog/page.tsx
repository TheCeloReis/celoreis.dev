/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "react-markdown";
import { LOCALES, LocaleType } from "@/utils/constants";
import { getBlogPage } from "@/cms/pages";
import { getAllPosts } from "@/cms/blog";
import dayjs from "dayjs";
import Link from "next/link";
import { Metadata } from "next";

type BlogPageProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const { locale } = await params;

  const content = getBlogPage(locale);
  const posts = getAllPosts(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 pt-24">
      <h1 className="text-center text-5xl text-primary-500 dark:text-primary-400 mb-10">
        {content.title}
      </h1>

      <div>
        <Markdown>{content.intro}</Markdown>

        <hr className="w-2/3 ml-auto mt-4 border-primary-400" />
      </div>

      <div className="flex flex-col gap-8 mt-12 mb-16">
        {posts.map((post, index) => (
          <div
            key={index}
            className="border border-zinc-400 dark:border-zinc-800 hover:border-primary-400 transition-colors rounded-2xl overflow-hidden"
          >
            <Link className="block p-4" href={`/${locale}/blog/${post.slug}`}>
              <p className="text-zinc-800 dark:text-zinc-400 text-sm mb-1">
                {dayjs(post.date).format("DD MMMM, YYYY")}
              </p>

              <h2 className="text-2xl text-zinc-900 dark:text-white mb-3 font-bold">
                {post.title}
              </h2>

              <p>{post.seo.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  return LOCALES.map((locale) => ({ locale }));
};

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  const { locale } = await params;

  const content = getBlogPage(locale);

  return {
    title: `${content.title} - Celo Reis`,
    description: `${content.description}`,
  };
};

export default BlogPage;
