import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "Deployments",
  description:
    "Arthur Labs initial marketplace deployments across Polygon, Optimism, Ethereum, Arbitrum, and Rootstock blockchain ecosystems.",
};

export default function DeploymentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Deployments</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">
        Additional Notes &amp; Deployments
      </h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Initial Marketplace Deployments
        </h2>
        <p>
          As of January 2025, Arthur Labs is nearing completion of the demo
          application with full Web3 functionality. The strategic deployment
          across multiple blockchain ecosystems maximizes accessibility while
          leveraging the unique strengths of each network. Arthur Labs will
          launch in the following ecosystems:
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Polygon</h3>
        <p>
          Polygon&apos;s ecosystem stands out for its commitment to
          zero-knowledge cryptography and cost-efficient transactions, making it
          ideal for high-frequency marketplace activities. Their extensive
          developer tooling and robust infrastructure provide Arthur Labs with
          the necessary framework to implement advanced privacy features and
          scalable solutions. The network&apos;s dedication to ZK technology
          aligns perfectly with Arthur Labs&apos; vision for secure, private
          consumer data handling in decentralized commerce.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Optimism</h3>
        <p>
          Optimism&apos;s innovative approach to Layer 2 scaling through
          optimistic rollups offers Arthur Labs the ability to process large
          volumes of marketplace transactions with minimal fees. Their
          established presence in the DeFi ecosystem provides a ready audience
          for real-world commerce applications. The platform&apos;s dedication to
          public goods funding also aligns with Arthur Labs&apos; mission to
          democratize marketplace access. Currently, Arthur Labs utilizes the
          opBNB Testnet for development and testing, demonstrating the viability
          of the platform&apos;s architecture.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Ethereum</h3>
        <p>
          As the foundation of decentralized applications, Ethereum provides
          Arthur Labs with unparalleled security and network effects. The
          ecosystem&apos;s maturity and widespread adoption make it essential for
          establishing credibility and accessing the largest possible user base
          for marketplace deployment. Ethereum&apos;s upcoming developments in
          scaling and efficiency will further enhance marketplace functionality.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Arbitrum</h3>
        <p>
          Arbitrum&apos;s Layer 2 solution offers Arthur Labs the perfect balance
          of Ethereum&apos;s security with improved throughput and reduced costs.
          The platform&apos;s compatibility with existing Ethereum tools and
          infrastructure allows for seamless deployment of marketplace contracts
          while maintaining high performance and low transaction fees. This makes
          it particularly suitable for marketplaces with high transaction
          volumes.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Rootstock</h3>
        <p>
          Rootstock&apos;s unique position as a Bitcoin sidechain with smart
          contract capabilities opens up unprecedented opportunities for Arthur
          Labs. As a leader in Bitcoin-based EVM deployments, Rootstock provides
          access to the Bitcoin ecosystem&apos;s massive user base and liquidity.
          This integration is particularly valuable for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Global Reach:</strong> Enabling marketplace deployment in
            regions where Bitcoin adoption is high, particularly in developing
            economies.
          </li>
          <li>
            <strong>Bitcoin Integration:</strong> Leveraging Bitcoin&apos;s
            network effect while providing smart contract functionality.
          </li>
          <li>
            <strong>Regional Markets:</strong> Facilitating localized marketplace
            creation in crypto-forward jurisdictions like El Salvador and
            Liberland.
          </li>
          <li>
            <strong>Financial Inclusion:</strong> Providing entrepreneurial tools
            to regions with limited access to traditional financial
            infrastructure.
          </li>
        </ul>
        <p>
          This multi-chain deployment strategy ensures that Arthur Labs can serve
          diverse market needs while leveraging each network&apos;s unique
          advantages. By maintaining presence across these key ecosystems, we
          create a robust and accessible platform for global commerce, enabling
          entrepreneurs worldwide to participate in the decentralized economy
          regardless of their technical expertise or geographic location.
        </p>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/token">
          <Button variant="outline">Prev: ART Token</Button>
        </Link>
        <Link href="/references">
          <Button>Next: References</Button>
        </Link>
      </div>
    </div>
  );
}
