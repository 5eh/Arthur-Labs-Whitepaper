import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "HIIE System",
  description:
    "Hyper Intelligent Innovation Engine — a multi-agent AI system that transforms human intent into physically buildable, ethically validated, and patent-ready engineered outputs.",
  alternates: { canonical: "/token/" },
};

export default function HIIEPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>HIIE System</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">HIIE System</h1>
      <p className="text-muted-foreground mb-8">
        Hyper Intelligent Innovation Engine
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <p>
          The Hyper Intelligent Innovation Engine (HIIE) is a novel class of AI
          system developed under Arthur Labs in partnership with Registered
          Agentics. HIIE transforms raw human intent into physically realizable,
          ethically validated, and commercially viable engineered outputs. It is
          not a chatbot or code assistant &mdash; it is a complete innovation
          pipeline that takes the rawest form of human ambition and, through
          recursive reasoning, multi-agent collaboration, and physics-grounded
          validation, produces outputs that can enter the physical world.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Multi-Agent Architecture
        </h2>
        <p>
          Each HIIE project spawns a full team of specialized AI agents, each
          with a distinct engineering role:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Theoretical Engineer</strong> &mdash; first-principles
            reasoning and conceptual design across hardware, materials, and
            manufacturing domains
          </li>
          <li>
            <strong>Materials Engineer</strong> &mdash; material selection
            optimized for US-accessible sourcing, cost, and environmental
            lifecycle
          </li>
          <li>
            <strong>Manufacturing Process Engineer</strong> &mdash; factory line
            design, batch optimization, yield modeling, and quality control
          </li>
          <li>
            <strong>Research Group</strong> &mdash; three concurrent agents
            performing live retrieval from patent databases (USPTO, EPO, WIPO),
            academic papers, and standards bodies
          </li>
          <li>
            <strong>Patent Strategist</strong> &mdash; real-time global patent
            landscape monitoring, novelty window identification, and provisional
            claim drafting
          </li>
          <li>
            <strong>Feasibility Manager</strong> &mdash; scores all outputs
            against technical, manufacturing, commercial, and timeline
            feasibility thresholds
          </li>
          <li>
            <strong>Ethics Officer</strong> &mdash; reviews for dual-use risk,
            environmental impact, and societal consequences with immutable audit
            logging
          </li>
          <li>
            <strong>Project Manager</strong> &mdash; coordinates all agents,
            tracks milestones, and manages resource allocation
          </li>
        </ul>
        <p>
          A persistent AI co-director named Arthur maintains long-term project
          memory across sessions, flags output drift, and advocates for the
          user&apos;s original intent throughout the process.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Anti-Slop Validation
        </h2>
        <p>
          HIIE treats the prevention of AI hallucination as an architectural
          requirement. Every output undergoes three layers of validation before
          delivery:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Recursive Validation with Divergence Enforcement</strong>{" "}
            &mdash; outputs are iteratively self-critiqued and cross-challenged
            between agents. When outputs converge too closely (cosine similarity
            &ge; 0.92), the system forces divergent reasoning to prevent
            circular reinforcement of errors.
          </li>
          <li>
            <strong>Human Perspective Injection</strong> &mdash; at defined
            checkpoints, HIIE generates both a layperson summary and
            domain-expert critique of every technical output. A feasibility
            score is computed across technical, physical, commercial, and
            ethical dimensions. Outputs scoring below threshold are rejected.
          </li>
          <li>
            <strong>Physical Ground-Truth Anchoring</strong> &mdash; material
            properties are sourced from NIST and ASM International databases,
            electrical designs are validated against PySpice simulation,
            mechanical designs are stress-tested in FreeCAD, and chemistry
            outputs are cross-referenced against PubChem before feasibility is
            asserted.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Ethics Governance
        </h2>
        <p>
          Ethics is embedded as a continuous layer throughout HIIE&apos;s
          pipeline, not a terminal filter. Six core pillars govern all outputs:
          harm prevention, environmental responsibility, full transparency,
          human primacy, equitable design, and an immutable audit trail. HIIE
          cannot self-modify its ethics framework &mdash; this layer is
          protected from all instruction overrides. Designs for weapons systems,
          biological or chemical weapons, mass surveillance, or any system whose
          primary purpose is to cause physical harm are architecture-level
          constraints that cannot be overridden by any user or instruction.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Output Types</h2>
        <p>HIIE produces complete engineering deliverable packages:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Technical specification sheets with dimensions, tolerances, and
            material callouts
          </li>
          <li>
            Bills of materials with US sourcing, costs, and live supplier
            availability
          </li>
          <li>
            Provisional patent application drafts with claims, abstracts, and
            technical drawings
          </li>
          <li>
            Schematic and CAD files (KiCad, FreeCAD, SVG) auto-generated by
            domain agents
          </li>
          <li>
            Viability reports with feasibility scores, cost estimates, and risk
            matrices
          </li>
          <li>
            Environmental impact reports with carbon footprint analysis and
            net-positive pathways
          </li>
          <li>Manufacturing process flow diagrams and factory line designs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Reference Use Cases
        </h2>
        <p>
          HIIE&apos;s intended scope spans precision instrumentation to
          large-scale manufacturing:
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Localized Atomic Force Microscope</strong> &mdash; a
            cantilever-based AFM within a 3&times;3 ft envelope with remote
            WebRTC control, including full mechanical CAD, PCB schematic, BOM,
            and provisional patent draft.
          </li>
          <li>
            <strong>Novel vRAM Architecture</strong> &mdash; SRAM-on-DRAM
            stacking alternatives using domestically available materials,
            targeting bandwidth &gt; 1 TB/s at &lt; 30% of current HBM2e
            material cost.
          </li>
          <li>
            <strong>GPU Batch Manufacturing System</strong> &mdash; full factory
            line design including wafer handling, die bonding, burn-in testing,
            yield optimization, and facility layout CAD.
          </li>
          <li>
            <strong>Environmentally Net-Positive AI Compute Machine</strong>{" "}
            &mdash; hardware specification targeting a positive carbon offset
            through waste heat capture, on-site solar generation, and renewable
            integration.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Integration with Arthur Labs Ecosystem
        </h2>
        <p>
          HIIE&apos;s outputs connect directly into the broader Arthur Labs
          infrastructure:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>DEAN / ROSE Integration</strong> &mdash; entrepreneurs use
            HIIE to design a physical product, then deploy a marketplace for
            that product through DEAN or ROSE, creating a complete
            idea-to-storefront pipeline.
          </li>
          <li>
            <strong>VAULT Blockchain Registration</strong> &mdash;
            HIIE-generated designs, patent claims, and engineering outputs can
            be timestamped and verified through the VAULT&apos;s oracle
            validator model, providing immutable proof of invention origin and
            design authenticity.
          </li>
          <li>
            <strong>Smart Contract Standards</strong> &mdash; the physical goods
            produced from HIIE designs are governed by RWG contract standards on
            the VAULT, ensuring legally enforceable trade agreements for
            AI-engineered products.
          </li>
          <li>
            <strong>QUINN Marketing</strong> &mdash; products invented through
            HIIE and listed on DEAN/ROSE marketplaces flow into QUINN for
            automated multi-platform marketing distribution.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Infrastructure and Deployment
        </h2>
        <p>
          HIIE Phase 1 runs on dedicated Mac Mini M4 Pro nodes hosted at
          Registered Agentics facilities. Apple Silicon&apos;s unified memory
          architecture eliminates the PCIe bandwidth bottleneck present in
          traditional configurations, enabling efficient multi-agent inference
          on a single node. Builder and Enterprise subscribers receive a
          dedicated machine that accumulates trained specialist model adapters
          over the contract term &mdash; the hardware asset appreciates through
          accumulated project intelligence.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Platform Revenue Model
        </h3>
        <p>
          Every marketplace produced in both DEAN and ROSE is aimed to have a
          targeted marketplace owner in a standalone EVM compatible chain.
          Ideally, Arthur Labs hosts and maintains a series of platforms across
          leading chains, like Ethereum, Solana, Sui, Rootstock, Polkadot, and
          Cardano.
        </p>
        <p>
          Generally speaking, Arthur Labs will aim to receive 2.5% transaction
          fees for product sell contracts to be generated into the marketplace +
          a flat $0.25 fee. Then an additional 2.5% and $0.25 is charged to the
          contract purchaser, with a final 2.5% and $0.25 final charge for both
          parties during the payment proxy stage.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          HIIE Innovation Engine Revenue
        </h3>
        <p>
          In addition to marketplace transaction fees, the HIIE system
          introduces a subscription-based revenue stream for AI-driven invention
          services:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold">Tier</th>
                <th className="text-left py-2 pr-4 font-semibold">Price</th>
                <th className="text-left py-2 font-semibold">Includes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2 pr-4">Explorer</td>
                <td className="py-2 pr-4">$299/month</td>
                <td className="py-2">
                  5 projects/month, core specifications + BOM + viability report
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Builder</td>
                <td className="py-2 pr-4">$999/month</td>
                <td className="py-2">
                  20 projects/month, full output package + patent draft +
                  dedicated Mac Mini at Registered Agentics
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Enterprise</td>
                <td className="py-2 pr-4">Custom</td>
                <td className="py-2">
                  Unlimited projects, dedicated agent configuration, white-label
                  output, SLA, Registered Agentics hardware contract
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Developer API</td>
                <td className="py-2 pr-4">$0.05/token</td>
                <td className="py-2">
                  Pay-per-use pipeline access for third-party integrations
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Builder and Enterprise subscribers receive a dedicated Mac Mini M4 Pro
          at Registered Agentics facilities. After the contract year-end, the
          machine is physically transferred to the client &mdash; carrying not
          just the hardware, but twelve months of trained specialist model
          adapters representing accumulated project intelligence. Revenue from
          HIIE subscriptions is reinvested into VAULT blockchain development,
          HIIE model improvements, and ecosystem expansion.
        </p>
        <p>
          A detailed technical specification of HIIE&apos;s architecture, agent
          delegation framework, resource economy, and fine-tuning methodology is
          available in the companion HIIE Technical Whitepaper.
        </p>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/systems">
          <Button variant="outline">Prev: Provided Systems</Button>
        </Link>
        <Link href="/deployments">
          <Button>Next: Deployments</Button>
        </Link>
      </div>
    </div>
  );
}
