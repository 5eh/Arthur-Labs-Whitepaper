import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~~/components/ui/button";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "VAULT blockchain architecture — Layer 1 through Layer 4 infrastructure including core functionality, oracle validation, token economics, and contract standards.",
};

export default function ArchitecturePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          Whitepaper
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Architecture</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Architecture</h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Layer 1 Infrastructure
        </h2>
        <p>
          The VAULT is deployed as a standalone Proof of Stake blockchain. At the
          time of v1.0.6 of this whitepaper, the primary focus has building the
          DEAN System, however with the system launch, revenue generated will
          fund the development process of the VAULT.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Core Functionality
        </h3>
        <p>
          The blockchain handles all applications built onto the VAULT. Each
          block holds dynamic and customized information about real-world
          activities, backed by oracle validators. Each block hosts typical
          transfers, as well as stores a list of oracles that act as the
          confirmation of a specific transaction. Oracles are users who manually
          review a transaction or authenticate a physical exchange, whether they
          prove delivery receipts in commerce marketplaces, or verify completions
          of physical services.
        </p>
        <p>
          The core accepted programming languages for contract deployment will be
          Solidity, and WASM.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Oracle Validation</h3>
        <p>
          The oracle validator model allows each user to incentivize authenticity
          exchange of a product, service or delivery distributed by contractually
          paying a third party individual to complete the service of validation
          of a real-world activity. For example:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Paying an automated node validator to authenticate a physical receipt
            of a product delivery
          </li>
          <li>
            Having a validator determines the quality and authenticity of a real
            world service and its resulting outcome
          </li>
          <li>
            Having a person view a completion of a construction of property or
            result of a photography service
          </li>
          <li>
            Having a worker at a logistics company confirm with a photo that a
            CDL truck driver is at the correct delivery location
          </li>
          <li>
            Signing a contract of fulfillment when delivering freight
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">Data Security</h3>
        <p>
          Zero-knowledge proof is optionally implemented for smart contract
          owners or users of an Arthur Labs bazaar, or optionally encrypting data
          through salt rounds. An oracle validator will need to be able to
          request proof of information upon request.
        </p>
        <p>
          The VAULT also has a mission to be on the frontline for encryption
          methods. Arthur Labs aims to partner with various quantum hacking
          prevention organizations like Quantum EVM.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Proof of Stake System
        </h3>
        <p>
          The VAULT implements a robust Proof of Stake (PoS) consensus mechanism
          that serves both transaction validation and oracle validation purposes.
          The system utilizes two distinct token classes within the ART ecosystem:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>&quot;VAU&quot;</strong> &mdash; Governing blockchain
            transactions and staked tokens work as standalone node operators
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          Transaction Validation
        </h4>
        <p>Stakers can participate in:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Block validation and consensus</li>
          <li>Fee earning from transaction processing</li>
          <li>Network security maintenance</li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          Oracle Validation Integration
        </h4>
        <p>
          The PoS system uniquely integrates with the oracle validation
          framework, allowing stakers to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Validate physical deliveries and real-world services</li>
          <li>Earn additional rewards for oracle services</li>
          <li>
            Participate in multi-signature validation for high-value transactions
          </li>
        </ul>
        <p>The economic model follows:</p>
        <p className="font-mono text-sm bg-muted p-3 rounded-lg">
          Total Rewards = Base Staking Reward + Transaction Fees + Oracle Service
          Fees
        </p>
        <p>
          Security measures include minimum staking requirements, slashing
          conditions, and timelocked withdrawals to ensure network integrity.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Token Economics</h3>
        <p>
          The native currency is &quot;ART&quot;, implementing a standard Proof
          of Stake mechanism with enhanced utility across the VAULT ecosystem.
          The token economics are designed to create a sustainable and
          value-driven ecosystem through multiple mechanisms:
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          Revenue Distribution
        </h4>
        <ul className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Direct Distribution to Staked Holders:</strong> Revenue from
            transaction fees and marketplace operations is distributed
            proportionally to staked token holders.
          </li>
          <li>
            <strong>Ecosystem Reinvestment:</strong> A portion of revenue is
            automatically reinvested into ecosystem development, funding
            technical improvements, security audits, and infrastructure
            expansion.
          </li>
          <li>
            <strong>Treasury Allocation:</strong> Strategic reserves are
            maintained in the treasury to ensure long-term ecosystem stability
            and fund future expansion initiatives.
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          Core Utility Functions
        </h4>
        <p>
          &quot;ART&quot; tokens serve multiple essential purposes within the
          ecosystem:
        </p>
        <ul className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Primary Transaction Currency:</strong> All VAULT transactions
            utilize &quot;ART&quot; as the primary medium of exchange.
          </li>
          <li>
            <strong>Gas Fee Mechanism:</strong> Network operations require
            &quot;ART&quot; for gas fees, ensuring efficient resource allocation
            and spam prevention.
          </li>
          <li>
            <strong>Staking Operations:</strong> Tokens serve as collateral for
            network validation, with stakers receiving rewards proportional to
            their contribution.
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          Privacy and Infrastructure
        </h4>
        <ul className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Zero-knowledge Implementation:</strong> Tokens fund the
            development and implementation of zero-knowledge proofs, enabling
            private transactions and data protection within the ecosystem.
          </li>
          <li>
            <strong>Global Node Network:</strong> Strategic investment in global
            node infrastructure ensures network reliability and performance.
          </li>
          <li>
            <strong>Security Enhancements:</strong> Continuous investment in
            security improvements and quantum-resistant cryptography research
            protects the network&apos;s long-term viability.
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          Distribution Mechanisms
        </h4>
        <ul className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Airdrops on activity:</strong> Targeted airdrops reward
            active ecosystem participants and drive adoption.
          </li>
          <li>
            <strong>Validator Rewards:</strong> Staking rewards are distributed
            according to a transparent APR schedule, encouraging network security
            and participation.
          </li>
          <li>
            <strong>Community Incentives:</strong> Engagement rewards encourage
            community participation and ecosystem growth through various
            contribution mechanisms.
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-6 mb-2">Supply Dynamics</h4>
        <p>
          The token supply follows a deflationary model with controlled emission:
        </p>
        <p className="font-mono text-sm bg-muted p-3 rounded-lg">
          Total Supply = Initial Fixed Supply &minus; Burned Tokens + Validator
          Rewards
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Technical Foundation
        </h3>
        <p>
          Layer 1 is developed with EVM compatibility and built for WASM
          applications and Rust contracts.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Layer 2 Infrastructure
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-3">Core Functionality</h3>
        <p>
          Layer 2 serves as the scaling solution that issues all of the smart
          contract standards that can be considered bilateral and legally binding
          to the participants of a transaction. It provides dynamic contract
          input data that allows for anyone to customize a specific smart
          contract transaction.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">Contract Standards</h3>
        <p>
          It is important to mention the use of factory contracts wrapped around
          the following contract standards. These are best used when deploying a
          bazaar or marketplace. Factory contracts essentially provide all
          listing information and automatically fills out the listing information
          into a new deployed contract for the listing provider.
        </p>
        <p>
          The standards proposed for the initial infrastructure consists of:
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          1. Physical Product Contracts
        </h4>
        <p>
          This is an upgradable smart contract standard that allows for any
          seller of a physical product to share the product information, price,
          quantity, delivery methods, delivery costs, and more. Customer metadata
          must be converted and encrypted effectively, complying with GDPR and
          general data protection ethics.
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          2. Physical Service Contracts
        </h4>
        <p>
          Similar to the physical product contract standards, this is an
          upgradable smart contract standard that allows for any service provider
          to issue out promises of physical activities for reward of
          compensation. Customer data also needs to be encrypted similarly by
          upgrading a new smart contract which is only accessible to the contract
          owner and its list of permissioned users.
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-2">
          3. Delivery Service Contracts
        </h4>
        <p>
          This is the smart contract standard that allows for any delivery driver
          around the world to provide and distribute service of delivery of a
          given product or item in exchange for compensation. This smart contract
          provides a few unique features as well that is optional depending on
          the contract creator, such as being able to share and upload
          geolocation for handling freight and being able to constantly update the
          initial standard for digital proof and timestamping of a physical
          delivery.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Layer 3 Infrastructure
        </h2>
        <p>
          Arthur Labs will be developing out required and functional applications
          to help accelerate development, as well as provide necessary tooling to
          reach the traditional consumer market.
        </p>
        <p>
          A few of these applications will dedicate its efforts into making as
          much of a traditional system as possible, where clients can process and
          checkout payments using traditional FIAT currencies to purchasing
          items, while benefiting from the enchanting effects of blockchains.
        </p>
        <p>
          The majority of applications built from Arthur Labs into the VAULT
          include governance and voting platforms for the DAO, injected wallet
          providers, transaction judging and moderation, and a variety of
          mentioned applications that offer unique features.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Layer 4 Infrastructure
        </h2>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Consumer Protection
        </h3>
        <p>
          Standalone business models can be built in the Arthur Labs ecosystem to
          handle consumer failures. For instance, being able to moat an insurance
          model around decentralized applications provides assurance for
          consumers that they can safely and seamlessly use the application and
          be compensated in case the blockchain isn&apos;t efficient.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          Payment Infrastructure
        </h3>
        <p>
          Additional infrastructure such as account abstraction and guest
          accounts allow for users of the Arthur Labs ecosystem to not even need
          to touch blockchains in order to reap its benefits. Similar to Coinbase
          Guest, wallet providers in Arthur Labs may provide a debit or credit
          card payment method that entirely removes the need for users to
          interact with cryptocurrencies.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-3">
          User Account Management
        </h3>
        <p>
          Similarly to guest accounts for payments, users may also register
          through Layer 2 infrastructure using emails and passwords, which then
          automatically provides the user a unique wallet. Advanced and
          blockchain-savvy users can easily go through the settings in various
          protocols to easily change their account.
        </p>
      </div>

      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/introduction">
          <Button variant="outline">Prev: Introduction</Button>
        </Link>
        <Link href="/systems">
          <Button>Next: Provided Systems</Button>
        </Link>
      </div>
    </div>
  );
}
