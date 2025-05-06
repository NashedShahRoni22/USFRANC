import Image from "next/image";
import bannerImage from "../assets/investors.webp";
import Container from "../components/shared/Container";
import Link from "next/link";

const investorSections = [
  {
    title: "Participation Structure",
    list: [
      "No equity or profit-sharing involved",
      "Crypto coins are non-transferable until official market listing",
      "No guaranteed return or yield",
    ],
    content: [
      "Early participants may receive USF crypto coins allocated over a three-year vesting schedule in exchange for their capital contribution.",
    ],
  },
  {
    title: "Use of Proceeds",
    list: [
      "70% allocated to low-risk sovereign bonds and capital reserves",
      "30% allocated for operations, compliance, infrastructure, and protocol buyback guarantees",
    ],
    content: ["Funds from crypto coins issuance are managed conservatively:"],
  },
  {
    title: "Buyback Model",
    content: [
      "A buyback of €0.40 is offered on initial crypto coins if the market price falls below €0.50 within 60 days of listing.",
      "Secondary issuance includes a conditional buyback up to 20% of holdings, contingent on liquidity availability.",
    ],
  },
  {
    title: "Vesting & Lock-In Terms",
    list: [
      "12-month cliff vesting",
      "Gradual release over 3 years",
      "Non-custodial distribution upon unlock",
    ],
  },
  {
    title: "Investor Notices",
    list: [
      "USFranc is not a security or equity",
      "No rights to dividends or voting powers",
      "Regulatory and tax status varies by country",
      "Investors are responsible for local compliance",
    ],
  },
  {
    title: "Documentation Access",
    list: [
      "Whitepaper",
      "Pitch Deck",
      "Compliance Briefs (UK, FR, EU, US)",
      "Reserve Policy Statement",
    ],
    content: ["Download key investor documents below:"],
  },
];

const reasonsToInvest = [
  {
    title: "1. Hedged Investment Security",
    content: [
      "USFranc is designed to provide stability and growth. 67% of the initial sales are invested in low-risk government bonds, providing a hedged and secure foundation for your investment.",
      "This ensures that your capital is protected while the coin gains traction in the market.",
    ],
  },
  {
    title: "2. Dual Consensus Model – PoW + PoS",
    content: [
      "USFranc uses a hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) system, combining the security and decentralization of PoW with the energy efficiency and scalability of PoS.",
      "This dual validation system enhances the security and reliability of USF.",
    ],
  },
  {
    title: "3. Long-Term Growth Potential",
    content: [
      "USFranc is positioned for long-term adoption, and our fixed issuance model (115 million USF) ensures that there is no inflationary risk.",
      "We’ve designed USF as a store of value and a useful asset for payments, with guaranteed buyback options to protect investors.",
    ],
  },
  {
    title: "4. Clear Utility with Real-World Use Cases",
    content: [
      "Unlike many speculative coins, USFranc is built with clear utility. USF can be used for:",
    ],
    list: [
      "Peer-to-peer transfers",
      "Merchant payments with escrow",
      "Holding and converting to other cryptos",
    ],
  },
  {
    title: "5. Early Investor Advantage",
    content: [
      "Investing in USFranc early gives you a first-mover advantage.",
      "With limited access to 10 million USF coins at a favorable 3x return ratio, early investors have the chance to benefit as USF grows in value.",
    ],
  },
  {
    title: "6. Fully Decentralized and Community Governed",
    content: [
      "USFranc is decentralized, meaning no central authority controls the currency.",
      "With community governance, decisions about USF’s future will be made collectively, ensuring transparency and fairness.",
    ],
  },
  {
    title: "7. Compliance with Global Regulations",
    content: [
      "USFranc is designed to comply with international cryptocurrency regulations, offering security and transparency for investors in regions where digital assets are gaining acceptance.",
    ],
  },
  {
    title: "8. Future-Proof and Secure",
    content: [
      "With an emphasis on transparency, security, and scalability, USFranc is designed to stand the test of time and adapt to future blockchain advancements and regulations.",
    ],
  },
];

const investContent = {
  introHeading:
    "Invest in USFranc (USF) – A Cryptocurrency Built for Stability and Growth!",
  subHeading: "Join the Future of Digital Currency",
  introParagraph:
    "USFranc (USF) is a next-generation cryptocurrency built on a hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) blockchain, designed for long-term stability, transparency, and massive growth potential. USF offers a unique guaranteed hedge, backed by 67% of its first sales in low-risk government bonds, ensuring your investment’s stability from the start.",
  sections: [
    {
      title: "Why Invest in USFranc?",
      points: [
        "Guaranteed Hedge: 67% of first sales invested into low-risk government bonds",
        "Dual Consensus Model: Using the power of both PoW and PoS for robust security",
        "Utility-Driven: USF can be used for peer-to-peer transfers, merchant payments with escrow, and as a store of value",
        "Attractive Investor Offering: Get in early with 3x return ratio for investors — 10 million USF coins allocated to investors at the initial sale",
        "Secured and Transparent: USFranc is a decentralized and compliant cryptocurrency, designed to grow in line with market demand and regulatory frameworks",
      ],
    },
    {
      title: "Invest with Confidence:",
      points: [
        "Preliminary Price: €2.00 per USF (Buyback guarantee at €0.40 if the price falls below €0.50)",
        "Exclusive Early Investment Opportunity: Join the first sale for limited access to USF coins",
        "Blockchain for Everyone: A transparent and secure platform for users and investors alike",
      ],
    },
    {
      title: "How to Invest:",
      paragraph:
        "Visit our website to sign up and receive detailed information about how to participate in the USFranc sale. Invest early and receive priority access to USFranc crypto coins with strong upside potential!",
    },
  ],
  finalCTA: {
    heading: "Take the Next Step!",
    paragraph:
      'Invest now and be part of a future-proof cryptocurrency project that’s "Built for Trust, Powered by Purpose.',
    buttonText: "Contact Us Now",
    buttonLink: "#",
  },
};

export const metadata = {
  title: "Investor Information | USFRANC Capital-Backed Cryptocurrency",
  description:
    "Explore investment opportunities with USFRANC, a cryptocurrency secured by capital reserves and designed for stability.",
};

export default function Page() {
  return (
    <Container>
      <div className="lg:flex gap-8 items-center py-8 md:py-16 ">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-6xl font-bold">
            Investor Information
          </h2>
          <p className="mt-6 text-xl md:text-2xl">
            USFranc is a utility crypto coins backed by capital and governed
            with transparency. This page outlines how early participants can
            engage, what rights they have, and how the crypto coins is
            structured.
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
        {investorSections.map((section, index) => (
          <div key={index} className="mb-8 p-6 rounded-2xl border border-logo">
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

            {section.list && (
              <ul className="list-disc list-inside space-y-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 md:w-1/2 mx-auto p-8 shadow rounded bg-primary text-center">
        <h5 className="text-4xl font-semibold">Contact</h5>
        <p className="text-2xl">Reach us directly at: usfranc@bobosohomail.com</p>
      </div>

      {/* Why Invest in USFranc (USF)? */}
      <h1 className="text-3xl font-bold mb-6 mt-8 md:mt-16 text-center">
        Why Invest in USFranc (USF)?
      </h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {reasonsToInvest.map((reason, index) => (
          <div key={index} className="mb-8 p-6 rounded-2xl border border-logo">
            <h2 className="text-2xl font-semibold mb-3">{reason.title}</h2>
            {reason.content &&
              reason.content.map((paragraph, i) => (
                <p key={i} className="mb-2">
                  {paragraph}
                </p>
              ))}
            {reason.list && (
              <ul className="list-disc list-inside mt-2 space-y-1">
                {reason.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Invest in USFranc (USF) – A Cryptocurrency Built for Stability and Growth!, */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-8">
        {investContent.introHeading}
      </h2>
      <h5 className="md:text-xl  text-center text-accent mb-12">
        {investContent.subHeading}
      </h5>

      <p className="text-white/80 text-base md:text-lg mb-6">
        {investContent.introParagraph}
      </p>

      {investContent.sections.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
          {section.points ? (
            <ul className="list-disc ml-6 space-y-2">
              {section.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-base md:text-lg">{section.paragraph}</p>
          )}
        </div>
      ))}

      <div className="text-center my-10 p-4 rounded-2xl shadow bg-primary md:w-1/2 mx-auto">
        <h4 className="text-2xl font-bold mb-4">
          {investContent.finalCTA.heading}
        </h4>
        <p className="text-base md:text-lg mb-6">
          {investContent.finalCTA.paragraph}
        </p>
        <Link
          href={"/contact"}
          className="inline-block bg-logo text-white font-semibold py-3 px-8 rounded transition"
        >
          {investContent.finalCTA.buttonText}
        </Link>
      </div>
    </Container>
  );
}
