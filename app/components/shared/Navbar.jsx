"use client";

import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import Link from "next/link";
import logo from "../../assets/logo.webp";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Container from "./Container";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChildNav, setShowChildNav] = useState({
    id: null,
    state: false,
  });
  // manage translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <nav className="bg-primary py-2.5 sticky shadow top-0 z-50">
      <Container>
        <div className="flex justify-between items-center relative">
          <Link href={"/"} className="logo flex items-center">
            <Image
              alt="usfranc_logo"
              src={logo}
              className="h-8 w-8 sm:h-12 sm:w-12"
            />
            <span className="text-2xl font-semibold text-logo">USFRANC</span>
          </Link>
          <div id="google_translate_element" className="hidden lg:block"></div>
          {/* desktop nav menus  */}
          <div className="hidden lg:flex gap-8">
            {MenuItems.map((menu, index) => (
              <div key={index} className="relative">
                {menu.child ? (
                  <button
                    onClick={() =>
                      setShowChildNav({
                        id: index,
                        state: !showChildNav.state,
                      })
                    }
                    className="font-semibold flex items-center gap-1.5"
                  >
                    {menu.title}
                    <BiChevronDown />
                  </button>
                ) : (
                  <Link
                    onClick={() =>
                      setShowChildNav({
                        id: null,
                        state: false,
                      })
                    }
                    href={menu.path}
                    className="font-semibold"
                  >
                    {menu.title}
                  </Link>
                )}
                {menu.child &&
                  showChildNav.id === index &&
                  showChildNav.state && (
                    <ul className="absolute left-2.5 flex flex-col gap-1.5 bg-white min-w-[300px] p-2 rounded shadow list-disc list-inside">
                      {" "}
                      {menu.child?.map((mc, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            onClick={() =>
                              setShowChildNav({
                                id: null,
                                state: false,
                              })
                            }
                            href={mc.path}
                          >
                            {mc.title}
                          </Link>
                        </li>
                      ))}{" "}
                    </ul>
                  )}
              </div>
            ))}
          </div>

          {/* mobile nav menus  */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowNav(!showNav)}
              className="cursor-pointer"
            >
              {showNav ? (
                <IoCloseSharp className="text-3xl text-logo" />
              ) : (
                <FaBars className="text-2xl text-logo" />
              )}
            </button>
            {showNav && (
              <div className="absolute top-12 right-0 flex flex-col bg-white text-black w-[300px] rounded shadow-xl">
                {MenuItems.map((menu, index) => (
                  <div key={index} className="">
                    {menu.child ? (
                      <button
                        onClick={() =>
                          setShowChildNav({
                            id: index,
                            state: !showChildNav.state,
                          })
                        }
                        className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-gray-200 rounded-lg transition-colors duration-200 ease-in-out min-w-full"
                      >
                        <span className="font-medium">{menu.title}</span>
                        <BiChevronDown />
                      </button>
                    ) : (
                      <Link
                        onClick={() =>
                          setShowNav(false)
                        }
                        href={menu.path}
                        className="flex items-center gap-3 px-5 py-3 hover:bg-gray-200 rounded-lg transition-colors duration-200 ease-in-out"
                      >
                        <span className="font-medium">{menu.title}</span>
                      </Link>
                    )}

                    {menu.child &&
                      showChildNav.id === index &&
                      showChildNav.state && (
                        <ul className="ml-5 transition-all duration-300 ease-in-out mt-2">
                          {menu.child.map((mc, childIndex) => (
                            <li
                              key={childIndex}
                              className="transition-colors duration-200 ease-in-out hover:bg-gray-100 rounded p-2"
                            >
                              <Link
                                onClick={() =>
                                  setShowNav(false)
                                }
                                href={mc.path}
                                className="flex items-center"
                              >
                                <BiChevronRight className="text-xl" />
                                {mc.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
