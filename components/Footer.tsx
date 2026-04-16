"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0f172a",
        color: "#94a3b8",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px 32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* About */}
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "16px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              About
            </h3>
            <p style={{ fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
              AI Voice Review is an independent review site for AI voice generation tools. We test every product
              ourselves and earn commission through affiliate links.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "16px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { label: "ElevenLabs Review", href: "/reviews/elevenlabs" },
                { label: "Murf AI Review", href: "/reviews/murf" },
                { label: "PlayHT Review", href: "/reviews/playht" },
                { label: "ElevenLabs vs Murf", href: "/compare/elevenlabs-vs-murf" },
                { label: "Best AI Voice Generators", href: "/best-of/best-ai-voice-generator" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "8px" }}>
                  <a
                    href={link.href}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "13px",
                      transition: "color 0.1s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "16px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { label: "About", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Affiliate Disclosure", href: "/privacy#affiliate" },
              ].map((link) => (
                <li key={link.href} style={{ marginBottom: "8px" }}>
                  <a
                    href={link.href}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "13px",
                      transition: "color 0.1s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
            <strong style={{ color: "#475569" }}>Affiliate disclosure:</strong> AI Voice Review participates in
            affiliate programmes. We may earn a commission when you purchase through our links at no extra cost to you.
            This does not influence our reviews or rankings.
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
            © {year} AI Voice Review. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
