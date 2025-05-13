const whitePaperSectionsEN = [
  {
    title: "1. Executive Summary",
    content:
      "USFRANC is a decentralized cryptocurrency coin built for real-world payment usage, combining Proof of Work (PoW) and Proof of Stake (PoS) consensus mechanisms. The project aims to provide a stable, secure, and compliant digital currency for both online and retail transactions."
  },
  {
    title: "2. Purpose and Vision",
    content:
      "USFRANC is created to serve as a digital payment currency, allowing individuals and businesses to send, receive, and settle payments securely and transparently. It includes an escrow-inspired transaction model to hold funds until product delivery and post-sale period validations."
  },
  {
    title: "3. Usage Model",
    content:
      "USFRANC functions as a medium of exchange. Coins are held in wallets, used for purchasing goods or services, and converted by merchants when delivery is confirmed. Funds remain on hold until the transaction is verified, with a 7-day post-delivery lockout, ensuring user protection without offering financial returns."
  },
  {
    title: "4. Technical Architecture",
    content:
      "USFRANC operates on a dual-layer blockchain: a Litecoin-fork PoW mainnet and a PoS sidechain for smart contract execution. This hybrid model ensures energy-efficient validation with high network resilience."
  },
  {
    title: "5. Coin Distribution and Governance",
    content:
      "USFRANC issues a total of 115 million coins:",
    list: [
      "67% are pegged to low-risk capital reserves",
      "10 million for investors (unhedged)",
      "5 million for founders (no additional compensation for Year 1)"
    ]
  },
  {
    title: "6. Capital Reserve Strategy",
    content:
      "A minimum of 67% of net capital from first sales is allocated to low-risk reserves (e.g. sovereign bonds). These reserves are not pooled funds or accessible by users. No profits, dividends, or claims are granted. This policy enhances operational integrity, not investor returns."
  },
  {
    title: "7. Legal Classification & Risk",
    content:
      "USFRANC is not a security, e-money, or regulated investment. It is classified as a cryptocurrency coin. No interest, guaranteed return, or asset claims exist. Users assume full risk of loss."
  },
  {
    title: "8. Regulatory Compliance",
    subsections: [
      {
        subtitle: "EU",
        content: "MiCA (utility coin), GDPR, AML"
      },
      {
        subtitle: "France",
        content: "AMF transparency, non-PSAN classification"
      },
      {
        subtitle: "UK",
        content: "Not offered, FCA disclaimer in place"
      },
      {
        subtitle: "USA",
        content:
          "Not a security (Howey Test), not MSB yet; FinCEN compliance pending if U.S. use enabled."
      }
    ]
  },
  {
    title: "9. Terms and Conditions",
    content:
      "Users agree to use USFRANC solely as a cryptocurrency. No investment rights or financial services are offered. Access is restricted in the U.S., UK, NY, and sanctioned regions."
  },
  {
    title: "10. Transparency and Reporting",
    list: [
      "All documents are published in English and French.",
      "Governance, capital policy, and validation systems are auditable.",
      "Contact: compliance@usfranc.com"
    ]
  }
];

export default function EnglishPage() {
  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold mb-4 text-logo">USFRANC Whitepaper</h1>
      <p className="text-sm text-gray-500 mb-10">
        <strong>Version 1.0</strong> - April 2025
      </p>
      <p className="text-sm text-gray-500 mb-10">
        This document is provided for regulatory review and public disclosure.
      </p>

      {whitePaperSectionsEN.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-logo mb-2">
            {section.title}
          </h2>

          {section.content && (
            <p className="text-gray-700 mb-4">{section.content}</p>
          )}

          {section.list && (
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {section.subsections &&
            section.subsections.map((sub, subIndex) => (
              <div key={subIndex} className="mb-4">
                <h3 className="text-xl font-medium mb-1">{sub.subtitle}</h3>
                <p className="text-gray-700">{sub.content}</p>
              </div>
            ))}
        </div>
      ))}

      <p className="mt-8 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This Compliance Statement is for
        informational purposes only and does not constitute legal or financial
        advice.
      </p>
    </section>
  );
}
