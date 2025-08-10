import React from "react";
import Container from "../components/shared/Container";

const sections = [
  {
    title: "Introduction",
    content: `Welcome to USFRANC (USFC). By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website or services.`,
  },
  {
    title: "What is USFRANC (USFC)?",
    content: `USFRANC (USFC) is a cryptocurrency built on its own hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) blockchain. It offers a decentralized, secure, and scalable solution for digital transactions. USFC can be used for a variety of purposes, including peer-to-peer transfers, merchant payments with escrow protection, and as a store of value or asset exchange.`,
  },
  {
    title: "What USFRANC IS:",
    list: [
      "A native cryptocurrency: USFC is not a token or stablecoin but a fully independent cryptocurrency built on its own blockchain.",
      "A flexible medium of exchange: USFC allows for global payments, transfers, and the exchange of value in a decentralized ecosystem.",
      "Decentralized: USFC operates within a decentralized, transparent network with no central authority controlling the currency.",
      "A store of value: You can hold USFC crypto coin and use when required in various transactions, pay, hold or exchange or sell it",
    ],
  },
  {
    title: "What USFRANC IS NOT:",
    list: [
      "Not a financial investment product: USFC is not designed as a financial security or investment product. It does not guarantee returns or dividends.",
      "Not a custodial service: USFC is non-custodial, meaning you are responsible for the security of your own coins.",
      "Not a bank or lender: USFC is not a traditional financial institution and does not offer services like lending, savings, or interest generation.",
      "Not a stablecoin: USFC does not have a fixed value and is subject to market fluctuations.",
      "Not a source of guaranteed returns: USFC cannot guarantee capital gains, returns, or profits from holding or using the coin.",
    ],
  },
  {
    title: "USFRANC Usage Policy",
    list: [
      "Peer-to-Peer Transfers: USFC can be sent directly between users in a secure, fast, and decentralized manner.",
      "Merchant Payments with Escrow Protection: USFC can be used for merchant transactions with escrow protection, ensuring payment is only released upon delivery and after a 7-day return window.",
      "Storing and Converting: USFC can be held in your wallet or converted to other cryptocurrencies, offering flexibility in its use.",
      "Compliance with Regulations: USFC complies with applicable cryptocurrency regulations in countries where it is used.",
    ],
  },
  {
    title: "Liabilities and Disclaimers",
    content: `By using USFRANC (USFC), you acknowledge that you understand the inherent risks associated with cryptocurrency and decentralized finance. USFC does not guarantee the stability of the value of the currency and is not responsible for any losses or gains resulting from market conditions.`,
  },
];

export default function Page() {
  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-logo mb-8">
          Terms and Conditions for USFRANC (USFC)
        </h1>
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            )}
            {section.list && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
