import Head from "next/head";
import { useEffect } from "react";

import animation from "../lib/home-animation";

export default function Home() {
  useEffect(() => {
    animation.init();
  }, []);

  return (
    <>
      <Head>
        <title>Celo Reis</title>
        <meta
          name="description"
          content="Frontend Developer, passionate Typescript and React. Living in Belo Horizonte and developing awesome UI's visualizations"
        />
      </Head>
      <div className="w-full h-screen relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="font-title text-center tracking-widest text-5xl md:text-9xl whitespace-nowrap">
            Celo Reis
          </h1>
          <p className="text-center md:text-3xl tracking-widest">
            Frontend Developer
          </p>
        </div>
      </div>
    </>
  );
}
