# AIVoiceReview

SEO-led affiliate editorial site covering AI voice generators, voice cloning tools, text-to-speech platforms, and related workflows.

## Key Paths

- Public routes: `app/`
- Local editorial datasets: `lib/`
- Blog posts: `src/content/blog/`
- Draft inputs: `drafts/`
- Workflow skills: `.claude/commands/`
- Scheduler script: `scheduler/check-and-publish.sh`
- Advisory reports: `reports/`

## Blog Workflow

Blog publishing now runs as one sequential Claude Code workflow defined in `CLAUDE.md`.

Skills:

1. `/publish-blog`
2. `/draft-to-post`
3. `/blog-qa`
4. `/post-publish-da`

The scheduler prompt should only name the draft to publish. It should not restate the workflow.

## Scheduler Pattern

The expected VPS flow is:

1. scheduler checks due drafts
2. scheduler clones the repo fresh
3. Claude is asked to publish one specified draft
4. Claude reads `CLAUDE.md` and runs the sequential workflow
5. scheduler marks the draft published if the run succeeds

The live site currently talks to a separate VPS scheduler service via:

- `VPS_API_URL`
- `VPS_API_SECRET`

Those env vars are already configured in Vercel for AIVoiceReview.

## Notes

- `base/` is read-only subtree content in this repo.
- Blog post routes are auto-generated from `src/content/blog/*.mdx`.
- Blog post sitemap inclusion is automatic via `app/sitemap.ts`.
