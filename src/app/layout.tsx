import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Arthur Labs Whitepaper | PDF Viewer",
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
    title: "Arthur Labs Whitepaper | PDF Viewer",
    description:
      "View the Arthur Labs Whitepaper in a clean, minimalist PDF viewer with a black background.",
    type: "website",
    siteName: "Arthur Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Labs Whitepaper | PDF Viewer",
    description:
      "View the Arthur Labs Whitepaper in a clean, minimalist PDF viewer with a black background.",
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
        <link rel="canonical" href="https://arthurlabs.net" />
      </head>
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
