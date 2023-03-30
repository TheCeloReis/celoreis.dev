import React from "react";
import Head from "next/head";
import { useSiteConfig } from "@/libs/useSiteConfig";

type BasicMetaPropsType = {
  title?: string;
  description?: string;
  author?: string;
};

const BasicMeta = ({ title, description, author }: BasicMetaPropsType) => {
  const siteConfig = useSiteConfig();

  return (
    <Head>
      <title>
        {title ? [title, siteConfig.title].join(" | ") : siteConfig.title}
      </title>
      <meta
        name="description"
        content={description ? description : siteConfig.description}
      />
      {author ? <meta name="author" content={author} /> : null}
    </Head>
  );
};

export default BasicMeta;
