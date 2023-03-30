import Link from "next/link";
import React from "react";
import LocaleSelector from "./LocaleSelector";

const Topbar = () => {
  return (
    <div className="h-16 w-full">
      <div className="fixed top-0 left-0 w-full h-12 bg-zinc-900 flex justify-between items-center px-4 z-50">
        <LocaleSelector />

        <ul className="uppercase text-sm text-white font-bold flex justify-end h-full items-center">
          <li>
            <Link className="px-3 hover:opacity-80 transition-opacity" href="/">
              About
            </Link>
          </li>
          <li>
            <Link
              className="px-3 hover:opacity-80 transition-opacity"
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link className="px-3 hover:opacity-80 transition-opacity" href="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
