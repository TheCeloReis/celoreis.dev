/* eslint-disable @next/next/no-img-element */
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Markdown from "react-markdown";
import { LocaleType } from "@/utils/constants";
import { getExperiences } from "@/cms/experiences";

dayjs.extend(relativeTime);

type ExperiencesProps = {
  locale: LocaleType;
};

const Experiences: React.FC<ExperiencesProps> = (props) => {
  const experiences = getExperiences(props.locale);

  return (
    <section>
      <h2 className="text-2xl mb-4">Experiences</h2>

      <div className="space-y-8 mb-16">
        {experiences.map((experience, index) => (
          <div key={index}>
            <header className="flex">
              <img
                className="w-12 h-12 rounded-sm mr-4"
                src={experience.image}
                alt={experience.company}
              />

              <div>
                <h3 className="text-lg font-bold text-primary-500 dark:text-primary-400 leading-4 mb-1">
                  {experience.jobTitle}
                </h3>
                <p className="font-medium">{experience.company}</p>
                <p className="leading-3 inline-flex text-sm text-zinc-600 dark:text-zinc-400">
                  <span>{dayjs(experience.startDate).format("MM/YYYY")}</span>
                  <span className="mx-1">-</span>
                  <span>
                    {experience.endDate
                      ? dayjs(experience.endDate).format("MM/YYYY")
                      : "Present"}
                  </span>
                  <span className="mx-1">·</span>
                  <span>
                    {dayjs(experience.endDate || dayjs()).to(
                      dayjs(experience.startDate),
                      true,
                    )}
                  </span>
                </p>

                <p className="leading-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {experience.location}
                </p>
              </div>
            </header>

            <div className="ml-6 pl-10 border-l border-primary-400 pt-4">
              <Markdown>{experience.description}</Markdown>

              <ul className="flex gap-2 mt-3 w-full overflow-hidden flex-wrap">
                {experience.skills.split(",").map((skill, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 border-primary-400 border rounded-full text-xs uppercase font-semibold"
                  >
                    {skill.trim()}
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
