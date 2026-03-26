import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Whitepaper | Arthur Labs Inc.",
    template: "%s | Arthur Labs Inc.",
  },
  description:
    "View the Arthur Labs Whitepaper in a clean, minimalist PDF viewer with a black background. Learn about Arthur Labs and their innovations in blockchain commerce.",
  keywords: [
    "Arthur Labs",
    "whitepaper",
    "blockchain",
    "commerce",
    "web3",
    "pdf viewer",
  ],
  authors: [{ name: "Arthur Labs" }],
  openGraph: {
    title: "Whitepaper | Arthur Labs Inc.",
    description:
      "View the Arthur Labs Whitepaper in a clean, minimalist PDF viewer with a black background.",
    type: "website",
    url: "https://whitepaper.arthurlabs.net",
    siteName: "Arthur Labs Inc.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitepaper | Arthur Labs Inc.",
    description:
      "View the Arthur Labs Whitepaper in a clean, minimalist PDF viewer with a black background.",
    creator: "@ArthurLabsDAO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://whitepaper.arthurlabs.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["TechArticle", "Report"],
                  "@id": "https://whitepaper.arthurlabs.net/#article",
                  headline: "Arthur Labs Whitepaper",
                  description:
                    "View the Arthur Labs Whitepaper. Learn about Arthur Labs and their innovations in blockchain commerce.",
                  author: {
                    "@id": "https://arthurlabs.net/#organization",
                  },
                  publisher: {
                    "@id": "https://arthurlabs.net/#organization",
                  },
                  inLanguage: "en",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://whitepaper.arthurlabs.net/#website",
                  url: "https://whitepaper.arthurlabs.net",
                  name: "Arthur Labs Whitepaper",
                  publisher: {
                    "@id": "https://arthurlabs.net/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
