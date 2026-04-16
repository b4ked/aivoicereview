import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AI Voice Review",
  description:
    "Terms of service for AI Voice Review, operated by Watch This Capital Ltd. Governs your use of aivoicereview.com.",
};

const LAST_UPDATED = "April 2026";
const ENTITY = "Watch This Capital Ltd";
const EMAIL = "hello@aivoicereview.com";
const SITE = "aivoicereview.com";

export default function TermsPage() {
  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>Terms of Service</span>
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
            Terms of Service
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
            Please read these terms carefully before using {SITE}. By accessing or using this
            website, you agree to be bound by these terms. If you do not agree, please do not
            use this site.
          </p>

          <Section heading="1. Who we are">
            <p>
              {SITE} (the "Site") is operated by {ENTITY}, a company registered in England and
              Wales. References to "we", "us", or "our" in these terms refer to {ENTITY}.
            </p>
            <p>
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: "#3b82f6" }}>{EMAIL}</a>.
            </p>
          </Section>

          <Section heading="2. Use of the site">
            <p>
              You may use this Site for personal, non-commercial purposes. You must not:
            </p>
            <ul style={{ paddingLeft: "20px", margin: "12px 0" }}>
              <li style={{ marginBottom: "8px" }}>use the Site in any way that violates applicable laws or regulations;</li>
              <li style={{ marginBottom: "8px" }}>scrape, copy, or republish our content without written permission;</li>
              <li style={{ marginBottom: "8px" }}>attempt to gain unauthorised access to any part of the Site or its infrastructure;</li>
              <li style={{ marginBottom: "8px" }}>transmit any unsolicited commercial communications via the Site.</li>
            </ul>
            <p>
              We reserve the right to restrict or terminate access to the Site at our discretion,
              without notice, if we believe these terms are being violated.
            </p>
          </Section>

          <Section heading="3. Intellectual property">
            <p>
              All content on this Site — including written reviews, comparisons, guides, ratings,
              editorial copy, and design — is owned by or licensed to {ENTITY}. All rights are
              reserved.
            </p>
            <p>
              You may quote brief excerpts from our content for purposes of commentary, criticism,
              or review, provided you clearly attribute the source and link to the original page.
              Reproduction of full articles or substantial portions of content without written
              permission is prohibited.
            </p>
          </Section>

          <Section heading="4. Third-party links and affiliate relationships">
            <p>
              This Site contains links to third-party websites, including the websites of software
              products we review. Some of these are affiliate links — if you click through and make
              a purchase or sign up for a paid plan, we may receive a commission at no additional
              cost to you.
            </p>
            <p>
              Affiliate relationships do not influence our editorial assessments, ratings, or
              rankings. We have given negative assessments to tools with which we have affiliate
              relationships, and recommended tools that pay lower commissions over alternatives
              that pay higher commissions, when the lower-commission product was a genuinely better
              fit for the reader.
            </p>
            <p>
              We are not responsible for the content, privacy practices, or accuracy of information
              on third-party websites. Links to third-party sites do not constitute endorsement
              beyond what is expressly stated in our editorial content.
            </p>
          </Section>

          <Section heading="5. Accuracy of information">
            <p>
              We endeavour to keep all reviews, pricing information, and feature comparisons up to
              date. However, the AI software market moves quickly — pricing, features, and product
              availability can change without notice. We cannot guarantee that all information on
              this Site is current or complete at the time you read it.
            </p>
            <p>
              Always verify pricing and plan details directly with the software provider before
              making a purchasing decision. Every review on this Site carries a "last updated" date
              indicating when we last tested the product.
            </p>
          </Section>

          <Section heading="6. Disclaimer of warranties">
            <p>
              This Site and all content are provided on an "as is" and "as available" basis without
              warranties of any kind, express or implied. We do not warrant that the Site will be
              uninterrupted, error-free, or free of harmful components.
            </p>
            <p>
              Nothing on this Site constitutes professional, legal, financial, or technical advice.
              Decisions about which software to purchase should be made based on your own
              assessment of your needs.
            </p>
          </Section>

          <Section heading="7. Limitation of liability">
            <p>
              To the fullest extent permitted by applicable law, {ENTITY} shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising from
              your use of or inability to use this Site, including but not limited to loss of data,
              loss of profits, or loss of business opportunity.
            </p>
            <p>
              Our total liability to you for any claim arising out of or in connection with these
              terms or your use of the Site shall not exceed £100.
            </p>
          </Section>

          <Section heading="8. Privacy">
            <p>
              Our collection and use of your personal data is governed by our{" "}
              <a href="/privacy" style={{ color: "#3b82f6" }}>Privacy Policy</a>, which forms part
              of these terms.
            </p>
          </Section>

          <Section heading="9. Changes to these terms">
            <p>
              We may update these terms from time to time. The date at the top of this page will
              reflect the most recent revision. Continued use of the Site after changes are posted
              constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section heading="10. Governing law">
            <p>
              These terms are governed by and construed in accordance with the laws of England and
              Wales. Any disputes arising from these terms or your use of the Site shall be subject
              to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </Section>

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
