import React from "react";
import { FaUserTie, FaStore, FaArrowDown } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import logoBanner from "../../assets/logo_banner.png";
import Image from "next/image";
import Container from "../shared/Container";
import flowImage from "../../assets/flow.svg";
import SecurePayment from "../../assets/secure_payment.png";

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
      <div className="py-20">
        <Image
          alt="banner_image"
          height={""}
          width={""}
          src={SecurePayment}
          className="mt-8 md:mt-16 min-w-full rounded-xl"
        />
        {/* Flow Steps */}
        {/* <h5 className="mt-8 md:mt-16 font-semibold text-3xl md:text-4xl text-center">
          How USF secures your purchase payments?
        </h5> */}
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-center items-center gap-8  relative z-0">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col gap-4 p-8 rounded-2xl shadow-lg min-h-[280px]">
                <div className="text-logo text-6xl">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
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
