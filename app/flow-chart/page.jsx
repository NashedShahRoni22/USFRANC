import React from "react";
import Image from "next/image";
import bannerImage from "../assets/CHART USFRANC.jpg";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 flex justify-center">
      <Image
        src={bannerImage}
        alt="USFRANC First Sales Flow"
      />
    </div>
  );
}
