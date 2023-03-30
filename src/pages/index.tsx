import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Celo Reis</title>
        <meta name="description" content="Celo Reis' personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-3xl mt-8 px-4">
        <div className="flex flex-col md:flex-row">
          <Image
            className="rounded-full bg-sky-600 h-32 w-32 md:h-64 md:w-64 mb-4 md:mb-0"
            src="/images/uploads/celo-reis-transparent.png"
            width={300}
            height={300}
            alt=""
          />

          <div className="flex flex-col justify-center ml-4">
            <h1 className="text-4xl mb-2">
              Hello, I&apos;m{" "}
              <span className="text-sky-600 font-semibold">Celo Reis.</span>{" "}
            </h1>
            <p className="text-xl">
              I&apos;m a software engineer and I&apos;m passionate about
              frontend development.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
