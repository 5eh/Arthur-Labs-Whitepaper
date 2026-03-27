import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "References",
  description:
    "Academic and industry references cited in the Arthur Labs Whitepaper, including research on blockchain, smart contracts, and real-world assets.",
  alternates: { canonical: "/references/" },
};

export default function ReferencesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>References</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">References</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <ul className="list-none space-y-6 pl-0">
          <li>
            <strong>Tim P. Morris, Ian R. White, Michael J. Crowther</strong>{" "}
            (2019). Using simulation studies to evaluate statistical methods.{" "}
            <em>Statistics in Medicine</em>, 38(11), 2074-2102. DOI:
            10.1002/sim.8086
          </li>
          <li>
            <strong>Janine Siepe, Alfred Zimmermann</strong> (2024). Blockchain
            Technology in Supply Chain Management: A Systematic Literature
            Review. <em>Logistics</em>, 8(2), 40. DOI:
            10.3390/logistics8020040
          </li>
          <li>
            <strong>CoinGecko</strong> (2024). Rise of Real-World Assets in
            Crypto. Retrieved from
            https://assets.coingecko.com/reports/Research/RWA-Report-2024-Rise-of-Real-World-Assets-in-Crypto.pdf
          </li>
          <li>
            <strong>CoinMarketCap</strong> (2024). Oracle Validators: Connecting
            Blockchain to the Real World. CoinMarketCap Alexandria. Retrieved
            from
            https://coinmarketcap.com/academy/article/562b164f-fdab-4ef1-bccd-6213ac389124
          </li>
          <li>
            <strong>
              Cagigas, D., Clifton, J., Diaz-Fuentes, D., &amp;
              Fern&aacute;ndez-Guti&eacute;rrez, M.
            </strong>{" "}
            (2023). Blockchain-Based Market Design for Digital Platforms:
            Challenges and Opportunities.{" "}
            <em>Journal of Industrial and Business Economics</em>, 50(2),
            321-346. DOI: 10.1007/s40812-022-00210-8
          </li>
          <li>
            <strong>Wikipedia</strong> (2025). Zero-knowledge proof. Retrieved
            from https://en.wikipedia.org/wiki/Zero-knowledge_proof
          </li>
          <li>
            <strong>Chakravarty, S., &amp; Bartoletti, M.</strong> (2023).
            Account Abstraction: Paradigms and Implementations. arXiv preprint.
            Retrieved from https://arxiv.org/pdf/2309.00448
          </li>
          <li>
            <strong>Fanti, G., Katz, J., &amp; Tomescu, A.</strong> (2020).
            Proof of Stake Blockchain Protocols. Stanford Blockchain Conference
            2020. Retrieved from
            http://tselab.stanford.edu/downloads/PoS_LC_SBC2020.pdf
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/deployments">
          <Button variant="outline">Prev: Deployments</Button>
        </Link>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
