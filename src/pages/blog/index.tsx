import { getPosts, PostContent } from "@/libs/posts";
import { GetStaticProps } from "next";
import React from "react";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
import BasicMeta from "@/components/BasicMeta";
import OpenGraphMeta from "@/components/OpenGraphMeta";

type BlogPagePropsType = {
  posts: PostContent[];
};

const Blog = (props: BlogPagePropsType) => {
  return (
    <Layout>
      <BasicMeta title="Blog" />
      <OpenGraphMeta
        path={"/blog"}
        title="Blog"
        description="Welcome to my blog! Here you can find some of my thoughts and ideas."
      />

      <div className="max-w-3xl mx-auto pt-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        <div className="space-y-4">
          {props.posts.map((post) => (
            <PostCard {...post} key={post.slug} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogPagePropsType> = async ({
  locale,
}) => {
  const posts = getPosts({ locale });

  return {
    props: {
      posts: posts,
    },
  };
};

export default Blog;
