import { generateStaticBlogParams, getPostBySlug } from "@/cms/blog";
import Markdown from "@/components/Markdown";
import { LocaleType } from "@/utils/constants";
import dayjs from "dayjs";
import React from "react";

type BlogPostPageProps = {
  params: {
    locale: LocaleType;
    post_slug: string;
  };
};

const BlogPostPage: React.FC<BlogPostPageProps> = (props) => {
  const post = getPostBySlug(props.params.post_slug, props.params.locale);

  if (!post) {
    return null;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mt-10 mb-2">{post.title}</h1>

          <p className="text-zinc-800 dark:text-zinc-400">
            {dayjs(post.date).format("MMMM D, YYYY")}
          </p>
        </header>

        <Markdown>{post.body}</Markdown>
      </div>
    </div>
  );
};

export const generateMetadata = (props: BlogPostPageProps) => {
  const post = getPostBySlug(props.params.post_slug, props.params.locale);

  return {
    title: `${post?.title} - Celo Reis`,
    description: `${post?.seo.description}`,
  };
};

export const generateStaticParams = () => {
  return generateStaticBlogParams();
};

export default BlogPostPage;
