import type { PricingTier } from "@/lib/types";

interface PricingTableProps {
  tiers: PricingTier[];
}

export default function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#0f172a",
          marginBottom: "20px",
        }}
      >
        Pricing Plans
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {tiers.map((tier) => (
          <div
            key={tier.name}
            style={{
              border: tier.highlighted ? "2px solid #3b82f6" : "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "20px",
              position: "relative",
              background: tier.highlighted ? "#eff6ff" : "#ffffff",
            }}
          >
            {tier.highlighted && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#3b82f6",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.05em",
                }}
              >
                MOST POPULAR
              </span>
            )}
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {tier.name}
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: tier.highlighted ? "#3b82f6" : "#0f172a",
                marginBottom: "2px",
                lineHeight: 1.1,
              }}
            >
              {tier.price}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#64748b",
                marginBottom: "16px",
              }}
            >
              {tier.credits}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {tier.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                    marginBottom: "6px",
                    fontSize: "13px",
                    color: "#334155",
                    lineHeight: "1.4",
                  }}
                >
                  <span style={{ color: "#16a34a", flexShrink: 0 }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
