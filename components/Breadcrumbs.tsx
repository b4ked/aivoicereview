"use client";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "20px" }}>
      <ol
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "4px",
          fontSize: "13px",
          color: "#64748b",
        }}
      >
        {items.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {index > 0 && (
              <span style={{ color: "#cbd5e1", userSelect: "none" }}>›</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                style={{
                  color: "#64748b",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                {item.label}
              </a>
            ) : (
              <span style={{ color: "#0f172a", fontWeight: 500 }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
