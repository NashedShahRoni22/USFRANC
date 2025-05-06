import React from "react";
import Container from "../components/shared/Container";

const sections = [
  {
    title: "Introduction",
    content: `Welcome to USFranc (USF). By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website or services.`,
  },
  {
    title: "What is USFranc (USF)?",
    content: `USFranc (USF) is a cryptocurrency built on its own hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) blockchain. It offers a decentralized, secure, and scalable solution for digital transactions. USF can be used for a variety of purposes, including peer-to-peer transfers, merchant payments with escrow protection, and as a store of value or asset exchange.`,
  },
  {
    title: "What USFranc IS:",
    list: [
      "A native cryptocurrency: USF is not a token or stablecoin but a fully independent cryptocurrency built on its own blockchain.",
      "A flexible medium of exchange: USF allows for global payments, transfers, and the exchange of value in a decentralized ecosystem.",
      "Decentralized: USF operates within a decentralized, transparent network with no central authority controlling the currency.",
      "A store of value: You can hold USF as an asset, with the potential for appreciation and use in various transactions.",
    ],
  },
  {
    title: "What USFranc IS NOT:",
    list: [
      "Not a financial investment product: USF is not designed as a financial security or investment product. It does not guarantee returns or dividends.",
      "Not a custodial service: USF is non-custodial, meaning you are responsible for the security of your own coins.",
      "Not a bank or lender: USF is not a traditional financial institution and does not offer services like lending, savings, or interest generation.",
      "Not a stablecoin: USF does not have a fixed value and is subject to market fluctuations.",
      "Not a source of guaranteed returns: USF cannot guarantee capital gains, returns, or profits from holding or using the coin.",
    ],
  },
  {
    title: "USFranc Usage Policy",
    list: [
      "Peer-to-Peer Transfers: USF can be sent directly between users in a secure, fast, and decentralized manner.",
      "Merchant Payments with Escrow Protection: USF can be used for merchant transactions with escrow protection, ensuring payment is only released upon delivery and after a 7-day return window.",
      "Storing and Converting: USF can be held in your wallet or converted to other cryptocurrencies, offering flexibility in its use.",
      "Compliance with Regulations: USF complies with applicable cryptocurrency regulations in countries where it is used.",
    ],
  },
  {
    title: "Liabilities and Disclaimers",
    content: `By using USFranc (USF), you acknowledge that you understand the inherent risks associated with cryptocurrency and decentralized finance. USF does not guarantee the stability of the value of the currency and is not responsible for any losses or gains resulting from market conditions.`,
  },
];

export default function Page() {
  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-logo mb-8">
          Terms and Conditions for USFranc (USF)
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
