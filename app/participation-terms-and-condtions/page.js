import React from "react";
import { FaGavel } from "react-icons/fa";

const privateSaleTnCPoints = [
  {
    title: "1. Participation and Delivery",
    content:
      "Participants will receive 100% of their purchased USF coins directly to their wallet upon completion of the transaction.",
  },
  {
    title: "2. Deferred Utility Distribution",
    list: [
      "10% issued after 12 months",
      "10% issued after 24 months",
      "This distribution is conditional and is not guaranteed. It is provided as a utility allocation, not as a return or profit."
    ],
  },
  {
    title: "3. Resale Restrictions",
    list: [
      "No resale permitted in the first 12 months.",
      "After 12 months, participants may sell up to 50% of their total holdings (initial and Year 1 bonus).",
      "After 24 months, all remaining coins are fully unlocked for use or sale."
    ],
  },
  {
    title: "4. Regulatory Status",
    content:
      "USFranc is a utility cryptocurrency and not a security or investment product. Participation in the private sale does not constitute an offer of financial returns or interest. All distributions are subject to ecosystem rules and compliance frameworks."
  },
  {
    title: "5. Contact",
    content:
      "Issuer: USFranc Ltd\nEmail: usfranc@bobosohomail.com\nJurisdiction: United Kingdom"
  }
];

export default function PrivateSaleTnCPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaGavel className="text-[#7b5e00] text-3xl" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#7b5e00]">
            USFranc Private Sale Terms and Conditions
          </h1>
        </div>

        <p className="mb-6">
          These Terms and Conditions apply to all participants in the USFranc Private Sale and establish the framework for distribution, use, and resale of USFranc (USF) coins.
        </p>

        {privateSaleTnCPoints.map((point, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold text-[#7b5e00] mb-2">{point.title}</h2>
            {point.content && (
              <p className="whitespace-pre-line">{point.content}</p>
            )}
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