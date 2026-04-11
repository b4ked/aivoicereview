import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getComparison, getAllComparisons } from "@/lib/comparisons";
import ComparisonTable from "@/components/ComparisonTable";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllComparisons().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
  };
}

export default async function ComparePage({ params }: { params: Params }) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const winnerName =
    comparison.winner === "A"
      ? comparison.toolAName
      : comparison.winner === "B"
      ? comparison.toolBName
      : null;

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>Compare</span>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{comparison.toolAName} vs {comparison.toolBName}</span>
          </nav>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            {comparison.title}
          </h1>
          {winnerName && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "20px", padding: "6px 14px" }}>
              <span style={{ color: "#93c5fd", fontSize: "13px", fontWeight: 600 }}>Winner: {winnerName}</span>
            </div>
          )}
          {comparison.winner === "tie" && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(100,116,139,0.15)", border: "1px solid rgba(100,116,139,0.3)", borderRadius: "20px", padding: "6px 14px" }}>
              <span style={{ color: "#94a3b8", fontSize: "13px", fontWeight: 600 }}>Verdict: Tie — depends on your use case</span>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Verdict box */}
        <div style={{ background: "#f0f7ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "20px 24px", marginBottom: "36px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#3b82f6", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
            Our Verdict
          </div>
          <p style={{ margin: 0, fontSize: "16px", color: "#1e3a5f", lineHeight: 1.7 }}>{comparison.verdict}</p>
        </div>

        {/* Feature comparison table */}
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: "0 0 20px", letterSpacing: "-0.01em" }}>
          Feature-by-Feature Comparison
        </h2>
        <ComparisonTable
          features={comparison.featureRows}
          toolAName={comparison.toolAName}
          toolBName={comparison.toolBName}
          winner={comparison.winner}
        />

        {/* CTAs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "40px" }}>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: "17px", color: "#0f172a", marginBottom: "8px" }}>{comparison.toolAName}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href={`/reviews/${comparison.toolASlug}`}
                style={{ color: "#3b82f6", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              >
                Read full review →
              </a>
              <a
                href={comparison.affiliateUrlA}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{ background: "#3b82f6", color: "#ffffff", padding: "10px 20px", borderRadius: "7px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              >
                Try {comparison.toolAName} →
              </a>
            </div>
          </div>
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: "17px", color: "#0f172a", marginBottom: "8px" }}>{comparison.toolBName}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href={`/reviews/${comparison.toolBSlug}`}
                style={{ color: "#3b82f6", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              >
                Read full review →
              </a>
              <a
                href={comparison.affiliateUrlB}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{ background: "#0f172a", color: "#ffffff", padding: "10px 20px", borderRadius: "7px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              >
                Try {comparison.toolBName} →
              </a>
            </div>
          </div>
        </div>

        <p style={{ marginTop: "32px", fontSize: "12px", color: "#94a3b8", lineHeight: 1.6 }}>
          <strong>Affiliate disclosure:</strong> This page contains affiliate links. We may earn a commission if you sign up through our links, at no extra cost to you. Our comparisons are based on independent testing.
        </p>
      </div>
    </div>
  );
}
