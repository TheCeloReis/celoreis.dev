"use client";

import React, { useEffect } from "react";
import { Button } from "react-aria-components";
import { useDarkMode } from "usehooks-ts";
import { Sun, Moon } from "react-feather";
import { Kode_Mono } from "next/font/google";
import cn from "@/utils/cn";
import { LocaleType } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "./LanguageSelector";

const kodeMono = Kode_Mono({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  fallback: ["Courier New", "monospace"],
});

const TOPBAR_COPY: Record<
  LocaleType,
  {
    aboutMe: string;
    blog: string;
    switchToDark: string;
    switchToLight: string;
    language: string;
  }
> = {
  en: {
    aboutMe: "About me",
    blog: "Blog",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
    language: "Language",
  },
  pt: {
    aboutMe: "Sobre mim",
    blog: "Blog",
    switchToDark: "Mudar para modo escuro",
    switchToLight: "Mudar para modo claro",
    language: "Idioma",
  },
  es: {
    aboutMe: "Sobre mí",
    blog: "Blog",
    switchToDark: "Cambiar a modo oscuro",
    switchToLight: "Cambiar a modo claro",
    language: "Idioma",
  },
};

type TopbarProps = {
  locale?: string;
};

const Topbar: React.FC<TopbarProps> = (props) => {
  const { isDarkMode, toggle } = useDarkMode({
    initializeWithValue: false,
    defaultValue: true,
  });
  const pathname = usePathname() ?? "";
  const activeLocale: LocaleType =
    props.locale === "pt" || props.locale === "es" ? props.locale : "en";
  const copy = TOPBAR_COPY[activeLocale];

  const aboutMeHref = `/${activeLocale}/about-me`;
  const blogHref = `/${activeLocale}/blog`;
  const isAboutMe =
    pathname === aboutMeHref || pathname.startsWith(`${aboutMeHref}/`);
  const isBlog = pathname === blogHref || pathname.startsWith(`${blogHref}/`);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html")!.classList.add("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
    }
  }, [isDarkMode]);

  const focusRingClass =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-offset-zinc-900";
  const themeLabel = isDarkMode ? copy.switchToLight : copy.switchToDark;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-zinc-100/90 dark:bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2 px-3 sm:px-4">
      <Link
        href={aboutMeHref}
        className={cn("shrink-0 rounded-sm", focusRingClass)}
      >
        <span
          className={cn(
            "text-primary-700 dark:text-primary-400 text-lg sm:text-3xl font-bold select-none hover:underline cursor-pointer whitespace-nowrap",
            kodeMono.className,
          )}
        >
          <span>Celo</span>&nbsp;
          <span>Reis</span>
        </span>
      </Link>

      <div className="flex items-center ml-auto gap-2 sm:gap-4 shrink-0">
        <Link
          className={cn(
            kodeMono.className,
            "uppercase hover:underline underline-offset-4 text-xs sm:text-base whitespace-nowrap rounded-sm",
            focusRingClass,
            isAboutMe && "underline text-primary-700 dark:text-primary-400",
          )}
          href={aboutMeHref}
          aria-current={isAboutMe ? "page" : undefined}
        >
          {copy.aboutMe}
        </Link>
        <Link
          className={cn(
            kodeMono.className,
            "uppercase hover:underline underline-offset-4 text-xs sm:text-base whitespace-nowrap rounded-sm",
            focusRingClass,
            isBlog && "underline text-primary-700 dark:text-primary-400",
          )}
          href={blogHref}
          aria-current={isBlog ? "page" : undefined}
        >
          {copy.blog}
        </Link>

        <LanguageSelector
          label={copy.language}
          currentLocale={activeLocale}
          variant="compact"
        />

        <Button
          className={cn(
            "h-11 w-11 rounded-full grid place-items-center cursor-pointer hover:bg-zinc-200/70 dark:hover:bg-zinc-800 transition-colors",
            focusRingClass,
          )}
          aria-pressed={isDarkMode}
          aria-label={themeLabel}
          onPress={() => toggle()}
        >
          {isDarkMode ? (
            <Moon className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Sun className="w-5 h-5" aria-hidden="true" />
          )}
          <span className="sr-only">{themeLabel}</span>
        </Button>
      </div>
    </nav>
  );
};

export default Topbar;
