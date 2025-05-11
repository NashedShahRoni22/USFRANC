import Image from "next/image";
import bannerImage from "../assets/banner_image.webp";
import Container from "../components/shared/Container";
const sections = [
  {
    title: "Crypto Coins Purpose",
    list: [
      "Paying for goods and services with USF",
      "Holding in your non-custodial wallet",
      "Converting to other crypto assets for merchant settlement",
    ],
  },
  {
    title: "Escrow-Based Buyer Protection",
    listType: "ordered",
    list: [
      "Funds are held in a smart contract wallet",
      "They are only released to the merchant once delivery is confirmed",
      "A 7-day confirmation period gives the buyer peace of mind",
    ],
  },
  {
    title: "Capital Reserve Model",
    content: [
      "70% of first-sale proceeds are invested in low-risk assets (UK gilts, bonds). The remaining 30% covers operational costs and liquidity support. This structure gives USFranc stability and long-term support without custodial risk.",
    ],
  },
  {
    title: "Buyback Guarantee (Limited)",
    content: [
      "A €0.40 buyback guarantee is offered during the first issuance period if the price drops below €0.50, valid for 60 days from launch. A reduced 20% buyback option applies in secondary issuance rounds under certain conditions.",
    ],
  },
  {
    title: "Supply & Distribution",
    content: [
      "USFranc will issue 100 million crypto coins in total, released in batches of 10 million. Each batch corresponds to a new issuance round and is governed by transparent economic policies.",
    ],
  },
  {
    title: "Validation Model",
    list: [
      "Proof of Work (PoW): Supports early network stability and mining",
      "Proof of Stake (PoS): Enables governance and energy-efficient participation",
    ],
  },
  {
    title: "Crypto Coin Snapshot",
    list: [
      "Crypto Coin price: €2.00 at launch",
      "Max Supply: 115 million (released in 10M phases)",
      "Consensus: Hybrid Proof of Work + Proof of Stake and capital hedge policy 67% of First sales retained in USF government bond Investments",
    ],
  },
];

const usfAdvantages = [
  {
    title: "Ecosystem Sustainability",
    points: [
      "The 2% fee funds essential operations without relying on outside financing.",
      "Keeps the USF ecosystem independent and self-sustaining.",
    ],
  },
  {
    title: "Buyer Protection Guarantee",
    points: [
      "Ensures secure escrow-based holding until delivery is confirmed.",
      "Helps finance the 7-day return window for added consumer confidence.",
    ],
  },
  {
    title: "Trust Through Transparency",
    points: [
      "The fee is clearly disclosed—no hidden charges.",
      "Builds long-term trust between buyers and sellers.",
    ],
  },
  {
    title: "Reinforced Coin Value",
    points: [
      "A portion of fees is allocated to hedge capital, supporting coin price stability.",
      "Encourages long-term holding and investor confidence.",
    ],
  },
  {
    title: "Supports Future Development",
    points: [
      "Helps fund technical upgrades, compliance, and service improvements.",
      "Ensures USF remains secure, efficient, and regulatory-compliant.",
    ],
  },
];

export const metadata = {
  title: "About USFRANC | Building Trust in Decentralized Finance",
  description:
    "Learn about USFRANC's mission to provide a trustworthy and capital-backed cryptocurrency solution for diverse financial needs.",
};

export default function Page() {
  return (
    <Container>
      <div className="lg:flex gap-8 items-center py-8 md:py-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            What is USFranc?
          </h2>
          <p className="mt-4 md:text-xl">
            USFranc (USF) is a capital-backed utility crypto coins designed for
            secure, real-world payments — both online and in-store. It enables
            blockchain-based commerce through a transparent, non-custodial
            wallet and smart contract model.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            alt="Investors Banner Image"
            src={bannerImage}
            height={450}
            width={""}
            className="rounded"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section, index) => (
          <div key={index} className="mb-8 p-6 rounded-2xl border">
            <h2
              className={`text-${index === 0 ? "3xl" : "2xl"} font-bold mb-3`}
            >
              {section.title}
            </h2>

            {section.content &&
              section.content.map((paragraph, i) => (
                <p key={i} className="mb-3">
                  {paragraph}
                </p>
              ))}

            {section.list &&
              (section.listType === "ordered" ? (
                <ol className="list-decimal list-inside space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              ) : (
                <ul className="list-disc list-inside space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ))}
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl md:text-3xl font-bold">Advantages of USF Peer-to-Peer Transfer Fees</h2>
        {usfAdvantages.map((advantage, index) => (
          <div key={index}>
            <h3 className="md:text-xl font-semibold mt-5">{advantage.title}</h3>
            <ul className="list-disc list-inside mt-2.5">
              {advantage.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className={`text-3xl font-bold mt-16 mb-3 text-center`}>Disclaimer</h2>

      <p className="mb-8 text-center">
        USFranc is not an equity, investment opportunity, investment contract or
        security of any type. It is a utility crypto coins used to facilitate
        digital payments and purpose that suits the crypto holder in accordance
        with their local country crypto usage compliance.
      </p>
    </Container>
  );
}
