import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Voice Review — Independent AI Voice Generator Reviews",
    template: "%s | AI Voice Review",
  },
  description:
    "Independent, hands-on reviews of AI voice generation tools. We test ElevenLabs, Murf, PlayHT and more — with real content, real pricing breakdowns, and honest verdicts.",
  metadataBase: new URL("https://aivoicereview.com"),
  openGraph: {
    siteName: "AI Voice Review",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Voice Review" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
