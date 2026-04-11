"use client";

import ReviewCard from "@/components/ReviewCard";
import type { Review } from "@/lib/types";
import type { Guide } from "@/lib/types";

interface HomepageInteractiveProps {
  reviews: Review[];
  guides: Guide[];
}

const useCaseTiles = [
  { label: "Podcasters", emoji: "🎙️", href: "/use-cases/ai-voice-for-podcasters", desc: "Voice cloning & filler content" },
  { label: "YouTubers", emoji: "🎥", href: "/use-cases/ai-voice-for-youtube", desc: "Consistent narration at scale" },
  { label: "Voice Cloning", emoji: "🔊", href: "/use-cases/ai-voice-cloning-guide", desc: "What's actually possible in 2026" },
  { label: "Developers", emoji: "💻", href: "/reviews/elevenlabs#api-and-integrations", desc: "API & integration guide" },
];

const reviewExcerpts: Record<string, string> = {
  elevenlabs:
    "The gold standard for AI voice naturalness. ElevenLabs produces speech that consistently passes the human-or-AI test — but it comes at a price that scales with volume.",
  murf: "The best studio experience in the category. Murf's polished editor and team collaboration features make it the right choice for e-learning and corporate content teams.",
  playht:
    "The strongest value proposition in AI voice generation. An unlimited plan at $31/month removes the anxiety of character budgets — and the quality has caught up.",
};

export default function HomepageInteractive({ reviews, guides }: HomepageInteractiveProps) {
  return (
    <>
      {/* Quick nav strip */}
      <section
        style={{
          background: "#f8fafc",
          borderBottom: "1px solid #e2e8f0",
          padding: "0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Reviews", href: "/reviews/elevenlabs", emoji: "⭐" },
            { label: "Compare", href: "/compare/elevenlabs-vs-murf", emoji: "⚖️" },
            { label: "Use Cases", href: "/use-cases/ai-voice-for-podcasters", emoji: "🎯" },
            { label: "Guides", href: "/guides/elevenlabs-tutorial-beginners", emoji: "📖" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 24px",
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 600,
                borderBottom: "3px solid transparent",
              }}
              className="nav-strip-link"
            >
              <span>{item.emoji}</span>
              {item.label}
            </a>
          ))}
        </div>
      </section>

      {/* Featured reviews */}
      <section style={{ padding: "64px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "36px" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Featured Reviews
          </h2>
          <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
            Tested with real plans. Ranked by overall quality and value.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.slug}
              title={review.title}
              slug={review.slug}
              rating={review.rating.overall}
              excerpt={reviewExcerpts[review.slug] ?? review.verdict}
              affiliateUrl={review.affiliateUrl}
              updatedAt={review.updatedAt}
              badge={i === 0 ? "Top Pick" : i === 1 ? "Best Value" : undefined}
            />
          ))}
        </div>
      </section>

      {/* Use case finder */}
      <section
        style={{
          background: "#f8fafc",
          padding: "64px 24px",
          borderTop: "1px solid #e2e8f0",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "36px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#0f172a",
                margin: "0 0 8px",
                letterSpacing: "-0.02em",
              }}
            >
              What are you trying to do?
            </h2>
            <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
              Find the right tool for your specific use case.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {useCaseTiles.map((tile) => (
              <a
                key={tile.href}
                href={tile.href}
                className="use-case-tile"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "24px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{tile.emoji}</div>
                <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "15px", marginBottom: "4px" }}>
                  {tile.label}
                </div>
                <div style={{ fontSize: "13px", color: "#64748b" }}>{tile.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section style={{ padding: "64px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "36px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            Why trust our reviews?
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              emoji: "🧪",
              title: "We test with real credits",
              desc: "Every review is based on hands-on testing with paid plan credits — not demos or marketing materials.",
            },
            {
              emoji: "📅",
              title: "Updated regularly",
              desc: "AI voice tools change fast. We revisit and update reviews when pricing, features, or quality shifts.",
            },
            {
              emoji: "🚫",
              title: "No sponsored reviews",
              desc: "We earn through affiliate commissions, not sponsored placements. Our rankings reflect what we actually think.",
            },
          ].map((signal) => (
            <div
              key={signal.title}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "32px" }}>{signal.emoji}</span>
              <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#0f172a" }}>{signal.title}</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>{signal.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest guides */}
      <section
        style={{
          background: "#f8fafc",
          padding: "64px 24px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "36px" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#0f172a",
                margin: "0 0 8px",
                letterSpacing: "-0.02em",
              }}
            >
              Guides & Tutorials
            </h2>
            <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
              Step-by-step help for getting the most out of AI voice tools.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {guides.map((guide) => (
              <a
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="guide-card"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "24px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "#eff6ff",
                    color: "#3b82f6",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "4px",
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Guide
                </span>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.4,
                  }}
                >
                  {guide.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: "13px",
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {guide.intro.slice(0, 120)}...
                </p>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#3b82f6",
                    fontWeight: 600,
                  }}
                >
                  Read guide →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .nav-strip-link:hover {
          color: #3b82f6 !important;
          border-bottom-color: #3b82f6 !important;
        }
        .use-case-tile:hover {
          border-color: #93c5fd !important;
          box-shadow: 0 4px 12px rgba(59,130,246,0.1);
        }
        .guide-card:hover {
          border-color: #93c5fd !important;
          box-shadow: 0 4px 12px rgba(59,130,246,0.08);
        }
      `}</style>
    </>
  );
}
