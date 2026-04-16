import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AI Voice Review — Who We Are and How We Test",
  description:
    "AI Voice Review is an independent site run by content creators who needed AI voice tools and couldn't find honest reviews. We buy every plan, test every feature, and earn nothing from sponsored rankings.",
  openGraph: {
    title: "About AI Voice Review — Who We Are and How We Test",
    description:
      "Independent AI voice tool reviews from a team of content creators who test every product with real paid credits.",
    type: "website",
  },
};

const testingSteps = [
  {
    num: "01",
    heading: "We buy real plans",
    body: "Every tool on this site has been tested on a paid subscription. We don't rely on press accounts, vendor demos, or trial credits that reset after 10 minutes. Testing on a paid plan is the only way to evaluate how the credit system actually works, what the rate limits feel like in practice, and whether the product holds up at the volume a real creator uses.",
  },
  {
    num: "02",
    heading: "We run standardised scripts",
    body: "To make comparisons fair, we pass identical scripts through each tool using their closest equivalent voice settings. We test across content types: conversational podcast scripts, formal narration, technical explanations, and emotionally varied dialogue. Short clips and long-form passages behave differently — we test both.",
  },
  {
    num: "03",
    heading: "We conduct blind listening tests",
    body: "Voice quality is subjective, so we don't rely solely on our own ears. We run blind listening panels — typically five non-technical listeners who don't know which tool produced which clip — and ask them to rank naturalness. This removes confirmation bias from our quality assessments. ElevenLabs consistently wins these tests. When it doesn't, we say so.",
  },
  {
    num: "04",
    heading: "We test voice cloning properly",
    body: "Instant cloning and professional cloning are different products. We test both, using source recordings of varying quality and length. We evaluate how well a clone handles novel sentences the original speaker never said, how it holds up on long-form content, and where the seams show. Vendor marketing consistently overstates cloning quality — our job is to set realistic expectations.",
  },
  {
    num: "05",
    heading: "We evaluate the full product",
    body: "Pricing, rate limits, API documentation, customer support response times, export formats, integrations — these matter as much as voice quality for real production use. A tool that sounds great but has an opaque credit system or unreliable API is not a professional tool. We evaluate the whole experience.",
  },
  {
    num: "06",
    heading: "We update when things change",
    body: "AI voice tools move fast. PlayHT's voice quality in 2026 is meaningfully better than it was in 2024. ElevenLabs changes its pricing tiers. New tools appear. We update reviews when the product changes substantially, not on a fixed schedule. The 'Updated' date on every review reflects when we last re-tested, not when we last edited a sentence.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#ffffff" }}>
      {/* Header */}
      <div style={{ background: "#0f172a", color: "#ffffff", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <nav style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
            <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#94a3b8" }}>About</span>
          </nav>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
            }}
          >
            About{" "}
            <span style={{ color: "#3b82f6" }}>AI Voice Review</span>
          </h1>
          <p
            style={{
              fontSize: "19px",
              color: "#94a3b8",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "620px",
            }}
          >
            We are a team of content creators who needed AI voice tools and found
            the existing reviews unreliable. So we built the resource we wished existed.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* Who we are */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
            }}
          >
            Who we are
          </h2>
          <div style={{ fontSize: "16px", color: "#334155", lineHeight: 1.85 }}>
            <p style={{ margin: "0 0 18px" }}>
              The AI Voice Review team is a group of independent content creators — video producers,
              podcasters, and course builders — who have spent the past several years using AI voice
              tools as part of our own production workflows. We started reviewing because we were
              buying these tools ourselves and kept finding that published reviews either reflected
              affiliate relationships or were written by people who had never actually used the product
              beyond a five-minute free trial.
            </p>
            <p style={{ margin: "0 0 18px" }}>
              We have collectively spent thousands of hours and significant real money testing
              ElevenLabs, Murf, PlayHT, Descript, Castmagic, LOVO, and a range of other tools across
              real production projects — not just comparison scripts. Our ElevenLabs review, for
              example, reflects experience across the free tier, Starter, Creator, and Pro plans,
              with genuine audiobook narration, podcast episode production, API integration, and
              professional voice cloning use cases.
            </p>
            <p style={{ margin: 0 }}>
              We are not affiliated with any of the companies we review. We earn commission through
              affiliate links when readers sign up for tools we recommend — this is disclosed on every
              page where it applies, and it does not influence our ratings or verdicts. We have given
              negative verdicts to tools whose affiliate programmes offer higher commissions than the
              tools we actually recommend.
            </p>
          </div>
        </section>

        {/* Trust signals strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            background: "#e2e8f0",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "60px",
          }}
        >
          {[
            { stat: "6+", label: "Tools reviewed" },
            { stat: "20+", label: "Articles published" },
            { stat: "Real", label: "Paid plans tested" },
            { stat: "Blind", label: "Listening panels" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#f8fafc",
                padding: "24px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                  marginBottom: "4px",
                }}
              >
                {item.stat}
              </div>
              <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testing methodology */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}
          >
            How we test
          </h2>
          <p style={{ fontSize: "16px", color: "#64748b", margin: "0 0 36px", lineHeight: 1.6 }}>
            Our testing process is designed to replicate real production conditions, not idealised demos.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {testingSteps.map((step) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  paddingBottom: "28px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#3b82f6",
                    letterSpacing: "0.08em",
                    flexShrink: 0,
                    paddingTop: "3px",
                    minWidth: "28px",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      margin: "0 0 10px",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    {step.heading}
                  </h3>
                  <p style={{ margin: 0, fontSize: "15px", color: "#475569", lineHeight: 1.75 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial standards */}
        <section style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
            }}
          >
            Editorial standards
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {[
              {
                heading: "No sponsored rankings",
                body: "We do not accept payment to rank tools higher, write positive reviews, or include tools in best-of lists. Every ranking on this site reflects our independent assessment.",
              },
              {
                heading: "Affiliate relationships are disclosed",
                body: "We earn affiliate commission on some tools we review. This is disclosed on every relevant page. Our commission rates vary by tool — we have recommended lower-commission tools over higher-commission alternatives when the lower-commission tool was genuinely better.",
              },
              {
                heading: "We correct mistakes",
                body: "Pricing changes. Products update. When something we've written becomes inaccurate, we update the review rather than leaving outdated information indexed. Every review carries a last-tested date.",
              },
              {
                heading: "We apply the same criteria to every tool",
                body: "Voice naturalness, value for money, cloning quality, ease of use, and feature depth are assessed using the same framework across every review. We don't adjust our criteria to make a preferred tool look better.",
              },
            ].map((item) => (
              <div
                key={item.heading}
                style={{
                  padding: "20px 24px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                }}
              >
                <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>
                  {item.heading}
                </h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          style={{
            background: "#0f172a",
            borderRadius: "12px",
            padding: "36px",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "1.3rem",
              fontWeight: 700,
              margin: "0 0 12px",
              letterSpacing: "-0.01em",
            }}
          >
            Get in touch
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: 1.7, margin: "0 0 20px" }}>
            For editorial questions, corrections, or to flag outdated information, reach us at{" "}
            <a
              href="mailto:editorial@aivoicereview.com"
              style={{ color: "#3b82f6", textDecoration: "none", fontWeight: 500 }}
            >
              editorial@aivoicereview.com
            </a>
            . For general enquiries:{" "}
            <a
              href="mailto:hello@aivoicereview.com"
              style={{ color: "#3b82f6", textDecoration: "none", fontWeight: 500 }}
            >
              hello@aivoicereview.com
            </a>
            .
          </p>
          <p style={{ color: "#64748b", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
            AI Voice Review is operated by Watch This Capital Ltd, a company registered in England and Wales.
          </p>
        </section>

      </div>
    </div>
  );
}
