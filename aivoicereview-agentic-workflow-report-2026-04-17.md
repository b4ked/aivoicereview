# AIVoiceReview Agentic Workflow Refactor Report

Date: 2026-04-17  
Repo: `/Users/parryh/aivoicereview`  
Branch: `main`

Reference report:

- [SoleTraderGuide workflow report](</Users/parryh/Library/Mobile Documents/iCloud~md~obsidian/Documents/SoleTraderGuideVault/WatchThisCapital/soletraderguide-agentic-workflow-report-2026-04-17.md>)

## Objective

Apply the same sequential single-agent publishing model used in SoleTraderGuide to AIVoiceReview, but adapt it to this site’s actual routes, content model, and AI-voice-specific editorial standards.

## What Changed

### Root workflow was reduced and corrected

`CLAUDE.md` was rewritten from a long, stale, partially incorrect instruction file into a short root workflow file.

The old file still contained:

- SoleTraderGuide-style agent split
- MTD and UK tax rules irrelevant to this repo
- stale content guidance that did not match AIVoiceReview routes or topics

The new file now contains only:

- repo-wide publishing invariants
- the sequential skill workflow
- blog output rules
- AIVoiceReview-specific route and accuracy constraints

### Old specialist command set was removed

Deleted:

- `.claude/commands/blog-pipeline.md`
- `.claude/commands/write-up.md`
- `.claude/commands/seo-agent.md`
- `.claude/commands/review.md`
- `.claude/commands/da-agent.md`
- `.claude/commands/build.md`
- `.claude/commands/data.md`

### New 4-skill sequential workflow was added

Added:

- `.claude/commands/publish-blog.md`
- `.claude/commands/draft-to-post.md`
- `.claude/commands/blog-qa.md`
- `.claude/commands/post-publish-da.md`

These now define one sequential session:

1. publish one supplied draft
2. transform it into polished MDX
3. QA and fix directly
4. push the post
5. write a post-publish DA report

### Draft-shaping skill was adapted to AIVoiceReview

The new `/draft-to-post` skill was rewritten for:

- AI voice reviews
- pricing and feature comparisons
- voice cloning caveats
- API and workflow discussions
- internal links to `/reviews`, `/compare`, `/guides`, `/use-cases`, `/best-of`, `/blog`

It no longer references:

- MTD thresholds
- HMRC deadlines
- UK tax workflows
- `/comparisons` as the default compare route

It now explicitly allows adaptive formatting:

- prose
- bullets
- steps
- tables
- `<InfoCallout>`

based on the actual draft quality and article needs.

### QA skill was adapted to AIVoiceReview

The new `/blog-qa` skill now checks for:

- valid MDX frontmatter for this site
- route-valid internal links
- credible pricing and feature claims
- formatting choices that fit the draft
- direct fix-and-verify workflow

### Root scheduler script was added

This repo did not have a root `scheduler/` folder like SoleTraderGuide.

To match the updated pattern, a new root script was added:

- `scheduler/check-and-publish.sh`

It uses the same simplified prompt pattern:

- read `CLAUDE.md`
- publish the specified draft
- no auto-selection logic
- fail cleanly on quality-gate failure

### README was replaced

The previous `README.md` was still the default Next.js scaffold text and did not describe the repo’s real publishing workflow.

It was replaced with a short repo-specific overview that documents:

- key paths
- the new four-skill workflow
- the scheduler pattern

## Important Site-Specific Adjustments

The refactor was not copied blindly from SoleTraderGuide.

I adjusted it for AIVoiceReview specifically:

- domain: `aivoicereview.com`
- content focus: AI voice tools, reviews, comparisons, guides
- routes: `/compare` instead of `/comparisons`
- pricing assumptions: usually USD, not GBP
- provider source of truth: `data/providers/index.ts` is currently incomplete, so skills do not rely on it as the sole authority
- editorial accuracy: focused on real product claims, pricing, voice quality, limits, and workflow differences
- live scheduler architecture: AIVoiceReview already runs through a separate VPS scheduler service rather than a repo-managed scheduler folder inside the app deployment

## Existing Scheduler Architecture

Unlike SoleTraderGuide, AIVoiceReview was already wired to a live external VPS scheduler.

Confirmed current setup:

- Vercel env vars already contain `VPS_API_URL` and `VPS_API_SECRET`
- the live scheduler service currently runs in `/home/parryh/aivoicereview-scheduler` on the VPS
- the site admin routes proxy to that external scheduler

This means scheduling worked without a root repo `scheduler/` folder because the site was already integrated to a separate scheduler process outside the repo checkout.

To avoid breaking that:

- the workflow refactor was applied to the repo itself
- a root `scheduler/check-and-publish.sh` was added as repo source-of-truth for the cron script
- that script was aligned to the live VPS settings rather than SoleTraderGuide defaults

Aligned live values:

- lock file: `/tmp/aivoicereview-publish.lock`
- work dir: `/home/parryh/aivoicereview-publish-work`
- git remote host alias: `git@github-aivoicereview:b4ked/aivoicereview.git`
- local scheduler API port: `3004`
- stdin redirection preserved: `< /dev/null`

## Validation Notes

The repo had unrelated local modifications before this task:

- `package.json`
- `package-lock.json`

These add `source-map-js` and were left untouched. They were not part of this workflow refactor and should be treated as pre-existing local changes.

## Files Changed By This Refactor

Modified:

- `CLAUDE.md`
- `README.md`

Added:

- `.claude/commands/publish-blog.md`
- `.claude/commands/draft-to-post.md`
- `.claude/commands/blog-qa.md`
- `.claude/commands/post-publish-da.md`
- `scheduler/check-and-publish.sh`
- `aivoicereview-agentic-workflow-report-2026-04-17.md`

Deleted:

- `.claude/commands/blog-pipeline.md`
- `.claude/commands/write-up.md`
- `.claude/commands/seo-agent.md`
- `.claude/commands/review.md`
- `.claude/commands/da-agent.md`
- `.claude/commands/build.md`
- `.claude/commands/data.md`

## Expected Outcome

After deployment, AIVoiceReview should behave like SoleTraderGuide’s revised workflow:

- one Claude session
- one selected draft
- no subagents
- no parallel specialist workflow
- skills loaded sequentially from the repo
- cron prompt reduced to draft selection only
