"use client";
import React, { useState } from "react";
import Container from "../components/shared/Container";
import { FaGooglePlay, FaApple, FaWallet } from "react-icons/fa";
import Image from "next/image";
import TrustWallet from "../assets/Trust-Wallet.jpg";
import comingSoon from "../assets/wallet-coming-soon.png";
import faq from "../assets/faq.png";
import { FiShield } from "react-icons/fi";
import Link from "next/link";

export default function WalletPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle logic
  };

  return (
    <Container>
      <section className="py-12 md:py-20 space-y-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Use Trust Wallet</h2>
            <p className="text-lg mb-6 text-gray-700">
              Trust Wallet is secure, easy to use, and supports our coin.
              Available now on Android and iOS.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-logo text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
              >
                <FaGooglePlay className="text-2xl" />
                Google Play
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-logo text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
              >
                <FaApple className="text-2xl" />
                App Store
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={TrustWallet}
              alt="Trust Wallet"
              width={500}
              height={300}
            />
          </div>
        </div>

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
                  <span>Multi-chain support for seamless asset management</span>
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
    question: "Why use Trust Wallet?",
    answer:
      "Trust Wallet supports ERC-20 tokens, offers top-tier security, and is easy to use across mobile platforms.",
  },
  {
    question: "When will USFRANC Wallet be available?",
    answer:
      "We aim to launch in the next few months. Join our newsletter to stay updated and get early access.",
  },
  {
    question: "Can I transfer coins from Trust Wallet to USFRANC Wallet later?",
    answer:
      "Absolutely! Full transfer support between wallets will be built into our platform.",
  },
  {
    question: "Is there a desktop version of the Trust Wallet?",
    answer:
      "Trust Wallet is currently mobile-only, but browser extensions like MetaMask may serve as alternatives.",
  },
  {
    question: "Will there be any bonuses for using USFRANC Wallet?",
    answer:
      "Yes! Early adopters of our wallet will receive exclusive airdrops and lower transaction fees.",
  },
];
