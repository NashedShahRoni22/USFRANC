import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const distributionPoints = [
  {
    title: "1. Purpose",
    content:
      "The Deferred Utility Distribution is a structured allocation mechanism designed to support long-term commitment, ecosystem engagement, and market stability for the USFranc cryptocurrency. It is not a form of return on investment, interest, or profit-sharing.",
  },
  {
    title: "2. Eligibility",
    content:
      "All participants who purchase USFranc (USF) coins during the official pre-launch phase and comply with the applicable participation terms may be eligible for a Deferred Utility Distribution.",
  },
  {
    title: "3. Distribution Schedule",
    content:
      "Participants may receive up to 60% additional USF coins over a three-year period following the official launch of USFranc, subject to compliance and continued engagement. The release schedule is as follows:",
    list: [
      "20% after 12 months",
      "20% after 24 months",
      "20% after 36 months",
    ],
  },
  {
    title: "4. Vesting & Release Conditions",
    content:
      "Each annual allocation is subject to vesting terms that ensure responsible usage. The release may be withheld or adjusted if the participant engages in behavior contrary to the principles of the USFranc ecosystem or violates the pre-sale terms.",
  },
  {
    title: "5. Resale Limitations",
    content:
      "To protect price integrity, participants may not sell more than one-third (1/3) of their original USF purchase per year, starting from the second year post-launch. This condition does not apply to Deferred Utility Distributions.",
  },
  {
    title: "6. Legal & Regulatory Position",
    content:
      "This policy does not constitute an offer of securities or financial products. USFranc is a utility-based cryptocurrency. The Deferred Utility Distribution is not guaranteed and is offered solely as an ecosystem-based allocation under a usage and vesting framework. It is subject to ongoing compliance with applicable laws and regulations under the jurisdiction of the United Kingdom.",
  },
  {
    title: "7. Contact Information",
    content:
      "USFranc Ltd\nEmail: usfranc@bobosohomail.com\nJurisdiction: United Kingdom",
  },
];

export default function InvestorPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaRegFileAlt className="text-[#7b5e00] text-3xl" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#7b5e00]">
            USFranc Deferred Utility Distribution Policy
          </h1>
        </div>

        <p className="mb-6">
          This policy outlines the conditions and structure of the Deferred Utility
          Distribution made available to eligible pre-launch participants of the USFranc
          cryptocurrency project.
        </p>

        {distributionPoints.map((point, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold text-[#7b5e00] mb-2">{point.title}</h2>
            <p className="mb-2 whitespace-pre-line">{point.content}</p>
            {point.list && (
              <ul className="list-disc list-inside space-y-1 pl-2">
                {point.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <p className="text-sm text-gray-500 mt-10">Date: May 15, 2025</p>
      </div>
    </div>
  );
}
