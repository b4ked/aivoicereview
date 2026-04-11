import type { FeatureRow } from "@/lib/types";

interface ComparisonTableProps {
  features: FeatureRow[];
  toolAName: string;
  toolBName: string;
  winner: "A" | "B" | "tie";
}

export default function ComparisonTable({ features, toolAName, toolBName, winner }: ComparisonTableProps) {
  return (
    <div style={{ marginBottom: "40px", overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
          minWidth: "500px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "12px 16px",
                textAlign: "left",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
                color: "#0f172a",
                width: "40%",
              }}
            >
              Feature
            </th>
            <th
              style={{
                padding: "12px 16px",
                textAlign: "left",
                background: winner === "A" ? "#eff6ff" : "#f1f5f9",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
                color: winner === "A" ? "#1d4ed8" : "#0f172a",
                position: "relative",
              }}
            >
              {toolAName}
              {winner === "A" && (
                <span
                  style={{
                    marginLeft: "8px",
                    background: "#3b82f6",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: "10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  WINNER
                </span>
              )}
            </th>
            <th
              style={{
                padding: "12px 16px",
                textAlign: "left",
                background: winner === "B" ? "#eff6ff" : "#f1f5f9",
                border: "1px solid #e2e8f0",
                fontWeight: 700,
                color: winner === "B" ? "#1d4ed8" : "#0f172a",
              }}
            >
              {toolBName}
              {winner === "B" && (
                <span
                  style={{
                    marginLeft: "8px",
                    background: "#3b82f6",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: "10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  WINNER
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
              <td
                style={{
                  padding: "11px 16px",
                  border: "1px solid #e2e8f0",
                  fontWeight: 600,
                  color: "#334155",
                }}
              >
                {row.feature}
              </td>
              <td
                style={{
                  padding: "11px 16px",
                  border: "1px solid #e2e8f0",
                  color: "#475569",
                  background: winner === "A" ? (i % 2 === 0 ? "#f0f7ff" : "#e8f2ff") : undefined,
                }}
              >
                {row.toolA}
              </td>
              <td
                style={{
                  padding: "11px 16px",
                  border: "1px solid #e2e8f0",
                  color: "#475569",
                  background: winner === "B" ? (i % 2 === 0 ? "#f0f7ff" : "#e8f2ff") : undefined,
                }}
              >
                {row.toolB}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
