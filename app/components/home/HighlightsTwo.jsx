import { FaBalanceScale, FaShieldAlt, FaWallet } from "react-icons/fa";
import Container from "../shared/Container";
import highlights from "../../assets/highlights_two.png"
import Image from "next/image";

export default function HighlightsTwo() {
    const data = [
        {
            title: "USFRANC OWN CAPITAL HEDGE FUND",
            desc: "USFRANC OWN CAPITAL HEDGE FUND A portion (67%) of all First sales by USF to a crypto Buyer is securely invested into low-risk reserves ( gov bonds or simular Investments ), this capital is entirely the financial property of USFRANC, its hedging purpose is to ensure trust, stability for USF users.",
            icon: <FaShieldAlt />,
        },
        {
            title: "Wallet-Based Escrow Security",
            desc: "Funds are securely held in a wallet-based escrow, protecting both buyers and merchants by ensuring safe and verified transactions. Note Merchants must opte in to USF wallet. USF can be paid to any wallet by crypto holder.",
            icon: <FaWallet />,
        },
        // {
        //   title: "Compliance & Governance First",
        //   desc: "We operate under a hybrid PoW + PoS consensus model, ensuring a secure, transparent, and community-driven governance framework.",
        //   icon: <FaBalanceScale />,
        // },
    ];

    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-[16px] items-center">
                <div className="md:w-1/2">
                    <Image src={highlights} height={""} width={""} alt="highlights two image" className="shadow rounded-xl" />
                </div>
                <div className="md:w-1/2 grid grid-cols-1 gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="shadow rounded-xl p-8">
                            <span className="text-logo text-6xl">{item.icon}</span>
                            <h3 className="text-xl font-semibold mt-8">{item.title}</h3>
                            <p className="mt-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
