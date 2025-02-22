/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "react-markdown";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Experiences from "@/components/templates/Experiences";
import { LOCALES, LocaleType } from "@/utils/constants";
import { getAboutMePage } from "@/cms/pages";
import { Metadata } from "next";

dayjs.extend(relativeTime);

type AboutMePageProps = {
  params: Promise<{
    locale: LocaleType;
  }>;
};

const HomePage: React.FC<AboutMePageProps> = async ({ params }) => {
  const { locale } = await params;

  const content = getAboutMePage(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 pt-24">
      <h1 className="text-center text-5xl text-primary-500 dark:text-primary-400 mb-4">
        {content.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
        <img
          src="/images/uploads/me.png"
          alt="Profile"
          className="w-40 h-40 rounded-full my-4 bg-primary-500 border-4 border-primary-600"
        />

        <div className="prose dark:prose-invert">
          <Markdown>{content.intro}</Markdown>

          <hr className="w-2/3 ml-auto mt-4 border-primary-400" />
        </div>
      </div>

      <Experiences locale={locale} />
    </div>
  );
};

export const generateStaticParams = async () => {
  return LOCALES.map((locale) => ({ locale }));
};

export const generateMetadata = async ({
  params,
}: AboutMePageProps): Promise<Metadata> => {
  const { locale } = await params;

  const content = getAboutMePage(locale);

  return {
    title: `${content.title} - Celo Reis`,
    description: `${content.description}`,
  };
};

export default HomePage;
