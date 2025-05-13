import Image from "next/image";
import Container from "../components/shared/Container";
import Compliance from "./compliance";
import compilanceImg from "../assets/compilance.png";

export const metadata = {
  title: "Compliance & Governance | USFRANC Cryptocurrency Standards",
  description:
    "Review USFRANC's commitment to compliance and governance, ensuring secure and regulated cryptocurrency operations.",
};

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-16 mt-8 md:mt-16">
        <div className="md:w-1/3">
          <Image
            src={compilanceImg}
            alt="about us frank"
            className="rounded-xl sticky top-20"
          />
        </div>
        <div className="md:w-2/3">
          <Compliance />
        </div>
      </div>
    </Container>
  );
}
