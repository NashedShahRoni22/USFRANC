import { FaBalanceScale } from "react-icons/fa";
import Container from "../shared/Container";
import highlights from "../../assets/compliance_governance.png"
import Image from "next/image";

export default function Highlights() {

  return (
    <Container>
      <section className="py-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <Image src={highlights} alt="hightlight image" height={""} width={""} className="shadow rounded-xl" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-logo text-6xl"><FaBalanceScale /></span>
            <h3 className="text-6xl font-semibold mt-8">Compliance & Governance First</h3>
            <p className="mt-4 text-3xl">We operate under a hybrid PoW + PoS consensus model, ensuring a secure, transparent, and community-driven governance framework.</p>
          </div>
        </div>
      </section>

      <p className="text-[22px] text-center border-t-4 border-b-4 border-logo py-5">
        USFranc: A secure cryptocurrency for modern usage —
        backed by compliance, powered by capital, and designed for real-world utility.
      </p>
    </Container>
  );
}
