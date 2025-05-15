import React from "react";
import Container from "../components/shared/Container";
import CapitalHedge from "../assets/capital_hedge.png";
import Image from "next/image";

const content = [
  {
    title: "Overview",
    body: [
      "USFRANC’s Capital Hedge Policy is the foundation of the USFRANC cryptocurrency coin, created to demonstrate that its value is backed by real, reserved capital — not by speculation or intangible hope, as is often the case in the wider crypto environment.",
      "USFRANC Ltd uses its own proceeds from first sales to build a sovereign-backed reserve invested in low-risk government instruments and insured financial assets. This reserve is strictly owned and controlled by USFRANC Ltd and its associated companies.",
      "100% of these funds are invested transparently and managed under an auditable, community-supervised framework, ensuring long-term stability, trust, and regulatory alignment.",
      "This model proves that USFRANC is not a speculative asset, but a self-backed cryptocurrency and blockchain provider, grounded in financial responsibility and tangible reserves."
    ],
  },
  {
    title: "Core Objectives",
    body: [
      "Capital Preservation: Ensure that the reserve retains value regardless of market conditions, without speculative exposure.",
      "Sovereign Security: Base reserves entirely on government-backed obligations to minimize default risk.",
      "High Liquidity: Maintain immediate access to funds, allowing rapid deployment if necessary.",
      "Regulatory Compliance: Meet or exceed standards for reserve asset management established by leading regulatory authorities (FCA, AMF, ESMA, FinCEN).",
      "Community Oversight: Operate under validator community governance, ensuring decentralized transparency.",
    ],
  },
  {
    title: "Investment Framework",
    body: [
      "The reserve will be invested as follows:",
      "AAA/AA-rated Sovereign Bonds (70%)",
      "Short-Term Sovereign Instruments (20%)",
      "Cash Equivalents (10%)",
    ],
  },
  {
    title: "Reserve Management",
    body: [
      "The reserve will be centrally managed by an entity known as the USFRANC Reserve Management Entity.",
      "Responsibilities of the Reserve Manager include: Executing the investment allocation according to the policy, maintaining liquidity levels, publishing quarterly reserve reports, and submitting to annual independent audits.",
    ],
  },
  {
    title: "Governance and Oversight",
    body: [
      "The Validator Community retains full authority over the appointment, oversight, and potential replacement of the Reserve Manager.",
      "Any deviation from the investment policy requires formal validator approval.",
    ],
  },
  {
    title: "Risk Management",
    body: [
      "Default Risk: Mitigated by limiting investments to sovereign issuers with the highest available credit ratings (AAA/AA).",
      "Liquidity Risk: Addressed by maintaining a substantial proportion of assets in short-term treasury instruments and cash equivalents.",
      "Currency Risk: Mitigated by denominating assets in strong reserve currencies (EUR, USD, CHF).",
    ],
  },
  {
    title: "Reporting",
    body: [
      "Quarterly Reports: Detailed asset breakdowns, maturities, and custodial confirmations.",
      "Annual Audits: Conducted by external, regulated audit firms; publicly available.",
      "On-chain Publication: All reports uploaded to the blockchain for immutable transparency.",
    ],
  },
];

export const metadata = {
  title: "USFRANC Hedge Capital | Securing Crypto with Capital Reserves",
  description:
    "Understand how USFRANC utilizes hedge capital strategies to ensure the stability and trustworthiness of its cryptocurrency.",
};

export default function Page() {
  return (
    <Container>
      <Image
        alt="banner_image"
        height={""}
        width={""}
        src={CapitalHedge}
        className="min-w-full rounded-xl shadow"
      />
      <section className="pb-20">
        {content.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-logo mt-8">
              {section.title}
            </h2>
            {section.body.map((text, idx) => (
              <p key={idx} className="text-lg">
                {text}
              </p>
            ))}
          </div>
        ))}
      </section>
    </Container>
  );
}
