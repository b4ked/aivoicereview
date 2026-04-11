export default function AffiliateDisclosure() {
  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "6px",
        padding: "12px 16px",
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        marginBottom: "24px",
      }}
    >
      <span style={{ fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>ℹ️</span>
      <p
        style={{
          margin: 0,
          fontSize: "13px",
          color: "#475569",
          lineHeight: "1.5",
        }}
      >
        <strong style={{ color: "#334155" }}>Affiliate disclosure:</strong> This site contains affiliate links. If you
        purchase through our links, we may earn a commission at no extra cost to you. Our reviews are independent — we
        test every tool ourselves and are not paid to write positive reviews.
      </p>
    </div>
  );
}
