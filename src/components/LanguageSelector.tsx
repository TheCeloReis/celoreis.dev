"use client";

import { LocaleType } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef } from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

const locales: {
  locale: LocaleType;
  label: string;
}[] = [
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
  label: string;
  currentLocale: LocaleType;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Select
      ref={ref}
      className="flex flex-col"
      selectedKey={props.currentLocale}
      onSelectionChange={(key) => {
        router.replace(pathName.replace(props.currentLocale, key as string));
      }}
    >
      <Label className="text-sm ml-1 mb-1">{props.label}</Label>

      <Button className="h-12 border bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-600 rounded-lg text-left px-3">
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>

      <Popover
        className="w-full"
        style={{
          maxWidth: ref.current?.clientWidth ?? "200px",
        }}
      >
        <ListBox className="bg-white dark:bg-zinc-800 p-2 rounded-md shadow-lg border border-zinc-300 dark:border-zinc-600 cursor-pointer">
          {locales.map((locale) => (
            <ListBoxItem
              className="flex items-center h-10 px-2 border border-transparent rounded hover:border-primary-400"
              id={locale.locale}
              key={locale.locale}
            >
              {locale.label}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
};

export default LanguageSelector;
