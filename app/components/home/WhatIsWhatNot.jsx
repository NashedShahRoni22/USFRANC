"use client";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Container from "../shared/Container";
import banner from "../../assets/win_banner.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WhatIsWhatNot() {
  const pathname = usePathname();
  console.log('====================================');
  console.log(pathname);
  console.log('====================================');

  const usFrancData = [
    {
      category: "What USFRANC IS",
      icon: <FaCheckCircle className="text-green-600 mt-1" />,
      color: "text-green-500",
      border: "border-green-500",
      points: [
        "A native cryptocurrency built on its own hybrid PoW + PoS blockchain.",
        "A utility coin backed by capital reserves (67%+ hedged at launch).",
        "A decentralized, transparent, and community-governed project.",
        "A non-custodial system — users control their own wallets.",
        "A flexible means of payment, storage, or crypto exchange.",
      ],
    },
    {
      category: "What USFRANC IS NOT",
      icon: <FaTimesCircle className="text-red-600 mt-1" />,
      color: "text-red-500",
      border: "border-red-500",
      points: [
        "Is not a fiat coin.",
        "Not a financial security or investment product.",
        "Not a custodial platform, bank, or lender.",
        "Not a source of dividends, passive yield, or ownership rights.",
        "Not an issuer of returns, interest, or financial guarantees.",
      ],
    },
  ];

  const utilityUseCases = [
    {
      title: "Peer-to-Peer Transfers",
      description:
        "Send USF instantly between wallets across borders — fast, secure, and decentralized.",
    },
    {
      title: "Store of Value with Flexibility",
      description:
        "Hold USF securely in your wallet. Swap into other cryptocurrencies when needed.",
    },
    {
      title: "Merchant Payments with Escrow",
      description:
        "Pay for goods using USF. Merchants who opt in receive funds after delivery and a 7-day return window.",
    },
    {
      title: "Flexible Recipient Usage",
      description:
        "Recipients can hold, convert, resell, or spend USF depending on local crypto laws.",
    },
  ];

  return (
    <Container>
      <div className="">
        <div>
          <Image
            className="rounded-xl min-w-full"
            src={banner}
            alt="Banner image here"
            height={""}
            width={""}
          />

          <p className="mt-8 text-center text-xl">
            USFRANC is a cryptocurrency with multiple purposes. Its use is
            subject to your country’s regulations. USFRANC is not intended to
            constitute, nor should it be considered, an investment opportunity,
            investment contract, or any form of security.
          </p>

          {pathname !== "/difference" && (
            <div className="flex justify-center my-12">
              <Link
                className="px-8 py-3 bg-logo text-white rounded shadow"
                href={"/difference"}
              >
                Learn More
              </Link>
            </div>
          )}
        </div>

        {pathname === "/difference" && (
          <>
            <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-accent">
              What USFRANC Is & Isn't
            </h2>

            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-8">
              {usFrancData.map((section, idx) => (
                <div
                  key={idx}
                  className={`flex-1 border rounded-2xl p-6 ${section.border} shadow`}
                >
                  <h3
                    className={`text-xl md:text-2xl font-semibold mb-4 ${section.color}`}
                  >
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-textPrimary "
                      >
                        <span className="text-2xl">{section.icon}</span>
                        <span className="text-xl">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-8 mb-16">
              {/* Utility Use Cases */}
              <div className="flex-1">
                <h5 className="text-xl md:text-2xl font-semibold mb-4 text-accent">
                  Utility Use Cases
                </h5>
                <ul className="space-y-4">
                  {utilityUseCases.map((useCase, idx) => (
                    <li key={idx} className="text-xl">
                      <p className="font-semibold">
                        {idx + 1}. {useCase.title}
                      </p>
                      <p className="mt-1">{useCase.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jurisdictional Use */}
              <div className="flex-1">
                <h5 className="text-2xl font-semibold mb-4 text-accent">
                  Jurisdictional Use
                </h5>
                <p className=" text-xl">
                  USFRANC may be used for payments where legally permitted, or
                  held, exchanged, and transferred where crypto usage is lawful.
                </p>
                <p className=" text-xl mt-4">
                  USFRANC does not promise capital gain, returns, or act as a
                  regulated financial instrument.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
