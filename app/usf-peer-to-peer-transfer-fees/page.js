import Image from "next/image";
import Container from "../components/shared/Container";
import heroImg from "../assets/peer-to-peer-transfer.png";

const usfAdvantages = [
  {
    title: "USF Transection Fees",
    points: [
      "A 2% admin fee is applied to peer-to-peer transactions.",
      "Collected fees are allocated to operational reserves and long-term hedge capital.",
    ],
  },
  {
    title: "Ecosystem Sustainability",
    points: [
      "The 2% fee funds essential operations without relying on outside financing.",
      "Keeps the USF ecosystem independent and self-sustaining.",
    ],
  },
  {
    title: "Buyer Protection Guarantee",
    points: [
      "Ensures secure escrow-based holding until delivery is confirmed.",
      "Helps finance the 7-day return window for added consumer confidence.",
    ],
  },
  {
    title: "Trust Through Transparency",
    points: [
      "The fee is clearly disclosed—no hidden charges.",
      "Builds long-term trust between buyers and sellers.",
    ],
  },
  {
    title: "Reinforced Coin Value",
    points: [
      "A portion of fees is allocated to hedge capital, supporting coin price stability.",
      "Encourages long-term holding and investor confidence.",
    ],
  },
  {
    title: "Supports Future Development",
    points: [
      "Helps fund technical upgrades, compliance, and service improvements.",
      "Ensures USF remains secure, efficient, and regulatory-compliant.",
    ],
  },
];

export default function page() {
  return (
    <Container>
      <div className="flex items-center py-10 md:py-20 justify-between flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-3xl font-bold">
            Advantages of USF Peer-to-Peer Transfer Fees
          </h2>
          {usfAdvantages.map((advantage, index) => (
            <div key={index}>
              <h3 className="md:text-xl font-semibold mt-5">
                {advantage.title}
              </h3>
              <ul className="list-disc list-inside mt-2.5">
                {advantage.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={heroImg}
            alt="peer to peer transfer"
            className="rounded-xl"
          />
        </div>
      </div>
    </Container>
  );
}
