import type { Metadata } from "next";
import HomepageInteractive from "@/components/HomepageInteractive";
import BlogCard from "@/components/BlogCard";
import { getAllReviews } from "@/lib/reviews";
import { getAllGuides } from "@/lib/guides";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "VoiceToolsReview — Independent AI Voice Generator Reviews",
  description:
    "The independent resource for AI voice generation. We test ElevenLabs, Murf, PlayHT and more with real content, real pricing breakdowns, and honest verdicts.",
  openGraph: {
    title: "VoiceToolsReview — Independent AI Voice Generator Reviews",
    description:
      "Honest, hands-on reviews of the best AI voice generators. Compare pricing, quality, and features without the marketing spin.",
    type: "website",
  },
};

export default function HomePage() {
  const reviews = getAllReviews();
  const guides = getAllGuides();
  const latestPosts = getAllBlogPosts().slice(0, 4);

  return (
    <div>
      {/* Hero — pure static, no event handlers */}
      <section
        style={{
          background: "#0f172a",
          color: "#ffffff",
          padding: "80px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(59,130,246,0.15)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#93c5fd",
              fontSize: "12px",
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: "20px",
              marginBottom: "20px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Independent Reviews — Updated April 2026
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
            }}
          >
            The Independent AI Voice Review Site
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              lineHeight: 1.7,
              margin: "0 0 36px",
            }}
          >
            We test AI voice generators with real credits, real content, and real use cases. No sponsored rankings, no
            marketing spin — just honest comparisons to help you choose the right tool.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/reviews/elevenlabs"
              style={{
                background: "#3b82f6",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Read ElevenLabs Review →
            </a>
            <a
              href="/compare/elevenlabs-vs-murf"
              style={{
                background: "transparent",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.25)",
              }}
            >
              Compare Tools →
            </a>
          </div>
        </div>
      </section>

      {/* Interactive sections handled by client component */}
      <HomepageInteractive reviews={reviews} guides={guides} />

      {/* Latest from the Blog */}
      <section
        style={{
          background: "#ffffff",
          padding: "64px 24px",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "36px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                }}
              >
                Latest from the Blog
              </h2>
              <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
                Deep dives, tutorials, and honest opinions on AI voice tools.
              </p>
            </div>
            <a
              href="/blog"
              style={{
                color: "#3b82f6",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              View all articles →
            </a>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
