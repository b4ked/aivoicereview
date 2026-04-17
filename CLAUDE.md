# AIVoiceReview.com — CLAUDE.md

This file is the root instruction set for Claude Code in this repo.
Keep it short. Put detailed workflow logic inside the skill files in `.claude/commands/`.

## Project

- Site: `aivoicereview.com`
- Purpose: publish independent, SEO-led reviews, comparisons, guides, and blog content about AI voice tools
- Stack: Next.js App Router, TypeScript, Tailwind, MDX blog posts
- Content source: scheduled drafts in `drafts/`
- Published MDX posts: `src/content/blog/*.mdx`
- Advisory reports: `reports/`

## Hard Repo Rules

- `base/` is a subtree and is treated as read-only in this repo.
- Do not auto-select a draft when publishing. The draft path will always be supplied.
- Do not use parallel agents, subagents, or orchestration patterns. One Claude session completes the workflow sequentially.
- When asked to publish a blog, the agent must follow the repo skill workflow below instead of inventing a new one in the prompt.
- Blog posts must be published from a specific draft file and pushed before the DA report is generated.

## Publish Workflow

When the instruction is to publish a selected draft, run this sequential workflow:

1. Read this file.
2. Run `/publish-blog` with the supplied draft path.
3. `/publish-blog` must load these supporting skills in order:
   - `/draft-to-post`
   - `/blog-qa`
   - `/post-publish-da`

The scheduler prompt should only name the draft and tell Claude to publish it. The workflow itself lives here and in the skills.

## Key Files

- Root workflow: `.claude/commands/publish-blog.md`
- Draft shaping: `.claude/commands/draft-to-post.md`
- Final QA and release gate: `.claude/commands/blog-qa.md`
- Post-publish authority report: `.claude/commands/post-publish-da.md`
- Site config: `data/site-config.ts`
- Navigation and sitemap hints: `data/navigation.ts`
- Blog route: `app/blog/[slug]/page.tsx`
- Sitemap: `app/sitemap.ts`
- Root scheduler script: `scheduler/check-and-publish.sh`

## Blog Output Rules

- Output file: `src/content/blog/[slug].mdx`
- The slug should come from the draft if supplied; otherwise derive it from the topic.
- Drafts may arrive as plain text, rough markdown, or partly formatted MDX. The agent is responsible for deciding what structure and formatting the final post needs.
- Do not force fixed formatting patterns onto every draft. Use tables, lists, callouts, and other supported markdown structures only where they materially improve clarity.
- Frontmatter must include:
  - `title`
  - `description`
  - `publishedAt`
  - `updatedAt`
  - `author`
  - `category`
  - `tags`
  - `readingTime`
  - `affiliateDisclosure`
  - `cta`
  - `faqs`
  - `relatedPosts`
- MDX body must not contain an H1.
- `<InfoCallout>` is the only JSX allowed in blog body content.
- Prefer structural clarity over decorative formatting. Formatting choices must follow the content, not a template quota.
- Internal links must use direct site-relative paths such as `/reviews/elevenlabs`.
- Use the site’s established editorial voice. Do not force UK tax-site conventions onto this repo.

## Content and Accuracy Invariants

- Use real site routes only: `/reviews`, `/compare`, `/guides`, `/use-cases`, `/best-of`, `/blog`
- Do not invent routes under `/comparisons` if the site uses `/compare`
- Pricing, limits, feature availability, API claims, and language counts must be verified against current source material before publication
- Prefer the pricing currency used by the provider source, which is usually USD for this site
- `data/providers/index.ts` may be incomplete; do not assume it is the full source of truth for all tools
- Set `affiliateDisclosure: true` whenever the post has commercial intent, recommends paid tools, compares paid tools, or uses affiliate destinations

## Release Rules

- The blog workflow must run quality checks and fix issues directly in the same session.
- Run `npm run build` before publication. Run `npm run lint` when the workflow changes content or code that could affect linting.
- Pre-existing lint failures confined to unchanged `base/` files should be recorded but should not block a draft-only publication.
- If quality is too weak, the topic is a duplicate, or claims cannot be verified confidently, stop without publishing.
- If a push is rejected, rebase on `origin/main` and retry.

## Expected Command

Natural language instructions such as `publish the blog draft drafts/example.mdx` should resolve to the `/publish-blog` workflow automatically.
