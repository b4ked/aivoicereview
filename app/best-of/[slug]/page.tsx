import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBestOf, getAllBestOfs } from "@/lib/best-of";
import { getReview } from "@/lib/reviews";
import { buildItemListSchema, buildBreadcrumbSchema } from "@/lib/structured-data";
import ReviewCard from "@/components/ReviewCard";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllBestOfs().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const bestOf = getBestOf(slug);
  if (!bestOf) return {};
  return {
    title: bestOf.metaTitle,
    description: bestOf.metaDescription,
  };
}

export default async function BestOfPage({ params }: { params: Params }) {
  const { slug } = await params;
  const bestOf = getBestOf(slug);
  if (!bestOf) notFound();

  const rankedReviews = bestOf.rankedSlugs
    .map((s) => getReview(s))
    .filter(Boolean);

  const badges = ["#1 Pick", "#2 Pick", "#3 Pick", "#4 Pick", "#5 Pick"];

  const itemListJsonLd = buildItemListSchema(
    bestOf.title,
    bestOf.metaDescription,
    rankedReviews
      .filter(Boolean)
      .map((r) => ({
        name: r!.title.split(" Review")[0],
        url: `https://aivoicereview.com/reviews/${r!.slug}`,
      }))
  );
  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://aivoicereview.com" },
    { name: "Best Of", url: "https://aivoicereview.com/best-of" },
    { name: bestOf.title, url: `https://aivoicereview.com/best-of/${slug}` },
  ]);

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([itemListJsonLd, breadcrumbJsonLd]) }}
      />

      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <a href="/best-of" style={{ color: "#64748b", textDecoration: "none" }}>Best Of</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{bestOf.title}</span>
          </nav>
          <div style={{ display: "inline-block", background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.3)", color: "#fcd34d", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", marginBottom: "14px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Best Of
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            {bestOf.title}
          </h1>
          <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>Updated {bestOf.updatedAt}</p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Intro */}
        <p style={{ fontSize: "17px", color: "#334155", lineHeight: 1.8, marginBottom: "40px" }}>
          {bestOf.intro}
        </p>

        {/* Ranked list */}
        {rankedReviews.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
            {rankedReviews.map((review, i) =>
              review ? (
                <div key={review.slug} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ background: i === 0 ? "#3b82f6" : "#e2e8f0", color: i === 0 ? "#ffffff" : "#475569", width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 800, flexShrink: 0, marginTop: "4px" }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <ReviewCard
                      title={review.title}
                      slug={review.slug}
                      rating={review.rating.overall}
                      excerpt={review.verdict}
                      affiliateUrl={review.affiliateUrl}
                      updatedAt={review.updatedAt}
                      badge={badges[i]}
                    />
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}

        {/* Overall verdict */}
        <div style={{ background: "#f0f7ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "24px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#3b82f6", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Overall Verdict
          </h2>
          <p style={{ margin: 0, fontSize: "16px", color: "#1e3a5f", lineHeight: 1.7 }}>{bestOf.verdict}</p>
        </div>

        {/* Affiliate disclosure */}
        <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.6 }}>
          <strong>Affiliate disclosure:</strong> This page contains affiliate links. We may earn a commission if you sign up through our links, at no extra cost to you. Our rankings are based on independent testing and are not influenced by affiliate relationships.
        </p>
      </div>
    </div>
  );
}
