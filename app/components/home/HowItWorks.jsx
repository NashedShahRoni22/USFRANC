import React from "react";
import { FaUserTie, FaStore, FaArrowDown } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import logoBanner from "../../assets/logo_banner.png";
import Image from "next/image";
import Container from "../shared/Container";

export default function HowItWorks() {
  const data = [
    {
      title: "Buyer Confidence",
      icon: <FaUserTie />,
    },
    {
      title: "Funds Held in Contract",
      icon: <RiRefund2Fill />,
    },
    {
      title: "Merchant Receives After Delivery",
      icon: <FaStore />,
    },
  ];
  return (
    <Container>
      <div className="py-8 md:py-16">
        <h5 className="font-semibold text-3xl md:text-4xl text-center">
          How USF Works?
        </h5>

        <div className="mt-8 md:mt-16">
          {/* Left - Flow Steps */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8  relative z-0">
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-4 p-4">
                  <div className="text-logo text-6xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-center">
                    {item.title}
                  </h3>
                </div>
                {index < data.length - 1 && (
                  <div className="text-logo text-3xl">
                    <FaArrowDown className="md:rotate-270" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Right - Crypto Coin Snapshot */}
          <div className="md:w-1/2 lg:1/4 md:mx-auto mt-8 md:mt-16">
            <div className="border border-logo rounded-2xl p-6 bg-white shadow-lg">
              <h5 className="font-semibold text-2xl md:text-3xl mb-4">
                Crypto Coin Snapshot
              </h5>
              <ul className="list-disc space-y-2 ml-5 text-xl">
                <li>Crypto Coin price: €2.00 at launch</li>
                <li>Max Supply: 115 million (released in 10M phases)</li>
                <li>
                  Consensus: Hybrid Proof of Work + Proof of Stake and capital
                  hedge policy 67% of First sales retained in USF government
                  bond Investments
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            alt="banner_image"
            height={200}
            width={""}
            src={logoBanner}
            className="mt-8 md:mt-16"
          />
        </div>
      </div>
    </Container>
  );
}
