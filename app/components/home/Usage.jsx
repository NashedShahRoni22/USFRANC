import { FaLongArrowAltDown } from "react-icons/fa";
import Container from "../shared/Container";
import banner from "../../assets/banner_image.jpeg";
import Image from "next/image";

export default function Usage() {
  const usageItems = [
    {
      title: "Online Spending",
      description:
        "Make purchases with USF at online merchants accepting the cryptocurrency.",
      color: "text-blue-500",
    },
    {
      title: "Store of Value",
      description:
        "Buy and hold USF as a store of value, exchanging to other crypto when desired.",
      color: "text-green-500",
    },
    {
      title: "Secure Purchases",
      description:
        "Utilize the optional escrow feature for added security in transactions.",
      color: "text-orange-500",
    },
    {
      title: "Money Transfer",
      description:
        "Transact USF to other users for delivery globally and for withdrawal to traditional currency.",
      color: "text-red-500",
    },
  ];

  return (
    <Container>
      <section className="flex flex-col gap-8 py-20">
        <Image src={banner} alt="Banner" className="rounded-xl" />

        <div className="">
          <div className="flex flex-col gap-12">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Built for Trust, Powered by Purpose
              </h1>
              <p className="text-lg md:text-xl mt-8">
                Recommended Usage of USF (Usage may differ according to crypto
                users’ country regulations. Apply the appropriate use for your
                purpose).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full">
              {usageItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-md transition-transform hover:scale-105 duration-300 ease-linear"
                >
                  <p className={`font-semibold text-2xl ${item.color}`}>
                    {item.title}
                  </p>
                  <p className="text-gray-800 text-lg mt-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
