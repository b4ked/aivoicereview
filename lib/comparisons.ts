import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "elevenlabs-vs-murf",
    title: "ElevenLabs vs Murf AI (2026): Which Should You Choose?",
    metaTitle: "ElevenLabs vs Murf 2026 — Side-by-Side Comparison",
    metaDescription:
      "ElevenLabs or Murf AI? We compare voice quality, pricing, cloning, and features so you can make the right call for your use case.",
    toolAName: "ElevenLabs",
    toolBName: "Murf AI",
    toolASlug: "elevenlabs",
    toolBSlug: "murf",
    winner: "A",
    verdict:
      "ElevenLabs wins on voice quality and cloning. Murf wins on team collaboration and studio workflow. For solo creators who care about naturalness, ElevenLabs is the right choice. For teams producing e-learning or corporate content, Murf deserves serious consideration.",
    featureRows: [
      { feature: "Voice Naturalness", toolA: "⭐⭐⭐⭐⭐ Best-in-class", toolB: "⭐⭐⭐⭐ Very good, polished" },
      { feature: "Voice Cloning", toolA: "✅ Instant + Professional", toolB: "⚠️ Basic instant only" },
      { feature: "Free Tier", toolA: "10,000 chars/mo", toolB: "10 mins/mo" },
      { feature: "Entry Paid Plan", toolA: "$5/mo (30,000 chars)", toolB: "$19/mo (24 hrs/yr)" },
      { feature: "Mid Plan", toolA: "$22/mo (100,000 chars)", toolB: "$26/mo (48 hrs/yr)" },
      { feature: "Languages", toolA: "32+ languages", toolB: "20+ languages" },
      { feature: "Team Collaboration", toolA: "❌ Limited", toolB: "✅ Built-in" },
      { feature: "Long-form Editor", toolA: "✅ Projects feature", toolB: "✅ Timeline editor" },
      { feature: "API Access", toolA: "✅ From Starter", toolB: "✅ Enterprise only" },
      { feature: "Slide Sync", toolA: "❌", toolB: "✅" },
      { feature: "Background Music", toolA: "❌", toolB: "✅" },
      { feature: "Unlimited Plan", toolA: "❌ (credit-based)", toolB: "✅ Enterprise" },
    ],
    affiliateUrlA: "https://try.elevenlabs.io/wm6bdi8z8jza",
    affiliateUrlB: "https://get.murf.ai/rbobu1iktka4",
  },
  {
    slug: "elevenlabs-vs-playht",
    title: "ElevenLabs vs PlayHT (2026): Quality vs Value",
    metaTitle: "ElevenLabs vs PlayHT 2026 — Which AI Voice Tool Wins?",
    metaDescription:
      "ElevenLabs vs PlayHT: we compare pricing, voice quality, cloning, and API features. Find out which is worth your money in 2026.",
    toolAName: "ElevenLabs",
    toolBName: "PlayHT",
    toolASlug: "elevenlabs",
    toolBSlug: "playht",
    winner: "A",
    verdict:
      "ElevenLabs still leads on voice quality, particularly on complex emotional content and professional voice cloning. But PlayHT's unlimited pricing model and significantly improved voice quality make it the better choice for budget-conscious creators producing high volume content.",
    featureRows: [
      { feature: "Voice Naturalness", toolA: "⭐⭐⭐⭐⭐ Best-in-class", toolB: "⭐⭐⭐⭐ Closing the gap" },
      { feature: "Voice Cloning", toolA: "✅ Instant + Professional", toolB: "✅ Instant + Advanced" },
      { feature: "Free Tier", toolA: "10,000 chars/mo", toolB: "12,500 chars/mo" },
      { feature: "Entry Paid Plan", toolA: "$5/mo (30,000 chars)", toolB: "$31.20/mo (Unlimited)" },
      { feature: "Mid Plan", toolA: "$22/mo (100,000 chars)", toolB: "$49/mo (Unlimited Ultra)" },
      { feature: "Languages", toolA: "32+ languages", toolB: "140+ languages" },
      { feature: "Unlimited Option", toolA: "❌", toolB: "✅ Creator plan" },
      { feature: "API Access", toolA: "✅ From Starter", toolB: "✅ From Creator" },
      { feature: "Long-form Editor", toolA: "✅ Projects", toolB: "⚠️ Basic" },
      { feature: "Team Features", toolA: "❌", toolB: "❌" },
      { feature: "Voice Library", toolA: "1,000+ voices", toolB: "900+ voices" },
      { feature: "Ultra-Realistic Model", toolA: "✅ Multilingual v2", toolB: "✅ PlayHT 2.0" },
    ],
    affiliateUrlA: "https://try.elevenlabs.io/wm6bdi8z8jza",
    affiliateUrlB: "#affiliate", // TODO: replace with real PlayHT affiliate URL
  },
  {
    slug: "elevenlabs-vs-descript",
    title: "ElevenLabs vs Descript (2026): Voice Generation vs Editing Workflow",
    metaTitle: "ElevenLabs vs Descript 2026 — Which Is Right for Your Content Workflow?",
    metaDescription:
      "ElevenLabs or Descript? They solve different problems — but many creators consider both. We compare voice quality, editing workflow, pricing, and use cases side by side.",
    toolAName: "ElevenLabs",
    toolBName: "Descript",
    toolASlug: "elevenlabs",
    toolBSlug: "descript",
    winner: "tie",
    verdict:
      "ElevenLabs and Descript are complementary tools that serve different primary needs. ElevenLabs is for generating voice audio from text at the highest quality. Descript is for editing recorded audio and video using transcript editing, with AI voice as a fill-in feature. The best workflow often uses both together.",
    featureRows: [
      { feature: "Generate narration from text", toolA: "✅ Core feature", toolB: "⚠️ Via Overdub only" },
      { feature: "AI voice quality", toolA: "⭐⭐⭐⭐⭐ Best-in-class", toolB: "⭐⭐⭐ Adequate for corrections" },
      { feature: "Transcript-based editing", toolA: "❌", toolB: "✅ Core feature" },
      { feature: "Filler word removal", toolA: "❌", toolB: "✅ Automatic" },
      { feature: "Video editing", toolA: "❌", toolB: "✅ Full timeline editor" },
      { feature: "Screen recording", toolA: "❌", toolB: "✅" },
      { feature: "Voice cloning for corrections", toolA: "✅ Higher quality", toolB: "✅ Built for corrections" },
      { feature: "Long-form narration editor", toolA: "✅ Projects feature", toolB: "⚠️ Not designed for TTS workflow" },
      { feature: "Entry paid plan", toolA: "$5/mo", toolB: "$12/mo" },
      { feature: "API access", toolA: "✅ From Starter", toolB: "⚠️ Limited" },
      { feature: "Team collaboration", toolA: "❌", toolB: "✅ Creator and above" },
    ],
    affiliateUrlA: "https://try.elevenlabs.io/wm6bdi8z8jza",
    affiliateUrlB: "#affiliate", // TODO: replace with real Descript affiliate URL
  },
  {
    slug: "elevenlabs-vs-free-tools",
    title: "ElevenLabs vs Free TTS Tools (2026): Is the Quality Gap Worth Paying For?",
    metaTitle: "ElevenLabs vs Free TTS Tools 2026 — Is the Paid Version Worth It?",
    metaDescription:
      "How much better is ElevenLabs than free TTS tools? We compare ElevenLabs against Google TTS, Amazon Polly, and OpenAI TTS to see if the quality gap justifies the price.",
    toolAName: "ElevenLabs",
    toolBName: "Free TTS (Google/Polly/OpenAI)",
    toolASlug: "elevenlabs",
    toolBSlug: "elevenlabs",
    winner: "A",
    verdict:
      "ElevenLabs is dramatically better than free TTS alternatives on voice naturalness, prosody, and emotional range. The quality gap is not marginal — it's the difference between audio that sounds AI-generated and audio that sounds human. For content where quality matters to your audience, ElevenLabs' paid plans are worth the cost. For developer testing and basic accessibility features, free tools are adequate.",
    featureRows: [
      { feature: "Voice naturalness", toolA: "⭐⭐⭐⭐⭐ Best-in-class", toolB: "⭐⭐ Clearly robotic" },
      { feature: "Prosody & emotion", toolA: "✅ Natural variation", toolB: "❌ Flat delivery" },
      { feature: "Free tier available", toolA: "✅ 10,000 chars/mo", toolB: "✅ Large free allowances" },
      { feature: "Entry paid plan", toolA: "$5/mo", toolB: "Pay-per-use after free tier" },
      { feature: "Languages", toolA: "32+ high quality", toolB: "100+ but low quality" },
      { feature: "Voice cloning", toolA: "✅ Instant + Professional", toolB: "❌ Not available" },
      { feature: "API access", toolA: "✅ From Starter", toolB: "✅ Native APIs" },
      { feature: "Voice library", toolA: "1,000+ human-quality voices", toolB: "Dozens of robotic voices" },
      { feature: "Projects / long-form editing", toolA: "✅", toolB: "❌" },
      { feature: "Commercial use", toolA: "✅ All paid plans", toolB: "✅ With attribution/terms" },
    ],
    affiliateUrlA: "https://try.elevenlabs.io/wm6bdi8z8jza",
    affiliateUrlB: "#affiliate",
  },
  {
    slug: "murf-vs-lovo",
    title: "Murf AI vs LOVO (2026): Which Mid-Tier Voice Tool Is Right for You?",
    metaTitle: "Murf vs LOVO AI 2026 — Side-by-Side Comparison for Content Creators",
    metaDescription:
      "Murf AI or LOVO AI? Both are mid-tier AI voice tools with different strengths. We compare voice quality, features, pricing, and use cases to help you choose.",
    toolAName: "Murf AI",
    toolBName: "LOVO AI",
    toolASlug: "murf",
    toolBSlug: "lovo",
    winner: "A",
    verdict:
      "Murf AI is the stronger choice for teams and e-learning creators who need collaboration features and slide sync. LOVO is the better choice for solo creators who want video editing included in a single tool at a lower entry price. Neither matches ElevenLabs on voice quality, but both serve their target use cases well.",
    featureRows: [
      { feature: "Voice naturalness", toolA: "⭐⭐⭐⭐ Professional, polished", toolB: "⭐⭐⭐ Good but inconsistent" },
      { feature: "Voice library", toolA: "120+ voices", toolB: "500+ voices" },
      { feature: "Languages", toolA: "20+ languages", toolB: "25+ languages" },
      { feature: "Team collaboration", toolA: "✅ Pro and above", toolB: "❌ Not available" },
      { feature: "Slide sync", toolA: "✅ Unique feature", toolB: "❌" },
      { feature: "Built-in video editor", toolA: "✅ Basic", toolB: "✅ More capable" },
      { feature: "Voice cloning", toolA: "⚠️ Basic/beta", toolB: "⚠️ Limited quality" },
      { feature: "Free tier", toolA: "10 mins/mo (watermarked)", toolB: "300 words/mo (watermarked)" },
      { feature: "Entry paid plan", toolA: "$19/mo", toolB: "$19/mo" },
      { feature: "Mid plan", toolA: "$26/mo (48 hrs/yr)", toolB: "$48/mo (unlimited)" },
      { feature: "API access", toolA: "Enterprise only", toolB: "⚠️ Limited" },
    ],
    affiliateUrlA: "https://get.murf.ai/rbobu1iktka4",
    affiliateUrlB: "#affiliate", // TODO: replace with real LOVO affiliate URL
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllComparisons(): Comparison[] {
  return comparisons;
}
