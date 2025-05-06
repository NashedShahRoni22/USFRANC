"use client"
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-primary shadow py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-base" />
              <span>0033666100010</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaEnvelope className="text-base" />
              <span>support@usfranc.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaEnvelope className="text-base" />
              <span>usfranc@bobosohomail.com</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2">Newsletter</h4>
            <p className="text-sm text-gray-600">
              Subscribe to stay updated with our latest news and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 bg-white border border-gray-300 rounded-l-md focus:outline-none text-sm"
              />
              <button className="bg-logo text-white px-4 py-2 rounded-r-md text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-3 items-center md:items-end">
            <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <FaTwitter className="hover:text-[#1DA1F2] cursor-pointer" />
              <FaFacebook className="hover:text-[#4267B2] cursor-pointer" />
              <FaGithub className="hover:text-[#333] cursor-pointer" />
              <FaLinkedin className="hover:text-[#0077B5] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-xs text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} USFRANC LTD | Registration N°
          10325829 | England & Wales.
        </p>
      </Container>
    </footer>
  );
}
