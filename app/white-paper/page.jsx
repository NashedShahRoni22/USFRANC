import Container from "../components/shared/Container";

const infoCards = [
  {
    title: "Blockchain Architecture",
    points: [
      "Hybrid blockchain using PoW + PoS.",
      "PoW (from Komodo) ensures immutability and mining security.",
      "PoS enables validator governance and protocol upgrades.",
      "Fast transactions, 51% resistance, and community-driven evolution.",
    ],
  },
  {
    title: "Pricing, Supply, and Hedging Model",
    points: [
      "Launch price: €2.00 with a fixed supply of 115 million USF.",
      "100 million coins hedged with 67% in low-risk government bonds.",
      "10M allocated to investors at a 3x return ratio.",
      "5M reserved for founders as compensation (Brian Fin: 2M, Affin: 3M).",
    ],
  },
  {
    title: "Reserve Policy and Buyback",
    points: [
      "67% of proceeds go to AAA-rated government bonds.",
      "€0.40 buyback offered within 60 days of listing.",
      "Signals fiscal responsibility and builds market trust.",
      "Validator oversight and on-chain treasury reporting.",
    ],
  },
  {
    title: "Utility & Use Cases",
    points: [
      "Peer-to-peer global payments without intermediaries.",
      "Store of value with conversion to stablecoins or crypto.",
      "Smart escrow payment system with 7-day return window.",
      "Recipients can hold, spend, or convert USF freely.",
    ],
  },
];

const buyerFeatures = [
  "Assured recovery if goods aren’t delivered or are misrepresented.",
  "Control over escrow release based on confirmed delivery.",
  "7-day dispute/return window ensures buyer confidence.",
];

const merchantFeatures = [
  "Gain buyer trust without relying on third parties.",
  "Escrow confirms legitimacy of business model.",
  "Smart contract automation simplifies transactions.",
];

export default function USFRANCWhitePaper() {
  return (
    <Container>
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center mt-8 md:mt-16">
        USFRANC (USF) – White Paper
      </h1>

      {/* Comparison Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          What USFRANC Is and Is Not
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto  text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border text-black">What USFRANC Is</th>
                <th className="px-4 py-2 border text-black">
                  What USFRANC Is Not
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "A utility cryptocurrency built on its own hybrid blockchain (PoW + PoS).",
                  "Not a security: does not represent equity, ownership, or promise of returns.",
                ],
                [
                  "A payment method with escrow-based protections for buyers and merchants.",
                  "Not a stablecoin: price is market-driven but capital-hedged.",
                ],
                [
                  "Capital-backed at launch with 67% minimum investment in low-risk instruments.",
                  "Not a custodial platform or financial intermediary.",
                ],
                [
                  "Transparent governance via validators.",
                  "Not a lending or yield product.",
                ],
                [
                  "Non-custodial, user-controlled wallets.",
                  "Not subject to inflationary minting beyond fixed issuance.",
                ],
                ["Compliant communications with no ROI guarantees.", ""],
              ].map(([is, isNot], index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border align-top">{is}</td>
                  <td className="px-4 py-2 border align-top">{isNot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sections 2–5 as Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {infoCards.map((card, index) => (
          <div key={index} className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <ul className="list-disc list-inside space-y-1">
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Buyer & Merchant Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="border rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">Buyer Benefits</h3>
          <ul className="list-disc list-inside space-y-1">
            {buyerFeatures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">Merchant Benefits</h3>
          <ul className="list-disc list-inside space-y-1">
            {merchantFeatures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Final Paragraph */}
      <p className="mt-10 mb-8 md:mb-16">
        The founders will not receive any additional remuneration or crypto
        distributions in the first year. Treasury operations and all allocations
        are conducted transparently, with validator oversight via on-chain
        governance. USFRANC commits to fixed, capped issuance and no
        inflationary emissions beyond this model.
      </p>
    </Container>
  );
}
