"use client"
import React, { useState } from "react";
import Container from "../components/shared/Container";
import EnglishPage from "./english";
import FrancePage from "./france";

export default function Page() {
  const [lang, setLang] = useState("en");

  return (
    <Container>
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2.5 rounded ${lang === "en" && "bg-logo text-white"}`}
        >
          Global
        </button>
        <button
          onClick={() => setLang("fr")}
          className={`px-4 py-2.5 rounded ${lang === "fr" && "bg-logo text-white"}`}
        >
          France
        </button>
      </div>
      {lang === "en" ? <EnglishPage /> : <FrancePage />}
    </Container>
  );
}
