"use client"
import React, { useState } from "react";
import EnglishPage from "./english";
import FrancePage from "./france";

export default function Compliance() {
  const [lang, setLang] = useState("en");
  return (
    <section>
      <div className="flex gap-4">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2.5 rounded ${
            lang === "en" && "bg-logo text-white"
          }`}
        >
          Global
        </button>
        <button
          onClick={() => setLang("fr")}
          className={`px-4 py-2.5 rounded ${
            lang === "fr" && "bg-logo text-white"
          }`}
        >
          France
        </button>
      </div>
      {lang === "en" ? <EnglishPage /> : <FrancePage />}
    </section>
  );
}
