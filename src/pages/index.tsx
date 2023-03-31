import Layout from "@/components/Layout";
import Image from "next/image";
import BasicMeta from "@/components/BasicMeta";
import OpenGraphMeta from "@/components/OpenGraphMeta";
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

type SocialLinkProps = {
  href: string;
  icon: typeof BsInstagram;
  name: string;
};

const SocialLink = ({ href, icon: Icon, name }: SocialLinkProps) => (
  <li className="text-zinc-900 hover:text-sky-700 transition-colors">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={32}>
        <span className="sr-only">{name}</span>
      </Icon>
    </a>
  </li>
);

const socialLinks = [
  {
    href: "https://linkedin.com/in/theceloreis",
    icon: BsLinkedin,
    name: "LinkedIn",
  },
  {
    href: "https://github.com/theceloreis",
    icon: BsGithub,
    name: "GitHub",
  },
  {
    href: "https://https://twitter.com/theceloreis",
    icon: BsTwitter,
    name: "Twitter",
  },
  {
    href: "https://www.instagram.com/theceloreis/",
    icon: BsInstagram,
    name: "Instagram",
  },
];

export default function Home() {
  return (
    <Layout>
      <BasicMeta />
      <OpenGraphMeta />

      <main className="mx-auto max-w-3xl mt-8 px-4">
        <div className="flex flex-col md:flex-row">
          <Image
            className="rounded-full bg-sky-600 h-32 w-32 md:h-64 md:w-64 mb-4 md:mb-0"
            src="/images/uploads/celo-reis-transparent.png"
            width={300}
            height={300}
            alt=""
          />

          <div className="flex flex-col justify-center ml-8">
            <h1 className="text-4xl mb-2">
              Hello, I&apos;m{" "}
              <span className="text-sky-600 font-semibold">Celo Reis.</span>{" "}
            </h1>
            <p className="text-xl">
              I&apos;m a software engineer and I&apos;m passionate about
              frontend development.
            </p>

            <ul className="flex space-x-4 mt-6">
              {socialLinks.map(({ href, icon, name }) => (
                <SocialLink key={href} href={href} icon={icon} name={name} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
