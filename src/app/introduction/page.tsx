import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "Introduction to Arthur Labs — tools, blockchain, contract standards, and layered applications for decentralized commerce, services, and deliveries.",
  alternates: { canonical: "/introduction/" },
};

export default function IntroductionPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Introduction</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Introduction</h1>
      <p className="text-muted-foreground mb-8">
        Arthur Labs &mdash; The Blockchain built for the internet
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <h2 className="text-xl font-semibold mt-8 mb-4">Abstract</h2>
        <p>
          Most people believe Arthur Labs is developing just another Real World
          Asset (RWA) blockchain. However, Arthur Labs is building a suite of
          systems, applications, and a blockchain with smart contract standards
          to facilitate the means of exchanging physical products, services, and
          deliveries.
        </p>
        <p>
          Firstly, Arthur Labs is building out a suite of tools, which will be
          referred to as systems inside of this document. The first tool is
          called DEAN, a Digital Bazaar Factory. There are additional tools
          explained in the same section.
        </p>
        <p>
          Second, Arthur Labs is building a dedicated blockchain for these
          systems, which aims to be a hallmark of blockchain innovation. This
          blockchain is named (The) VAULT. All tools provided by the labs are
          open source and accessible to developers and entrepreneurs in this
          blockchain.
        </p>
        <p>
          A unique feature of this blockchain is its oracle validator model. This
          model allows for verification of the authenticity of the exchange,
          which provides the assurance of authentic agents inside the VAULT.
        </p>
        <p>
          Third, Arthur Labs is publishing open-source standards of its smart
          contracts prepared as standards to be legally binding for its users and
          entrepreneurs.
        </p>
        <p>
          Currently, Arthur Labs has developed out the commerce, service, and
          delivery contract factories that help developers and entrepreneurs
          deploy their businesses into Web3, reaping the advantages of
          authenticity and transparency that their corporate oligarchical
          competitors fail to provide.
        </p>
        <p>
          Finally, Arthur Labs intends to provide a series of decentralized
          applications into its blockchain that helps abstract the information
          that blockchain fundamentally have such as account abstraction, tools,
          gas-less experiences, simple sign-on features, and FIAT payments.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Tools and Systems
        </h2>
        <p>
          Arthur Labs has developed a comprehensive suite of tools designed to
          revolutionize how entrepreneurs and developers build and scale digital
          marketplaces. At its core, these systems automate the creation of
          two-sided bazaars and marketplaces through configurable components that
          can be deployed with either Web2 or Web3 functionality, depending on
          the builder&apos;s requirements.
        </p>
        <p>
          Through a unified global onboarding form, any entrepreneur can initiate
          the marketplace generation process, selecting their preferred
          blockchain infrastructure or traditional web architecture. Each
          marketplace can be configured for commerce, services, or delivery
          operations, enabling rapid expansion into various market segments.
        </p>
        <p>
          The system&apos;s primary advantage lies in its dramatic acceleration of
          development and deployment timelines. What traditionally takes 6-12
          months can now be accomplished in days, significantly reducing the
          barrier to entry for new market participants.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Blockchain</h2>
        <p>
          Arthur Labs is planning to build a standalone and independent
          blockchain for these new markets. By building an exceptionally low gas
          fee and fast processing network, various new marketplaces, bazaars and
          online stores can come into existence.
        </p>
        <p>
          This aims to be a WASM and Solidity accepted blockchain, with various
          resources and boilerplates to accelerate development time to test,
          debug and launch a product seamlessly.
        </p>
        <p>
          Using a unique PoS validation mechanism with an oracle validator model
          that is incentivized to verify and publish the completion of
          transactions and real world exchanges. Users can earn additional tokens
          for self verifying the completion of the service and publish this as
          receipts.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Contract Standards
        </h2>
        <p>
          Above the blockchain lies a series of contract standards to ensure
          trade agreements are treated as legally enforceable. As of November
          30th 2024, Arthur Labs has approximately a dozen smart contracts that
          are ready for testing and usage. These include multiple Factory
          Contracts (which generate contracts through tailored user inputs), for
          selling goods, purchasing goods, and payment proxy agreements when
          sellers fulfill provide physical delivery receipts for their commerce.
        </p>
        <p>
          The remaining include RWG contracts, RWS contracts, and RWD contracts.
          As Arthur Labs continue its development for these contracts, these
          boilerplates will remain open source and publicly accessible in
          Solidity and Rust through authorized organizations GitHub repositories.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Layered Applications
        </h2>
        <p>
          Going beyond the contract standards are the built-in and free to use
          (excluding gas fees + various transaction/exchange fees) dApps. The
          following is just a few applications planned for development:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Wallet Provider:</strong> The essential tool for consumers
            and token holders to be able to interact in Arthur Labs.
          </li>
          <li>
            <strong>Account Abstraction:</strong> This stores and provides
            consumers an easy to access wallet connection. Node providers inside
            will receive a sharded piece of the wallet, so the accounts are held
            encrypted on chain in fragments so that no other user or provider can
            access the consumers wallet.
          </li>
          <li>
            <strong>Fiat to token bridge:</strong> Arthur Labs additionally will
            provide a liquidity pool that lets user pay in their native currency,
            and the pool will facilitate the on chain transaction.
          </li>
          <li>
            <strong>Gas providers:</strong> Some dApps across Arthur Labs may be
            interested in using a tool in which the marketplace, or platform
            covers the transaction fees on behalf of the user for a more seamless
            experience.
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/disclaimer">
          <Button variant="outline">Prev: Disclaimer</Button>
        </Link>
        <Link href="/architecture">
          <Button>Next: Architecture</Button>
        </Link>
      </div>
    </div>
  );
}
