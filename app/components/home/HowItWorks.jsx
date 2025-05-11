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
      list: [
        "Payments are securely held in escrow until delivery is confirmed.",
        "Buyers are protected with a 7-day return window before final fund release.",
      ],
    },
    {
      title: "Merchant Reliability",
      icon: <RiRefund2Fill />,
      list: [
        "Merchants agree to hold payments in their USF wallet until delivery is fulfilled.",
        "This builds trust and enhances their reputation for future transactions.",
      ],
    },
    {
      title: "Mutual Trust for Repeat Business",
      icon: <FaStore />,
      list: [
        "System encourages ongoing buyer-merchant relationships through transparency and reliability.",
      ],
    },
  ];
  return (
    <Container>
      <div className="py-8 md:py-16">
        <h5 className="font-semibold text-3xl md:text-4xl text-center">
          How USF secures your purchase payments?
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
                  <ul className="list-disc list-inside">
                    {item.list.map((l, index) => (
                      <li key={index}>{l}</li>
                    ))}
                  </ul>
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
                USF Transection Fees:
              </h5>
              <ul className="list-disc space-y-2 ml-5 text-xl">
                <li>A 2% admin fee is applied to peer-to-peer transactions.</li>
                <li>
                  Collected fees are allocated to operational reserves and
                  long-term hedge capital
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
