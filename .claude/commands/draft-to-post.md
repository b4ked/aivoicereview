# Draft To Post — AIVoiceReview.com

Use this command to turn one supplied draft into a publishable MDX blog post.

This skill combines the old write-up and blog SEO shaping work into one pass. The output should already be close to publish-ready before QA starts.

## Role

- Transform a raw draft, outline, or rough MDX dump into a polished post in `src/content/blog/`
- Resolve structure, SEO, internal links, affiliate disclosure, CTA, FAQs, and related posts in one pass
- Improve weak raw material without inventing unsupported claims
- Exercise editorial judgment on presentation. The skill is responsible for choosing the final structure and formatting that best suits the supplied draft.

## Required Reads

1. `CLAUDE.md`
2. The supplied draft file
3. `data/site-config.ts`
4. `data/navigation.ts`
5. `src/content/blog/` to check for duplicates and related-post targets
6. Relevant public routes in `app/`, especially `/reviews`, `/compare`, `/guides`, `/use-cases`, and `/best-of`
7. Two or three related existing posts to match tone and frontmatter conventions

## Pre-Write Gate

Stop and fail the draft if any of these are true:

- The draft is under roughly 300 useful words and offers no meaningful angle to build from.
- The core topic duplicates an existing published post without a stronger angle, fresher framing, or materially different intent.
- The draft contains factual claims you cannot correct confidently from reliable sources.

## Output Requirements

- Create `src/content/blog/[slug].mdx`
- Use the draft slug if present. Otherwise derive a clean kebab-case slug from the topic.
- Keep the title specific and search-led.
- Make the description human-readable and tightly aligned to the main query.
- Write for creators, developers, marketers, podcasters, and buyers evaluating AI voice tools.

## Frontmatter Standard

Every post must include:

```yaml
title:
description:
publishedAt:
updatedAt:
author: "VoiceToolsReview Editorial Team"
category:
tags:
readingTime:
affiliateDisclosure:
cta:
faqs:
relatedPosts:
```

### Frontmatter Rules

- `title`: under about 60 characters where possible and keyword-led
- `description`: around 150 to 160 characters
- `publishedAt` and `updatedAt`: ISO date for the publication run
- `category`: one of `review`, `reviews`, `guide`, `comparison`, `opinion`, `news`
- `tags`: 2 to 5 useful tags
- `readingTime`: realistic estimate such as `7 min read`
- `affiliateDisclosure`: `true` when the post mentions paid tools generally, recommends tools, compares tools, or uses commercial intent

## Body Standard

- No `#` H1 in the body
- Start with a short opening paragraph that states the decision, problem, or key tension clearly
- Use `##` and `###` headings only
- Use direct internal links across the body, not clustered at the end
- Use `<InfoCallout>` only when it adds real value
- End with a practical next step, verdict, or recommendation

## Adaptive Formatting Standard

Drafts may range from unformatted text dumps to partially structured markdown. The final post must not mirror the draft mechanically. Reshape it into the clearest format for the reader.

The agent has explicit authority to decide whether the post should use:

- plain prose sections
- bullet lists
- numbered steps
- comparison or summary tables
- one or more `<InfoCallout>` blocks
- short summary sections

Use judgment, not fixed rules.

### When to prefer each structure

- Use prose when explanation and nuance matter more than scan speed.
- Use bullet lists when the reader needs a clean set of examples, criteria, trade-offs, or feature highlights.
- Use numbered steps when the reader needs to follow a process, setup path, or buying decision sequence.
- Use a table when the reader benefits from fast side-by-side comparison of pricing, limits, plans, features, voices, languages, or workflow differences.
- Use `<InfoCallout>` when a warning, caveat, hidden pricing condition, usage limit, or quality caveat deserves emphasis.

### Formatting decision rules

- Do not add a table unless it improves comprehension more than headings or bullets would.
- Do not add a callout unless it highlights information readers are likely to miss or misuse.
- Preserve useful draft formatting only if it already serves the final article well.
- Replace weak or messy draft formatting when a clearer structure is available.
- A rough draft with no formatting should still become a properly structured article.
- A draft with existing formatting should not be forced into extra tables or callouts unless the article genuinely benefits.

### Table rules

- Use markdown tables only.
- Keep tables concise and scannable.
- Every row must be on its own line, with blank lines before and after the table.
- Do not use a table for content that reads more clearly as prose.

### Callout rules

- Use at most 1 to 3 `<InfoCallout>` blocks.
- Preferred cases:
  - `warning`: pricing caveats, voice-cloning restrictions, commercial limitations, or compliance concerns
  - `tip`: workflow shortcuts, value opportunities, or smart evaluation advice
  - `info`: clarifications that prevent misunderstanding
  - `deadline`: only when time-sensitive launches, pricing changes, or expiring offers are clearly relevant
- Do not use callouts as decoration or filler.

## Embedded SEO Standard

Complete these inside this skill rather than handing them off:

- Place the primary keyword naturally in the title, opening section, and key headings
- Add at least 3 relevant internal links
- Choose the right CTA target for the post intent
- Write 3 to 5 search-aligned FAQs
- Set 2 or 3 valid related posts using real existing routes only
- Check whether affiliate disclosure must be `true`
- Keep commercial claims factual and balanced

### CTA guidance

- Review or tool-decision posts: prefer `/reviews`, `/compare`, or the strongest review page
- Comparison-intent posts: prefer `/compare`
- Educational posts: prefer a relevant `/guides` or `/best-of` page
- Do not default to external affiliate links in MDX CTAs; prefer internal routes

## Accuracy Standard

- Verify prices, plan limits, language counts, voice counts, API claims, cloning requirements, and workflow features before publishing
- Do not retain draft claims that are outdated, unsourced, or contradicted by current provider information
- Use the provider’s real pricing currency, usually USD
- Do not invent benchmark claims, latency figures, or test results

## Final Presentation Test

Before handing off, check the article as a reader would:

- Is the structure appropriate for this specific draft?
- Are dense sections broken up where needed?
- Would a table help where the article compares options, prices, or features?
- Would a callout help where readers could easily miss a pricing caveat, limit, or exception?
- Has unnecessary formatting been avoided where plain prose is stronger?

## Output Block

After writing the MDX file, produce this handoff block for the next skill:

```text
FILE: src/content/blog/[slug].mdx
SLUG: [slug]
KEYWORD: [primary keyword]
CATEGORY: [category]
WORD_COUNT: ~[n]
AFFILIATE_DISCLOSURE: [true/false]
INTERNAL_LINKS: [count]
RELATED_POSTS: [href, href]
FORMATTING_CHOICES: [brief summary of tables, lists, callouts used, or "prose-led"]
QUALITY_GATE: PASS
NOTES: [brief notes or "none"]
```
