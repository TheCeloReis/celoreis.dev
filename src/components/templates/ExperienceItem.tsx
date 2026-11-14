import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt";
import "dayjs/locale/es";
import { LocaleType } from "@/utils/constants";
import Markdown from "../Markdown";

dayjs.extend(relativeTime);
dayjs.extend(utc);

const CANONICAL_SKILL_CASING: Record<string, string> = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  nextjs: "Next.js",
  "next.js": "Next.js",
  nodejs: "Node.js",
  "node.js": "Node.js",
  reactjs: "React",
  react: "React",
  graphql: "GraphQL",
  postgresql: "PostgreSQL",
  postgres: "PostgreSQL",
  mongodb: "MongoDB",
  tailwindcss: "Tailwind CSS",
  "tailwind css": "Tailwind CSS",
  aws: "AWS",
  gcp: "GCP",
  ci: "CI",
  cd: "CD",
  "ci/cd": "CI/CD",
  css: "CSS",
  html: "HTML",
  sql: "SQL",
  nosql: "NoSQL",
  rest: "REST",
  api: "API",
  apis: "APIs",
  docker: "Docker",
  kubernetes: "Kubernetes",
  k8s: "Kubernetes",
  git: "Git",
  github: "GitHub",
  sass: "Sass",
  scss: "SCSS",
};

const formatSkillLabel = (rawSkill: string): string => {
  const trimmed = rawSkill.trim();
  return CANONICAL_SKILL_CASING[trimmed.toLowerCase()] ?? trimmed;
};

const DURATION_UNITS: Record<
  LocaleType,
  { year: [string, string]; month: [string, string] }
> = {
  en: { year: ["year", "years"], month: ["month", "months"] },
  pt: { year: ["ano", "anos"], month: ["mês", "meses"] },
  es: { year: ["año", "años"], month: ["mes", "meses"] },
};

const formatDuration = (
  startDate: string,
  endDate: string | undefined,
  locale: LocaleType
): string => {
  const start = dayjs.utc(startDate);
  const end = dayjs.utc(endDate || undefined);
  const totalMonths = Math.max(0, end.diff(start, "month"));

  if (totalMonths === 0) {
    return end.locale(locale).to(start, true);
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const units = DURATION_UNITS[locale] ?? DURATION_UNITS.en;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? units.year[0] : units.year[1]}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? units.month[0] : units.month[1]}`);
  }

  return parts.join(", ");
};

export type ExperienceItemData = {
  jobTitle: string;
  company: string;
  location: string;
  image: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string;
};

type ExperienceItemProps = {
  experience: ExperienceItemData;
  locale: LocaleType;
  presentLabel?: string;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  locale,
  presentLabel = "Present",
}) => {
  const skills = experience.skills
    ? experience.skills.split(",").filter((s) => s.trim().length > 0)
    : [];

  return (
    <div>
      <header className="flex">
        {experience.image && (
          <img
            className="w-12 h-12 rounded-sm mr-4 shrink-0"
            src={experience.image}
            alt={experience.company}
          />
        )}

        <div>
          <h3 className="text-lg font-semibold leading-snug text-primary-700 dark:text-primary-400 mb-0.5 text-balance">
            {experience.jobTitle}
          </h3>
          <p className="text-base font-medium leading-snug">
            {experience.company}
          </p>
          <p className="inline-flex flex-wrap items-center text-sm font-mono tabular-nums leading-normal text-zinc-600 dark:text-zinc-400">
            <span>{dayjs.utc(experience.startDate).format("MM/YYYY")}</span>
            <span className="mx-1">-</span>
            <span>
              {experience.endDate
                ? dayjs.utc(experience.endDate).format("MM/YYYY")
                : presentLabel}
            </span>
            <span className="mx-1">·</span>
            <span>
              {formatDuration(experience.startDate, experience.endDate, locale)}
            </span>
          </p>

          <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-400">
            {experience.location}
          </p>
        </div>
      </header>

      <div className="ml-6 pl-4 sm:pl-10 border-l border-zinc-200 dark:border-zinc-800 pt-2 sm:pt-3">
        <div className="prose dark:prose-invert max-w-none text-pretty prose-ul:my-0 prose-ul:pl-4 prose-li:my-1 prose-p:my-0">
          <Markdown>{experience.description}</Markdown>
        </div>

        {skills.length > 0 && (
          <ul className="flex gap-1.5 mt-3 w-full flex-wrap">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {formatSkillLabel(skill)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
