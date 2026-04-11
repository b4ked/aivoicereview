interface RatingBoxProps {
  overall: number;
  quality: number;
  value: number;
  ease: number;
  features: number;
}

function StarDisplay({ score }: { score: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.round(score);
    stars.push(
      <span
        key={i}
        style={{
          color: filled ? "#3b82f6" : "#e2e8f0",
          fontSize: "20px",
        }}
      >
        ★
      </span>
    );
  }
  return <span>{stars}</span>;
}

function RatingBar({ label, score }: { label: string; score: number }) {
  const pct = (score / 5) * 100;
  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px",
          fontSize: "13px",
          color: "#475569",
        }}
      >
        <span>{label}</span>
        <span style={{ fontWeight: 600, color: "#0f172a" }}>{score.toFixed(1)}</span>
      </div>
      <div
        style={{
          height: "6px",
          background: "#e2e8f0",
          borderRadius: "3px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
            borderRadius: "3px",
          }}
        />
      </div>
    </div>
  );
}

export default function RatingBox({ overall, quality, value, ease, features }: RatingBoxProps) {
  return (
    <div
      style={{
        border: "2px solid #e2e8f0",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "32px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1,
            }}
          >
            {overall.toFixed(1)}
          </div>
          <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>out of 5.0</div>
        </div>
        <div>
          <StarDisplay score={overall} />
          <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>Overall Score</div>
        </div>
      </div>
      <div>
        <RatingBar label="Voice Quality" score={quality} />
        <RatingBar label="Value for Money" score={value} />
        <RatingBar label="Ease of Use" score={ease} />
        <RatingBar label="Features" score={features} />
      </div>
    </div>
  );
}
