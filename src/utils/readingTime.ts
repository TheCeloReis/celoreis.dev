import _readingTime from "reading-time";
import { LocaleType } from "./constants";

const readTimePostfix = (minutes: number, locale: LocaleType) => {
  return {
    en: `${minutes} min read`,
    es: `Lectura de ${minutes} min`,
    pt: `${minutes} min de leitura`,
  }[locale];
};

export const readingTime = (text: string, locale: LocaleType) => {
  const { minutes } = _readingTime(text);
  return readTimePostfix(Math.ceil(minutes), locale);
};
