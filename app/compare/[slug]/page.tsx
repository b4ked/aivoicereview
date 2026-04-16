import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getComparison, getAllComparisons } from "@/lib/comparisons";
import { buildBreadcrumbSchema } from "@/lib/structured-data";
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

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://aivoicereview.com" },
    { name: "Compare", url: "https://aivoicereview.com/compare" },
    {
      name: `${comparison.toolAName} vs ${comparison.toolBName}`,
      url: `https://aivoicereview.com/compare/${slug}`,
    },
  ]);

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <a href="/compare" style={{ color: "#64748b", textDecoration: "none" }}>Compare</a>
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
        {(() => {
          const tools = [
            { name: comparison.toolAName, slug: comparison.toolASlug, affiliateUrl: comparison.affiliateUrlA, side: "A" as const },
            { name: comparison.toolBName, slug: comparison.toolBSlug, affiliateUrl: comparison.affiliateUrlB, side: "B" as const },
          ];
          return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "40px" }}>
              {tools.map((tool) => {
                const isWinner = comparison.winner === tool.side;
                const isTie = comparison.winner === "tie";
                return (
                  <div
                    key={tool.side}
                    style={{
                      background: isWinner ? "#0f172a" : "#f8fafc",
                      border: isWinner ? "1px solid #3b82f6" : "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "24px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    {isWinner && (
                      <div style={{
                        position: "absolute",
                        top: "-12px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#3b82f6",
                        color: "#ffffff",
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "3px 12px",
                        borderRadius: "20px",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}>
                        Our Pick
                      </div>
                    )}
                    <div style={{ fontWeight: 700, fontSize: "17px", color: isWinner ? "#ffffff" : "#0f172a", marginBottom: "8px" }}>
                      {tool.name}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <a
                        href={`/reviews/${tool.slug}`}
                        style={{ color: isWinner ? "#93c5fd" : "#3b82f6", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
                      >
                        Read full review →
                      </a>
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        style={{
                          background: isWinner ? "#3b82f6" : (isTie ? "#3b82f6" : "#e2e8f0"),
                          color: isWinner ? "#ffffff" : (isTie ? "#ffffff" : "#475569"),
                          padding: "10px 20px",
                          borderRadius: "7px",
                          fontWeight: 600,
                          fontSize: "14px",
                          textDecoration: "none",
                        }}
                      >
                        {isWinner ? `Try ${tool.name} — Our Top Pick →` : `Try ${tool.name} →`}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}

        <p style={{ marginTop: "32px", fontSize: "12px", color: "#94a3b8", lineHeight: 1.6 }}>
          <strong>Affiliate disclosure:</strong> This page contains affiliate links. We may earn a commission if you sign up through our links, at no extra cost to you. Our comparisons are based on independent testing.
        </p>
      </div>
    </div>
  );
}
