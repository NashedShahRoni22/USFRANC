"use client";
import React, { useState } from "react";
import Container from "../components/shared/Container";
import { FaGooglePlay, FaApple, FaWallet } from "react-icons/fa";
import Image from "next/image";
import TrustWallet from "../assets/Trust-Wallet.jpg";
import UsFranc from "../assets/us-franc.jpg";

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

        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">
              USFranc Wallet Coming Soon
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              A seamless, secure, and intuitive native wallet designed
              specifically for our ecosystem. Stay tuned.
            </p>
            <div className="mt-4">
              <FaWallet className="text-6xl text-logo mx-auto md:mx-0" />
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src={UsFranc}
              alt="USFranc Wallet"
              width={500}
              height={300}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
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
    question: "When will USFranc Wallet be available?",
    answer:
      "We aim to launch in the next few months. Join our newsletter to stay updated and get early access.",
  },
  {
    question: "Can I transfer coins from Trust Wallet to USFranc Wallet later?",
    answer:
      "Absolutely! Full transfer support between wallets will be built into our platform.",
  },
  {
    question: "Is there a desktop version of the Trust Wallet?",
    answer:
      "Trust Wallet is currently mobile-only, but browser extensions like MetaMask may serve as alternatives.",
  },
  {
    question: "Will there be any bonuses for using USFranc Wallet?",
    answer:
      "Yes! Early adopters of our wallet will receive exclusive airdrops and lower transaction fees.",
  },
];
