"use client";

import React from "react";
import Script from "next/script";
import dayjs from "dayjs";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import Markdown from "@/components/Markdown";
import ExperienceItem from "@/components/templates/ExperienceItem";
import { readingTime } from "@/utils/readingTime";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

type PreviewProps = {
  entry: {
    getIn: (path: string[]) => string | undefined;
  };
  getAsset: (path: string) => { toString: () => string } | undefined;
};

const BlogPostPreview: React.FC<PreviewProps> = ({ entry, getAsset }) => {
  const title = entry.getIn(["data", "title"]) || "";
  const thumbnail = entry.getIn(["data", "thumbnail"]);
  const date = entry.getIn(["data", "date"]);
  const body = entry.getIn(["data", "body"]) || "";

  const thumbnailUrl = thumbnail ? getAsset(thumbnail)?.toString() : "";
  const formattedDate = dayjs(date || undefined).format("MMMM D, YYYY");
  const readTime = readingTime(body, "en");

  return (
    <div
      className={`${dmSans.variable} ${jetbrainsMono.variable} dark font-sans antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 min-h-screen`}
    >
      <div className="max-w-4xl mx-auto px-4 pb-10 prose dark:prose-invert lg:prose-lg">
        <header className="mb-8">
          {thumbnailUrl && (
            <img
              className="!-mt-2 !mb-16 w-full object-cover rounded-b-3xl aspect-video"
              src={thumbnailUrl}
              alt=""
            />
          )}

          <h1 className="text-4xl font-bold mt-10">{title}</h1>

          <p className="text-zinc-800 dark:text-zinc-400">
            {formattedDate} ◦ {readTime}
          </p>
        </header>

        <Markdown>{body}</Markdown>
      </div>
    </div>
  );
};

const ExperiencePreview: React.FC<PreviewProps> = ({ entry, getAsset }) => {
  const image = entry.getIn(["data", "image"]);
  const imageUrl = image ? getAsset(image)?.toString() || "" : "";

  return (
    <div
      className={`${dmSans.variable} ${jetbrainsMono.variable} dark font-sans antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 min-h-screen p-6`}
    >
      <div className="max-w-4xl mx-auto">
        <ExperienceItem
          locale="en"
          experience={{
            jobTitle: entry.getIn(["data", "jobTitle"]) || "",
            company: entry.getIn(["data", "company"]) || "",
            location: entry.getIn(["data", "location"]) || "",
            image: imageUrl,
            startDate: entry.getIn(["data", "startDate"]) || "",
            endDate: entry.getIn(["data", "endDate"]) || undefined,
            description: entry.getIn(["data", "description"]) || "",
            skills: entry.getIn(["data", "skills"]) || "",
          }}
        />
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        onLoad={() => {
          document
            .querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')
            .forEach((link) => {
              if (link.href) {
                window.CMS.registerPreviewStyle(link.href);
              }
            });

          document.querySelectorAll("style").forEach((style) => {
            if (style.textContent) {
              window.CMS.registerPreviewStyle(style.textContent, { raw: true });
            }
          });

          window.CMS.registerPreviewTemplate("blog", BlogPostPreview);
          window.CMS.registerPreviewTemplate("experiences", ExperiencePreview);
        }}
      />
    </div>
  );
};

export default Page;
