import Image from "next/image";
import bannerImage from "../assets/banner_image.webp";
import Container from "../components/shared/Container";
import aboutImg from "../assets/about.png";
const sections = [
  {
    title: "Crypto Coins Purpose",
    list: [
      "Paying for goods and services with USFC",
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
      "70% of first-sale proceeds are invested in low-risk assets (UK gilts, bonds). The remaining 30% covers operational costs and liquidity support. This structure gives USFRANC stability and long-term support without custodial risk.",
    ],
  },
  {
    title: "Buyback Guarantee (Limited)",
    content: [
      "A €0.30 buyback guarantee is offered during the first issuance period if the price drops below €0.20, valid for 60 days from launch. A reduced 20% buyback option applies in secondary issuance rounds under certain conditions.",
    ],
  },
  {
    title: "Supply & Distribution",
    content: [
      "USFRANC will issue 1 billion crypto coins in total, released in batches of 50 million. Each batch corresponds to a new issuance round and is governed by transparent economic policies.",
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
      "Crypto Coin price: €0.50 at launch which will alligned to demand and supply",
      "Max Supply: 1 billion (released in 50M phases)",
      "Consensus: Hybrid Proof of Work + Proof of Stake and capital hedge policy 67% of First sales retained in USFC government bond Investments",
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
      <div className="lg:flex gap-8 items-center py-10 md:py-20">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            What is USFRANC?
          </h2>
          <p className="mt-4 md:text-xl">
            USFRANC (USFC) is a capital-backed utility crypto coins designed for
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

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {sections.map((section, index) => (
          <div key={index} className="mb-8 p-6 rounded-xl shadow">
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

      <Image
        src={aboutImg}
        alt="about us frank"
        className="w-full rounded-xl"
      />

      <h2 className={`text-3xl font-bold mt-16 mb-3 text-center`}>
        Disclaimer
      </h2>

      <p className="mb-8 text-center">
        USFRANC is not an equity, investment opportunity, investment contract or
        security of any type. It is a utility crypto coins used to facilitate
        digital payments and purpose that suits the crypto holder in accordance
        with their local country crypto usage compliance.
      </p>
    </Container>
  );
}
