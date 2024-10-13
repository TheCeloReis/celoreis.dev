"use client";

import Link from "next/link";
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
  const replaceLocale = (locale: string) => {
    return window.location.pathname.replace(props.currentLocale, locale);
  };

  return (
    <div className="flex flex-col">
      {locales
        .filter((l) => l.locale !== props.currentLocale)
        .map((locale, index) => (
          <Link
            className="px-1"
            key={index}
            href={replaceLocale(locale.locale)}
          >
            {locale.label}
          </Link>
        ))}
    </div>
  );
};

export default LanguageSelector;
