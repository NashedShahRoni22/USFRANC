"use client";
import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router";
import { BiCopyright } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa6";
import Captcha from "./Captcha";
import bittsLogo from "../assets/bitss_logo.png";
// import SectionContainer from "../../../components/shared/SectionContainer";
// import SectionTitle from "../../../components/SectionTitle";
// import SectionSubTitle from "../../../components/SectionSubTitle";
import Container from "../components/shared/Container";
import { smtpexpressClient } from "./smtp";
import Image from "next/image";

const page = () => {
  //   const navigate = useNavigate();
  const form = useRef();
  const [loader, setLoader] = useState(false);
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    skypeId: "",
    subject: "",
    message: "",
    captchaInput: "",
  });

  const [captchaAnswer, setCaptchaAnswer] = useState(null);
  const [invalidCaptcha, setInvalidCaptcha] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  const [invalidKey, setInvalidKey] = useState(false);
  const [forbiddenWords, setForbiddenWords] = useState([]);

  // Get all countries name
  useEffect(() => {
    fetch("/country.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading country data:", error));

    fetchForbiddenWords();
  }, []);

  // Handle input filed change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Get all forbidden words list
  const fetchForbiddenWords = async () => {
    const apiUrl = "https://bitts.fr/api.php";

    try {
      const credential = await fetch("/credential.json");
      const credentialsData = await credential.json();
      if (
        !credentialsData ||
        !credentialsData.username ||
        !credentialsData.password
      ) {
        return;
      }

      const servername = window.location.hostname;
      const data = { ...credentialsData, servername };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setForbiddenWords(result ?? []);
      } else {
        setInvalidKey(true);
      }
    } catch (error) {
      console.error("Error fetching forbidden words:", error);
      setInvalidKey(true);
    }
  };

  // Check for forbidden words in message filed
  const checkForbiddenWords = (message) => {
    for (const word of forbiddenWords) {
      if (message.toLowerCase().includes(word.toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  // Handle contact form submit
  const submitForm = async (event) => {
    event.preventDefault();
    setLoader(true);

    if (parseInt(formData.captchaInput, 10) !== captchaAnswer) {
      setLoader(false);
      setInvalidCaptcha(true);
      return;
    } else {
      setInvalidCaptcha(false);
    }

    if (!checkForbiddenWords(formData.message)) {
      setLoader(false);
      setInvalidMessage(true);
      return;
    } else {
      setInvalidMessage(false);
    }

    try {
      // Create a formatted message to send
      const formattedMessage = `
            Name: ${formData.name}
            <br />
            Email: ${formData.email}
            <br />
            Subject: ${formData.subject}
            <br />
            Phone: ${formData.phone}
            <br />
            Country: ${formData.country}
            <br />
            Skype ID: ${formData.skypeId}
            <br />
            Message: ${formData.message}
      `;
      // Sending an email using SMTP
      await smtpexpressClient.sendApi.sendMail({
        // Subject of the email
        subject: `Bobosoho Contact Form Submission from ${formData.name}`,
        // Body of the email
        message: `${formattedMessage}`,
        // Sender's details
        sender: {
          // Sender's name
          name: "Bobosoho",
          // Sender's email address
          email: "bfinit-9b2b98@projects.smtpexpress.com",
        },
        // Recipient's details
        recipients: {
          // Recipient's email address (obtained from the form)
          // email: `${formData.email}`,
          email: `support@bobosohomail.com`,
        },
      });

      setLoader(false);
      // Notify user of successful submission
      alert("Contact message sent. Our support team will reach you soon.");
      //   navigate("/");
    } catch (error) {
      setLoader(false);
      // Notify user if an error occurs during submission
      alert("Oops! Something went wrong. Please try again later.");
      // You can console.log the error to know what went wrong
      console.log(error);
    }

    // Reset form data and captcha invalidation error message
    setInvalidCaptcha(false);
    setInvalidMessage(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      skypeId: "",
      subject: "",
      message: "",
      captchaInput: "",
    });
  };

  return (
    <Container className="">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mt-8 md:mt-16 mb-4">
        Get In Touch
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10">
        Fill out the form or find us on the map to get in touch.
      </p>

      <div className="flex flex-col gap-12 lg:flex-row mb-8 md:mb-16">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={submitForm}
          className="flex flex-col rounded-lg p-8 shadow-lg lg:w-1/2 bg-white border border-gray-200"
        >
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          />

          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          />

          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          />

          <label
            htmlFor="country"
            className="text-sm font-medium text-gray-700"
          >
            Country *
          </label>
          <select
            id="country"
            name="country"
            required
            onChange={handleChange}
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>

          <label
            htmlFor="subject"
            className="text-sm font-medium text-gray-700"
          >
            Subject/Query *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          />

          <label
            htmlFor="skypeId"
            className="text-sm font-medium text-gray-700"
          >
            Skype ID (Optional)
          </label>
          <input
            type="text"
            id="skypeId"
            name="skypeId"
            value={formData.skypeId}
            onChange={handleChange}
            placeholder="Skype Id"
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          />

          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Enter Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          />

          {/* Captcha Component */}
          <Captcha onCaptchaGenerated={setCaptchaAnswer} />

          <input
            type="text"
            id="captchaInput"
            name="captchaInput"
            required
            value={formData.captchaInput}
            onChange={handleChange}
            placeholder="Captcha *"
            className="mb-5 mt-2.5 block w-full rounded-lg border border-gray-300 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          />

          {invalidCaptcha && (
            <p className="text-sm text-red-500">
              Invalid Captcha! Please try again.
            </p>
          )}
          {invalidMessage && (
            <p className="text-sm text-red-500">
              Your message contains forbidden words.
            </p>
          )}
          {invalidKey && (
            <p className="text-sm text-red-500">Invalid API Key.</p>
          )}

          <button
            type="submit"
            className="mt-6 py-3 px-6 rounded-lg bg-logo text-lg text-white hover:bg-primary hover:shadow-lg transition-all duration-300"
          >
            {loader ? (
              <p className="flex items-center gap-2">
                Sending <FaSpinner className="animate-spin text-xl" />
              </p>
            ) : (
              "Send Message"
            )}
          </button>

          <div className="mt-6 text-center text-xs text-gray-600">
            <p>
              <BiCopyright /> 2024 BFIN. BITSS by BFIN. All rights reserved.
            </p>
            <div className="flex flex-col items-center">
              <Image
                src={bittsLogo}
                alt="bitss logo"
                loading="lazy"
                width={100}
                height={100}
                className="object-cover"
              />
              <p>This form is powered by BitSS Cyber Security</p>
            </div>
          </div>
        </form>

        {/* Google Map */}
        <div className="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5795.795980198256!2d3.708454!3d43.420958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1357c2efa6fbb%3A0xddfc93666aef9f37!2s8%20Rue%20de%20Dublin%2C%2034200%20S%C3%A8te%2C%20France!5e0!3m2!1sen!2sbd!4v1723619506631!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      <div className="mb-16">
        <p>
          <strong>USFRANC LTD</strong> (Reg N° 10325829)
        </p>
        <p>
          <strong>Correspondence Address:</strong>
          <br />
          4th Floor, Silverstream House,
          <br />
          45 Fitzroy Street, London,
          <br />
          England, W1T 6EB, UK
        </p>
        <p>
          <strong>USFRANC LTD (French Hybrid Office)</strong>
          <br />
          Compliance & Network Management
          <br />8 Rue Dublin, 34200 Sète, France
        </p>
        <p>
          <strong>SAS Affin</strong> (Reg N° 803965227, RCS Montpellier)
          <br />
          (Appointed USFranc Reserve Management Entity Manager)
          <br />8 Rue Dublin, 34200 Sète, France
        </p>
      </div>
    </Container>
  );
};

export default page;
