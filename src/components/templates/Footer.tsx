import cn from "@/utils/cn";
import { Kode_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import LanguageSelector from "../LanguageSelector";
import { LocaleType } from "@/utils/constants";
import { getFooter } from "@/cms/footer";

const currentYear = new Date().getFullYear();

const kodeMono = Kode_Mono({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  fallback: ["Courier New", "monospace"],
});

type FooterProps = {
  locale: LocaleType;
};

const Footer: React.FC<FooterProps> = (props) => {
  const content = getFooter(props.locale);

  return (
    <footer className="py-2 pt-8 px-4 bg-zinc-100 dark:bg-zinc-800/60 border-t border-zinc-200 dark:border-zinc-800 w-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p
              className={cn(
                "text-primary-700 dark:text-primary-400 text-3xl font-bold select-none mb-3",
                kodeMono.className,
              )}
            >
              <span>Celo</span>&nbsp;
              <span>Reis</span>
            </p>
            <p className="text-pretty">{content.description}</p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="https://github.com/TheCeloReis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-offset-zinc-900"
              >
                <GitHub className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/theceloreis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-offset-zinc-900"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://x.com/theceloreis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-offset-zinc-900"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <LanguageSelector
              label={content.language}
              currentLocale={props.locale}
            />
          </div>
        </div>

        <p className="text-sm text-center">
          {content.copyright} © Celo Reis {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
