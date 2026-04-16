import type { Metadata } from "next";
import Link from "next/link";
import { getAllComparisons } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "AI Voice Generator Comparisons (2026) | AI Voice Review",
  description:
    "Side-by-side comparisons of the top AI voice tools. ElevenLabs vs Murf, ElevenLabs vs PlayHT, Murf vs LOVO, and more — with feature tables and honest verdicts.",
  openGraph: {
    title: "AI Voice Generator Comparisons (2026)",
    description:
      "Side-by-side feature comparisons of the leading AI voice tools. Find out which is right for your use case.",
    type: "website",
  },
};

function WinnerBadge({ winner, toolAName, toolBName }: { winner: string; toolAName: string; toolBName: string }) {
  if (winner === "tie") {
    return (
      <span
        style={{
          display: "inline-block",
          background: "#f1f5f9",
          color: "#64748b",
          fontSize: "11px",
          fontWeight: 700,
          padding: "3px 10px",
          borderRadius: "20px",
          letterSpacing: "0.04em",
        }}
      >
        TIE
      </span>
    );
  }
  const winnerName = winner === "A" ? toolAName : toolBName;
  return (
    <span
      style={{
        display: "inline-block",
        background: "rgba(59,130,246,0.1)",
        color: "#2563eb",
        fontSize: "11px",
        fontWeight: 700,
        padding: "3px 10px",
        borderRadius: "20px",
        letterSpacing: "0.04em",
      }}
    >
      {winnerName} wins
    </span>
  );
}

export default function ComparePage() {
  const comparisons = getAllComparisons();

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
            <span style={{ color: "#94a3b8" }}>Compare</span>
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
            AI Voice Tool{" "}
            <span style={{ color: "#3b82f6" }}>Comparisons</span>
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
            Head-to-head comparisons with feature tables and honest verdicts.
            Find the right tool without reading every review.
          </p>
        </div>
      </div>

      {/* Comparisons list */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/compare/${comparison.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="hub-card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h2
                      style={{
                        margin: 0,
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1.3,
                      }}
                    >
                      {comparison.toolAName} vs {comparison.toolBName}
                    </h2>
                    <WinnerBadge
                      winner={comparison.winner}
                      toolAName={comparison.toolAName}
                      toolBName={comparison.toolBName}
                    />
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      color: "#64748b",
                      lineHeight: 1.6,
                    }}
                  >
                    {comparison.metaDescription}
                  </p>
                </div>
                <span
                  style={{
                    color: "#3b82f6",
                    fontWeight: 600,
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  See comparison →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Related links */}
        <div
          style={{
            marginTop: "48px",
            padding: "24px 28px",
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <h3
            style={{
              margin: "0 0 12px",
              fontSize: "14px",
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Not sure where to start?
          </h3>
          <p style={{ margin: "0 0 16px", fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>
            Start with our ranked list of the best AI voice generators — it covers all the
            major tools with use-case guidance.
          </p>
          <a
            href="/best-of/best-ai-voice-generator"
            style={{
              color: "#3b82f6",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            See top picks →
          </a>
        </div>
      </div>
      <style>{`
        .hub-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px 28px;
          transition: border-color 0.15s, box-shadow 0.15s;
          cursor: pointer;
        }
        .hub-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
}
