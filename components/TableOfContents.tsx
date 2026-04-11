"use client";

import { useEffect, useState } from "react";

interface TOCSection {
  id: string;
  heading: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        { rootMargin: "-20% 0% -60% 0%" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav
      style={{
        position: "sticky",
        top: "80px",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <p
        style={{
          margin: "0 0 12px",
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#64748b",
        }}
      >
        In This Review
      </p>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {sections.map(({ id, heading }) => (
          <li key={id} style={{ marginBottom: "4px" }}>
            <a
              href={`#${id}`}
              style={{
                display: "block",
                padding: "6px 8px",
                borderRadius: "6px",
                fontSize: "13px",
                textDecoration: "none",
                lineHeight: "1.4",
                color: activeId === id ? "#1d4ed8" : "#475569",
                background: activeId === id ? "#eff6ff" : "transparent",
                fontWeight: activeId === id ? 600 : 400,
                borderLeft: activeId === id ? "3px solid #3b82f6" : "3px solid transparent",
                transition: "all 0.1s",
              }}
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
