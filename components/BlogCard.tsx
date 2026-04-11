"use client";

import type { BlogPost } from "@/lib/types";

const categoryColors: Record<BlogPost["category"], { bg: string; color: string; label: string }> = {
  review: { bg: "#eff6ff", color: "#1d4ed8", label: "Review" },
  comparison: { bg: "#f0fdf4", color: "#15803d", label: "Comparison" },
  "use-case": { bg: "#fdf4ff", color: "#7e22ce", label: "Use Case" },
  guide: { bg: "#fff7ed", color: "#c2410c", label: "Guide" },
  "best-of": { bg: "#fefce8", color: "#854d0e", label: "Best Of" },
  opinion: { bg: "#fdf2f8", color: "#9d174d", label: "Opinion" },
};

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const cat = categoryColors[post.category];

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.15s, border-color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#bfdbfe";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
      }}
    >
      {/* Category badge */}
      <div>
        <span
          style={{
            display: "inline-block",
            background: cat.bg,
            color: cat.color,
            fontSize: "11px",
            fontWeight: 700,
            padding: "3px 9px",
            borderRadius: "20px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {cat.label}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          margin: 0,
          fontSize: "16px",
          fontWeight: 700,
          color: "#0f172a",
          lineHeight: 1.4,
        }}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: "#475569",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {post.excerpt}
      </p>

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "12px",
          color: "#94a3b8",
        }}
      >
        <span>{post.readingTime}</span>
        <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#cbd5e1" }} />
        <span>
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      {/* CTA */}
      <a
        href={`/blog/${post.slug}`}
        style={{
          display: "inline-block",
          color: "#3b82f6",
          fontWeight: 600,
          fontSize: "14px",
          textDecoration: "none",
          marginTop: "4px",
        }}
      >
        Read article →
      </a>
    </div>
  );
}
