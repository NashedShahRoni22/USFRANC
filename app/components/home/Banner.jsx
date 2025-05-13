import BannerImage2 from "../../assets/updated_banner_image.png";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
export default function Banner() {
  return (
    <Container>
      <section className="lg:flex gap-8 items-center py-16 md:py-32">
        <div className="lg:w-2/3">
          <h2 className="text-5xl md:text-6xl font-bold">
            The Capital-Backed Utility Crypto Coin Built for trust and powered
            by multiple purpose.
          </h2>
          <p className="mt-6 text-xl md:text-2xl">
            USFRANC USFRANC is a decentralized cryptocurrency, using its own
            capital as a hedge fund in building trust and multi purpose for
            crypto users.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link href={"/buy"} className="px-5 py-2 bg-logo text-white text-center border border-logo hover:bg-transparent hover:text-black shadow rounded cursor-pointer ease-linear duration-300">
              Get USF Now
            </Link>
            <Link
              href={"/white-paper"}
              className="px-5 py-2 text-center border border-logo hover:bg-logo hover:text-white shadow rounded cursor-pointer ease-linear duration-300"
            >
              Read Lite White Paper
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <Image
            alt="Banner Image"
            src={BannerImage2}
            height={""}
            width={""}
            className=""
          />
        </div>
      </section>
    </Container>
  );
}
