# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The `@AGENTS.md` import above is the **business & content spec** — brand info, contact details, required pages, SEO keywords, brand palette, and the contact-form behavior. Treat it as the source of truth for *what* to build. This file covers *how* the code is structured.

## Commands

```bash
npm run dev      # Next.js dev server (Turbopack) at http://localhost:3000
npm run build    # Production build
npm start        # Serve the production build
npm run lint     # ESLint (eslint-config-next, flat config in eslint.config.mjs)
```

There is no test setup in this project.

## Stack

- **Next.js 16 (App Router)** + **React 19** + **TypeScript** (strict).
- **Tailwind CSS v4** — configured in CSS via `@import "tailwindcss"` and `@theme` in `app/globals.css`. There is no `tailwind.config.js`; PostCSS is wired through `@tailwindcss/postcss` in `postcss.config.mjs`.
- **Resend** + **@react-email/components** — intended for the contact form that emails `rizza@blastoffsafety.com` (see AGENTS.md "CONTACT FORM"). Not yet implemented.
- **zod** — form/input validation.
- **schema-dts** — types for JSON-LD structured data.
- `@/*` path alias maps to the repo root (see `tsconfig.json`).

## Architecture notes

This is an **early-stage SEO marketing site**. All 22 routes from AGENTS.md's "MUST HAVE PAGES" list are scaffolded under `app/` but are **content stubs**: each `page.tsx` exports SEO `metadata` and returns a single `<div>PageName</div>`. The work ahead is filling in real content + shared layout (header/nav/footer), not creating routes. When adding features, keep these in mind:

- **App Router, server components by default.** `app/page.tsx` (home) injects `LocalBusiness` JSON-LD via a `<script type="application/ld+json">` (with `<` escaped). Replicate this JSON-LD pattern on other pages where relevant.
- **SEO is the core requirement, and every page already follows a pattern:** an `export const metadata: Metadata` with `title`, `description`, and `alternates.canonical` (relative path; `metadataBase` in `app/layout.tsx` makes it absolute). Service detail pages also carry a `keywords` array drawn from AGENTS.md. The root title `template`/`default` and default OpenGraph/Twitter live in `app/layout.tsx` — per-page titles fill the `%s`.
- **Sitemap and robots are App Router metadata routes**, not static files: `app/sitemap.ts` and `app/robots.ts`. `app/sitemap.ts` is the **single source of truth for the URL structure** — a typed `routes` array with per-route `priority`/`changeFrequency`, exporting `baseUrl`. Keep it in sync: only list URLs that resolve (200), and add new pages here when you create them. (`next-sitemap` is installed but unused; the hand-written route is what ships.)
- **Blog is file-based, no database** (AGENTS.md). Build blog posts from local files/MDX, not a CMS or DB. The 5 post routes currently live as individual `app/blog/<slug>/page.tsx` stubs.
- **Contact form is not yet implemented.** When building it, wire **Resend** + **@react-email/components** to email `rizza@blastoffsafety.com` with the exact subjects/auto-reply specified in AGENTS.md "CONTACT FORM", validating input with **zod**.
- **Fonts:** Oswald for headings (`h1`, `h2`), Inter for body — loaded via `next/font` in `app/layout.tsx` and exposed as `--font-oswald` / `--font-inter`.

## Theming

`app/globals.css` defines the AGENTS.md brand palette as CSS vars and exposes them to Tailwind via `@theme inline`: `--color-primary` (`#D32F2F`), `--color-dark` (`#111827`), `--color-accent` (`#FBBF24`), plus `--background` (`#F9FAFB`) / `--foreground`. Fonts are wired as `--font-sans` (Inter) and `--font-heading` (Oswald). The light brand background is intentional — there is no dark-mode override.
