import { FaBalanceScale, FaShieldAlt, FaWallet } from "react-icons/fa";
import Container from "../shared/Container";

export default function Highlights() {
  const data = [
    {
      title: "Capital Reserve Protection",
      desc: "USFRANC OWN CAPITAL HEDGE FUND A portion (67%) of all First sales by USF to a crypto Buyer is securely invested into low-risk reserves ( gov bonds or simular Investments ), this capital is entirely the financial property of USFRANC, its hedging purpose is to ensure trust, stability for USF users.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Wallet-Based Escrow Security",
      desc: "Funds are securely held in a wallet-based escrow, protecting both buyers and merchants by ensuring safe and verified transactions. Note Merchants must opte in to USF wallet. USF can be paid to any wallet by crypto holder.",
      icon: <FaWallet />,
    },
    {
      title: "Compliance & Governance First",
      desc: "We operate under a hybrid PoW + PoS consensus model, ensuring a secure, transparent, and community-driven governance framework.",
      icon: <FaBalanceScale />,
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 md:py-16 mt-8 md:mt-16">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2.5">
            <span className="text-logo text-6xl">{item.icon}</span>
            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
