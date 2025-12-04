"use client";
import React, { useState } from "react";
import Container from "../components/shared/Container";
import { FaGooglePlay, FaApple, FaWallet } from "react-icons/fa";
import Image from "next/image";
import comingSoon from "../assets/wallet-coming-soon.png";
import faq from "../assets/faq.png";
import { FiShield, FiCheck } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";
import Link from "next/link";

export default function WalletPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle logic
  };

  return (
    <Container>
      <section className="py-12 md:py-20 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-sm font-semibold"
            style={{ color: "#7B5E00" }}
          >
            <BiTransfer className="text-xl" />
            ESCROW-SECURED MULTI-CHAIN SWAPS™
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            The Safest Way to Move Crypto <br />
            <span style={{ color: "#7B5E00" }}>Across Blockchains</span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Swap USFranc (USFC) seamlessly with Ethereum, Solana, Polkadot, and more—protected by a next-generation blockchain escrow layer that verifies every step of the transaction before release.
          </p>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 text-left">
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <FiCheck className="text-2xl flex-shrink-0" style={{ color: "#7B5E00" }} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multi-Chain Connectivity</h3>
                  <p className="text-sm text-gray-600">USF ↔ ETH ↔ SOL ↔ DOT ↔ more coming</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <FiShield className="text-2xl flex-shrink-0" style={{ color: "#7B5E00" }} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Escrow Protection Layer</h3>
                  <p className="text-sm text-gray-600">Transactions verified before release</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <FiCheck className="text-2xl flex-shrink-0" style={{ color: "#7B5E00" }} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Anti-Fraud Validation</h3>
                  <p className="text-sm text-gray-600">Detects unsafe or invalid destinations</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <FiCheck className="text-2xl flex-shrink-0" style={{ color: "#7B5E00" }} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Network Failure Protection</h3>
                  <p className="text-sm text-gray-600">Automatic rollback if swap cannot finalize</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <FiCheck className="text-2xl flex-shrink-0" style={{ color: "#7B5E00" }} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hybrid PoW/PoS Compatible</h3>
                  <p className="text-sm text-gray-600">Ultra-secure chain foundation</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <FiCheck className="text-2xl flex-shrink-0" style={{ color: "#7B5E00" }} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Cross-Chain Swaps</h3>
                  <p className="text-sm text-gray-600">Designed for modern crypto users</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investor Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4" style={{ color: "#7B5E00" }}>
              Why Buy USFranc Crypto?
            </h2>
            <p className="text-center text-xl text-gray-700 mb-12">
              USFranc (USFC) – A Secured, Utility-Focused Cryptocurrency
            </p>

            <p className="text-lg text-gray-700 mb-8 text-center">
              USFranc is built on its own hybrid PoW/PoS blockchain and is designed for payments, transfers, merchant systems, and cross-chain interoperability.
            </p>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl font-bold" style={{ color: "#7B5E00" }}>1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Stability Through Reserve-Backed Issuance</h3>
                    <p className="text-gray-700">
                      A mandatory <strong>70% reserve hedge</strong> ensures structured capital protection behind USFranc issuance — extremely rare in the crypto world.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl font-bold" style={{ color: "#7B5E00" }}>2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Real Utility Inside an Expanding Ecosystem</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>USFranc Wallet + Custodial Wallet + Merchant Escrow System</strong> = a complete payment ecosystem where USF can be used daily.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl font-bold" style={{ color: "#7B5E00" }}>3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Multi-Chain Interoperability Expands Reach</h3>
                    <p className="text-gray-700 mb-3">
                      USFranc becomes a universal value asset through cross-chain swapping with:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-center gap-2">
                        <span style={{ color: "#7B5E00" }}>•</span>
                        <span>Ethereum</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span style={{ color: "#7B5E00" }}>•</span>
                        <span>Solana</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span style={{ color: "#7B5E00" }}>•</span>
                        <span>Polkadot</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span style={{ color: "#7B5E00" }}>•</span>
                        <span>BNB Chain (coming)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span style={{ color: "#7B5E00" }}>•</span>
                        <span>Bitcoin (coming)</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3">This increases global user access.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl font-bold" style={{ color: "#7B5E00" }}>4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Built for Long-Term Compliance & Security</h3>
                    <p className="text-gray-700">
                      The USF project is designed to align with multi-jurisdiction crypto regulations, ensuring long-term survival and adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:w-1/2">
            <Image
              src={comingSoon}
              alt="USFRANC Crypto Wallet"
              width={600}
              height={400}
              className="rounded-xl shadow-sm border border-gray-100"
              priority
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-sm font-medium mb-4"
              style={{ color: "#7B5E00" }}
            >
              <FiShield className="min-w-fit text-2xl" /> SECURE CRYPTO VAULT
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              <span style={{ color: "#7B5E00" }}>USFRANC</span> Wallet <br />
              Coming Soon
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                The <strong>native digital vault</strong> for the USFRANC
                ecosystem, combining institutional-grade security with
                effortless crypto management.
              </p>

              <ul className="space-y-3 text-left pl-5">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7B5E00" }}>✓</span>
                  <span>Multi-chain support for seamless crypto coin management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7B5E00" }}>✓</span>
                  <span>
                    Non-custodial architecture - you control your keys
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#7B5E00" }}>✓</span>
                  <span>
                    Built-in compliance tools for regulated crypto operations
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 ease-in-out bg-[#7B5E00] hover:bg-[#674f01]"
                disabled
              >
                Notify Me When Launched
              </button>
              <Link
                href="/Whitepaper"
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out border broder-[#7B5E00] text-[#7B5E00] hover:bg-[#7B5E00] hover:text-white"
              >
                Read Whitepaper
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-center mb-8">Wallet FAQs</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full text-left px-4 py-3 bg-gray-100 text-logo font-semibold flex justify-between items-center hover:bg-gray-200 transition"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="transform transition-transform duration-300">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 py-3 bg-white text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Image src={faq} alt="faq" className="rounded-xl" />
          </div>
        </div>
      </section>
    </Container>
  );
}

// FAQ content
const faqData = [
  {
    question: "What makes USFranc Wallet different from other wallets?",
    answer:
      "USFranc Wallet features Escrow-Secured Multi-Chain Swaps™ — a unique protection layer that verifies every transaction before release, preventing routing errors, failed swaps, and malicious addresses.",
  },
  {
    question: "When will USFRANC Wallet be available?",
    answer:
      "We aim to launch in the coming months. Join our newsletter to stay updated and get early access to the wallet.",
  },
  {
    question: "Which blockchains will USFranc Wallet support?",
    answer:
      "USFranc Wallet will support multi-chain swaps with Ethereum, Solana, Polkadot, and more. BNB Chain and Bitcoin support are coming soon.",
  },
  {
    question: "How does the Escrow Protection Layer work?",
    answer:
      "Our blockchain escrow verification layer validates every step of a cross-chain transaction before releasing funds, ensuring complete protection against fraud and technical failures.",
  },
  {
    question: "Will there be any bonuses for early adopters?",
    answer:
      "Yes! Early adopters of USFranc Wallet will receive exclusive benefits including airdrops, lower transaction fees, and priority access to new features.",
  },
];