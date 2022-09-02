import { logEvent } from "firebase/analytics";
import Head from "next/head";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { analytics } from "../libs/firebase";

export default function Home() {
  return (
    <>
      <Head>
        <title>Celo Reis - Frontend Developer</title>
        <meta
          name="description"
          content="I'm a Frontend Developer, highly skilled within the React ecosystem. I've built many performant, scalable, and well-tested applications. Let's build something!"
        />
      </Head>

      <div className="text-center">
        <header className="text-white text-center space-y-2 mb-16 mt-8 sm:mt-12">
          <h1 className="text-5xl sm:text-7xl">Celo Reis</h1>
          <p className="text-lg sm:text-2xl">Portfolio</p>
        </header>

        <div className="space-y-6">
          <Image
            src="/undraw_under_construction_-46-pa.svg"
            alt=""
            width="667"
            height="375"
          />

          <p className="text-gray-300 uppercase text-xl">under construction</p>
        </div>
      </div>

      <div className="w-full h-14 bg-zinc-800 fixed bottom-0 left-0 shadow-lg flex flex-col items-center justify-center">
        <ul className="flex space-x-4">
          <li>
            <a
              className="hover:text-blue-400 transition-colors"
              href="https://github.com/TheCeloReis"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                logEvent(analytics, "social_link", {
                  social_network: "github",
                })
              }
            >
              <BsGithub className="p-2" size={48} />
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-400 transition-colors"
              href="https://www.linkedin.com/in/theceloreis/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                logEvent(analytics, "social_link", {
                  social_network: "linkedin",
                })
              }
            >
              <BsLinkedin className="p-2" size={48} />
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-400 transition-colors"
              href="https://twitter.com/TheCeloReis"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                logEvent(analytics, "social_link", {
                  social_network: "twitter",
                })
              }
            >
              <BsTwitter className="p-2" size={48} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
