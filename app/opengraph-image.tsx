import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "72px 80px",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "24px",
            padding: "8px 20px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3b82f6",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#93c5fd",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Independent Reviews
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "80px",
            fontWeight: 800,
            lineHeight: 1.05,
            textAlign: "center",
            letterSpacing: "-0.03em",
            marginBottom: "28px",
          }}
        >
          AI Voice{" "}
          <span style={{ color: "#3b82f6" }}>Review</span>
        </div>

        {/* Subheading */}
        <div
          style={{
            color: "#94a3b8",
            fontSize: "26px",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: "820px",
          }}
        >
          Hands-on reviews of ElevenLabs, Murf, PlayHT and more.
          No sponsored rankings.
        </div>

        {/* Trust signals */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "48px",
          }}
        >
          {["Tested with real credits", "No sponsored rankings", "Updated 2026"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#64748b",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#3b82f6",
                    display: "flex",
                  }}
                />
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
