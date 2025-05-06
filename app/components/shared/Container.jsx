import React from "react";

export default function Container({ children }) {
  return (
    <section className="max-w-screen-2xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mx-auto">
      {children}
    </section>
  );
}
