import { useSiteConfig } from "@/libs/useSiteConfig";
import Head from "next/head";

type Props = {
  path?: string;
  title?: string;
  description?: string;
  image?: string;
  isArticle?: boolean;
};

export default function OpenGraphMeta({
  path = "",
  title,
  description,
  image,
  isArticle,
}: Props) {
  const siteConfig = useSiteConfig();

  return (
    <Head>
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:url" content={siteConfig.url + path} />
      <meta
        property="og:title"
        content={
          title ? [title, siteConfig.title].join(" | ") : siteConfig.title
        }
      />
      <meta
        property="og:description"
        content={description ? description : siteConfig.description}
      />
      <meta
        property="og:image"
        content={image ? image : siteConfig.url + "/og_image.png"}
      />
      {isArticle && <meta property="og:type" content="article" />}
    </Head>
  );
}
