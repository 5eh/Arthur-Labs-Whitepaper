import Link from "next/link";
import { Button } from "~~/components/ui/button";
import { Download } from "lucide-react";

const sections = [
  {
    title: "Disclaimer",
    href: "/disclaimer",
    description: "Legal disclaimer and terms of this whitepaper.",
  },
  {
    title: "Introduction",
    href: "/introduction",
    description:
      "Tools, blockchain, contract standards, and layered applications overview.",
  },
  {
    title: "Architecture",
    href: "/architecture",
    description:
      "Layer 1-4 infrastructure: core functionality, oracle validation, native currency, contract standards.",
  },
  {
    title: "Provided Systems",
    href: "/systems",
    description:
      "DEAN, ROSE, QUINN, SUSAN, BUILDER, and HIIE system descriptions.",
  },
  {
    title: "HIIE System",
    href: "/token",
    description:
      "Hyper Intelligent Innovation Engine — AI-driven multi-agent innovation pipeline, use cases, and revenue model.",
  },
  {
    title: "Deployments",
    href: "/deployments",
    description:
      "Initial marketplace deployments across Polygon, Optimism, Ethereum, Arbitrum, and Rootstock.",
  },
  {
    title: "References",
    href: "/references",
    description: "Academic and industry references cited throughout.",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Arthur Labs Whitepaper
        </h1>
        <p className="text-sm text-muted-foreground mb-2">
          v1.1.0 &middot; April 2025 &middot; Watson Lewis-Rodriguez
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Arthur Labs is building a suite of systems, applications, and a
          blockchain with smart contract standards to facilitate the means of
          exchanging physical products, services, and deliveries. The Blockchain
          built for the internet.
        </p>
        <Link href="/Arthur_Labs_Whitepaper.pdf" target="_blank">
          <Button size="lg" className="rounded-full">
            <Download className="mr-2 h-4 w-4" />
            Download Original PDF
          </Button>
        </Link>
      </div>

      <div id="sections" className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <div className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors duration-200">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
