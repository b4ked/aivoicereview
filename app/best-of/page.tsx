import type { Metadata } from "next";
import Link from "next/link";
import { getAllBestOfs } from "@/lib/best-of";
import { getReview } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Best AI Voice Generators — Ranked Lists for Every Use Case | AI Voice Review",
  description:
    "Ranked lists of the best AI voice tools by use case and budget. Best overall, best free, best for podcasters, best for dubbing — all based on real testing.",
  openGraph: {
    title: "Best AI Voice Generators — Ranked for Every Use Case",
    description:
      "Find the best AI voice tool for your specific needs. Ranked lists based on hands-on testing.",
    type: "website",
  },
};

export default function BestOfPage() {
  const bestOfs = getAllBestOfs();

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
            <span style={{ color: "#94a3b8" }}>Best Of</span>
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
            Best AI Voice{" "}
            <span style={{ color: "#3b82f6" }}>Tools</span>
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
            Ranked lists for every use case, budget, and workflow. All rankings
            are based on independent hands-on testing — no sponsored placements.
          </p>
        </div>
      </div>

      {/* Best-of list */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {bestOfs.map((bestOf) => {
            const topPick = getReview(bestOf.rankedSlugs[0]);
            return (
              <Link
                key={bestOf.slug}
                href={`/best-of/${bestOf.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                  className="bestof-card"
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(234,179,8,0.12)",
                        color: "#b45309",
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "20px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                      }}
                    >
                      Ranked List
                    </div>
                    <h2
                      style={{
                        margin: "0 0 10px",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1.3,
                      }}
                    >
                      {bestOf.title}
                    </h2>
                    <p
                      style={{
                        margin: "0 0 16px",
                        fontSize: "14px",
                        color: "#64748b",
                        lineHeight: 1.6,
                      }}
                    >
                      {bestOf.intro.slice(0, 150)}
                      {bestOf.intro.length > 150 ? "…" : ""}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                      {topPick && (
                        <span style={{ fontSize: "13px", color: "#475569" }}>
                          <strong style={{ color: "#0f172a" }}>#1:</strong> {topPick.title.split(" Review")[0]}
                        </span>
                      )}
                      <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                        Updated {bestOf.updatedAt}
                      </span>
                    </div>
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
                    See rankings →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <style>{`
        .bestof-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 28px;
          transition: border-color 0.15s, box-shadow 0.15s;
          cursor: pointer;
        }
        .bestof-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
}
