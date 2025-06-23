import React from "react";
import { FaFileContract } from "react-icons/fa";

const termsPoints = [
  {
    title: "1. Coin Delivery",
    content:
      "All participants will receive 100% of their purchased USFranc (USF) coins directly to their designated wallet address immediately upon completion of their pre-launch purchase.",
  },
  {
    title: "2. Deferred Utility Distribution",
    content:
      "Participants may receive up to an additional 60% in USF through a Deferred Utility Distribution, issued as 20% allocations annually over three years (at 12, 24, and 36 months post-launch). This is not a guaranteed return and may be adjusted or withheld based on compliance, eligibility, and behavior aligned with the USFranc ecosystem.",
  },
  {
    title: "3. Resale Conditions",
    content:
      "Participants agree not to resell more than one-third (1/3) of their originally purchased USF coins per year starting from the second year post-launch. This limitation supports price stability and responsible usage.",
  },
  {
    title: "4. Regulatory & Legal Notice",
    content:
      "USFranc is a utility cryptocurrency. It is not classified as an investment product or financial security. No financial returns or profit guarantees are offered. The Deferred Utility Distribution is not interest, yield, or a financial incentive. It is solely designed to encourage long-term participation in the USFranc ecosystem.",
  },
  {
    title: "5. Contact & Jurisdiction",
    content:
      "Issuer: USFranc Ltd\nEmail: usfranc@bobosohomail.com\nJurisdiction: United Kingdom",
  },
];

export default function PreLaunchTermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaFileContract className="text-[#7b5e00] text-3xl" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#7b5e00]">
            USFranc Pre-Launch Participation Terms & Conditions
          </h1>
        </div>

        {termsPoints.map((point, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold text-[#7b5e00] mb-2">{point.title}</h2>
            <p className="whitespace-pre-line">{point.content}</p>
          </div>
        ))}

        <p className="text-sm text-gray-500 mt-10">Date: May 15, 2025</p>
      </div>
    </div>
  );
}