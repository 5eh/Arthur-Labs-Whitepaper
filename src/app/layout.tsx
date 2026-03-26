import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import Nav from "~~/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "~~/components/footer";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arthur Labs Whitepaper",
    template: "%s | Arthur Labs Whitepaper",
  },
  description:
    "Arthur Labs Whitepaper v1.1.0 — The Blockchain built for the internet. Learn about the VAULT blockchain, DEAN, ROSE, QUINN, SUSAN, and BUILDER systems for decentralized commerce.",
  keywords: [
    "Arthur Labs",
    "whitepaper",
    "blockchain",
    "VAULT",
    "decentralized commerce",
    "DEAN",
    "ROSE",
    "QUINN",
    "smart contracts",
    "Web3",
    "ART token",
    "oracle validation",
  ],
  authors: [{ name: "Watson Lewis-Rodriguez" }],
  openGraph: {
    title: "Arthur Labs Whitepaper",
    description:
      "The Blockchain built for the internet. Explore the architecture, systems, and token economics of Arthur Labs.",
    type: "website",
    url: "https://whitepaper.arthurlabs.net",
    siteName: "Arthur Labs Whitepaper",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Labs Whitepaper",
    description:
      "The Blockchain built for the internet. Explore the architecture, systems, and token economics of Arthur Labs.",
    creator: "@ArthurLabsDAO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="canonical" href="https://whitepaper.arthurlabs.net" />
        <link rel="manifest" href="/manifest.json" />
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
                    "Technical whitepaper detailing the VAULT blockchain architecture, smart contract standards, and ecosystem systems built by Arthur Labs.",
                  author: {
                    "@id": "https://arthurlabs.net/#organization",
                  },
                  publisher: {
                    "@id": "https://arthurlabs.net/#organization",
                  },
                  inLanguage: "en",
                  version: "1.1.0",
                  datePublished: "2025-04-19",
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
      <body
        className={`${unbounded.variable} ${inter.variable} antialiased
          transition-colors duration-300
          bg-white dark:bg-neutral-950
          text-zinc-900 dark:text-white`}
      >
        <div className="z-[9999] w-full flex fixed bottom-0 justify-end p-4">
          <Nav />
        </div>
        <main className="min-h-screen transition-colors duration-300 relative z-[1]">
          {children}
        </main>
        <div className="block relative z-[2]">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
