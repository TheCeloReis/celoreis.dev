import React from "react";
import { LocaleType } from "@/utils/constants";
import { getExperiences } from "@/cms/experiences";
import ExperienceItem from "./ExperienceItem";

const EXPERIENCES_COPY: Record<
  LocaleType,
  { heading: string; present: string }
> = {
  en: { heading: "Experiences", present: "Present" },
  pt: { heading: "Experiências", present: "Atual" },
  es: { heading: "Experiencias", present: "Actual" },
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
          <ExperienceItem
            key={index}
            experience={experience}
            locale={props.locale}
            presentLabel={copy.present}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
