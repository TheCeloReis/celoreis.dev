# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and tech leads evaluating Celo Reis for senior frontend engineering roles.

## Product Purpose

Serve as Celo Reis's personal portfolio and technical hub (`celoreis.dev`), demonstrating senior-level frontend engineering capability through work history, experience, and technical writing so evaluators can assess fit quickly and accurately.

## Positioning

Product-minded frontend architecture and quality engineering: over 6 years of building high-performance, user-centric web applications across healthcare, SaaS, and education, paired with leadership in automated testing, linting/static analysis, and developer experience.

## Operating Context

- Visitors arrive from resumes, LinkedIn, GitHub, or search to evaluate engineering experience (`/[locale]/about-me`) and read technical blog posts (`/[locale]/blog`).
- Content is authored and maintained via Markdown files in `/content` and managed through Decap CMS (`/admin`).
- The site is built as a static Next.js export (`output: "export"`) deployed on Netlify.

## Capabilities and Constraints

- **Framework & Export:** Next.js App Router (`output: "export"`, `trailingSlash: true`, `reactStrictMode: true`), React, TypeScript, and Tailwind CSS.
- **Trilingual Parity:** Must preserve full `en`, `pt`, and `es` locale routes (`/[locale]/about-me`, `/[locale]/blog`, `/[locale]/blog/[post_slug]`), with `/` redirecting to `/en/about-me`.
- **Content & CMS:** Must preserve Markdown-driven content under `/content` (`blog-posts`, `experiences`, `pages`, `templates`) and the Decap CMS setup at `/admin` (`public/admin/config.yml`).
- **Truthfulness:** Preserve existing factual content and claims without inventing unverified metrics, testimonials, or experiences.

## Brand Commitments

- **Name:** Celo Reis (`celoreis.dev`)
- **Identity:** Senior Frontend Engineer (6+ years across healthcare, SaaS, and education); JavaScript/TypeScript and quality engineering advocate.

## Evidence on Hand

- **About Me & Intro Copy:** `content/pages/about-me.md` (EN, PT, ES)
- **Work Experience Entries:** `content/experiences/` (`2024-03-alma.md`, `2021-04-portal-telemedicina.md`, `2019-07-letras.md`)
- **Technical Blog Posts:** `content/blog-posts/` (TDD, Linting & Static Analysis, Next.js)
- **Footer & Locale Labels:** `content/templates/footer.md`
- **Visual Assets:** `public/images/uploads/` (`me.png`, `og_image.png`, `alma-logo.jpeg`, `portal-logo.jpeg`, `letras-logo.jpeg`, `canary-logo.jpeg`, `farfetch-logo.jpeg`)

## Product Principles

1. **Clarity for Technical Evaluators:** Surface career trajectory, architectural judgment, and engineering standards immediately without friction.
2. **Quality by Construction:** Reflect the same rigor in the site's own architecture, static analysis, and maintainability as advocated in the blog.
3. **Trilingual Parity:** Keep English, Portuguese, and Spanish experiences equally complete and first-class.
4. **Static Simplicity:** Keep the site fast, self-contained, and maintainable via static export and Git-backed Markdown/Decap CMS.
