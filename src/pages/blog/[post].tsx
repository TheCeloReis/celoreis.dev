import { getPostBySlug, getPosts, PostContent } from "@/libs/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/Layout";
import Image from "next/image";
import dayjs from "@/libs/dayjs";
import BasicMeta from "@/components/BasicMeta";
import OpenGraphMeta from "@/components/OpenGraphMeta";

type PostPagePropsType = {
  post: PostContent;
  mdxSource: any;
};

const Post = (props: PostPagePropsType) => {
  return (
    <Layout>
      <BasicMeta
        title={props.post.title}
        description={props.post.description}
        author="Celo Reis"
      />
      <OpenGraphMeta
        path={`/blog/${props.post.slug}`}
        title={props.post.title}
        description={props.post.description}
        image={props.post.thumbnail}
        isArticle={true}
      />

      <div className="mt-4 w-full max-w-3xl mx-auto">
        <div
          className="relative h-48 w-full-mt-8 mb-8 flex-none bg-cover md:rounded-b-3xl -mt-8 text-center overflow-hidden bg-center"
          style={{ backgroundImage: `url(${props.post.thumbnail})` }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: "linear-gradient(180deg,  #18181Bee , #00000000)",
            }}
          ></div>
        </div>

        <header className="px-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
            {props.post.title}
          </h1>

          <div className="flex items-center justify-center mb-8">
            <Image
              width={40}
              height={40}
              className="w-10 h-10 rounded-full mr-2"
              src="/images/uploads/celo-reis.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm flex flex-col justify-center h-10">
              <p className="text-gray-900 leading-none">Celo Reis</p>
              <p className="text-gray-600">
                {dayjs(props.post.date).locale(props.post.locale).format("LLL")}
              </p>
            </div>
          </div>
        </header>

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
