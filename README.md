# Samarth More — AI/ML Engineer Portfolio

A responsive technical portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons. It includes a persistent dark/light theme preference, three featured projects, three additional projects, and direct GitHub/profile links.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and production

```bash
npm run build
npm start
```

`npm run lint` runs a TypeScript check (`tsc --noEmit`). Next.js 16 no longer includes the `next lint` command.

## Environment variables

No environment variables are required. Add actual profile and contact destinations in `app/page.tsx` before enabling social links.

## Vercel deployment

Import this repository in Vercel and deploy with the default Next.js settings. The portfolio uses no server-specific configuration.

## Customization

Project data and repository URLs live in `data/projects.ts`. Experience, skill, and workflow content is defined near the top of `app/page.tsx`. Replace the resume file at `public/resume/Samarth_Resume.pdf` and add an email address before publishing.

## Content configuration

The resume PDF and email address were not present in the provided workspace. Resume buttons target the expected path; GitHub and LinkedIn profile links are configured from the supplied details.
