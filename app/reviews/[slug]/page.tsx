import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getReview, getAllReviews } from "@/lib/reviews";
import { buildReviewSchema, buildBreadcrumbSchema } from "@/lib/structured-data";
import RatingBox from "@/components/RatingBox";
import ProsConsList from "@/components/ProsConsList";
import PricingTable from "@/components/PricingTable";
import TableOfContents from "@/components/TableOfContents";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllReviews().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const review = getReview(slug);
  if (!review) return {};
  return {
    title: review.metaTitle,
    description: review.metaDescription,
  };
}

export default async function ReviewPage({ params }: { params: Params }) {
  const { slug } = await params;
  const review = getReview(slug);
  if (!review) notFound();

  const tocSections = [
    ...review.sections.map((s) => ({ id: s.id, heading: s.heading })),
    { id: "pricing", heading: "Pricing Plans" },
  ];

  const reviewJsonLd = buildReviewSchema(review);
  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://aivoicereview.com" },
    { name: "Reviews", url: "https://aivoicereview.com/reviews" },
    { name: review.title.split(" Review")[0], url: `https://aivoicereview.com/reviews/${slug}` },
  ]);

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([reviewJsonLd, breadcrumbJsonLd]) }}
      />

      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <a href="/reviews" style={{ color: "#64748b", textDecoration: "none" }}>Reviews</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{review.title.split(" Review")[0]}</span>
          </nav>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            {review.title}
          </h1>
          <p style={{ fontSize: "18px", color: "#94a3b8", margin: "0 0 24px", lineHeight: 1.6 }}>
            {review.tagline}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", fontSize: "13px", color: "#64748b" }}>
            <span>Updated {review.updatedAt}</span>
            <span>·</span>
            <span>Tested with: {review.testedWith}</span>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 80px" }}>
        <div className="review-layout" style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: "48px", alignItems: "start" }}>

          {/* Main content column */}
          <div>
            {/* Rating */}
            <RatingBox
              overall={review.rating.overall}
              quality={review.rating.quality}
              value={review.rating.value}
              ease={review.rating.ease}
              features={review.rating.features}
            />

            {/* Verdict */}
            <div style={{ background: "#f0f7ff", border: "1px solid #bfdbfe", borderRadius: "10px", padding: "20px 24px", marginBottom: "32px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#3b82f6", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                Our Verdict
              </div>
              <p style={{ margin: 0, fontSize: "16px", color: "#1e3a5f", lineHeight: 1.7 }}>{review.verdict}</p>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
              <a
                href={review.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{ background: "#3b82f6", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
              >
                Try {review.title.split(" ")[0]} →
              </a>
            </div>

            {/* Pros / Cons */}
            <ProsConsList pros={review.pros} cons={review.cons} />

            {/* Best for / Not for */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "20px" }}>
                <h3 style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>Best for</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {review.bestFor.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px", fontSize: "14px", color: "#334155" }}>
                      <span style={{ color: "#3b82f6", flexShrink: 0 }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "20px" }}>
                <h3 style={{ margin: "0 0 12px", fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>Not ideal for</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {review.notFor.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px", fontSize: "14px", color: "#334155" }}>
                      <span style={{ color: "#94a3b8", flexShrink: 0 }}>✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Review sections */}
            {review.sections.map((section) => (
              <div key={section.id} id={section.id} style={{ marginBottom: "36px" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.01em" }}>
                  {section.heading}
                </h2>
                <div
                  style={{ fontSize: "16px", color: "#334155", lineHeight: 1.75 }}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}

            {/* Pricing */}
            <div id="pricing">
              <PricingTable tiers={review.pricingTiers} />
            </div>

            {/* Bottom CTA */}
            <div style={{ background: "#0f172a", borderRadius: "12px", padding: "32px", textAlign: "center", marginTop: "48px" }}>
              <h3 style={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 700, margin: "0 0 8px" }}>
                Ready to try {review.title.split(" ")[0]}?
              </h3>
              <p style={{ color: "#94a3b8", margin: "0 0 20px", fontSize: "15px" }}>
                Get started on the free plan — no credit card required.
              </p>
              <a
                href={review.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                style={{ background: "#3b82f6", color: "#ffffff", padding: "12px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
              >
                Visit {review.title.split(" ")[0]} →
              </a>
            </div>

            {/* Affiliate disclosure */}
            <p style={{ marginTop: "32px", fontSize: "12px", color: "#94a3b8", lineHeight: 1.6 }}>
              <strong>Affiliate disclosure:</strong> This page contains affiliate links. We may earn a commission if you sign up through our links, at no extra cost to you. Our reviews and rankings are based on independent testing and are not influenced by affiliate relationships.
            </p>
          </div>

          {/* Sticky TOC sidebar */}
          <div className="review-toc">
            <TableOfContents sections={tocSections} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .review-layout { grid-template-columns: 1fr !important; }
          .review-toc { display: none !important; }
        }
      `}</style>
    </div>
  );
}
