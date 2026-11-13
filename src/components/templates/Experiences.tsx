import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/pt";
import "dayjs/locale/es";
import { LocaleType } from "@/utils/constants";
import { getExperiences } from "@/cms/experiences";
import Markdown from "../Markdown";

dayjs.extend(relativeTime);
dayjs.extend(utc);

const EXPERIENCES_COPY: Record<
  LocaleType,
  { heading: string; present: string }
> = {
  en: { heading: "Experiences", present: "Present" },
  pt: { heading: "Experiências", present: "Atual" },
  es: { heading: "Experiencias", present: "Actual" },
};

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

type ExperiencesProps = {
  locale: LocaleType;
};

const Experiences: React.FC<ExperiencesProps> = (props) => {
  const experiences = getExperiences(props.locale);
  const copy = EXPERIENCES_COPY[props.locale] ?? EXPERIENCES_COPY.en;

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 text-balance">
        {copy.heading}
      </h2>

      <div className="space-y-8 mb-10 sm:mb-12">
        {experiences.map((experience, index) => (
          <div key={index}>
            <header className="flex">
              <img
                className="w-12 h-12 rounded-sm mr-4 shrink-0"
                src={experience.image}
                alt={experience.company}
              />

              <div>
                <h3 className="text-lg font-semibold leading-snug text-primary-700 dark:text-primary-400 mb-0.5 text-balance">
                  {experience.jobTitle}
                </h3>
                <p className="text-base font-medium leading-snug">
                  {experience.company}
                </p>
                <p className="inline-flex flex-wrap items-center text-sm font-mono tabular-nums leading-normal text-zinc-600 dark:text-zinc-400">
                  <span>
                    {dayjs.utc(experience.startDate).format("MM/YYYY")}
                  </span>
                  <span className="mx-1">-</span>
                  <span>
                    {experience.endDate
                      ? dayjs.utc(experience.endDate).format("MM/YYYY")
                      : copy.present}
                  </span>
                  <span className="mx-1">·</span>
                  <span>
                    {dayjs
                      .utc(experience.endDate || undefined)
                      .locale(props.locale)
                      .to(dayjs.utc(experience.startDate), true)}
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

              <ul className="flex gap-1.5 mt-3 w-full flex-wrap">
                {experience.skills.split(",").map((skill, index) => (
                  <li
                    key={index}
                    className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {formatSkillLabel(skill)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
