import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal disclaimer for the Arthur Labs Whitepaper. Published solely for informational purposes.",
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Disclaimer</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Disclaimer</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Disclaimer</h2>
        <p>
          This Whitepaper is published solely for informational purposes and to
          receive feedback and comments from the public. Nothing in this
          Whitepaper should be treated or read as a guarantee or promise of how
          Arthur Labs&apos; business or its ecosystem will develop. This white
          paper outlines current plans, which could change at Arthur
          Labs&apos; discretion, and the success of which will depend on many
          factors outside Arthur Labs&apos; control, including market-based
          factors and factors within the technology and commerce industries,
          among others.
        </p>
        <p>
          Any statements about future events are based solely on Arthur Labs
          analysis of the issues described in this white paper. That analysis may
          prove to be incorrect.
        </p>
        <p>
          Finally, this Whitepaper is not finalized and is in continuous
          development. Future changes in references or additional content
          regarding infrastructural changes will be mentioned in the Whitepaper
          keynotes if they are major changes.
        </p>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
        <Link href="/introduction">
          <Button>Next: Introduction</Button>
        </Link>
      </div>
    </div>
  );
}
