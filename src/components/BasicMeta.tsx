import React from "react";
import Head from "next/head";

type BasicMetaPropsType = {
  title?: string;
  description?: string;
  author?: string;
};

const siteTitle = "Celo Reis";
const siteDescription =
  "Celo Reis is a software engineer and a frontend developer. He is a passionate developer who loves to learn new technologies and build cool stuff.";

const BasicMeta = ({ title, description, author }: BasicMetaPropsType) => {
  return (
    <Head>
      <title>{title ? [title, siteTitle].join(" | ") : siteTitle}</title>
      <meta
        name="description"
        content={description ? description : siteDescription}
      />
      {author ? <meta name="author" content={author} /> : null}
    </Head>
  );
};

export default BasicMeta;
