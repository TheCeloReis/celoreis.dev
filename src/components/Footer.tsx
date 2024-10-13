import cn from "@/utils/cn";
import { Kode_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import LanguageSelector from "./LanguageSelector";

const currentYear = new Date().getFullYear();

const kodeMono = Kode_Mono({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  fallback: ["Courier New", "monospace"],
});

type FooterProps = {
  locale: string;
};

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="py-2 pt-8 px-4 bg-slate-100 dark:bg-zinc-800 w-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 grid grid-cols-3">
          <div>
            <h1
              className={cn(
                "dark:text-primary-400 text-primary-500 text-3xl font-bold select-none mb-3",
                kodeMono.className,
              )}
            >
              <span>Celo</span>&nbsp;
              <span>Reis</span>
            </h1>
            <p>
              Frontend developer, JavaScript enthusiast, and content creator.
            </p>

            <div className="mt-4 flex space-x-6">
              <Link href="https://www.linkedin.com/in/theceloreis/">
                <GitHub className="w-7 h-7" />
                <span className="sr-only">Github</span>
              </Link>
              <Link href="https://github.com/TheCeloReis">
                <Linkedin className="w-7 h-7" />
                <span className="sr-only">Linkedin</span>
              </Link>
              <Link href="https://x.com/theceloreis">
                <Twitter className="w-7 h-7" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div></div>

          <div>
            <LanguageSelector currentLocale={props.locale} />
          </div>
        </div>

        <p className="text-sm text-center">
          All rights reserved © Celo Reis {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
