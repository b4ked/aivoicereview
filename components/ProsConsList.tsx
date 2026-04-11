interface ProsConsListProps {
  pros: string[];
  cons: string[];
}

export default function ProsConsList({ pros, cons }: ProsConsListProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h3
          style={{
            margin: "0 0 14px",
            fontSize: "15px",
            fontWeight: 700,
            color: "#15803d",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span>✅</span> Pros
        </h3>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {pros.map((pro, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#166534",
                lineHeight: "1.5",
              }}
            >
              <span style={{ flexShrink: 0, marginTop: "1px", color: "#16a34a" }}>✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          background: "#fff1f2",
          border: "1px solid #fecdd3",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h3
          style={{
            margin: "0 0 14px",
            fontSize: "15px",
            fontWeight: 700,
            color: "#be123c",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span>❌</span> Cons
        </h3>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {cons.map((con, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#9f1239",
                lineHeight: "1.5",
              }}
            >
              <span style={{ flexShrink: 0, marginTop: "1px", color: "#e11d48" }}>✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
