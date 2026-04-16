import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Voice Review",
  description:
    "Privacy policy for AI Voice Review, operated by Watch This Capital Ltd. Explains how we collect, use, and protect your data.",
};

const LAST_UPDATED = "April 2026";
const ENTITY = "Watch This Capital Ltd";
const EMAIL = "hello@aivoicereview.com";
const SITE = "aivoicereview.com";

export default function PrivacyPage() {
  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>Privacy Policy</span>
          </nav>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ fontSize: "15px", color: "#334155", lineHeight: 1.85 }}>

          <p style={{ margin: "0 0 24px", color: "#475569" }}>
            This policy explains what data we collect when you use {SITE}, how we use it, and
            your rights under UK data protection law. {ENTITY} is the data controller for this
            Site.
          </p>

          <Section heading="1. What data we collect">
            <p>
              We collect limited data through the normal operation of this Site:
            </p>
            <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>Usage data</strong> — pages visited, time spent, referring URLs, and
                device/browser type, collected via analytics software. This data is aggregated
                and not linked to individual identities.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Cookies</strong> — we use cookies to understand how visitors use the
                Site and to enable certain functionality. See section 4 for details.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Contact information</strong> — if you email us directly, we retain your
                email address and the contents of your message in order to respond.
              </li>
            </ul>
            <p>
              We do not collect payment information. We do not run user accounts. We do not
              knowingly collect personal data from children under 16.
            </p>
          </Section>

          <Section heading="2. How we use your data">
            <p>We use the data we collect to:</p>
            <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
              <li style={{ marginBottom: "8px" }}>understand how readers use the Site so we can improve it;</li>
              <li style={{ marginBottom: "8px" }}>respond to enquiries sent to our contact addresses;</li>
              <li style={{ marginBottom: "8px" }}>monitor for and protect against abuse or technical issues.</li>
            </ul>
            <p>
              We do not sell your data. We do not use your data for advertising targeting. We do
              not share your data with third parties except as described in section 3.
            </p>
          </Section>

          <Section heading="3. Third-party services">
            <p>
              We use a small number of third-party services that may process data on our behalf:
            </p>
            <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>Vercel</strong> — our hosting provider. Vercel processes server logs that
                may include IP addresses and request metadata as part of normal hosting operations.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Analytics</strong> — we use privacy-respecting analytics to measure
                traffic. No personal identifiers are passed to our analytics provider.
              </li>
            </ul>
            <p>
              This Site contains affiliate links to third-party software products. If you click an
              affiliate link, the third-party site may set its own cookies and collect data
              according to its own privacy policy. We have no control over and no access to
              data collected by third-party sites.
            </p>
          </Section>

          <Section heading="4. Cookies">
            <p>
              We use cookies to support basic Site functionality and to collect aggregated usage
              analytics. No cookies on this Site are used to track individuals across other
              websites or to build advertising profiles.
            </p>
            <p>
              You can control cookies through your browser settings. Disabling cookies will not
              prevent you from reading any content on this Site.
            </p>
          </Section>

          <Section heading="5. Your rights">
            <p>
              Under UK GDPR, you have the right to:
            </p>
            <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
              <li style={{ marginBottom: "8px" }}>access the personal data we hold about you;</li>
              <li style={{ marginBottom: "8px" }}>request correction of inaccurate data;</li>
              <li style={{ marginBottom: "8px" }}>request deletion of your data;</li>
              <li style={{ marginBottom: "8px" }}>object to or restrict how we process your data;</li>
              <li style={{ marginBottom: "8px" }}>lodge a complaint with the ICO (ico.org.uk).</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "#3b82f6" }}>{EMAIL}</a>. We will
              respond within 30 days.
            </p>
          </Section>

          <Section heading="6. Data retention">
            <p>
              Aggregated analytics data is retained for up to 24 months. Email correspondence is
              retained for as long as necessary to resolve the relevant matter, then deleted.
              Server logs are retained by our hosting provider for up to 30 days.
            </p>
          </Section>

          <Section heading="7. Changes to this policy">
            <p>
              We may update this policy from time to time. The date at the top of this page
              reflects the most recent revision. Material changes will be noted on this page.
            </p>
          </Section>

          <Section heading="8. Contact">
            <p>
              {ENTITY} is the data controller for {SITE}. For privacy enquiries, contact{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "#3b82f6" }}>{EMAIL}</a>.
            </p>
          </Section>

          {/* Affiliate disclosure anchor */}
          <div
            id="affiliate"
            style={{
              marginTop: "48px",
              padding: "24px 28px",
              background: "#f0f7ff",
              border: "1px solid #bfdbfe",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#0f172a",
                margin: "0 0 12px",
              }}
            >
              Affiliate disclosure
            </h2>
            <p style={{ margin: 0, fontSize: "15px", color: "#334155", lineHeight: 1.75 }}>
              AI Voice Review participates in affiliate programmes. When you click certain links
              on this Site and sign up for or purchase a product, we may earn a commission at no
              additional cost to you. Affiliate relationships are clearly identified on all relevant
              pages. Our editorial content — including ratings, rankings, and verdicts — is
              produced independently and is not influenced by affiliate relationships or commission
              rates. We have recommended products that pay lower commissions over alternatives that
              pay higher commissions when the lower-commission product was the genuinely better
              choice for the reader.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <h2
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#0f172a",
          margin: "0 0 14px",
          paddingBottom: "10px",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        {heading}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {children}
      </div>
    </div>
  );
}
