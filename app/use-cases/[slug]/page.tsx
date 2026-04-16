import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUseCase, getAllUseCases } from "@/lib/use-cases";
import { getReview } from "@/lib/reviews";
import { buildBreadcrumbSchema } from "@/lib/structured-data";
import ReviewCard from "@/components/ReviewCard";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllUseCases().map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
  };
}

export default async function UseCasePage({ params }: { params: Params }) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const recommendedReviews = useCase.recommendedSlugs
    .map((s) => getReview(s))
    .filter(Boolean);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://aivoicereview.com" },
    { name: "Use Cases", url: "https://aivoicereview.com/use-cases" },
    { name: useCase.title, url: `https://aivoicereview.com/use-cases/${slug}` },
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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <a href="/use-cases" style={{ color: "#64748b", textDecoration: "none" }}>Use Cases</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{useCase.title}</span>
          </nav>
          <div style={{ display: "inline-block", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", color: "#c4b5fd", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", marginBottom: "14px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Use Case
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            {useCase.title}
          </h1>
          <p style={{ fontSize: "17px", color: "#94a3b8", margin: 0, lineHeight: 1.6 }}>
            {useCase.intro}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* The problem */}
        <div style={{ marginBottom: "36px" }}>
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.01em" }}>
            The Challenge
          </h2>
          <p style={{ fontSize: "16px", color: "#334155", lineHeight: 1.8, margin: 0 }}>{useCase.problem}</p>
        </div>

        {/* The solution */}
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "24px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#15803d", margin: "0 0 14px", letterSpacing: "-0.01em" }}>
            How AI Voice Solves It
          </h2>
          <p style={{ fontSize: "16px", color: "#166534", lineHeight: 1.8, margin: 0 }}>{useCase.solution}</p>
        </div>

        {/* Recommended tools */}
        {recommendedReviews.length > 0 && (
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: "0 0 20px", letterSpacing: "-0.01em" }}>
              Recommended Tools for This Use Case
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
              {recommendedReviews.map((review, i) =>
                review ? (
                  <ReviewCard
                    key={review.slug}
                    title={review.title}
                    slug={review.slug}
                    rating={review.rating.overall}
                    excerpt={review.verdict}
                    affiliateUrl={review.affiliateUrl}
                    updatedAt={review.updatedAt}
                    badge={i === 0 ? "Top Pick" : undefined}
                  />
                ) : null
              )}
            </div>
          </div>
        )}

        {/* More use cases */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "40px", marginTop: "48px" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>Explore more use cases</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              { label: "Podcasters", href: "/use-cases/ai-voice-for-podcasters" },
              { label: "YouTubers", href: "/use-cases/ai-voice-for-youtube" },
              { label: "Voice Cloning", href: "/use-cases/ai-voice-cloning-guide" },
              { label: "E-Learning", href: "/use-cases/ai-voice-for-elearning" },
              { label: "Audiobooks", href: "/use-cases/ai-voice-for-audiobooks" },
              { label: "Small Business", href: "/use-cases/ai-voice-for-small-business" },
            ]
              .filter((l) => !l.href.includes(slug))
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ background: "#f1f5f9", color: "#475569", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
