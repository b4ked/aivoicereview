import type { UseCase } from "./types";

export const useCases: UseCase[] = [
  {
    slug: "ai-voice-for-podcasters",
    title: "AI Voice for Podcasters: The Complete 2026 Guide",
    metaTitle: "Best AI Voice Tools for Podcasters (2026) — Cloning, Fill-in & More",
    metaDescription:
      "Using AI voice for your podcast? We cover voice cloning for filler episodes, guest narration, and consistent delivery — plus which tools actually work.",
    intro:
      "AI voice generation has become genuinely useful for podcasters — not to replace real recordings, but to fill specific gaps: recreating your voice for sponsor reads, generating summaries in your voice, or producing content during weeks when recording isn't possible.",
    problem:
      "Podcasters face a consistent challenge: inconsistency. You get sick, you travel, you have weeks where recording just doesn't happen. Sponsor reads need to be recorded fresh. Show notes need narration. The gap between your publishing schedule and your recording capacity is real.",
    solution:
      "AI voice cloning solves the gap problem by creating a synthetic version of your voice from recorded samples. With a good clone, you can generate sponsor reads, episode summaries, and short-form content in your voice without sitting in front of a microphone. ElevenLabs' Professional Voice Cloning produces results good enough for most listeners. PlayHT's unlimited plan makes high-volume output economically viable.",
    recommendedSlugs: ["elevenlabs", "playht"],
  },
  {
    slug: "ai-voice-for-youtube",
    title: "AI Voice for YouTube: Generate Narration Without Recording",
    metaTitle: "Best AI Voice Generators for YouTube (2026) — Fast, Natural Narration",
    metaDescription:
      "Want consistent YouTube narration without recording every video? We break down which AI voice tools work for YouTube creators and how to get started.",
    intro:
      "YouTube creators increasingly use AI voice generation to produce consistent narration, reduce recording time, and publish more frequently. The technology has reached a point where most viewers won't notice the difference — if you choose the right tool and voice.",
    problem:
      "Recording narration for YouTube is time-consuming, requires a decent microphone setup, and produces inconsistent results if your environment or voice changes. Many creators lose hours to re-recording segments, fixing audio issues, and matching tone across videos.",
    solution:
      "AI voice generation eliminates the microphone dependency. Write your script, generate the narration, edit only the segments that need it, and export. ElevenLabs' Projects feature is particularly well-suited for YouTube workflows — it lets you edit individual sentences without regenerating full passages. For creators on a budget producing high volume, PlayHT's unlimited plan makes sense.",
    recommendedSlugs: ["elevenlabs", "playht", "murf"],
  },
  {
    slug: "ai-voice-cloning-guide",
    title: "AI Voice Cloning: What's Actually Possible in 2026",
    metaTitle: "AI Voice Cloning Guide 2026 — How It Works, Best Tools, Honest Limits",
    metaDescription:
      "AI voice cloning has changed fast. Here's what's genuinely possible in 2026, which tools do it best, and what the realistic limits are.",
    intro:
      "AI voice cloning — generating synthetic speech in a specific person's voice from recorded samples — has improved faster than almost any other AI capability in the past two years. Here's what's actually possible, what isn't, and how to use it responsibly.",
    problem:
      "Voice cloning is widely misunderstood. Marketing from AI companies often oversells the capability — 'clone your voice in 30 seconds!' — while underplaying the quality ceiling. In reality, there's a significant difference between an instant clone from a one-minute sample and a professional-grade clone trained on hours of clean audio.",
    solution:
      "Understanding the two tiers of voice cloning is the starting point. Instant cloning (ElevenLabs, PlayHT) works fast and produces passable results for internal use and experimentation. Professional cloning (ElevenLabs Professional Voice Cloning) requires more input audio and produces results that hold up to critical listening. For most content creators, the professional tier is what you actually want for public-facing content.",
    recommendedSlugs: ["elevenlabs", "playht"],
  },
  {
    slug: "ai-voice-for-elearning",
    title: "AI Voice for E-Learning: Which Tool Fits a Course Creator?",
    metaTitle: "Best AI Voice for E-Learning 2026 — Course Creator Guide",
    metaDescription:
      "Which AI voice tool is best for course creators and e-learning developers? We compare tools on consistency, workflow, pricing at scale, and export formats.",
    intro:
      "Course creators face specific AI voice challenges: consistent voice across 30–60 modules, easy re-recording when content changes, pricing that works at course-scale, and formats that export into Teachable, Thinkific, or SCORM-compliant packages.",
    problem:
      "Recording narration for e-learning is expensive and inflexible. Professional voice actors charge $150–400/hour. Recording yourself requires a quiet environment, consistent vocal quality, and hours of studio time per course. When content changes — and course content always changes — re-recording is costly and creates version control problems.",
    solution:
      "AI voice generation removes the recording bottleneck entirely. Write the script, generate the audio, update specific sentences when content changes without re-recording the full module. ElevenLabs' Projects feature makes surgical edits practical for long-form module audio. Murf's team collaboration features serve instructional design teams building courses together. For independent creators, ElevenLabs gives the better voice quality. For teams, Murf's workflow features are the stronger choice.",
    recommendedSlugs: ["elevenlabs", "murf"],
  },
  {
    slug: "ai-voice-for-audiobooks",
    title: "AI Voice for Audiobooks: Can AI Narration Actually Work?",
    metaTitle: "AI Voice for Audiobooks 2026 — Quality, Workflow & Platform Comparison",
    metaDescription:
      "AI narration for audiobooks is now practically viable. We cover which tools work, the realistic quality bar, the ACX/Findaway submission requirements, and the workflow for a full book.",
    intro:
      "AI audiobook narration has crossed a threshold in 2026 — ElevenLabs' Professional Voice Cloning and Projects feature combination produces output that many listeners will not identify as AI-generated. The economics are compelling: a professional human narrator costs $250–400/finished hour. An AI-narrated book on ElevenLabs Pro costs roughly $1–2/finished hour at the character math.",
    problem:
      "Professional audiobook narration is expensive and slow. Finding and booking a good narrator, directing recording sessions, managing file handoffs, and handling corrections for a 10-hour audiobook takes weeks and costs thousands of dollars. For authors publishing through ACX or Findaway, the economics often don't work unless the book is expected to sell thousands of copies.",
    solution:
      "AI narration makes the economics work for backlist titles, niche non-fiction, and author-narrated fiction where the author wants to use their own voice but can't block out weeks for studio recording. ElevenLabs Projects handles chapter-level long-form narration with surgical sentence-level regeneration. Professional Voice Cloning creates an author's voice from existing recordings. The workflow: clone your voice from available material (podcasts, previous recordings, dedicated recording sessions), produce chapters in Projects, export in formats compatible with ACX and Findaway submission requirements.",
    recommendedSlugs: ["elevenlabs"],
  },
  {
    slug: "ai-voice-for-small-business",
    title: "AI Voice for Small Business: Practical Applications in 2026",
    metaTitle: "AI Voice for Small Business 2026 — Marketing, Training & Customer Communication",
    metaDescription:
      "How small businesses are using AI voice in 2026: explainer videos, training content, customer service, and marketing without hiring voice actors or recording studios.",
    intro:
      "Small businesses have historically been priced out of professional voice production. Recording studio time, voice talent fees, and audio engineering costs make a set of professional marketing videos a significant investment. AI voice generation changes this equation — not by matching the ceiling of professional production, but by raising the floor of what's achievable without specialist resources.",
    problem:
      "Small businesses need consistent, professional-sounding audio across marketing videos, training content, customer service recordings, and social media — but lack the budget for professional production and the equipment and skills for self-recording at a professional level.",
    solution:
      "AI voice generation provides professional-quality narration from written scripts at a fraction of traditional production costs. For explainer videos and product demonstrations, ElevenLabs or LOVO (with its built-in video editor) removes the need for a recording setup entirely. For training content, Murf's slide sync feature allows voiceover to be generated directly alongside presentation slides. For customer service IVR recordings and phone system prompts, ElevenLabs or PlayHT generate consistently on-brand audio that can be updated without rebooking a recording session.",
    recommendedSlugs: ["elevenlabs", "murf", "lovo"],
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}

export function getAllUseCases(): UseCase[] {
  return useCases;
}
