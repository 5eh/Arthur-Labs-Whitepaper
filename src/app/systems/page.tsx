import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "Provided Systems",
  description:
    "Arthur Labs ecosystem systems — DEAN digital bazaar factory, ROSE Web2 marketplace builder, QUINN marketing automation, SUSAN application builder, and BUILDER website development.",
};

export default function SystemsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Provided Systems</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Provided Systems</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <h2 className="text-2xl font-semibold mt-8 mb-4">DEAN System</h2>
        <p>
          DEAN is a digital marketplace factory for building two-sided
          marketplaces in Web3 compatible chains. Throughout or initial research
          phase in a previous Decentralized Courier Protocol (DCP), Arthur Labs
          found that most generalized marketplaces contain approximately 25-30
          boilerplate components necessary for any marketplace to function,
          including explore sections, checkout processes, messaging features,
          profiles, and other various UI components.
        </p>
        <p>
          DEAN essentially builds out a dynamic and variable based approach for
          building any RWG, RWS or RWD marketplace by streamlining the component
          implementation, database connection, and other configurations essential
          to launching a marketplace.
        </p>
        <p>
          Arthur Labs first built out the DEAN system prior to the ROSE system,
          as DEAN can quickly be modified and iterated from a Web3 marketplace
          and into Web2 marketplaces by simply changing account registration,
          payment checkouts, and database integration.
        </p>
        <p>
          DEAN aims to become globally accessible and open source after initial
          platforms are generated on various EVM compatible chains. Currently,
          DEAN has been proven throughout various Polkadot, Binance, and Movement
          Labs to reduce the time to market to demo a platform from around 6-12
          months to less than 4 days.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">ROSE System</h2>
        <p>
          ROSE is an abstracted product factory line focused on building
          Web2-based marketplaces. These act as independent agencies for Arthur
          Labs, which are contracted and licensed to startups who want to build
          their own marketplace.
        </p>
        <p>
          These act as revenue streams for Arthur Labs ecosystem, which aims to
          primarily fund the DAO and various expenditures the organization faces.
          As ROSE develops further into a BYO MaaS, there is an intent to
          partner with ChaiBuilder to build an interactive platform that imports
          the components from DEAN and configuration system to automate
          marketplace development for the creator.
        </p>
        <p>
          Long term, both ROSE and DEAN aims to build a Lego-like architecture
          so any developer or builder can access the platform and deploy a new
          marketplace concept quickly, while Arthur Labs receives percentage
          ownership and revenue from each transaction.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">QUINN System</h2>
        <p>
          QUINN is a deployable feature for any Arthur Labs marketplace, in which
          is a form replication system that refactors and formats marketplace
          listings into various social media accounts.
        </p>
        <p>
          This ultimately streamlines marketing costs for small businesses so
          that they can easily share and post their listings through a list of
          professionally designed media cards, in which once the business owner
          connects their business accounts (Instagram, Meta, X, Discord,
          Telegram, Element, Facaster, and any of social platform that takes in a
          similar set of form inputs).
        </p>
        <p>
          The goal with implementing QUINN with the marketplaces is so
          entrepreneurs forming their own businesses can increase their media
          exposure by over 500% while reducing the time for manual replication by
          80%.
        </p>
        <p>
          This system is permanently free in the ecosystem but may be optionally
          licensed out to other blockchain networks.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">SUSAN System</h2>
        <p>
          SUSAN is a conjoint effort from three companies, an anonymous serial
          startup agency in Texas, and Frank Dierolf, a contractor and freelancer
          based in Germany, and Arthur Labs. SUSAN is a comprehensive application
          and tooling system that follows a sequential list of tasks to build a
          thorough application.
        </p>
        <p>
          Firstly, SUSAN asks a client what business concept they have, and if
          that is under an existing company, or to tailor its designs and code
          from scratch. After receiving the clients input, and various design
          references, the tool completes a deep research report about the
          business opportunity, and frameworks it should use. Once the report is
          concise and completed, it proceeds to generate a new repository for its
          code, likely using NextJS and Tailwind CSS.
        </p>
        <p>
          With a series of already integrated Model Context Providers (MCP),
          SUSAN proceeds to build out an application tailored to the design
          references and report analysis. Initially the application builds out
          the design schematics, then proceeds to build functions and necessary
          components to build an MVP. Once these sections are near completed,
          SUSAN continues on with MCP functionality by reading the clients API
          connections to various payment providers, database handlers, and other
          necessary APIs to build out the MVP.
        </p>
        <p>
          After its connections and completion, SUSAN then handles SEO
          optimization and various build changes. Finally, one of the three
          companies overviews and finalizes any core design changes or building
          changes and manually modifies the program to ensure proper
          functionality ready for MVP and production.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">BUILDER System</h2>
        <p>
          BUILDER is an Arthur Labs website builder, dedicated primarily to
          contract development work to various USA sites, but is globally
          accessible for work. Revenue generated from BUILDER proceeds to then
          fund the core development of the overall ecosystem, and any excess
          profits go into the token holders.
        </p>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/architecture">
          <Button variant="outline">Prev: Architecture</Button>
        </Link>
        <Link href="/token">
          <Button>Next: ART Token</Button>
        </Link>
      </div>
    </div>
  );
}
