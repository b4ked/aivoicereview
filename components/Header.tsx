"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

const headerCta = siteConfig.headerCta ?? { label: "Compare Tools", href: "/compare" };

const navLinks = [
  { label: "Reviews", href: "/reviews" },
  { label: "Compare", href: "/compare" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Guides", href: "/guides" },
  { label: "Best Of", href: "/best-of" },
];

const blogDropdownLinks = [
  { label: "All Posts", href: "/blog" },
  { label: "Reviews", href: "/blog?category=review" },
  { label: "Comparisons", href: "/blog?category=comparison" },
  { label: "Guides", href: "/blog?category=guide" },
  { label: "Best Of", href: "/blog?category=best-of" },
  { label: "Opinions", href: "/blog?category=opinion" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#0f172a",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
          <span
            style={{
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            AI Voice Review
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: "6px",
                transition: "color 0.1s, background 0.1s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA button */}
          <a
            href={headerCta.href}
            style={{
              background: "#3b82f6",
              color: "#ffffff",
              padding: "7px 16px",
              borderRadius: "7px",
              fontWeight: 600,
              fontSize: "13px",
              textDecoration: "none",
              marginLeft: "8px",
              whiteSpace: "nowrap",
            }}
          >
            {headerCta.label}
          </a>

          {/* Blog with dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setBlogDropdownOpen(true)}
            onMouseLeave={() => setBlogDropdownOpen(false)}
          >
            <Link
              href="/blog"
              style={{
                color: blogDropdownOpen ? "#ffffff" : "#94a3b8",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: "6px",
                transition: "color 0.1s, background 0.1s",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: blogDropdownOpen ? "rgba(255,255,255,0.08)" : "transparent",
              }}
            >
              Blog
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
                style={{
                  transform: blogDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.15s",
                  marginTop: "1px",
                }}
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </Link>

            {blogDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  background: "#1e293b",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "6px",
                  minWidth: "160px",
                  zIndex: 200,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                {blogDropdownLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "block",
                      color: "#cbd5e1",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "8px 12px",
                      borderRadius: "6px",
                      transition: "background 0.1s, color 0.1s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#cbd5e1";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            color: "#ffffff",
          }}
          className="mobile-hamburger"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "#0f172a",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "12px 24px 20px",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: "block",
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href={headerCta.href}
            style={{
              display: "block",
              background: "#3b82f6",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "8px",
              marginBottom: "4px",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {headerCta.label}
          </a>

          {/* Blog section in mobile */}
          <div>
            <button
              onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                fontSize: "15px",
                fontWeight: 500,
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
              }}
            >
              Blog
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transform: mobileBlogOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.15s" }}
              >
                <path d="M2 4l4 4 4-4" strokeLinecap="round" />
              </svg>
            </button>
            {mobileBlogOpen && (
              <div style={{ paddingLeft: "16px" }}>
                {blogDropdownLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "block",
                      color: "#64748b",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 500,
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
