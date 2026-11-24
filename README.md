# Samarth More — AI/ML Engineer Portfolio

A responsive engineering portfolio built with Next.js App Router, React and TypeScript. Shared CSS tokens drive charcoal and light themes. Lucide supplies interface icons, with locally served Simple Icons technology marks. No backend service or environment variables are required.

## Run locally

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Validate and build

```bash
npm run lint
npm run build
npm start
```

The existing `lint` command runs TypeScript (`tsc --noEmit`). The production build also performs type checking and statically renders the portfolio. Default Next.js deployment is compatible with Vercel; no custom server or runtime secrets are required.

## Structure

- `app/page.tsx`: server-rendered Hero, About, page composition and footer.
- `app/layout.tsx`: fonts, SEO metadata, Person structured data and pre-paint theme initialization.
- `app/globals.css`: centralized design tokens, component styles, responsive breakpoints and reduced-motion behavior.
- `components/`: navigation, illustrative pipeline, experience timeline, project filters and implementation panels, skills search, contact copying and reusable UI primitives.
- `data/projects.ts`: preserved project titles, descriptions, highlights, specifications, technologies and URLs.
- `data/experience.ts`: preserved professional experience values, extracted verbatim from the previous page.
- `data/profile.ts`: profile copy, exact six skill categories, presentation metadata and verified skill associations.
- `public/resume/Samarth_More-Resume.pdf`: current user-provided resume. The shared URL lives in `data/profile.ts`.
- `public/tech/`: local monochrome technology marks and attribution.
- `docs/`: content evidence and redesign validation records.

## Interaction and accessibility

The primary content is present in the initial HTML. Projects can be filtered by category or featured status; all technical highlights remain visible, with optional implementation panels repeating the relevant source text. Linked skills reveal their associated project even after filtering. Skills support category selection, text search and reset. Contact cards provide direct email/phone links and clipboard feedback.

Theme preferences persist locally and fall back to the system setting. The early theme script prevents a mismatched first paint. Navigation supports section highlighting, keyboard focus and an Escape-close mobile menu. Motion is optional and disabled by `prefers-reduced-motion`. The Hero workflow is explicitly illustrative; it does not execute a model.

## Content safeguards

Project and experience content was checked against commit `37e4210` during the redesign. New Hero/About/Skills content follows the supplied redesign brief. DeepFake percentages are intentionally excluded from About at the user's request. The prior technical evidence record remains in `docs/content-verification.md`; repository findings were not silently used to rewrite the preserved project cards.

The existing deployment is [samarth-portfolio-eight.vercel.app](https://samarth-portfolio-eight.vercel.app/). Local code changes do not by themselves update that deployment.
