import type { Guide } from "./types";

export const guides: Guide[] = [
  {
    slug: "elevenlabs-tutorial-beginners",
    title: "ElevenLabs Tutorial for Beginners: From Signup to First Audio",
    metaTitle: "ElevenLabs Beginner Tutorial (2026) — Step-by-Step Setup Guide",
    metaDescription:
      "New to ElevenLabs? This step-by-step guide walks you through account setup, choosing a voice, generating audio, and getting your first download.",
    intro:
      "ElevenLabs is one of the more intuitive AI tools available, but there are a few things that aren't obvious when you first sign up. This guide walks you through everything from account creation to your first professional-quality audio export.",
    updatedAt: "April 2026",
    sections: [
      {
        id: "step-1-signup",
        heading: "Step 1: Create Your Account",
        content: `<p>Go to elevenlabs.io and click Sign Up. You can register with Google, GitHub, or an email address. Once registered, you're automatically on the free plan — 10,000 characters per month, no credit card required.</p>
<p>The first thing you'll see is the dashboard. The main navigation on the left has four key sections: Speech, which is the basic text-to-speech generator; Projects, which is the long-form narration editor; Voices, which is your voice library; and Studio, which has additional audio tools. For this tutorial, we're starting with Speech.</p>`,
      },
      {
        id: "step-2-choose-voice",
        heading: "Step 2: Choose a Voice",
        content: `<p>Click on the voice selector dropdown in the Speech interface. You'll see the pre-made voice library, which contains over a thousand options. The interface lets you filter by gender, age, accent, and use case. Before you commit, use the preview button to hear a short sample of each voice.</p>
<p>For most general-purpose content, the following voices consistently perform well: Rachel (American English, warm and natural), Josh (American English, authoritative), Callum (British English, professional), and Sarah (American English, friendly). For voiceover work, Charlotte (British English) and Liam (American English) are strong choices.</p>
<p>Don't spend too long choosing on your first session — pick one and generate something. You can always come back and try different voices once you understand how the generation process works.</p>`,
      },
      {
        id: "step-3-generate",
        heading: "Step 3: Generate Your First Audio",
        content: `<p>Type or paste your text into the text field. The character counter shows you how many characters you're about to use. Click Generate. For most texts under 500 characters, generation takes 2–4 seconds. Longer texts take proportionally longer.</p>
<p>When generation completes, hit play in the audio player. If it sounds good, click the download button (arrow icon) to save the MP3. If something sounds off — a word is mispronounced, the pacing is wrong, the emotion doesn't match — don't download it yet. Regenerate. The same text will produce slightly different results each time. Two or three regenerations usually produces one that's clearly better than the others.</p>
<p>A note on character consumption: regeneration uses characters each time. If you're on the free tier, be selective about what you regenerate. On a paid plan, regeneration is cheap enough that you should always generate 2–3 versions of important content and pick the best.</p>`,
      },
      {
        id: "step-4-settings",
        heading: "Step 4: Adjust Voice Settings",
        content: `<p>Click the settings icon next to the voice selector to see the voice settings panel. The key controls are Stability, Similarity Boost, and Style Exaggeration.</p>
<p><strong>Stability</strong> controls how consistent the voice is between generations. Lower stability means more variation and expressiveness; higher stability means more consistent but potentially flat delivery. For conversational content, a stability setting around 30–50% tends to work well. For corporate or educational content where consistency matters, 60–80% is safer.</p>
<p><strong>Similarity Boost</strong> controls how closely the output matches the original voice characteristics. For pre-made voices, keep this at 75% or above. For cloned voices, higher similarity boost helps preserve the voice's unique characteristics.</p>
<p><strong>Style Exaggeration</strong> amplifies the expressive characteristics of the voice. This is off by default. For dramatic content, increasing it to 20–40% can add punch. For professional narration, leaving it at 0 usually produces cleaner results.</p>`,
      },
      {
        id: "step-5-projects",
        heading: "Step 5: Use Projects for Long-Form Content",
        content: `<p>The Speech interface is good for individual clips, but for anything longer than a few paragraphs — a video script, a course module, a chapter — you want the Projects feature. This is only available on Creator tier and above.</p>
<p>In Projects, paste your full text. ElevenLabs breaks it into paragraphs. You can assign different voices to different sections (useful for multi-speaker content), regenerate individual paragraphs without affecting others, and then export the whole thing as a single audio file. This workflow is substantially faster than managing individual clips from the Speech interface.</p>`,
      },
    ],
  },
  {
    slug: "elevenlabs-credits-explained",
    title: "ElevenLabs Credits Explained: How to Make the Most of Every Character",
    metaTitle: "ElevenLabs Credits & Characters Explained — Plan Comparison Guide",
    metaDescription:
      "Confused by ElevenLabs' character-based credit system? We explain how it works, which plan you actually need, and how to avoid burning through your allowance.",
    intro:
      "ElevenLabs measures consumption in characters rather than words, minutes, or credits. This guide explains exactly how the system works, how to calculate what you need, and how to choose the right plan.",
    updatedAt: "April 2026",
    sections: [
      {
        id: "how-characters-work",
        heading: "How the Character System Works",
        content: `<p>Every plan includes a monthly character allowance. Each character in your text — including spaces and punctuation — counts toward your allowance. A 500-character text costs 500 characters, regardless of whether it generates 20 seconds or 40 seconds of audio (pace affects duration, not character cost).</p>
<p>Characters reset at the start of each billing cycle. They don't roll over. If you have 5,000 characters left at the end of the month, they disappear. This makes it important to size your plan correctly — you don't want to leave large amounts unused, and you definitely don't want to run out mid-project.</p>
<p>Regenerating audio costs characters again. If you generate a 1,000-character text and regenerate it twice, you've used 3,000 characters.</p>`,
      },
      {
        id: "character-conversion",
        heading: "Characters to Words to Minutes: The Conversion",
        content: `<p>Here's the practical conversion guide:</p>
<ul>
<li>1,000 characters ≈ 150–180 words</li>
<li>1,000 characters ≈ 60–90 seconds of audio at natural speaking pace</li>
<li>10,000 characters (free plan) ≈ 1,500–1,800 words ≈ 10–15 minutes of audio</li>
<li>30,000 characters (Starter) ≈ 4,500–5,400 words ≈ 30–45 minutes of audio</li>
<li>100,000 characters (Creator) ≈ 15,000–18,000 words ≈ 100–150 minutes of audio</li>
<li>500,000 characters (Pro) ≈ 75,000–90,000 words ≈ 8–12 hours of audio</li>
</ul>
<p>These are approximate ranges. Scripts with many short words use more characters per second of audio; scripts with longer words produce more audio per character. Poetry and dialogue tend to use characters less efficiently than flowing prose.</p>`,
      },
      {
        id: "which-plan",
        heading: "Which Plan Do You Actually Need?",
        content: `<p>The honest answer depends on what you're making and how often.</p>
<p><strong>Free tier</strong>: Good for evaluation and occasional personal use. Produces about 10 minutes of final audio per month. Not viable for regular content production.</p>
<p><strong>Starter ($5/mo)</strong>: Best for hobbyists and occasional creators. Produces roughly 30–45 minutes of final audio per month. If you're experimenting or producing one short video per week, this is enough.</p>
<p><strong>Creator ($22/mo)</strong>: The sweet spot for working creators. Produces 100–150 minutes of final audio per month — enough for 2–4 video scripts, a weekly podcast episode, or a small e-learning module. This is where most individual content creators should start.</p>
<p><strong>Pro ($99/mo)</strong>: For high-volume creators: daily YouTube publishing, large course libraries, or multiple concurrent projects. Also appropriate for small development teams with moderate API usage.</p>
<p><strong>Scale ($330/mo)</strong>: For agencies, development teams with significant API traffic, or businesses building voice features into production products.</p>`,
      },
      {
        id: "tips",
        heading: "How to Make Your Characters Go Further",
        content: `<p>A few practical approaches to getting more from your character allowance:</p>
<ul>
<li><strong>Write tighter scripts.</strong> Remove filler words and redundant phrases before generating. You're not charged for the audio duration, you're charged for the text length. Editing your script for concision reduces character consumption directly.</li>
<li><strong>Use the regeneration wisely.</strong> For the bulk of your text, one generation is usually fine. Reserve your regeneration budget for the sentences that really matter — the opening, key transitions, the closing call to action.</li>
<li><strong>Test voices on short samples first.</strong> Before generating a 2,000-character script, test your voice on 200 characters. A voice that sounds good on a short sample may not work for your specific content.</li>
<li><strong>Save your best outputs.</strong> Once you generate audio you're happy with, download and back it up. Regenerating a good result that you forgot to download costs characters unnecessarily.</li>
</ul>`,
      },
    ],
  },
  {
    slug: "elevenlabs-free-plan-limits",
    title: "ElevenLabs Free Plan: The Complete Limits Guide",
    metaTitle: "ElevenLabs Free Plan Limits 2026 — What You Can and Can't Do",
    metaDescription:
      "A complete breakdown of ElevenLabs' free plan: character limits, voice cloning restrictions, commercial use rules, quality differences vs paid, and when to upgrade.",
    intro:
      "The ElevenLabs free plan gives you 10,000 characters per month with access to the full voice library and basic cloning. Understanding its real limits helps you decide whether it covers your use case or whether an upgrade makes sense.",
    updatedAt: "April 2026",
    sections: [
      {
        id: "character-limit",
        heading: "The 10,000 Character Monthly Limit",
        content: `<p>10,000 characters per month converts to approximately 1,500–1,800 words of text, or roughly 10–12 minutes of finished audio at natural speaking pace. This limit resets on your billing date each month — unused characters expire and do not roll over.</p>
<p>For evaluation purposes, 10,000 characters is sufficient to form a real opinion about ElevenLabs' voice quality. For regular content production, it's typically not enough — a single 10-minute YouTube video script runs about 9,000 characters, leaving almost nothing for additional content or regeneration that month.</p>`,
      },
      {
        id: "quality-differences",
        heading: "Quality Differences vs Paid Plans",
        content: `<p>Free plan generation uses a different model configuration than paid plans — specifically, the generation quality setting is lower on the free tier. In practice, this means the output sounds slightly less natural and has somewhat less dynamic range in emotional expression compared to paid tier output with the same voice and settings.</p>
<p>The difference is most noticeable on longer passages and on voices with more subtle characteristics. For a 30-second test clip, many users won't hear a meaningful difference. For a 5-minute narration piece, the paid tier quality is noticeably better on critical listening.</p>`,
      },
      {
        id: "commercial-use",
        heading: "Commercial Use on the Free Plan",
        content: `<p>Commercial use is permitted on the free plan, but requires attribution to ElevenLabs as the generation tool. In practice, this means disclosing that your audio was AI-generated by ElevenLabs in the content itself or its description.</p>
<p>Paid plans from Starter ($5/month) upward remove the attribution requirement and grant full commercial use rights. If commercial use without attribution disclosure is important to your use case, the $5/month Starter plan is the minimum viable option.</p>`,
      },
      {
        id: "features-not-available",
        heading: "Features Not Available on Free",
        content: `<p>The Projects feature for long-form narration editing is not available on the free plan. API access is not available on the free plan. Higher quality audio generation (available from Creator upward) is not available on the free plan. Professional Voice Cloning is not available on the free plan at any level.</p>
<p>The free plan is limited to 3 custom voice slots, compared to 10 on Starter and 30 on Creator. This isn't a significant limitation for most evaluation use cases, but does constrain experimentation with multiple voice clones.</p>`,
      },
    ],
  },
  {
    slug: "elevenlabs-api-guide",
    title: "ElevenLabs API Guide: Getting Started for Developers",
    metaTitle: "ElevenLabs API Guide 2026 — Setup, Endpoints, Rate Limits & Code Concepts",
    metaDescription:
      "A practical guide to the ElevenLabs API for developers: authentication, key endpoints, rate limits by plan, streaming setup, and how to choose the right plan for your project.",
    intro:
      "The ElevenLabs API is one of the most developer-friendly voice generation interfaces available — well-documented, with robust SDK support and a growing ecosystem of integrations. This guide covers what developers need to know to get started and scale effectively.",
    updatedAt: "April 2026",
    sections: [
      {
        id: "authentication",
        heading: "Authentication and Setup",
        content: `<p>ElevenLabs API uses API key authentication. Generate your key in the Profile Settings section of the ElevenLabs dashboard. Include it in all API requests as an xi-api-key header. Key format: a long alphanumeric string that you should treat as a secret credential — don't commit it to public repositories or expose it in client-side code.</p>
<p>Official SDKs are available for Python and JavaScript/TypeScript from ElevenLabs' GitHub repository. For Python: pip install elevenlabs. For JavaScript: npm install elevenlabs. The SDKs wrap the REST API with typed interfaces and handle authentication and streaming automatically.</p>`,
      },
      {
        id: "core-endpoints",
        heading: "Core API Endpoints",
        content: `<p>The text-to-speech endpoint is the one you'll use most: POST /v1/text-to-speech/{voice_id}. The request body includes text (your input script), model_id (the generation model — use "eleven_multilingual_v2" for best quality), and voice_settings (stability, similarity_boost, style values). The response is binary audio data in your requested format.</p>
<p>The streaming endpoint at /v1/text-to-speech/{voice_id}/stream uses identical parameters and returns a chunked streaming response. Use this for real-time applications where first-audio latency matters. The voices list endpoint (GET /v1/voices) returns all available voices including your custom cloned voices, which is useful for letting users select voices programmatically in your application.</p>`,
      },
      {
        id: "rate-limits-by-plan",
        heading: "Rate Limits by Plan",
        content: `<p>Free plan: 2 concurrent requests, limited RPM — unsuitable for production. Starter ($5/mo): 5 concurrent requests, significantly higher RPM. Creator ($22/mo): suitable for small-scale production applications with moderate concurrent users. Pro ($99/mo): comfortable for mid-scale applications. Scale ($330/mo): designed for high-throughput production with dedicated limits.</p>
<p>All plans draw from the same monthly character pool whether usage comes via API or the web interface. There's no separate API-only credit pool — your API calls consume from your plan's monthly allowance at the same rate as web interface generation.</p>`,
      },
      {
        id: "cost-modelling",
        heading: "Modelling API Costs at Scale",
        content: `<p>For applications where voice generation volume scales with user behaviour, character consumption can grow quickly in ways that are hard to predict. A safe approach: calculate your expected average characters per API call, estimate your daily API call volume at expected user load, and multiply by 30 to get monthly character consumption. Compare to your plan allowance and add a 20% buffer.</p>
<p>For applications with unpredictable usage patterns, PlayHT's unlimited API plan may offer better financial predictability than ElevenLabs' character-based model. The right choice depends on whether voice quality or cost predictability is the higher priority for your application.</p>`,
      },
    ],
  },
  {
    slug: "ai-voice-workflow-with-descript",
    title: "AI Voice Workflow With Descript: The Complete Production Guide",
    metaTitle: "ElevenLabs + Descript Workflow Guide 2026 — Podcast & Video Production",
    metaDescription:
      "How to combine ElevenLabs for voice generation and Descript for editing into a seamless content production workflow for podcasts, YouTube, and course content.",
    intro:
      "ElevenLabs generates excellent AI voice. Descript provides powerful transcript-based audio and video editing. Together they create a production workflow that's faster and more flexible than either tool alone — here's how to build it.",
    updatedAt: "April 2026",
    sections: [
      {
        id: "workflow-overview",
        heading: "The Core Workflow",
        content: `<p>The fundamental workflow: write and finalise your script in ElevenLabs Projects, generate all audio, listen and regenerate problem sentences, export as a high-quality audio file. Import into Descript, use transcript editing to make structural changes and trims, flag sentences needing regeneration, return to ElevenLabs to regenerate flagged sentences, import those as replacement clips in Descript's timeline, then export the final produced audio or video.</p>
<p>The advantage of this two-tool workflow over using either tool alone: ElevenLabs gives you better voice quality than Descript's built-in Overdub, and Descript gives you better structural editing capability than ElevenLabs' Projects feature. The combination produces better results than either platform's native workflow for most content types.</p>`,
      },
      {
        id: "setup",
        heading: "Setting Up the Workflow",
        content: `<p>Accounts needed: ElevenLabs Creator plan or above (for Projects feature, $22/month) and Descript Hobbyist or Creator plan (for Overdub and full editing features, $12–24/month). Total workflow cost: $34–46/month for two complementary tools. For creators producing regular content, this investment typically pays back in reduced production time within the first month.</p>
<p>Voice setup: configure your ElevenLabs voice settings (voice selection, stability, similarity) before beginning any production work. Note the exact settings — you'll use these consistently across all content to maintain voice identity. Create a settings template or note the values explicitly so you can reproduce them in future sessions.</p>`,
      },
      {
        id: "podcast-workflow",
        heading: "Podcast-Specific Workflow",
        content: `<p>For podcast production using this workflow: script each episode section (intro, main content, outros, sponsor reads) as separate Projects in ElevenLabs. Generate and refine each section. Export all sections as separate audio files — this gives you more flexibility in Descript's timeline for reordering or replacing specific sections.</p>
<p>In Descript, create a new composition and import all audio files. Descript generates transcripts for each. Use the multi-track timeline to arrange sections in order. Apply automatic filler word removal (even though the AI audio won't have filler words, any recorded segments you add — interviews, co-host recordings — will benefit). Use transcript editing to make final timing adjustments. Export as MP3 at your podcast's required bitrate.</p>`,
      },
    ],
  },
  {
    slug: "how-to-clone-your-voice-ai",
    title: "How to Clone Your Voice With AI: A Practical Step-by-Step Guide",
    metaTitle: "How to Clone Your Voice With AI 2026 — ElevenLabs Step-by-Step",
    metaDescription:
      "Step-by-step guide to cloning your voice with ElevenLabs: what to record, equipment requirements, upload process, quality settings, and how to get the best results.",
    intro:
      "Cloning your voice with AI is more accessible than most people expect, and the results with a good source recording are genuinely impressive. This guide covers the complete process from first recording to production-ready voice clone.",
    updatedAt: "April 2026",
    sections: [
      {
        id: "which-type",
        heading: "Instant vs Professional Cloning: Choose First",
        content: `<p>Instant Voice Cloning needs just 1 minute of audio and is available on ElevenLabs Starter ($5/month). It captures your voice broadly — pitch, general timbre — and works for low-stakes and experimental use. Professional Voice Cloning needs 30–180 minutes of audio and is an add-on at Creator tier. It produces dramatically higher quality output that holds up to public-facing content and critical listening.</p>
<p>For anything you'll publish and that needs to sound convincingly like you, Professional Voice Cloning is the right choice. For testing and internal use, Instant Cloning is sufficient. Don't judge Professional Cloning quality by what you see from Instant — they're genuinely different products.</p>`,
      },
      {
        id: "recording-setup",
        heading: "Recording Setup and Requirements",
        content: `<p>Microphone: a USB condenser in the $50–$150 range (Blue Snowball iCE, Audio-Technica AT2020 USB, Rode NT-USB Mini) is sufficient. Built-in laptop microphones and phone microphones are not adequate — the frequency response is too narrow and background noise rejection is poor.</p>
<p>Room: a small, furnished room (bedroom with soft furnishings, wardrobe/closet) is better than a larger empty space. Avoid rooms with hard parallel walls that create echo. Record during quiet hours if you have street or building noise. Turn off HVAC and fans during recording if possible.</p>
<p>Content to record: read a variety of text — factual sentences, questions, conversational exchange, emotional content. Variety produces a more versatile clone. For Professional Cloning, record in multiple sessions on different days to capture natural voice variation rather than one long fatigued session.</p>`,
      },
      {
        id: "upload-and-train",
        heading: "The Upload and Training Process",
        content: `<p>In your ElevenLabs dashboard, go to Voices → Add Voice → Voice Cloning. Name your voice, upload your audio files (MP3 or WAV), and confirm the consent declaration that you have the right to clone the voice. For Instant Cloning, processing takes 2–5 minutes. For Professional Cloning, allow 24–48 hours for larger audio collections.</p>
<p>After training, test the clone with a variety of content immediately. Listen for: systematic mispronunciations, weaknesses on question versus statement delivery, emotional range accuracy. Any consistent weaknesses in the training data will show in the clone. If you identify gaps, consider recording additional source material focused on the missing content types and retraining.</p>`,
      },
      {
        id: "quality-tips",
        heading: "Getting the Best Quality From Your Clone",
        content: `<p>Voice settings: start with Similarity Boost at 80–85% and Stability at 50–60%. These defaults preserve your voice identity while allowing natural variation. Experiment with these settings on a variety of test content before committing to production values.</p>
<p>Script style: write scripts in a register consistent with how you naturally speak. Your clone will perform best on content similar to what you recorded as training data. If your training data was all formal speaking and you try to generate casual conversational content, the results will feel mismatched.</p>
<p>Use Projects for anything over 500 words — the segment-level regeneration allows you to fix problem sentences without regenerating the surrounding audio, which is essential for maintaining consistent quality across long-form clone output.</p>`,
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}
