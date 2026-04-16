import type { Metadata } from "next";
import Link from "next/link";
import HomepageInteractive from "@/components/HomepageInteractive";
import BlogCard from "@/components/BlogCard";
import { getAllReviews } from "@/lib/reviews";
import { getAllGuides } from "@/lib/guides";
import { getAllBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "AI Voice Review — Independent AI Voice Generator Reviews",
  description:
    "The independent resource for AI voice generation. We test ElevenLabs, Murf, PlayHT and more with real credits, real content, and honest verdicts. No sponsored rankings.",
  openGraph: {
    title: "AI Voice Review — Independent AI Voice Generator Reviews",
    description:
      "Honest, hands-on reviews of the best AI voice generators. Compare pricing, quality, and features without the marketing spin.",
    type: "website",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
};

function formatBadgeDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function HomePage() {
  const reviews = getAllReviews();
  const guides = getAllGuides();
  const latestPosts = getAllBlogPosts().slice(0, 4);

  return (
    <div>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, organizationJsonLd]) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "#0f172a",
          color: "#ffffff",
          padding: "88px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background glow */}
        <div style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.25)",
            color: "#93c5fd",
            fontSize: "12px",
            fontWeight: 600,
            padding: "5px 14px",
            borderRadius: "20px",
            marginBottom: "28px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
            Independent Reviews — Updated {formatBadgeDate(siteConfig.lastReviewedDate)}
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(2.2rem, 5.5vw, 3.25rem)",
            fontWeight: 800,
            lineHeight: 1.12,
            margin: "0 0 24px",
            letterSpacing: "-0.03em",
          }}>
            Find the Best{" "}
            <span style={{ color: "#3b82f6" }}>AI Voice Generator</span>
            {" "}for Your Use Case
          </h1>

          {/* Subhead */}
          <p style={{
            fontSize: "19px",
            color: "#94a3b8",
            lineHeight: 1.7,
            margin: "0 0 16px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            We test ElevenLabs, Murf, PlayHT and more with real paid credits and real content.
            No sponsored rankings. No marketing spin.
          </p>

          {/* Trust signals row */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}>
            {[
              { icon: "🧪", label: "Tested with real credits" },
              { icon: "🚫", label: "No sponsored rankings" },
              { icon: "📅", label: "Updated regularly" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#64748b" }}>
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/best-of/best-ai-voice-generator"
              style={{
                background: "#3b82f6",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(59,130,246,0.35)",
              }}
            >
              See Top Picks →
            </a>
            <a
              href="/compare/elevenlabs-vs-murf"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Compare Tools
            </a>
            <a
              href="/reviews/elevenlabs"
              style={{
                background: "transparent",
                color: "#64748b",
                padding: "14px 20px",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              ElevenLabs Review →
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
            <Link
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
            </Link>
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
