import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/lib/types";

export const metadata: Metadata = {
  title: "Blog — AI Voice Generator Reviews & Guides",
  description: "Deep dives, comparisons, guides, and honest opinions on AI voice tools from the AI Voice Review team.",
};

const CATEGORIES: { value: BlogPost["category"] | "all"; label: string }[] = [
  { value: "all", label: "All Posts" },
  { value: "review", label: "Reviews" },
  { value: "comparison", label: "Comparisons" },
  { value: "guide", label: "Guides" },
  { value: "best-of", label: "Best Of" },
  { value: "use-case", label: "Use Cases" },
  { value: "opinion", label: "Opinions" },
];

type SearchParams = Promise<{ category?: string }>;

export default async function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const { category } = await searchParams;
  const allPosts = getAllBlogPosts();
  const filtered =
    category && category !== "all"
      ? allPosts.filter((p) => p.category === category)
      : allPosts;

  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>Blog</span>
          </nav>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            AI Voice Reviews & Guides
          </h1>
          <p style={{ fontSize: "17px", color: "#94a3b8", margin: 0 }}>
            {allPosts.length} articles on AI voice tools — reviews, comparisons, how-tos, and honest opinions.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div style={{ borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", gap: "4px", overflowX: "auto" }}>
          {CATEGORIES.map((cat) => {
            const isActive = (category === cat.value) || (!category && cat.value === "all");
            return (
              <a
                key={cat.value}
                href={cat.value === "all" ? "/blog" : `/blog?category=${cat.value}`}
                style={{
                  display: "inline-block",
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: isActive ? "#3b82f6" : "#64748b",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid #3b82f6" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {cat.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Posts grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {filtered.length === 0 ? (
          <p style={{ color: "#64748b", fontSize: "16px" }}>No posts in this category yet.</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
