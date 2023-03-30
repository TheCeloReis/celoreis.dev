import { getPosts, PostContent } from "@/libs/posts";
import { GetStaticProps } from "next";
import React from "react";
import PostCard from "@/components/PostCard";

type BlogPagePropsType = {
  posts: PostContent[];
};

const Blog = (props: BlogPagePropsType) => {
  return (
    <div className="max-w-3xl mx-auto pt-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {props.posts.map((post) => (
        <PostCard {...post} key={post.slug} />
      ))}
    </div>
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
