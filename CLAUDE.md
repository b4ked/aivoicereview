# AIVoiceReview.com — CLAUDE.md

This is the single authoritative context file for all AI agents working in this repository.
Read this file in full before writing any code.

---

## Project Overview

**Name:** AI Voice Review
**Purpose:** SEO-first affiliate editorial site reviewing, comparing, and explaining AI voice generation tools.
**Domain:** aivoicereview.com
**Repo:** https://github.com/b4ked/aivoicereview
**Status:** Active on `main` — DNA base subtree embedded

The site is:
- An independent review resource for AI voice tools, voice cloning platforms, and related workflows
- Monetised through affiliate referrals where appropriate
- Hosted on Vercel with a VPS-backed scheduling workflow

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + existing local inline-style page implementations |
| Components | Local components in `components/` + shared DNA components in `base/src/components/` |
| Content | MDX blog content in `src/content/blog/` + structured TS datasets in `lib/*.ts` |
| Structured data | `lib/structured-data.ts` |
| Analytics | DNA analytics utilities available via `@/lib/analytics` |
| Deployment | Vercel |

> **Next.js version note:** This project uses Next.js 16 with App Router. APIs, conventions, and file structure may differ from older versions. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed all deprecation notices.

---

## Architecture

This repo uses the **affiliate-portfolio-dna** pattern. Shared infrastructure lives in `base/` (a git subtree from `b4ked/affiliate-portfolio-dna`). Site-specific code lives in `app/`, `components/`, `data/`, `lib/`, and `src/content/`.

### Critical rule for AI agents
**Never edit, create, or delete files inside `base/`.** The `base/` directory is read-only from this repo. Changes to shared infrastructure must be made in `b4ked/affiliate-portfolio-dna`, then pulled in via `git subtree pull --prefix=base`.

### Current repo split

This repo is a hybrid:
- DNA base powers shared admin, blog rendering, API routes, shared components, and utilities
- Local `app/` pages power most public-facing review, comparison, guide, use-case, and best-of pages
- Local `lib/*.ts` files contain structured editorial datasets for those page types
- MDX blog posts live in `src/content/blog/` and are rendered through the DNA blog route

Preserve this split unless the task explicitly requires a migration.

### What lives where

| Layer | Location | Notes |
|-------|----------|-------|
| Shared components | `base/src/components/` | Read-only |
| Shared utilities | `base/src/lib/` | Read-only |
| Shared types | `base/src/types/` | Read-only |
| Shared app routes | `base/src/app/` | Read-only |
| Shared scheduler source | `base/scheduler/` | Read-only |
| Public routes | `app/` | Edit freely |
| Local components | `components/` | Edit freely |
| Site config | `data/site-config.ts` | Edit freely |
| Navigation | `data/navigation.ts` | Edit freely |
| Provider list placeholder | `data/providers/index.ts` | Edit freely |
| Re-exported shared types | `data/types/index.ts` | Edit freely |
| Editorial datasets | `lib/reviews.ts`, `lib/comparisons.ts`, `lib/guides.ts`, `lib/use-cases.ts`, `lib/best-of.ts`, `lib/blog.ts` | Edit freely |
| Editorial dataset types | `lib/types.ts` | Edit freely |
| Structured data builders | `lib/structured-data.ts` | Edit freely |
| MDX blog posts | `src/content/blog/` | Edit freely |
| Brand styles | `app/globals.css` | Edit freely |
| Thin base re-exports | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, admin and API routes if added | Keep thin where applicable |

### Path aliases (`tsconfig.json`)
- `@/components/*` → `./base/src/components/*`, then `./components/*`
- `@/lib/*` → `./base/src/lib/*`, then `./lib/*`
- `@/types` → `./data/types/index.ts`
- `@/types/*` → `./data/types/*`, then `./base/src/types/*`
- `@/data/*` → `./data/*`
- `@/content/*` → `./content/*`
- `@/app/*` → `./base/src/app/*`, then `./app/*`

```
aivoicereview/
├── base/                         # DNA subtree (read-only)
├── app/                          # Local Next.js App Router pages
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── blog/                     # Thin re-exports to DNA base
│   ├── reviews/                  # Review hub + dynamic review pages
│   ├── compare/                  # Comparison hub + dynamic comparison pages
│   ├── guides/                   # Guide hub + dynamic guide pages
│   ├── use-cases/                # Use-case hub + dynamic pages
│   ├── best-of/                  # Best-of hub + dynamic pages
│   └── about/, privacy/, terms/  # Static pages
├── components/                   # Local UI used by public pages
├── data/
│   ├── site-config.ts
│   ├── navigation.ts
│   ├── providers/index.ts
│   └── types/index.ts
├── lib/
│   ├── reviews.ts
│   ├── comparisons.ts
│   ├── guides.ts
│   ├── use-cases.ts
│   ├── best-of.ts
│   ├── blog.ts
│   ├── structured-data.ts
│   └── types.ts
├── src/
│   └── content/
│       └── blog/                 # MDX blog posts
└── CLAUDE.md                     # This file
```

---

## URL Structure (All Routes)

```
/                                     Homepage
/reviews                              Review hub
  /reviews/[slug]                     Individual tool reviews
/compare                              Comparison hub
  /compare/[slug]                     Tool comparisons
/guides                               Guide hub
  /guides/[slug]                      Evergreen guides
/use-cases                            Use-case hub
  /use-cases/[slug]                   Use-case pages
/best-of                              Best-of hub
  /best-of/[slug]                     Best-of roundups
/blog                                 MDX blog hub (DNA base)
  /blog/[slug]                        MDX blog post
/about
/privacy
/terms
/admin
/admin/login
```

> **Route naming note:** The live comparison route in this repo is `/compare`, not `/comparisons`. Do not invent `/comparisons/*` URLs unless the repo is explicitly migrated.

---

## Key Data Files

| File | Purpose |
|------|---------|
| `data/site-config.ts` | Site metadata, brand copy, contact emails, primary CTAs |
| `data/navigation.ts` | Primary nav, footer nav, sitemap routes, blog index meta |
| `data/providers/index.ts` | Shared provider data placeholder; populate deliberately, do not assume complete coverage |
| `lib/reviews.ts` | Review records used by `/reviews/[slug]` |
| `lib/comparisons.ts` | Comparison records used by `/compare/[slug]` |
| `lib/guides.ts` | Guide records used by `/guides/[slug]` |
| `lib/use-cases.ts` | Use-case records used by `/use-cases/[slug]` |
| `lib/best-of.ts` | Best-of records used by `/best-of/[slug]` |
| `lib/blog.ts` | Structured local blog dataset used by sitemap and editorial pages |
| `src/content/blog/*.mdx` | MDX blog post content files |

## Key Library Files

| File | Purpose |
|------|---------|
| `lib/structured-data.ts` | Builds JSON-LD for reviews and breadcrumbs |
| `lib/types.ts` | Local editorial data model for reviews/comparisons/guides/use cases |
| `app/sitemap.ts` | Dynamic sitemap for local page datasets + MDX blog posts |
| `app/robots.ts` | Robots rules |
| `base/src/lib/content.ts` | Shared MDX loading helpers exposed via `@/lib/content` |
| `base/src/lib/analytics.ts` | Shared analytics abstraction |

---

## Coding Conventions

1. **Never edit `base/`.** Shared infrastructure changes happen upstream in the DNA repo only.
2. **All public pages must export metadata.** Use `generateMetadata()` or `metadata` consistently; never leave pages without title/description.
3. **Preserve the current local architecture.** Reviews, comparisons, guides, use cases, and best-of pages are powered by local datasets in `lib/*.ts`; do not replace them with a different content system unless explicitly asked.
4. **Use `@/` imports** instead of long relative paths.
5. **Server Components by default**; only use `"use client"` for genuinely interactive components.
6. **Commercial pages must disclose affiliate relationships.** Review, comparison, and best-of pages should clearly disclose affiliate links.
7. **Affiliate links always use** `rel="nofollow sponsored noopener noreferrer"` and `target="_blank"`.
8. **Dates and pricing must be real, not assumed.** When changing provider plans, pricing, character allowances, languages, or cloning requirements, verify them against provider websites first.
9. **Do not invent routes, slugs, or datasets.** Only link to routes that exist in `app/`, `lib/*.ts`, or `src/content/blog/`.
10. **Always run `npm run build` before committing code changes.**

### Page template pattern

For local editorial pages, preserve the existing pattern:
- metadata export
- structured data script where relevant
- breadcrumb trail
- single H1
- clearly separated verdict/intro/content sections
- affiliate CTA/disclosure on commercial pages
- related navigation or next-step links near the end

### MDX blog post frontmatter schema

```yaml
---
title: "Post title"
description: "Meta description"
publishedAt: "2026-04-16"
updatedAt: "2026-04-16"
author: "VoiceToolsReview Editorial Team"
category: "reviews" # or "guide" or "opinion"
tags: ["keyword 1", "keyword 2"]
readingTime: "7 min read"
affiliateDisclosure: true
cta:
  heading: "CTA heading"
  description: "CTA description"
  primaryLabel: "Primary CTA"
  primaryHref: "/reviews"
  secondaryLabel: "Secondary CTA"
  secondaryHref: "/compare"
faqs:
  - question: "Question?"
    answer: "Answer."
relatedPosts:
  - title: "Related title"
    href: "/blog/existing-slug"
---
```

### MDX body conventions

- No `#` H1 in the body; the template renders the title from frontmatter
- Start body content with intro copy, then `##` sections
- `<InfoCallout>` is the only JSX that should appear in MDX body content
- Use direct internal links like `/reviews/elevenlabs`, not absolute URLs to the same domain
- Do not add links to unpublished or nonexistent pages

---

## Design System

### Brand palette
- Primary background: deep navy / slate
- Accent: bright blue
- Surface: white and very light slate
- Text: dark slate for body, muted slate for supporting copy

### Typography
- Current root font is Inter via `app/layout.tsx`
- Keep headings high-contrast and compact
- Preserve the existing visual language on local pages unless a full design refactor is requested

### Spacing
- Most public pages use wide hero/header spacing followed by constrained content containers
- Preserve consistent vertical rhythm inside long-form editorial pages

### Component library
- Local components: `Header`, `Footer`, `RatingBox`, `ProsConsList`, `PricingTable`, `ComparisonTable`, `TableOfContents`, `AffiliateDisclosure`
- Shared DNA components remain available through `@/components/*` but should not force a migration by default

### Component usage guide
- Use local components when editing existing local pages
- Use shared DNA components when working on shared blog/admin functionality or when explicitly migrating to the DNA conventions
- Avoid mixing two competing page patterns in the same change unless the task is a deliberate refactor

---

## Content Approach

### Voice and tone
- Independent, factual, and non-hype
- Written for buyers, creators, and developers evaluating AI voice tools
- Practical and action-oriented; explicit about trade-offs and limitations
- Keyword-aware, but written for humans first
- Clear about what was tested versus what is inferred from documentation or pricing pages
- Use consistent spelling within a page; do not inject UK tax-site conventions into this repo
- Most blog posts should land around ~800–2,000 words

### Editorial facts to verify before publication

For any tool-specific claim, verify against provider websites before editing:
- current plan names
- pricing and billing cadence
- character or usage allowances
- cloning minimum sample lengths
- language counts
- API availability and rate-limit gating
- commercial-use and attribution rules

Do not update pricing or feature claims in local datasets or MDX content without verification.

### Page layout templates

**Review page:** Breadcrumbs → H1 → tagline / updated date → score + verdict → pros/cons → pricing → sections → affiliate CTA → affiliate disclosure

**Comparison page:** Breadcrumbs → H1 → winner/tie badge → verdict → feature comparison table → review links + affiliate CTAs → affiliate disclosure

**Guide page:** Breadcrumbs → label → H1 → updated date → intro → table of contents → step/section blocks → related guide link

**Use-case page:** Breadcrumbs → H1 → intro/problem/solution framing → recommended tools → internal links to relevant reviews/comparisons

**Best-of page:** Breadcrumbs → H1 → intro → ranked tools → supporting rationale → links to review pages

**Blog post:** Intro → `##` sections → optional `<InfoCallout>` blocks → CTA and related posts from frontmatter

---

## SEO Conventions

- Title format: `[Page Title] | AI Voice Review`
- Description: 150–160 chars, keyword-rich, written for humans
- Canonical URLs: `https://aivoicereview.com[path]`
- No trailing slash unless a route explicitly requires it

### Structured data requirements

| Page type | Schema required |
|-----------|-----------------|
| Blog post | ArticleSchema + FAQSchema if FAQs are present |
| Review | Review/article schema + Breadcrumb schema |
| Comparison | Breadcrumb schema |
| Guide | Breadcrumb schema; Article schema where appropriate |
| Use case | Breadcrumb schema |
| Best-of | Breadcrumb schema |
| Homepage | Organisation/site schema if implemented |

### Sitemap
`app/sitemap.ts` is dynamic and currently includes:
- static routes
- all review records
- all comparison records
- all use-case records
- all guide records
- all best-of records
- local structured blog records from `lib/blog.ts`
- MDX blog posts from `src/content/blog/` via `@/lib/content`

When adding a new content type or route family, update `app/sitemap.ts`.

---

## Analytics Event Taxonomy

All event names: `snake_case`

| Event | Fired in | Props |
|-------|----------|-------|
| `affiliate_click` | Review / comparison / best-of CTA links | `{ provider: string, page: string }` |
| `faq_expand` | FAQ components where used | `{ label: string }` |
| `cta_click` | Editorial CTA blocks | `{ label: string, page: string }` |
| `comparison_click` | Comparison table or comparison hub interactions | `{ comparison: string }` |

If analytics are connected later, use the shared abstraction in `@/lib/analytics`.

---

## Affiliate Conventions

- Do not assume a hardcoded affiliate-provider list; verify the current dataset
- Affiliate URLs may live in local editorial datasets such as `lib/reviews.ts` and `lib/comparisons.ts`
- If `data/providers/index.ts` is expanded later, keep it in sync with the editorial datasets
- Editorial independence must be preserved; affiliate status must not dictate verdicts
- Commercial pages should explicitly disclose affiliate relationships

---

## File Naming Conventions

| File type | Convention | Example |
|-----------|-----------|---------|
| Blog MDX | `kebab-case.mdx` | `playht-review-2026.mdx` |
| Page routes | Next.js App Router convention | `app/reviews/[slug]/page.tsx` |
| Components | PascalCase | `RatingBox.tsx` |
| Utilities | camelCase | `structured-data.ts` |
| Data files | kebab-case | `site-config.ts`, `providers/index.ts` |

---

## Build and Dev Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## Phase 2 TODOs

- [ ] Unify local editorial datasets and shared provider data
- [ ] Standardise metadata generation across all local pages
- [ ] Add richer schema coverage for reviews and comparisons
- [ ] Connect real analytics provider via shared analytics abstraction
- [ ] Add author / methodology / editorial trust pages if needed
- [ ] Expand provider coverage beyond current seed tools
- [ ] Review nav/footer links for routes that do not yet exist
- [ ] Decide whether public pages should remain local or migrate further onto DNA components

---

## Agentic Workflow

### Core principle

When a task spans multiple areas of the site, parallelise independent work. Use specialist agents for content, data, build, SEO, and QA rather than doing unrelated work sequentially in one context.

### Agent types

#### Write-Up Agent
- **Scope:** Creates or edits MDX blog content
- **Skill:** `/write-up`
- **Files:** `src/content/blog/*.mdx`
- **Output:** MDX files matching the frontmatter schema above
- **Conventions:** factual, independent, tool-pricing verified, direct internal links only, `affiliateDisclosure: true` on commercial posts
- **Does not modify:** `app/`, `components/`, `data/`, or `lib/`

#### Frontend / Build Agent
- **Scope:** Public pages, layout, components, page-level UX
- **Skill:** `/build`
- **Files:** `app/**/*.tsx`, `components/**/*.tsx`, `app/globals.css`
- **Conventions:** metadata on all pages, preserve existing route architecture, preserve local design language unless refactor is requested
- **Does not modify:** `base/`

#### Data Agent
- **Scope:** Site config, nav, editorial datasets, supporting types
- **Skill:** `/data`
- **Files:** `data/**/*.ts`, `lib/reviews.ts`, `lib/comparisons.ts`, `lib/guides.ts`, `lib/use-cases.ts`, `lib/best-of.ts`, `lib/blog.ts`, `lib/types.ts`
- **Conventions:** keep slugs/routes consistent, verify provider facts before updating, no invented data
- **Usually sequential:** dataset changes often unblock frontend and SEO work

#### SEO Agent
- **Scope:** Metadata, sitemap, structured data, canonical URLs, internal linking
- **Skill:** `/seo-agent`
- **Files:** `app/sitemap.ts`, `app/robots.ts`, `lib/structured-data.ts`, `src/content/blog/*.mdx`, relevant `app/**/page.tsx`
- **Checks after build/content changes:** metadata completeness, sitemap coverage, internal links, schema presence, canonical correctness

#### QA / Reviewer Agent
- **Scope:** Build verification, linting, route sanity, conventions audit
- **Skill:** `/review`
- **Commands:** `npm run build`, then `npm run lint`
- **Always runs last** before commit

#### Domain Authority (DA) Agent
- **Scope:** Link-worthiness, authority-building recommendations, E-E-A-T review, competitor/link opportunity research
- **Skill:** `/da-agent`
- **Research-and-recommend only** unless explicitly asked to implement

### Parallel agent patterns

#### Building a new page

```
PARALLEL:
  → Frontend/Build Agent: page implementation
  → Data Agent: supporting dataset changes if needed

THEN:
  → SEO Agent
  → QA/Reviewer Agent
```

#### Content pipeline — multiple blog posts

```
PARALLEL:
  → Write-Up Agent: post 1
  → Write-Up Agent: post 2
  → Write-Up Agent: post 3

THEN:
  → SEO Agent
  → QA/Reviewer Agent
```

#### Adding a new provider

```
SEQUENTIAL:
  → Data Agent: update review/comparison/best-of datasets and any provider metadata

THEN PARALLEL:
  → Frontend/Build Agent A: review page / hub updates
  → Frontend/Build Agent B: comparison / best-of / use-case updates

THEN:
  → SEO Agent
  → QA/Reviewer Agent
```

### Agent task prompt format

When spawning a subagent, include:

```
You are a [Agent Type] for AI Voice Review (Next.js 16, TypeScript, Tailwind CSS v4).

TASK: [specific task]

KEY FILES TO READ/MODIFY:
- [files]

CONVENTIONS TO FOLLOW:
- Read CLAUDE.md first
- Do not edit base/
- Preserve current app/lib/data split

COMPLETE WHEN:
- [acceptance criteria]
- npm run build passes (if code changed)
```

### QA / Reviewer checklist (run before commit)

```
[ ] Metadata exported on every changed page
[ ] Breadcrumb trail present on non-homepage editorial pages
[ ] Single H1 and logical section hierarchy
[ ] Structured data still valid where expected
[ ] Affiliate links use rel="nofollow sponsored noopener noreferrer"
[ ] Affiliate disclosure still present on commercial pages
[ ] Internal links point only to real routes
[ ] No accidental /comparisons vs /compare mismatch
[ ] No edits made inside base/
[ ] npm run build passes
[ ] npm run lint passes
```

---

## Internal Linking Strategy

- Blog posts → relevant reviews, comparison pages, guides, use-case pages, and best-of pages
- Review pages → relevant comparisons and adjacent reviews
- Comparison pages → both underlying review pages
- Guide pages → relevant reviews and best-of pages
- Use-case pages → relevant reviews, comparisons, and best-of pages
- Best-of pages → review pages for each ranked tool
- Use direct internal links: `/path`, never full absolute URLs to the same domain

---

## Content Expansion: Step-by-Step

### Adding a new blog post
1. Create `src/content/blog/new-post-slug.mdx`
2. Fill the complete frontmatter schema
3. Verify every `relatedPosts` and internal link target exists
4. Run SEO + QA

### Adding a new review page
1. Add the record to `lib/reviews.ts`
2. Confirm the slug resolves via `app/reviews/[slug]/page.tsx`
3. Update hubs / best-of / comparison links if needed
4. Confirm sitemap coverage

### Adding a new comparison page
1. Add the record to `lib/comparisons.ts`
2. Confirm both underlying review slugs exist
3. Update comparison hub and internal links
4. Confirm sitemap coverage

### Adding a new guide, use-case, or best-of page
1. Add the record to the relevant `lib/*.ts` dataset
2. Ensure internal links point to existing reviews/comparisons
3. Update the relevant hub page if needed
4. Confirm sitemap coverage

---

## What NOT to Do

- Do not edit anything inside `base/`
- Do not invent pricing, usage allowances, language counts, or cloning claims
- Do not link to `/comparisons/*` in this repo unless the route actually exists
- Do not add absolute internal links like `https://aivoicereview.com/reviews/x`
- Do not leave metadata blank on public pages
- Do not mix a major design refactor into a simple content/data task
- Do not commit without running `npm run build`

---

## VPS & Infrastructure

### Overview

A VPS-backed scheduler supports automated publishing workflows for this site.

| Item | Value |
|------|-------|
| Port | `3004` |
| Scheduler dir | `/home/parryh/aivoicereview-scheduler/` |
| Public endpoint | `https://api.parrytech.co/aivoicereview-scheduler/` |
| Log file | `/var/log/aivoicereview-publish.log` |

### Important infrastructure note

- The scheduler runtime for this site lives outside the repo on the VPS
- Shared scheduler source exists inside `base/scheduler/`, which is read-only here
- If scheduler code must change, update the DNA repo first, then pull the subtree

### GitHub Actions / Vercel deployment

GitHub Actions workflow: `.github/workflows/vercel_deploy.yml`

#### GitHub Secrets
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID` = `team_vdlrQNmERlLyzxbvwfLdU1JR`
- `VERCEL_PROJECT_ID_AIVOICEREVIEW` = `prj_xs0FtzhSxHq7aiZW14jkFHWR85ew`

#### Vercel environment variables
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SECRET`
- `CRON_SECRET`
- `RESEND_API_KEY`
- `RESEND_AUDIENCE_ID`
- `NEWSLETTER_EDITION`
- `NEWSLETTER_FROM_EMAIL`
- `NEWSLETTER_FROM_NAME`
- `NEWSLETTER_RECIPIENT_EMAIL`
- `VERCEL_TOKEN`
- `VPS_API_URL=https://api.parrytech.co/aivoicereview-scheduler`
- `VPS_API_SECRET`

### Debugging

```bash
ssh parrytech-vps
tail -50 /var/log/aivoicereview-publish.log
curl -s https://api.parrytech.co/aivoicereview-scheduler/health
```
