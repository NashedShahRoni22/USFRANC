import { FaLongArrowAltDown } from "react-icons/fa";
import Container from "../shared/Container";

export default function Usage() {
  const usageItems = [
    {
      title: "Online Spending",
      description:
        "Make purchases with USF at online merchants accepting the cryptocurrency.",
      color: "text-blue-500",
      ring: "ring-blue-200",
    },
    {
      title: "Store of Value",
      description:
        "Buy and hold USF as a store of value, exchanging to other crypto when desired.",
      color: "text-green-500",
      ring: "ring-green-200",
    },
    {
      title: "Secure Purchases",
      description:
        "Utilize the optional escrow feature for added security in transactions.",
      color: "text-orange-500",
      ring: "ring-orange-200",
    },
    {
      title: "Money Transfer",
      description:
        "Transact USF to other users for delivery globally and for withdrawal to traditional currency.",
      color: "text-red-500",
      ring: "ring-red-200",
    },
  ];

  return (
    <section className="bg-primary py-20 px-6 md:px-0">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-logo">
            Built for Trust, Powered by Purpose
          </h1>
          <p className="text-lg md:text-xl text-accent max-w-3xl mx-auto">
            Recommended Usage of USF (Usage may differ according to crypto
            users’ country regulations. Apply the appropriate use for your
            purpose).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {usageItems.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 transition-transform hover:scale-[1.02]"
            >
              <div
                className={`w-48 h-48 rounded-full flex items-center justify-center border-4 ${item.color} mb-4`}
              >
                <span className={`text-xl font-bold ${item.color}`}>
                  {item.title}
                </span>
              </div>

              <FaLongArrowAltDown
                className={`text-4xl mb-4 animate-bounce ${item.color}`}
              />

              <p className="text-gray-700 font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
