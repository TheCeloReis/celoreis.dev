"use client";

import React, { useEffect } from "react";
import { Button } from "react-aria-components";
import { useDarkMode } from "usehooks-ts";
import { Sun, Moon } from "react-feather";
import { Kode_Mono } from "next/font/google";
import cn from "@/utils/cn";
import Link from "next/link";

const kodeMono = Kode_Mono({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  fallback: ["Courier New", "monospace"],
});

type TopbarProps = {
  locale?: string;
};

const Topbar: React.FC<TopbarProps> = (props) => {
  const { isDarkMode, toggle } = useDarkMode({
    initializeWithValue: false,
    defaultValue: true,
  });

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html")!.classList.add("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-slate-200 dark:bg-zinc-800 shadow-lg flex items-center px-4">
      <Link href={`/${props.locale}/about-me`}>
        <h1
          className={cn(
            "dark:text-primary-400 text-primary-500 text-3xl font-bold select-none hover:underline cursor-pointer",
            kodeMono.className,
          )}
        >
          <span>Celo</span>&nbsp;
          <span>Reis</span>
        </h1>
      </Link>

      <div className="flex items-center ml-auto space-x-4">
        <Link
          className={cn(kodeMono.className, "uppercase hover:underline")}
          href={`/${props.locale}/about-me`}
        >
          About me
        </Link>
        <Link
          className={cn(kodeMono.className, "uppercase hover:underline")}
          href={`/${props.locale}/blog`}
        >
          Blog
        </Link>

        <Button
          className="h-11 w-11 rounded-full grid place-items-center ml-2"
          onPress={() => toggle()}
        >
          {isDarkMode ? (
            <>
              <Moon />
              <span className="sr-only">Dark mode</span>
            </>
          ) : (
            <>
              <Sun />
              <span className="sr-only">Light mode</span>
            </>
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Topbar;
