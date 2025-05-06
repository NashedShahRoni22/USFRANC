import Container from "../components/shared/Container";
import Compliance from "./compliance";

export const metadata = {
  title: "Compliance & Governance | USFRANC Cryptocurrency Standards",
  description:
    "Review USFRANC's commitment to compliance and governance, ensuring secure and regulated cryptocurrency operations.",
};

export default function Page() {
  

  return (
    <Container>
      <Compliance/>
    </Container>
  );
}
