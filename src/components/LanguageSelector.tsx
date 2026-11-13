"use client";

import cn from "@/utils/cn";
import { LocaleType } from "@/utils/constants";
import { usePathname, useRouter } from "next/navigation";
import React, { useId, useRef, useState } from "react";
import { ChevronDown, Globe } from "react-feather";
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
  label?: string;
  currentLocale: LocaleType;
  variant?: "default" | "compact";
};

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  const selectId = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [popoverMaxWidth, setPopoverMaxWidth] = useState<number | string>(
    "200px",
  );
  const router = useRouter();
  const pathName = usePathname();
  const isCompact = props.variant === "compact";

  return (
    <Select
      id={selectId}
      name="language"
      ref={ref}
      className="flex flex-col"
      selectedKey={props.currentLocale}
      onOpenChange={(isOpen) => {
        if (isOpen && ref.current) {
          setPopoverMaxWidth(ref.current.clientWidth);
        }
      }}
      onSelectionChange={(key) => {
        if (!key || key === props.currentLocale) return;
        const nextLocale = String(key);
        const localePrefixRegex = /^(?:\/(en|pt|es))(?=\/|$)/;
        const nextPath = localePrefixRegex.test(pathName)
          ? pathName.replace(localePrefixRegex, `/${nextLocale}`)
          : `/${nextLocale}${pathName.startsWith("/") ? pathName : `/${pathName}`}`;
        router.replace(nextPath);
      }}
    >
      <Label className={isCompact ? "sr-only" : "text-sm ml-1 mb-1"}>
        {props.label ?? "Language"}
      </Label>

      <Button
        className={cn(
          "border bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-left flex items-center justify-between cursor-pointer transition-colors hover:border-primary-500 dark:hover:border-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-100 dark:focus-visible:ring-offset-zinc-900",
          isCompact
            ? "h-11 sm:h-9 px-2.5 sm:px-2 rounded-md text-xs sm:text-sm gap-1"
            : "h-12 px-3 rounded-lg gap-2",
        )}
      >
        {isCompact && (
          <Globe
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-zinc-600 dark:text-zinc-400"
            aria-hidden="true"
          />
        )}
        <SelectValue className={isCompact ? "uppercase font-medium" : undefined}>
          {({ defaultChildren }) =>
            isCompact ? props.currentLocale.toUpperCase() : defaultChildren
          }
        </SelectValue>
        <ChevronDown className="w-4 h-4 shrink-0" aria-hidden="true" />
      </Button>

      <Popover
        className={isCompact ? "min-w-[140px]" : "w-full"}
        style={isCompact ? undefined : { maxWidth: popoverMaxWidth }}
      >
        <ListBox className="bg-zinc-50 dark:bg-zinc-800 p-2 rounded-md shadow-lg border border-zinc-300 dark:border-zinc-700 cursor-pointer outline-none">
          {locales.map((locale) => (
            <ListBoxItem
              className="flex items-center h-10 px-2 border border-transparent rounded outline-none hover:border-primary-400 data-[focused]:bg-zinc-200/70 dark:data-[focused]:bg-zinc-700/70 data-[selected]:font-semibold data-[selected]:text-primary-600 dark:data-[selected]:text-primary-400"
              id={locale.locale}
              key={locale.locale}
              textValue={locale.label}
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
