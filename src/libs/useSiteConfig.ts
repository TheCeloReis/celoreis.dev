import { useLocale } from "./useLocale";

type SiteConfig = {
  readonly title: string;
  readonly description: string;
  readonly url: string;
};

type LocalesType = "en" | "es" | "fr" | "pt";

const SITE_CONFIG: Record<LocalesType, SiteConfig> = {
  en: {
    title: "Celo Reis",
    description:
      "Celo Reis is a software engineer and a frontend developer. He is a passionate developer who loves to learn new technologies and build cool stuff.",
    url: "https://celoreis.dev",
  },
  es: {
    title: "Celo Reis",
    description:
      "Celo Reis es un ingeniero de software y desarrollador frontend. Es un desarrollador apasionado que ama aprender nuevas tecnologías y construir cosas geniales.",
    url: "https://celoreis.dev/es",
  },
  fr: {
    title: "Celo Reis",
    description:
      "Celo Reis est un ingénieur logiciel et développeur frontend. C'est un développeur passionné qui aime apprendre de nouvelles technologies et construire des choses cool.",
    url: "https://celoreis.dev/fr",
  },
  pt: {
    title: "Celo Reis",
    description:
      "Celo Reis é um engenheiro de software e desenvolvedor frontend. É um desenvolvedor apaixonado que adora aprender novas tecnologias e construir coisas legais.",
    url: "https://celoreis.dev/pt",
  },
};

export const useSiteConfig = (): SiteConfig => {
  const locale = useLocale();

  return SITE_CONFIG[locale as LocalesType];
};
