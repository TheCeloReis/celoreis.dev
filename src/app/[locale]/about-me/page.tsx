import React from "react";
import Markdown from "react-markdown";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { ArrowRight, GitHub, Linkedin } from "react-feather";
import Experiences from "@/components/templates/Experiences";
import { FeaturedWorkInteractive } from "@/components/templates/FeaturedWorkVariants";
import { LOCALES, LocaleType } from "@/utils/constants";
import { getAboutMePage } from "@/cms/pages";
import { getAllPosts } from "@/cms/blog";
import { getProjects } from "@/cms/projects";
import { Metadata } from "next";

dayjs.extend(utc);

const HERO_ACTIONS_COPY: Record<
  LocaleType,
  { blogCta: string; github: string; linkedin: string }
> = {
  en: {
    blogCta: "Read my technical writing",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  pt: {
    blogCta: "Ler artigos técnicos",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  es: {
    blogCta: "Leer artículos técnicos",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

const SELECTED_WRITING_COPY: Record<
  LocaleType,
  { heading: string; viewAll: string }
> = {
  en: {
    heading: "Selected Writing",
    viewAll: "View all articles",
  },
  pt: {
    heading: "Artigos em Destaque",
    viewAll: "Ver todos os artigos",
  },
  es: {
    heading: "Artículos Destacados",
    viewAll: "Ver todos los artículos",
  },
};

type AboutMePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const AboutMePage: React.FC<AboutMePageProps> = async ({ params }) => {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as LocaleType;

  const content = getAboutMePage(locale);
  const actions = HERO_ACTIONS_COPY[locale] ?? HERO_ACTIONS_COPY.en;
  const writingCopy = SELECTED_WRITING_COPY[locale] ?? SELECTED_WRITING_COPY.en;
  const selectedPosts = getAllPosts(locale).slice(0, 3);
  const projects = getProjects(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <header className="mb-14 pb-12 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
          <img
            src="/images/uploads/me.png"
            alt="Celo Reis"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full shrink-0 bg-zinc-100 dark:bg-zinc-800 ring-1 ring-zinc-200 dark:ring-zinc-700 object-cover"
          />

          <div className="flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance text-primary-700 dark:text-primary-400 mb-4">
              {content.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed text-pretty">
              <Markdown>{content.intro}</Markdown>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-700 hover:bg-primary-800 text-white dark:bg-primary-400 dark:hover:bg-primary-300 dark:text-zinc-950 font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
              >
                <span>{actions.blogCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href="https://github.com/TheCeloReis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-400 font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
              >
                <GitHub className="w-4 h-4" aria-hidden="true" />
                <span>{actions.github}</span>
              </a>

              <a
                href="https://www.linkedin.com/in/theceloreis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-400 font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                <span>{actions.linkedin}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <Experiences locale={locale} />

      <div className="py-10 sm:py-12 border-t border-zinc-200 dark:border-zinc-800">
        <FeaturedWorkInteractive locale={locale} projects={projects} />
      </div>

      {selectedPosts.length > 0 && (
        <section className="pt-8 sm:pt-10 border-t border-zinc-200 dark:border-zinc-800 pb-12">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
              {writingCopy.heading}
            </h2>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline underline-offset-4 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 rounded-sm"
            >
              <span>{writingCopy.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {selectedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 rounded-sm"
                >
                  <span className="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors text-pretty">
                    {post.title}
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs font-mono tabular-nums text-zinc-600 dark:text-zinc-400 shrink-0">
                    <time dateTime={post.date}>
                      {dayjs.utc(post.date).format("MM/YYYY")}
                    </time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export const generateStaticParams = async () => {
  return LOCALES.map((locale) => ({ locale }));
};

export const generateMetadata = async ({
  params,
}: AboutMePageProps): Promise<Metadata> => {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as LocaleType;

  const content = getAboutMePage(locale);

  return {
    title: `${content.title} - Celo Reis`,
    description: `${content.description}`,
  };
};

export default AboutMePage;
