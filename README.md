# Samarth More — AI/ML Engineer Portfolio

A responsive portfolio for AI/ML, Generative AI, Computer Vision and Python engineering. Built with Next.js App Router, React, TypeScript, custom CSS with Tailwind base styles, and Lucide icons. Local Simple Icons technology marks are attributed in `public/tech/README.md`.

## Features

- One professional About section with resume download, social links and education.
- Experience timeline, technical metrics and six project cards with keyboard-accessible architecture dialogs.
- Six static skill categories, responsive layouts and contact clipboard actions.
- Persistent light/dark themes, reduced-motion support, metadata, sitemap and Person structured data.

## Local development

Use Node.js 20.9 or newer and npm. No environment variables, API keys or backend service are required.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

The existing `lint` script runs TypeScript validation; there is no separate ESLint configuration. `typecheck` exposes the same check explicitly. The production build statically renders the portfolio.

## Structure

```text
app/          Routes, metadata, fonts and shared CSS design tokens
components/   Sections, navigation, footer, architecture dialog and UI primitives
data/         Profile, education, experience, projects and skills
hooks/        Active-section tracking and theme preference
public/       Resume, robots.txt and local technology icons
```

Edit content in `data/`. Shared cards and numerical highlights use `components/ui.tsx`; responsive spacing, colors and typography live in `app/globals.css`. Only interactive components use a client boundary.

## Deployment and content

Deploy with the Next.js preset on Vercel using `npm run build`; no custom output directory is needed. Existing site: [samarth-portfolio-eight.vercel.app](https://samarth-portfolio-eight.vercel.app/). Local changes update the hosted site only after its deployment workflow runs.

Project parameters describe the linked implementations. DeepFake percentages and dataset names are explicitly attributed to previous local evaluation reported in the supplied resume, not independent reproduction of public repository results. Curriculum extractors handle PDF/DOCX/TXT, while the current web route uses PDF filenames. Pixerase's displayed 25 MB limit is configured as 25 MiB. No model training or inference is performed by this portfolio.
