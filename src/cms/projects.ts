import fs from "fs";
import path from "path";
import fm from "front-matter";
import { LocaleType } from "@/utils/constants";
import type { FeaturedProject } from "@/components/templates/FeaturedWorkVariants";
import type { ExperienceType } from "./experiences";

type RawGalleryItem = {
  title: string;
  caption: string;
  image?: string;
};

type RawProjectAttributes = {
  title: string;
  year: string;
  role: string;
  experience?: string;
  description: string;
  skills: string;
  liveUrl?: string;
  repoUrl?: string;
  order?: number;
  gallery?: RawGalleryItem[];
};

const projectsDirectory = path.join(process.cwd(), "./content/projects");
const experiencesDirectory = path.join(process.cwd(), "./content/experiences");

const DEFAULT_PALETTES = [
  {
    bg: "from-emerald-950 to-zinc-900",
    accent: "bg-emerald-400/20 border-emerald-400/40",
    surface: "bg-zinc-800/80",
  },
  {
    bg: "from-teal-950 to-zinc-900",
    accent: "bg-teal-400/20 border-teal-400/40",
    surface: "bg-zinc-800/80",
  },
  {
    bg: "from-zinc-900 to-slate-900",
    accent: "bg-sky-400/20 border-sky-400/40",
    surface: "bg-zinc-800/80",
  },
];

const resolveExperience = (
  slug: string | undefined,
  locale: LocaleType
): FeaturedProject["experience"] => {
  if (!slug) return undefined;
  const filePath = path.join(experiencesDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const attrs = fm<Record<LocaleType, ExperienceType>>(raw).attributes;
  const localized = attrs[locale] ?? attrs.en;
  if (!localized) return undefined;

  return {
    company: localized.company,
    logo: localized.image,
  };
};

export const getProjects = (locale: LocaleType): FeaturedProject[] => {
  if (!fs.existsSync(projectsDirectory)) return [];

  const fileNames = fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"));

  const items = fileNames
    .map((fileName) => {
      const raw = fs.readFileSync(
        path.join(projectsDirectory, fileName),
        "utf-8"
      );
      const attrs = fm<Record<LocaleType, RawProjectAttributes>>(raw).attributes;
      const data = attrs[locale] ?? attrs.en;
      if (!data) return null;

      const id = fileName.replace(/\.md$/, "");
      const skills = (data.skills ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const gallery = (data.gallery ?? []).map((item, idx) => ({
        id: `${id}-slide-${idx + 1}`,
        title: item.title,
        caption: item.caption,
        image: item.image || undefined,
        palette: DEFAULT_PALETTES[idx % DEFAULT_PALETTES.length],
      }));

      return {
        order: data.order ?? Number.MAX_SAFE_INTEGER,
        project: {
          id,
          title: data.title,
          year: String(data.year),
          role: data.role,
          experience: resolveExperience(data.experience, locale),
          summary: data.description,
          description: data.description,
          skills,
          liveUrl: data.liveUrl || undefined,
          repoUrl: data.repoUrl || undefined,
          gallery,
        } satisfies FeaturedProject,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  return items
    .sort((a, b) => {
      if (a.order !== b.order) return a.order - b.order;
      return Number(b.project.year) - Number(a.project.year);
    })
    .map((entry) => entry.project);
};
