export interface AboutMeLocale {
  en: AboutMePageContent;
  pt: AboutMePageContent;
  es: AboutMePageContent;
}

export interface AboutMePageContent {
  title: string;
  intro: string;
  intro2: string;
  experiences?: Experience[];
}

export interface Experience {
  startDate: string;
  endDate?: string;
  description: string;
  skills: string;
  location: string;
  company: string;
  jobTitle: string;
  image: string;
}
