import Container from "../shared/Container";
import bannerImage from "../../assets/banner_image.jpeg";
import Image from "next/image";

export default function Usage() {
  const usageItems = [
    {
      title: "Online Spending",
      description:
        "Make purchases with USFC at online merchants accepting the cryptocurrency.",
      color: "text-blue-500",
    },
    {
      title: "Store of Value",
      description:
        "Buy and hold USFC as a store of value, exchanging to other crypto when desired.",
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
        "Transact USFC to other users for delivery globally and for withdrawal to traditional currency.",
      color: "text-red-500",
    },
  ];

  return (
    <Container>
      <section className="py-10">
        <Image alt="bannerImage"  src={bannerImage} height={""} width={""} className="rounded-xl shadow" />
        <div className="text-center mt-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Built for Trust, Powered by Purpose
          </h1>
          <p className="text-[20px] font-semibold mt-8 text-logo">
            Recommended Usage of USFC (Usage may differ according to crypto
            users’ country regulations. Apply the appropriate use for your
            purpose).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full mt-16">
          {usageItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-md transition-transform hover:scale-105 duration-300 ease-linear"
            >
              <p className={`font-semibold text-[25px] ${item.color}`}>
                {item.title}
              </p>
              <p className="text-gray-800 text-[23px] mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
