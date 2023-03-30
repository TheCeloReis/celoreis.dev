import { getPostBySlug, getPosts, PostContent } from "@/libs/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/Layout";

type PostPagePropsType = {
  post: PostContent;
  mdxSource: any;
};

const Post = (props: PostPagePropsType) => {
  return (
    <Layout>
      <div className="mt-4 w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          {props.post.title}
        </h1>

        <div className="blog-post">
          <MDXRemote {...props.mdxSource} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PostPagePropsType> = async ({
  params,
  locale,
}) => {
  const post = getPostBySlug(params!.post as string, locale ?? "en");
  const mdxSource = await serialize(post.content);

  return { props: { post, mdxSource } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPosts().map((post) => ({
      params: { post: post.slug },
      locale: post.locale,
    })),
    fallback: false,
  };
};

export default Post;
