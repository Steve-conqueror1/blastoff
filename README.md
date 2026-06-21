# Blast Off Kitchen Exhaust & Fire Protection Website

This repository contains the production-ready, SEO-optimized marketing website for **Blast Off Kitchen Exhaust Cleaning & Fire Protection**, based in Red Deer, Alberta.

---

## Tech Stack

*   **Framework**: Next.js 16 (App Router) + React 19 + TypeScript (strict mode)
*   **Styling**: Tailwind CSS v4 configured via CSS imports in `app/globals.css` with `@theme inline` (no `tailwind.config.js` file).
*   **Forms & Validation**: Zod for type-safe input validation.
*   **Email Deliverability**: Resend + `@react-email/components` for secure client quote requests and automatic responder confirmations.
*   **Mapping**: Leaflet + `react-leaflet` to display interactive service-area boundaries.
*   **Content Engine**: Zero-database, zero-CMS, file-based blog engine utilizing local Markdown files.

---

## Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18.17.0 or higher)** installed.

### 2. Environment Setup
Copy the example environment file and define your Resend API Key:
```bash
cp .env.example .env.local
```

Inside `.env.local`, set your key:
```env
RESEND_API_KEY=re_your_resend_api_key
```
> **Note:** In local development, if your email domain isn't verified in Resend, emails sent to `rizza@blastoffsafety.com` will fail unless sent from `onboarding@resend.dev` to your verified developer email. Once verified, Resend will support sending from/to any address on your domain.

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 5. Production Build
Ensure all TypeScript checks, styles, and static generation builds pass:
```bash
npm run build
npm run lint
```

---

## How to Add a Blog Post

The website uses a file-based Markdown engine. To publish a new post, follow these steps:

1.  Navigate to the `content/blog/` directory.
2.  Create a new file named `your-post-slug.md`.
3.  Add the required metadata at the top of the file enclosed in `---` frontmatter markers.
4.  Write the rest of your post using standard Markdown syntax.

### Markdown Template:
```markdown
---
title: "Your SEO Optimized Article Title"
description: "A short, compelling summary of the article to serve as the SEO meta description."
date: "YYYY-MM-DD"
author: "Blast Off Team"
image: "/images/your-thumbnail-image.jpg"
keywords: ["keyword 1", "keyword 2", "local keyword Red Deer"]
---

Your introductory paragraph goes here. Keep it engaging and incorporate keywords naturally.

## H2 Heading Title

* Use bullet points like this for lists.
* Keep sentences clear and concise.

### H3 Sub-heading

You can use **bold text** by wrapping words in double asterisks.
```

---

## Site Routes Map

*   **Core Pages**:
    *   `/` (Home)
    *   `/about` (About us & values)
    *   `/gallery` (Before/After showcases & filters)
    *   `/contact` (Interactive quote request form)
*   **Services**:
    *   `/services` (Directory)
    *   `/services/kitchen-exhaust-cleaning` (NFPA 96 grease vents)
    *   `/services/restaurant-hood-cleaning` (Canopy wash-down)
    *   `/services/fire-suppression-systems` (Ansul maintenance)
    *   `/services/fire-extinguisher-inspection` (Recharge & tags)
    *   `/services/fire-protection-services` (Compliance inspection)
*   **Service Areas**:
    *   `/service-areas` (Interactive map index)
    *   `/service-areas/{red-deer,calgary,edmonton,lacombe,blackfalds,sylvan-lake}` (Localized landing pages)
*   **Safety Blog**:
    *   `/blog` (Article index)
    *   `/blog/{slug}` (Dynamic article readers)
