# DA Impact Assessment — playht-review-2026 — 2026-04-17

## Run Context
- **Type:** Re-run on previously published post (originally published 2026-04-16)
- **Change this run:** `updatedAt` bumped to 2026-04-17. No substantive content changes.
- **Prior DA report:** reports/da-report-2026-04-16-playht-review.md (score: 29/40)
- **Outstanding HIGH actions from prior run:** body links to /blog/ instead of /reviews/ money pages — still unresolved

---

## Content Assessed
- **File:** src/content/blog/playht-review-2026.mdx
- **Type:** Individual software review (re-run)
- **Topic:** PlayHT AI voice generator review — voice quality, cloning, pricing, API, verdict
- **Final URL:** https://aivoicereview.com/blog/playht-review-2026

---

## DA Impact Score: 29/40

Score is unchanged from the prior run. No substantive content changes were made. Details below reflect current post state.

| Dimension | Score | Notes |
|-----------|-------|-------|
| Word count / depth | 4/5 | ~1,610 body words — above the link-earning threshold |
| Original insight or data | 3/5 | Character economics comparison (10× chars vs ElevenLabs Creator) is specific and useful; no original benchmark data |
| E-E-A-T signals present | 3/5 | Full testing methodology, affiliate disclosure, pricing caveated; no named individual reviewer |
| Internal links to money pages | 3/5 | /reviews hub linked in body; CTA targets /comparisons/elevenlabs-vs-murf; body links still go to /blog/ review posts rather than /reviews/elevenlabs and /reviews/murf |
| Link-earning angle | 2/5 | Character economics comparison is the strongest differentiated hook; no data or tool embed to support external citation |
| Topical relevance | 5/5 | PlayHT is one of the three primary AI voice generator targets for this site |
| Freshness | 5/5 | updatedAt: 2026-04-17 |
| CTA and conversion alignment | 4/5 | Clear comparison CTA; honest 3.75/5 rating; affiliate disclosure present |

---

## What Strengthens Authority

- Body word count (~1,610) is above average for the site and above the threshold where link-earning probability increases
- Character economics comparison (PlayHT Creator = ~10× ElevenLabs Creator characters at similar price) is specific and useful — the kind of concrete claim practitioners share
- Full testing methodology: 40,000 characters tested, 8 voice presets, two clone conditions, API streaming test — this is credible detail
- Pricing table is clean, accurate at time of writing, and caveated to the source (avoids stale-pricing trust damage)
- CTA and related-post links point to real routes; no 404s introduced

## What Limits Authority Today

- **Body links go to /blog/ posts, not /reviews/ money pages.** Two body links reference `/blog/elevenlabs-review-2026-ai-voice-generator` and two reference `/blog/murf-ai-review-2026` — these should point to `/reviews/elevenlabs` and `/reviews/murf`. The /reviews/ pages are the money pages that need authority flow from the blog. This gap has been flagged HIGH since 2026-04-16 and remains unresolved.
- **No /editorial-policy page.** First flagged 2026-04-11 — now 6 days unresolved with 8 posts live. Each publication with `affiliateDisclosure: true` increases E-E-A-T exposure. The footer already links to `/editorial-policy`; the page simply does not exist.
- **No original data hook.** The testing methodology is described but produces no quantified output — no latency measurements, naturalness scores, or audio samples. Without this, the post cannot attract external citations.
- **API gating caveat could be sharper.** The Unlimited plan (~£90/month) requirement for API access is a significant buyer limitation. A brief InfoCallout on this point would surface it for developers scanning the page.

---

## Priority Follow-up Actions

| Priority | Action | File | Notes |
|----------|--------|------|-------|
| HIGH | Replace body links: `/blog/elevenlabs-review-2026-ai-voice-generator` → `/reviews/elevenlabs` and `/blog/murf-ai-review-2026` → `/reviews/murf` | src/content/blog/playht-review-2026.mdx | Carried over from 2026-04-16 report — unresolved |
| HIGH | Build /editorial-policy page | app/editorial-policy/page.tsx (new) | Flagged 2026-04-11 — 6 days unresolved; footer link already present |
| MEDIUM | Add InfoCallout on API gating (Unlimited plan required, ~£90/month) near the API section | src/content/blog/playht-review-2026.mdx | Developers will be surprised by this — surfacing it increases trust |
| LOW | Add a feature comparison table: PlayHT vs ElevenLabs vs Murf across cloning minimum, API access tier, character limits, languages | src/content/blog/playht-review-2026.mdx | Would lift CL10 (shareable assets) and definitive guide potential |

---

*Report generated: 2026-04-17. Post originally published: 2026-04-16.*
