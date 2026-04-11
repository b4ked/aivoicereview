import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import type { BlogPost } from "@/lib/types";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

const categoryMeta: Record<BlogPost["category"], { label: string; bg: string; color: string }> = {
  review: { label: "Review", bg: "#eff6ff", color: "#1d4ed8" },
  comparison: { label: "Comparison", bg: "#f0fdf4", color: "#15803d" },
  "use-case": { label: "Use Case", bg: "#fdf4ff", color: "#7e22ce" },
  guide: { label: "Guide", bg: "#fff7ed", color: "#c2410c" },
  "best-of": { label: "Best Of", bg: "#fefce8", color: "#854d0e" },
  opinion: { label: "Opinion", bg: "#fdf2f8", color: "#9d174d" },
};

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const cat = categoryMeta[post.category];

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <a href="/blog" style={{ color: "#64748b", textDecoration: "none" }}>Blog</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>{post.title}</span>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <span style={{ background: cat.bg, color: cat.color, fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {cat.label}
            </span>
            <span style={{ color: "#64748b", fontSize: "13px" }}>{post.readingTime}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 800, lineHeight: 1.25, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "17px", color: "#94a3b8", margin: "0 0 16px", lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
          <div style={{ fontSize: "13px", color: "#64748b" }}>
            Updated {new Date(post.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Table of contents */}
        {post.sections.length > 2 && (
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "20px 24px", marginBottom: "40px" }}>
            <h2 style={{ margin: "0 0 14px", fontSize: "14px", fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              In this article
            </h2>
            <ol style={{ margin: 0, padding: "0 0 0 20px" }}>
              {post.sections.map((section) => (
                <li key={section.id} style={{ marginBottom: "8px" }}>
                  <a href={`#${section.id}`} style={{ color: "#3b82f6", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Sections */}
        {post.sections.map((section) => (
          <div key={section.id} id={section.id} style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0f172a", margin: "0 0 16px", letterSpacing: "-0.01em" }}>
              {section.heading}
            </h2>
            <div
              style={{ fontSize: "16px", color: "#334155", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}

        {/* Back to blog */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "32px", marginTop: "48px" }}>
          <a href="/blog" style={{ color: "#3b82f6", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
            ← Back to all articles
          </a>
        </div>
      </div>
    </div>
  );
}
