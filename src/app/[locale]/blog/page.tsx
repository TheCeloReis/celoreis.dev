/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "react-markdown";
import { LOCALES, LocaleType } from "@/utils/constants";
import { getBlogPage } from "@/cms/pages";

type BlogPageProps = {
  params: {
    locale: LocaleType;
  };
};

const BlogPage: React.FC<BlogPageProps> = (props) => {
  const content = getBlogPage(props.params.locale);

  return (
    <div className="mx-auto max-w-3xl px-4 pt-24">
      <h1 className="text-center text-5xl text-primary-500 dark:text-primary-400 mb-10">
        {content.title}
      </h1>

      <div>
        <Markdown>{content.intro}</Markdown>

        <hr className="w-2/3 ml-auto mt-4 border-primary-400" />
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  return LOCALES.map((locale) => ({ locale }));
};

export default BlogPage;
