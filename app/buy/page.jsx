import buypageImage from "../assets/buy_page.png";
import Container from "../components/shared/Container";
import banner from "../assets/preorder_banner.png";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <Container>
      <section className="py-12 md:py-20 rounded-lg">
        <div className="flex flex-col md:flex-row gap-[24px] items-center">
          <Image src={buypageImage} alt="buy page image" height={600} width={""} className="rounded-xl shadow"/>
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              <span className="text-logo">USFRANC</span> building trust for a
              purpose - the only crypto coin hedged to its own capital.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Join the private sale pre-order of{" "}
              <span className="text-logo font-semibold">
                5 million exclusive crypto coins
              </span>{" "}
              on offer. Built for trust, Powered by Purpose.
              <br />
              Cryptocoin prelaunch sales inputed as followers. 70% to capital
              hedge fund 10% to réservés 20% to admin operational cost. The start
              of the hedge fund will add value to USFRANC crypto coin.
            </p>
            <Link
              href="/pre-order"
              className="inline-block px-6 py-3 bg-logo text-white font-semibold text-lg rounded hover:opacity-90 transition"
            >
              Get USFC Now
            </Link>
            <p className="mt-4 text-sm">
              Private Sale Limited Supply — Secure Your Share Today
            </p>
          </div>
        </div>

        {/* Optional animated counter */}
        <div className="mt-12 text-center">
          <p className="text-2xl md:text-3xl font-bold">
            Only <span className="text-logo">5,000,000</span> coins available on
            Pre-Order Private Sale
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16">
          <Image src={banner} alt="Crypto banner" height={500} width={500} />
        </div>
        {/* <div className="md:w-1/2 bg-red-200 mx-auto p-6 md:p-12 shadow rounded-2xl mt-16">
          <p>
            <strong>Pre-sale conditions:</strong> A sales certificate will be
            issued to the cryptocurrency buyer once the transferred funds are
            received. The buyer must open a trusted wallet and send the details
            to USFRANC on the launch day. The buyer's wallet will be credited
            and the certificate will be canceled. Once the buyer's wallet is
            credited.
          </p>
        </div> */}
        <div className="flex justify-center mt-16">
          <Link
            href="/pre-order"
            className="inline-block px-6 py-3 bg-logo text-white font-semibold text-lg rounded hover:opacity-90 transition"
          >
            Get USFC Now
          </Link>
        </div>
      </section>
    </Container>
  );
}
