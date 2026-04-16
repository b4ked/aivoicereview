import type { Metadata } from "next";
import { getAllReviews } from "@/lib/reviews";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "AI Voice Generator Reviews (2026) — Hands-On Tests | AI Voice Review",
  description:
    "Independent, hands-on reviews of ElevenLabs, Murf AI, PlayHT, Descript, Castmagic, and LOVO. Tested with real credits. Honest verdicts with no sponsored rankings.",
  openGraph: {
    title: "AI Voice Generator Reviews (2026) — Hands-On Tests",
    description:
      "Independent reviews of the top AI voice tools. Tested with real paid credits. No sponsored rankings.",
    type: "website",
  },
};

export default function ReviewsPage() {
  const reviews = getAllReviews();

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>
              Home
            </a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>Reviews</span>
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
            AI Voice Generator{" "}
            <span style={{ color: "#3b82f6" }}>Reviews</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              margin: "0 0 24px",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}
          >
            Every tool on this list has been tested with real paid credits across
            multiple use cases. No sponsored placements. No marketing spin.
          </p>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              fontSize: "13px",
              color: "#64748b",
            }}
          >
            {[
              "🧪 Tested with real credits",
              "🚫 No sponsored rankings",
              `📋 ${reviews.length} reviews published`,
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {reviews.map((review) => (
            <ReviewCard
              key={review.slug}
              title={review.title}
              slug={review.slug}
              rating={review.rating.overall}
              excerpt={review.tagline}
              affiliateUrl={review.affiliateUrl}
              updatedAt={review.updatedAt}
            />
          ))}
        </div>

        {/* Bottom context */}
        <div
          style={{
            marginTop: "56px",
            padding: "28px 32px",
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#0f172a",
              margin: "0 0 10px",
            }}
          >
            How we review
          </h2>
          <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: 1.7 }}>
            Every review on this site is based on real-money testing. We buy paid plans,
            run scripts through multiple voice presets, test cloning with our own audio,
            and evaluate the API where relevant. We earn affiliate commission if you sign
            up through our links — this never influences our ratings or verdicts.
          </p>
        </div>
      </div>
    </div>
  );
}
