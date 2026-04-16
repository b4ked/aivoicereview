import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, getAllGuides } from "@/lib/guides";
import { buildBreadcrumbSchema } from "@/lib/structured-data";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
  };
}

export default async function GuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "https://aivoicereview.com" },
    { name: "Guides", url: "https://aivoicereview.com/guides" },
    { name: guide.title, url: `https://aivoicereview.com/guides/${slug}` },
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
            <a href="/guides" style={{ color: "#64748b", textDecoration: "none" }}>Guides</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{guide.title}</span>
          </nav>
          <div style={{ display: "inline-block", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#93c5fd", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", marginBottom: "14px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Guide
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            {guide.title}
          </h1>
          <p style={{ fontSize: "16px", color: "#94a3b8", margin: 0, lineHeight: 1.6 }}>
            Updated {guide.updatedAt}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Intro */}
        <p style={{ fontSize: "18px", color: "#334155", lineHeight: 1.8, marginBottom: "40px", borderLeft: "3px solid #3b82f6", paddingLeft: "20px" }}>
          {guide.intro}
        </p>

        {/* Table of contents */}
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "20px 24px", marginBottom: "40px" }}>
          <h2 style={{ margin: "0 0 14px", fontSize: "14px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            In this guide
          </h2>
          <ol style={{ margin: 0, padding: "0 0 0 20px" }}>
            {guide.sections.map((section) => (
              <li key={section.id} style={{ marginBottom: "8px" }}>
                <a href={`#${section.id}`} style={{ color: "#3b82f6", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        {guide.sections.map((section, i) => (
          <div key={section.id} id={section.id} style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{ background: "#3b82f6", color: "#ffffff", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>
                {i + 1}
              </span>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: 0, letterSpacing: "-0.01em" }}>
                {section.heading}
              </h2>
            </div>
            <div
              style={{ fontSize: "16px", color: "#334155", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}

        {/* Related guides */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "40px" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "16px" }}>More guides</h3>
          <a href="/guides" style={{ color: "#3b82f6", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>← Back to all guides</a>
        </div>
      </div>
    </div>
  );
}
