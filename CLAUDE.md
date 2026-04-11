# VoiceToolsReview.com — CLAUDE.md

This is the single authoritative context file for all AI agents working in this repository.
Read this file in full before writing any code.

---

## Project Overview

**Name:** VoiceToolsReview.com
**Purpose:** Independent review and comparison website for AI voice generation tools.
**Domain:** voicetoolsreview.com
**Repo:** https://github.com/b4ked/aivoicereview
**Status:** Active

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Deployment | Vercel |

---

## Architecture

This repo uses the **affiliate-portfolio-dna** pattern. Shared infrastructure lives in `base/`.

**Never edit files inside `base/`.** Pull DNA updates via `bash scripts/pull-base-update.sh`.

### Path aliases
- `@/components/*` → `base/src/components/*` then `./components/*`
- `@/lib/*` → `base/src/lib/*` then `./lib/*`
- `@/types` → `data/types/index.ts`
- `@/data/*` → `data/*`
- `@/content/*` → `content/*`

---

## VPS Scheduler

| Item | Value |
|------|-------|
| Port | 3004 |
| Scheduler dir | `/home/parryh/aivoicereview-scheduler/` |
| Public endpoint | `https://api.parrytech.co/aivoicereview-scheduler/` |
| Log file | `/var/log/aivoicereview-publish.log` |

---

## Vercel Deployment

GitHub Actions workflow: `.github/workflows/vercel_deploy.yml`

### GitHub Secrets
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID` = `team_vdlrQNmERlLyzxbvwfLdU1JR`
- `VERCEL_PROJECT_ID_AIVOICEREVIEW` = `prj_xs0FtzhSxHq7aiZW14jkFHWR85ew`

### Vercel Env Vars
- `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_SECRET` (DNA base auth — **not** NextAuth-style vars)
- `CRON_SECRET` (authenticates newsletter cron calls)
- `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`
- `NEWSLETTER_EDITION`, `NEWSLETTER_FROM_EMAIL`, `NEWSLETTER_FROM_NAME`, `NEWSLETTER_RECIPIENT_EMAIL`
- `VERCEL_TOKEN` (for analytics API calls from admin panel)
- `VPS_API_URL` = `https://api.parrytech.co/aivoicereview-scheduler`
- `VPS_API_SECRET` (matches `VPS_API_KEY` on VPS)

### Blog draft schema
Drafts live in `/drafts/` (root level). Use `**Field:** value` format:
- `**Title:**`, `**Slug:**`, `**Meta description:**`, `**Focus keyword:**`, `**Secondary keywords:**`
- File naming: `NN-slug-here.md` (numbered, kebab-case)

---

## Agentic Workflow

Always run the full pipeline for new blog posts: Write-Up → SEO → QA/Reviewer

Commands: `/write-up`, `/build`, `/data`, `/seo-agent`, `/review`, `/da-agent`, `/blog-pipeline`
