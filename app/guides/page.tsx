import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "AI Voice Generation Guides & Tutorials (2026) | AI Voice Review",
  description:
    "Step-by-step guides for ElevenLabs, voice cloning, API integration, credit management, and more. Practical tutorials written from real testing.",
  openGraph: {
    title: "AI Voice Generation Guides & Tutorials (2026)",
    description:
      "Practical step-by-step guides on ElevenLabs, voice cloning, API setup, and more.",
    type: "website",
  },
};

export default function GuidesPage() {
  const guides = getAllGuides();

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
            <span style={{ color: "#94a3b8" }}>Guides</span>
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
            AI Voice{" "}
            <span style={{ color: "#3b82f6" }}>Guides</span>
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
            Practical, step-by-step guides on getting the most out of AI voice tools.
            Written from real hands-on testing.
          </p>
        </div>
      </div>

      {/* Guides grid */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="guide-card" style={{ display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" as const }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(59,130,246,0.1)",
                    color: "#2563eb",
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Guide
                </div>
                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0f172a",
                    lineHeight: 1.35,
                    flex: 1,
                  }}
                >
                  {guide.title}
                </h2>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: "13px",
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {guide.intro.slice(0, 120)}
                  {guide.intro.length > 120 ? "…" : ""}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}
                >
                  <span>Updated {guide.updatedAt}</span>
                  <span style={{ color: "#3b82f6", fontWeight: 600 }}>
                    Read guide →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .guide-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          transition: border-color 0.15s, box-shadow 0.15s;
          cursor: pointer;
        }
        .guide-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
}
