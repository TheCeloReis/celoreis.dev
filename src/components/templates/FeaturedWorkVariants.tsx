"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  GitHub,
} from "react-feather";
import { LocaleType } from "@/utils/constants";

export type ProjectGalleryItem = {
  id: string;
  title: string;
  caption: string;
  image?: string;
  aspect?: "landscape" | "portrait";
  /** Placeholder visual style until CMS images are wired */
  palette: {
    bg: string;
    accent: string;
    surface: string;
  };
};

export type ProjectExperienceLink = {
  company: string;
  logo?: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  year: string;
  role: string;
  experience?: ProjectExperienceLink;
  summary: string;
  description: string;
  skills: string[];
  liveUrl?: string;
  repoUrl?: string;
  gallery: ProjectGalleryItem[];
};

const SECTION_COPY: Record<
  LocaleType,
  {
    heading: string;
    liveLabel: string;
    repoLabel: string;
    prevImage: string;
    nextImage: string;
  }
> = {
  en: {
    heading: "Featured Work",
    liveLabel: "Live site",
    repoLabel: "Source",
    prevImage: "Previous image",
    nextImage: "Next image",
  },
  pt: {
    heading: "Projetos em Destaque",
    liveLabel: "Acessar",
    repoLabel: "Código",
    prevImage: "Imagem anterior",
    nextImage: "Próxima imagem",
  },
  es: {
    heading: "Proyectos Destacados",
    liveLabel: "Ver sitio",
    repoLabel: "Código",
    prevImage: "Imagen anterior",
    nextImage: "Siguiente imagen",
  },
};

export const MOCK_FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "telemedicine-triage",
    title: "Clinical Triage & Telehealth Workspace",
    year: "2024",
    role: "Senior Frontend Engineer",
    experience: {
      company: "Portal Telemedicina",
      logo: "/images/uploads/portal-logo.jpeg",
    },
    summary:
      "Real-time diagnostic queue and patient intake interface built for high-throughput medical teams.",
    description:
      "Designed and architected a low-latency clinical workspace handling thousands of daily asynchronous exams. Focused on keyboard-first navigation, optimistic state updates, and strict TypeScript contracts to eliminate runtime regressions.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GraphQL",
      "Automated Testing",
    ],
    liveUrl: "https://celoreis.dev",
    repoUrl: "https://github.com/TheCeloReis",
    gallery: [
      {
        id: "triage-1",
        title: "Queue Overview",
        caption: "Priority-sorted patient queue with keyboard shortcuts",
        palette: {
          bg: "from-emerald-950 to-zinc-900",
          accent: "bg-emerald-400/20 border-emerald-400/40",
          surface: "bg-zinc-800/80",
        },
      },
      {
        id: "triage-2",
        title: "Exam Viewer",
        caption: "Split-pane diagnostic viewer with inline annotations",
        palette: {
          bg: "from-teal-950 to-zinc-900",
          accent: "bg-teal-400/20 border-teal-400/40",
          surface: "bg-zinc-800/80",
        },
      },
      {
        id: "triage-3",
        title: "Audit & Telemetry",
        caption: "SLA tracking and turnaround metrics per clinic",
        palette: {
          bg: "from-zinc-900 to-slate-900",
          accent: "bg-sky-400/20 border-sky-400/40",
          surface: "bg-zinc-800/80",
        },
      },
    ],
  },
  {
    id: "design-system-lint",
    title: "Frontend Quality & Design System Kit",
    year: "2023",
    role: "Frontend Architecture Lead",
    summary:
      "Accessible component primitives paired with custom ESLint rules to enforce UI consistency at build time.",
    description:
      "Built a shared React + React Aria component library consumed across four product squads. Paired the package with custom static analysis rules that catch contrast, spacing, and prop-usage violations in CI before code review.",
    skills: [
      "React Aria",
      "TypeScript",
      "ESLint",
      "Tailwind CSS",
      "CI/CD",
      "Storybook",
    ],
    repoUrl: "https://github.com/TheCeloReis",
    gallery: [
      {
        id: "ds-1",
        title: "Token & Primitive Matrix",
        caption: "Accessible form controls with verified focus rings",
        palette: {
          bg: "from-zinc-900 to-stone-900",
          accent: "bg-amber-400/20 border-amber-400/40",
          surface: "bg-zinc-800/80",
        },
      },
      {
        id: "ds-2",
        title: "Static Analysis Report",
        caption: "Automated PR annotations for design-system drift",
        palette: {
          bg: "from-slate-900 to-zinc-950",
          accent: "bg-primary-400/20 border-primary-400/40",
          surface: "bg-zinc-800/80",
        },
      },
      {
        id: "ds-3",
        title: "Interactive Docs",
        caption: "Live prop playground with keyboard navigation tester",
        palette: {
          bg: "from-neutral-900 to-zinc-900",
          accent: "bg-emerald-400/20 border-emerald-400/40",
          surface: "bg-zinc-800/80",
        },
      },
    ],
  },
  {
    id: "edtech-player",
    title: "Synchronized Lyrics & Learning Player",
    year: "2022",
    role: "Frontend Engineer",
    experience: {
      company: "Letras.mus.br",
      logo: "/images/uploads/letras-logo.jpeg",
    },
    summary:
      "High-traffic interactive media player with frame-accurate lyric sync and offline-ready caching.",
    description:
      "Engineered a responsive media experience serving millions of monthly learners. Reduced bundle size and main-thread work through virtualized lyric lists, progressive hydration, and resilient network fallbacks.",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Web Audio API",
      "Performance",
      "CSS",
    ],
    liveUrl: "https://celoreis.dev",
    gallery: [
      {
        id: "ed-1",
        title: "Synced Lyric Stage",
        caption: "60fps active-line tracking with instant seek",
        palette: {
          bg: "from-indigo-950 to-zinc-900",
          accent: "bg-indigo-400/20 border-indigo-400/40",
          surface: "bg-zinc-800/80",
        },
      },
      {
        id: "ed-2",
        title: "Vocabulary Drawer",
        caption: "Contextual translations without leaving playback",
        palette: {
          bg: "from-violet-950 to-zinc-900",
          accent: "bg-violet-400/20 border-violet-400/40",
          surface: "bg-zinc-800/80",
        },
      },
      {
        id: "ed-3",
        title: "Mobile Compact Mode",
        caption: "Thumb-friendly mini-player and gesture controls",
        palette: {
          bg: "from-zinc-900 to-indigo-950",
          accent: "bg-sky-400/20 border-sky-400/40",
          surface: "bg-zinc-800/80",
        },
      },
    ],
  },
];

/**
 * Reusable placeholder visual frame so the UI looks crisp before real CMS
 * screenshots are connected. Replace with <img> when CMS media is wired.
 */
const GalleryFrame: React.FC<{
  item: ProjectGalleryItem;
  projectTitle: string;
  className?: string;
}> = ({ item, projectTitle, className = "" }) => {
  if (item.image) {
    return (
      <div className={`relative overflow-hidden bg-zinc-900 ${className}`}>
        <img
          src={item.image}
          alt={`${projectTitle} — ${item.title}: ${item.caption}`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${item.palette.bg} text-zinc-100 select-none ${className}`}
      role="img"
      aria-label={`${projectTitle} — ${item.title}: ${item.caption}`}
    >
    {/* Subtle architectural grid */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    {/* Mock UI wireframe */}
    <div className="relative h-full w-full p-4 sm:p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <span className="text-[11px] font-mono uppercase tracking-wider text-white/60">
          {item.title}
        </span>
      </div>

      <div className="my-auto py-3 grid grid-cols-3 gap-2.5">
        <div
          className={`col-span-2 h-16 sm:h-20 rounded-md border ${item.palette.accent} p-2.5 flex flex-col justify-end`}
        >
          <div className="w-2/3 h-2 rounded bg-white/25 mb-1.5" />
          <div className="w-1/2 h-1.5 rounded bg-white/15" />
        </div>
        <div
          className={`col-span-1 h-16 sm:h-20 rounded-md ${item.palette.surface} border border-white/10 p-2.5 flex flex-col justify-between`}
        >
          <div className="w-6 h-6 rounded bg-white/15" />
          <div className="w-full h-1.5 rounded bg-white/20" />
        </div>
      </div>

      <p className="text-xs text-white/75 truncate">{item.caption}</p>
    </div>
  </div>
  );
};

const ExperienceBadge: React.FC<{ experience?: ProjectExperienceLink }> = ({
  experience,
}) => {
  if (!experience) return null;
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-medium text-zinc-700 dark:text-zinc-300">
      {experience.logo && (
        <img
          src={experience.logo}
          alt={experience.company}
          className="w-3.5 h-3.5 rounded-sm object-cover shrink-0"
        />
      )}
      <span>{experience.company}</span>
    </span>
  );
};

const SkillPillList: React.FC<{ skills: string[] }> = ({ skills }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Skills used">
    {skills.map((skill) => (
      <li
        key={skill}
        className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 text-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80"
      >
        {skill}
      </li>
    ))}
  </ul>
);

const ProjectLinks: React.FC<{
  liveUrl?: string;
  repoUrl?: string;
  liveLabel: string;
  repoLabel: string;
}> = ({ liveUrl, repoUrl, liveLabel, repoLabel }) => {
  if (!liveUrl && !repoUrl) return null;
  return (
    <div className="flex items-center gap-3">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 dark:text-primary-400 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm"
        >
          <span>{liveLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      )}
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm"
        >
          <GitHub className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{repoLabel}</span>
        </a>
      )}
    </div>
  );
};

/* ============================================================================
 * VARIANT 3: Interactive Project Switcher + Carousel Stage
 * ========================================================================== */
export const FeaturedWorkInteractive: React.FC<{
  locale: LocaleType;
  projects?: FeaturedProject[];
}> = ({ locale, projects = MOCK_FEATURED_PROJECTS }) => {
  const copy = SECTION_COPY[locale] ?? SECTION_COPY.en;
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? "");
  const [slideIndex, setSlideIndex] = useState(0);

  const activeProject =
    projects.find((p) => p.id === selectedId) ?? projects[0];
  if (!activeProject) return null;

  const totalSlides = activeProject.gallery.length;
  const currentSlide =
    activeProject.gallery[slideIndex % totalSlides] ?? activeProject.gallery[0];

  const handleSelectProject = (id: string) => {
    setSelectedId(id);
    setSlideIndex(0);
  };

  return (
    <section aria-labelledby="featured-work-interactive-heading">
      <h2
        id="featured-work-interactive-heading"
        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8 text-balance"
      >
        {copy.heading}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left: Project selector list */}
        <div
          className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0"
          role="tablist"
          aria-label={copy.heading}
        >
          {projects.map((project) => {
            const isSelected = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectProject(project.id)}
                className={`shrink-0 lg:shrink text-left px-4 py-3.5 rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                  isSelected
                    ? "bg-zinc-100 dark:bg-zinc-800/80 border-primary-600 dark:border-primary-400"
                    : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/60"
                }`}
              >
                <div className="text-xs font-mono tabular-nums text-zinc-500 dark:text-zinc-400 mb-1">
                  {project.year}
                </div>
                <div className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 text-balance">
                  {project.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Active project stage */}
        <div className="lg:col-span-8 space-y-5">
          {/* Carousel */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <GalleryFrame
              item={currentSlide}
              projectTitle={activeProject.title}
              className="aspect-[16/10] w-full"
            />

            {totalSlides > 1 && (
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-1.5">
                  {activeProject.gallery.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSlideIndex(idx)}
                      aria-label={`${item.title} (${idx + 1}/${totalSlides})`}
                      className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                        idx === slideIndex % totalSlides
                          ? "w-6 bg-primary-600 dark:bg-primary-400"
                          : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setSlideIndex(
                        (prev) => (prev - 1 + totalSlides) % totalSlides
                      )
                    }
                    aria-label={copy.prevImage}
                    className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSlideIndex((prev) => (prev + 1) % totalSlides)
                    }
                    aria-label={copy.nextImage}
                    className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
                  {activeProject.role}
                </span>
                <ExperienceBadge experience={activeProject.experience} />
              </div>
              <ProjectLinks
                liveUrl={activeProject.liveUrl}
                repoUrl={activeProject.repoUrl}
                liveLabel={copy.liveLabel}
                repoLabel={copy.repoLabel}
              />
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed text-pretty">
              {activeProject.description}
            </p>

            <SkillPillList skills={activeProject.skills} />
          </div>
        </div>
      </div>
    </section>
  );
};
