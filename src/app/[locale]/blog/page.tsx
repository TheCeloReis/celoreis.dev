import React from "react";
import Markdown from "react-markdown";
import { LOCALES, LocaleType } from "@/utils/constants";
import { getBlogPage } from "@/cms/pages";
import { getAllPosts } from "@/cms/blog";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt";
import "dayjs/locale/es";
import Link from "next/link";
import { Metadata } from "next";

dayjs.extend(utc);

const EMPTY_STATE_COPY: Record<LocaleType, string> = {
  en: "No articles published yet.",
  pt: "Nenhum artigo publicado ainda.",
  es: "Aún no hay artículos publicados.",
};

const parseTags = (rawTags?: string): string[] => {
  if (!rawTags) return [];
  return rawTags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 3);
};

type BlogPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const BlogPage: React.FC<BlogPageProps> = async ({ params }) => {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as LocaleType;

  const content = getBlogPage(locale);
  const posts = getAllPosts(locale);

  return (
    <main className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14 pb-16">
      <header className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary-700 dark:text-primary-400 mb-4">
          {content.title}
        </h1>

        <div className="prose dark:prose-invert max-w-2xl text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <Markdown>{content.intro}</Markdown>
        </div>
      </header>

      {posts.length === 0 ? (
        <p className="py-12 text-center text-zinc-600 dark:text-zinc-400">
          {EMPTY_STATE_COPY[locale]}
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => {
            const tags = parseTags(post.tags);

            return (
              <article key={post.slug}>
                <Link
                  className="group flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 hover:border-primary-600 dark:hover:border-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-zinc-900"
                  href={`/${locale}/blog/${post.slug}`}
                >
                  <img
                    src={post.thumbnail}
                    alt=""
                    className="w-full h-44 sm:h-40 sm:w-32 shrink-0 object-cover rounded-lg bg-zinc-200 dark:bg-zinc-800"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-1.5 flex flex-wrap items-center gap-x-1.5">
                      <time dateTime={post.date}>
                        {dayjs.utc(post.date).locale(locale).format("DD MMMM, YYYY")}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingTime}</span>
                    </p>

                    <h2 className="text-xl sm:text-2xl text-zinc-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors mb-2 font-bold tracking-tight">
                      {post.title}
                    </h2>

                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
                      {post.seo.description}
                    </p>

                    {tags.length > 0 && (
                      <ul
                        className="flex flex-wrap gap-1.5"
                        aria-label="Topics"
                      >
                        {tags.map((tag) => (
                          <li
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
};

export const generateStaticParams = async () => {
  return LOCALES.map((locale) => ({ locale }));
};

export const generateMetadata = async ({
  params,
}: BlogPageProps): Promise<Metadata> => {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as LocaleType;

  const content = getBlogPage(locale);

  return {
    title: `${content.title} - Celo Reis`,
    description: `${content.description}`,
  };
};

export default BlogPage;
