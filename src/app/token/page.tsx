import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "ART Token",
  description:
    "ART Token overview — VAU native token, token utility, economics, sale details, and the platform revenue model for the Arthur Labs VAULT blockchain.",
};

export default function TokenPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>ART Token</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">ART Token</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Token Overview</h2>
        <p>
          The VAULTs native token is VAU, which is used as the chains native
          currency. The base currency has a fixed initial offering amount of
          1,000,000,000 VAU tokens. Any initial unpurchased tokens during the
          series of initial launches are permanently burned. Future tokens are
          generated through network block validation, or PoS.
        </p>
        <p>
          Ideally, there are paired stablecoins with VAU to ensure consumer usage
          without risk to price slippage or inflation.
        </p>
        <p>
          The initial coin offering is set to have Arthur Labs DAO ownership
          tokens spread across Ethereum, Polygon, Base, and various platforms.
          All holders who purchase initial VAU tokens will receive 30% additional
          tokens for their initial purchasing.
        </p>
        <p>
          Currently, as of Jan 15th, Arthur Labs is legally structured as an
          S-Corp. However, with the initial offering, Arthur Labs will be
          restructured into a Wyoming DAO LLC with its correctly allocated
          percentage ownership.
        </p>
        <p>
          However with the blockchain completing development, the legal
          infrastructure will change from an S-Corp to become a DAO. This is due
          to the current lack of decentralization in the network, and need node
          operators and validators to begin voting in DAO governance.
        </p>
        <p>
          Staked tokens act as validator nodes. Nodes will be required to hold at
          least 500 VAU tokens in order to become an operator and validator.
          These pools of VAU work towards validating transactions and optionally
          operating to validate authenticity of a specific transaction. Based on
          their activity in validations and good actions of a node, they will
          receive additional tokens as rewards.
        </p>
        <p>
          Arthur Labs would like to see a future similar to Polkadots parachain
          mechanism, where side chains can exist in harmony. Each parachain hosts
          their own blockchain cryptocurrency, while being functionally exchanged
          in other networks in its ecosystem. The VAULT would like to perform a
          similar act, where standalone networks can join this network and use its
          core infrastructure to generate a new blockchain dedicated towards real
          world utility.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Token Utility</h2>
        <p>
          The intended future purpose of the token is to validate transactions,
          giving staking rewards to long term holders. Additionally, the token
          aims to be used as primary form of payment across Arthur Labs native
          marketplaces and commerce platforms. Token holders would receive rights
          to earnings across marketplaces and would act as a percentage ownership
          of the chain and DAO.
        </p>
        <p>
          These tokens additionally can be exchanged for ART.A shares, which can
          then be used as operational voting ownership and governance.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Token Economics</h2>
        <p>
          Marketplaces produced from the DEAN and ROSE systems will have a joint
          earnings reward for both parties transacting in a trade agreement.
          These earnings will be ART.B token, which can be utilized inside of the
          parachain, or sold for open market value.
        </p>
        <p>
          A treasury will be hosted additionally to incentivize RWG, RWS, and RWD
          development inside of Arthur Labs ecosystem, as well as layered
          applications.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Token Sale Details
        </h2>
        <p>
          VAU tokens are available in the Polygon and Ethereum main network for
          the initial coin offering purchase. Both of these contracts will store
          the initial owners address and will be saved until the test network and
          main network is released, there the holders can stake and continue
          their interest in Arthur Labs.
        </p>
        <p>
          Initial token sale revenue is used to hire and onboard developers and
          marketing agents to continue the expansion of the ecosystem. Launching
          live marketplaces available in Ethereum and Polygon.
        </p>
        <p>
          Users will additionally receive VAULT tokens as they transact inside of
          the existing marketplaces.
        </p>
        <p>
          Additional tokens will be distributed to bounty hunters and community
          in forms of Airdrops for their engagement and value.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Platform Revenue Model
        </h3>
        <p>
          Every marketplace produced in both DEAN and ROSE is aimed to have a
          targeted marketplace owner in a standalone EVM compatible chain.
          Additionally, marketplaces are produced to only be viable regionally.
          Ideally, Arthur Labs hosts and maintains a series of platforms across
          leading chains, like Ethereum, Solana, Sui, Rootstock, Polkadot, and
          Cardano.
        </p>
        <p>
          Revenue generated from the centrally hosted chains will be invested
          into building the larger ecosystem.
        </p>
        <p>
          Generally speaking, Arthur Labs will aim to receive 2.5% transaction
          fees for product sell contracts to be generated into the marketplace +
          a flat 0.25 fee. Then an additional 2.5% and 0.25 is charged to the
          contract purchaser, with a final 2.5% and 0.25 final charge for both
          parties during the payment proxy stage.
        </p>
        <p>
          For instance, a 20.00 item will earn a total of 10% in transaction
          fees, and a 1.00 flat fee, as both parties pay 5% and 0.50. Earning a
          15% margin.
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
