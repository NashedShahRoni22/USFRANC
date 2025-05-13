"use client";
import React, { useState } from "react";
import Container from "../components/shared/Container";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    fullAddress: "",
    country: "",
    dob: "",
    quantityOrdered: "",
    totalAmount: 0,
    walletAddress: "",
    date: new Date().toLocaleDateString(),
  });

  const [idDocumentName, setIdDocumentName] = useState("");
  const [signatureFileName, setSignatureFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (e) => {
    const quantity = e.target.value;
    setFormData((prev) => ({
      ...prev,
      quantityOrdered: quantity,
      totalAmount: quantity * 2,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          USFRANC Private Sale Order Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8 p-6 shadow rounded">
          {/* Buyer Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Buyer Information
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-gray-600">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-gray-600">Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Full Address:</label>
                <input
                  type="text"
                  name="fullAddress"
                  value={formData.fullAddress}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-gray-600">Country:</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                ID Document (Obligation — email to usfranc@bobosohomail.com)
              </label>
              <input
                type="file"
                name="idDocument"
                id="idDocument"
                className="hidden"
                required
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setIdDocumentName(file.name);
                  }
                }}
              />
              <label
                htmlFor="idDocument"
                className="inline-block px-6 py-2 bg-logo text-white font-semibold rounded-md cursor-pointer hover:bg-logo-dark"
              >
                Choose File
              </label>
              {idDocumentName && (
                <span className="ml-4 text-sm font-medium text-logo">
                  {idDocumentName}
                </span>
              )}
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Order Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600">
                  Quantity of USFRANC (USF) Ordered:
                </label>
                <input
                  type="number"
                  name="quantityOrdered"
                  value={formData.quantityOrdered}
                  onChange={handleQuantityChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">
                  Total Order Amount (€):
                </label>
                <input
                  type="text"
                  name="totalAmount"
                  value={formData.totalAmount}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Payment Instructions{" "}
              <span className="text-sm text-logo">
                (Please transfer your order amount to the below bank details
                within 7 days)
              </span>
            </h2>
            <p>Bank Transfer: LCL Bank</p>
            <p>
              Account Name: SAS Affin (USFRANC Reserve Management Entity - Ref
              USFRANC)
            </p>
            <p>IBAN: FR10 3000 2030 3700 0007 3122 J65</p>
            <p>SWIFT/BIC: CRLYFRPP</p>
          </div>

          {/* Buyer Acknowledgment */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Buyer Acknowledgment
            </h2>
            <p>
              I confirm my order of USFRANC cryptocurrency and my intention to
              transfer the full order amount in euros to the bank account
              provided.
              <br />
              Upon receipt of payment, the corresponding USFRANC coins will be
              delivered to your Trust Wallet address.
              <br />
              Please send your wallet address to usfranc@bobosohomail.com.
            </p>

            <div>
              <label className="block text-gray-600">Wallet Address:</label>
              <input
                type="text"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">
                Signature Document:
              </label>
              <input
                type="file"
                name="signatureFile"
                id="signatureInput"
                className="hidden"
                required
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setSignatureFileName(file.name);
                  }
                }}
              />
              <label
                htmlFor="signatureInput"
                className="inline-block px-6 py-2 bg-logo text-white font-semibold rounded-md cursor-pointer hover:bg-logo-dark"
              >
                Upload Signature
              </label>
              {signatureFileName && (
                <span className="ml-4 text-sm font-medium text-logo">
                  {signatureFileName}
                </span>
              )}
            </div>

            <div>
              <label className="block text-gray-600">Date:</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-logo"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/3 p-3 bg-logo text-white font-semibold rounded-md shadow-md hover:bg-logo-dark"
            >
              Confirm Order Now
            </button>
          </div>
        </form>

        <p className="font-semibold mt-6">
          How you crypto order will be processed:
        </p>
        <ol className="list-decimal list-inside ml-5 mt-2.5">
          <li>Transfer your payment to the above account.</li>
          <li>
            Once confirmed, we will: Credit your wallet with the correct amount
            of wUSF Send it to your BNB-compatible wallet (Trust Wallet)
          </li>
        </ol>
      </div>
    </Container>
  );
}
