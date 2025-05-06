import React from "react";
import Image from "next/image";
import bannerImage from "../assets/flow-chart.png";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <Image
        src={bannerImage}
        alt="USFranc First Sales Flow"
      />
    </div>
  );
}
