# Samarth More — AI/ML Engineer Portfolio

A responsive technical portfolio built with the Next.js App Router, React, and TypeScript. Styling uses custom global CSS with shared theme tokens. Framer Motion supports small, interaction-focused transitions; Lucide supplies interface icons. The site includes a persistent dark/light theme preference, project case studies, interactive architecture and technology maps, recruiter contact links, and a resume.

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

`npm run lint` runs a TypeScript check (`tsc --noEmit`).

## Environment variables

No environment variables are required. Add actual profile and contact destinations in `app/page.tsx` before enabling social links.

## Vercel deployment

The current deployment is [samarth-portfolio-eight.vercel.app](https://samarth-portfolio-eight.vercel.app/). The application uses the default Next.js output and requires no environment variables or custom server configuration.

## Customization

Project data and repository URLs live in `data/projects.ts`. Experience, skill, and workflow content is defined near the top of `app/page.tsx`. Replace the resume file at `public/resume/Samarth_Resume.pdf` when updating it.

## Content configuration

The recruiter details are configured in the page: `samarthm770@gmail.com`, `+91 9819597946`, and the supplied GitHub and LinkedIn profiles. The resume is served from `public/resume/Samarth_Resume.pdf`.
