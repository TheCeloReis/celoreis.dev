import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

const LocaleSelector = () => {
  const router = useRouter();
  const { pathname, locale, locales, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white w-12 h-8 relative rounded">
      <button
        className="text-white font-bold text-center py-1 w-full"
        onClick={() => setIsOpen((s) => !s)}
      >
        {/* add small arrow down */}
        {locale?.toUpperCase()}
        <span className="text-xs ml-1">▼</span>
      </button>

      <div className="absolute top-8 left-0">
        <ul
          className={clsx("bg-zinc-800 w-12 transition-transform", [
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none",
          ])}
          onClick={() => setIsOpen((s) => !s)}
        >
          {
            // map over locales and render a link for each locale
            locales!
              .filter((lc) => lc !== locale)
              .map((localeItem) => (
                <li
                  key={localeItem}
                  className="text-center text-white uppercase w-full font-bold"
                >
                  <Link
                    className="inline-block py-2 w-full bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-50 transition-colors"
                    href={pathname}
                    as={asPath}
                    locale={localeItem}
                  >
                    {localeItem.toUpperCase()}
                  </Link>
                </li>
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default LocaleSelector;
