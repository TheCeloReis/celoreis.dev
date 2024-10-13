"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const locales = [
  {
    locale: "en",
    label: "English",
  },
  {
    locale: "pt",
    label: "Português",
  },
  {
    locale: "es",
    label: "Español",
  },
];

type LanguageSelectorProps = {
  currentLocale: string;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  const pathName = usePathname();

  const replaceLocale = (locale: string) => {
    return pathName.replace(props.currentLocale, locale);
  };

  return (
    <div>
      <p className="font-medium text-lg mb-3">Change language:</p>

      <ul className="flex flex-col">
        {locales
          .filter((l) => l.locale !== props.currentLocale)
          .map((locale) => (
            <li key={locale.locale}>
              <Link className="px-1" href={replaceLocale(locale.locale)}>
                {locale.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
