import React from "react";
import { FaFileSignature } from "react-icons/fa";

const privateSalePoints = [
  {
    title: "1. Immediate Delivery",
    list: [
      "100% of purchased USF coins are sent to the investor wallet at the time of purchase.",
    ],
  },
  {
    title: "2. Deferred Utility Distribution",
    list: [
      "10% bonus after 12 months (Year 1)",
      "10% bonus after 24 months (Year 2)",
      "Total bonus: 20%",
    ],
  },
  {
    title: "3. Holding & Resale Rules",
    list: [
      "No resale in Year 1.",
      "At the end of Year 1, investors may sell up to 50% of their total holding (including bonus coins received by then).",
      "At the end of Year 2, all remaining coins (initial + bonuses) are fully unlocked for use or sale.",
    ],
  },
  {
    title: "Legal Framing (FCA-safe)",
    list: [
      "This is a two-year utility participation program.",
      "Not a guarantee of return or investment yield.",
      "The Deferred Utility Distribution is based on ecosystem support, not a financial incentive.",
    ],
  },
  {
    title: "Issuer Information",
    content:
      "Issuer: USFranc Ltd\nEmail: usfranc@bobosohomail.com\nJurisdiction: United Kingdom",
  },
];

export default function PrivateSaleTermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <FaFileSignature className="text-[#7b5e00] text-3xl" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#7b5e00]">
            USFranc Private Sale Participation Terms
          </h1>
        </div>

        <p className="mb-6">
          This document outlines the structure and conditions for participation in the
          USFranc Private Sale. The program is designed to provide early access to the
          USFranc cryptocurrency while supporting responsible usage and ecosystem alignment.
        </p>

        {privateSalePoints.map((point, idx) => (
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