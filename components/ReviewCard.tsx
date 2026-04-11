"use client";

interface ReviewCardProps {
  title: string;
  slug: string;
  rating: number;
  excerpt: string;
  affiliateUrl: string;
  updatedAt: string;
  badge?: string;
}

function Stars({ score }: { score: number }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ color: i <= Math.round(score) ? "#3b82f6" : "#e2e8f0", fontSize: "16px" }}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export default function ReviewCard({
  title,
  slug,
  rating,
  excerpt,
  affiliateUrl,
  updatedAt,
  badge,
}: ReviewCardProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "24px",
        position: "relative",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.15s, border-color 0.15s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#bfdbfe";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e2e8f0";
      }}
    >
      {badge && (
        <span
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "#0f172a",
            color: "#ffffff",
            fontSize: "10px",
            fontWeight: 700,
            padding: "3px 9px",
            borderRadius: "20px",
            letterSpacing: "0.06em",
          }}
        >
          {badge.toUpperCase()}
        </span>
      )}
      <h3
        style={{
          margin: "0 0 10px",
          fontSize: "17px",
          fontWeight: 700,
          color: "#0f172a",
          paddingRight: badge ? "80px" : "0",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "12px",
        }}
      >
        <Stars score={rating} />
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>{rating.toFixed(1)}</span>
        <span style={{ fontSize: "12px", color: "#94a3b8" }}>Updated {updatedAt}</span>
      </div>
      <p
        style={{
          margin: "0 0 20px",
          fontSize: "14px",
          color: "#475569",
          lineHeight: "1.6",
          flex: 1,
        }}
      >
        {excerpt}
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <a
          href={`/reviews/${slug}`}
          style={{
            display: "inline-block",
            background: "#3b82f6",
            color: "#ffffff",
            padding: "9px 18px",
            borderRadius: "7px",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Read Review
        </a>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={{
            display: "inline-block",
            background: "transparent",
            color: "#3b82f6",
            padding: "9px 18px",
            borderRadius: "7px",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
            border: "1px solid #bfdbfe",
          }}
        >
          Visit Site →
        </a>
      </div>
    </div>
  );
}
