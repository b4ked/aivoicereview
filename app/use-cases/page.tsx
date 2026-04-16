import type { Metadata } from "next";
import Link from "next/link";
import { getAllUseCases } from "@/lib/use-cases";

export const metadata: Metadata = {
  title: "AI Voice Use Cases — Podcasters, YouTubers, E-Learning & More | AI Voice Review",
  description:
    "Find the right AI voice tool for your specific use case. We cover podcasting, YouTube narration, e-learning, voice cloning, audiobooks, and small business.",
  openGraph: {
    title: "AI Voice Use Cases — Find the Right Tool for Your Workflow",
    description:
      "Use-case guides for podcasters, YouTubers, course creators, and more. Matched tool recommendations from real testing.",
    type: "website",
  },
};

const useCaseIcons: Record<string, string> = {
  "ai-voice-for-podcasters": "🎙️",
  "ai-voice-for-youtube": "▶️",
  "ai-voice-cloning-guide": "🧬",
  "ai-voice-for-elearning": "📚",
  "ai-voice-for-audiobooks": "🎧",
  "ai-voice-for-small-business": "💼",
};

export default function UseCasesPage() {
  const useCases = getAllUseCases();

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>
              Home
            </a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>Use Cases</span>
          </nav>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 16px",
              letterSpacing: "-0.03em",
            }}
          >
            AI Voice{" "}
            <span style={{ color: "#3b82f6" }}>Use Cases</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              margin: 0,
              lineHeight: 1.6,
              maxWidth: "560px",
            }}
          >
            Not sure which tool fits your workflow? Start here. Each guide covers
            the specific needs of your use case with matched tool recommendations.
          </p>
        </div>
      </div>

      {/* Use cases grid */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/use-cases/${useCase.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="usecase-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "32px", marginBottom: "14px" }}>
                  {useCaseIcons[useCase.slug] ?? "🔊"}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(124,58,237,0.1)",
                    color: "#7c3aed",
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Use Case
                </div>
                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.35,
                  }}
                >
                  {useCase.title}
                </h2>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: "13px",
                    color: "#64748b",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  {useCase.intro.slice(0, 130)}
                  {useCase.intro.length > 130 ? "…" : ""}
                </p>
                <span
                  style={{
                    color: "#3b82f6",
                    fontWeight: 600,
                    fontSize: "13px",
                  }}
                >
                  See recommendations →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .usecase-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          transition: border-color 0.15s, box-shadow 0.15s;
          cursor: pointer;
        }
        .usecase-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
}
