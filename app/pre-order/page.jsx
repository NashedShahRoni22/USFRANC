"use client";
import React, { useState } from "react";
import { FiUpload, FiRefreshCw, FiCheckCircle } from "react-icons/fi";
import Container from "../components/shared/Container";
import { FaSpinner } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const [selectedType, setSelectedType] = useState("");
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

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

  const [idDocuments, setIdDocuments] = useState({
    front: null,
    back: null,
  });
  const [addressProof, setAddressProof] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const handleIdDocuments = (e, part) => {
    const file = e.target.files[0];
    if (file) {
      setIdDocuments((prev) => ({ ...prev, [part]: file }));
    }
  };

  // For address proof file upload
  const handleAddressProof = (e) => {
    const file = e.target.files[0];
    // Only update if a file was actually selected
    if (file) {
      setAddressProof(file);
    }
  };

  // For signature file upload
  const handleSignatureFile = (e) => {
    const file = e.target.files[0];
    // Only update if a file was actually selected
    if (file) {
      setSignatureFile(file);
    }
  };

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
      totalAmount: quantity * 0.5,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAcknowledged) {
      alert("Please check the acknowledgment checkbox to confirm your order.");
      return;
    }

    // Validation
    if (
      !idDocuments.front ||
      !idDocuments.back ||
      !signatureFile ||
      !addressProof
    ) {
      alert("Please attach all necessary files.");
      return;
    }

    try {
      setIsSubmitting(true);

      // sumission data
      const submissionData = new FormData();
      submissionData.append("fullName", formData.fullName);
      submissionData.append("email", formData.email);
      submissionData.append("phoneNumber", formData.phoneNumber);
      submissionData.append("fullAddress", formData.fullAddress);
      submissionData.append("country", formData.country);
      submissionData.append("dob", formData.dob);
      submissionData.append("quantityOrdered", formData.quantityOrdered);
      submissionData.append("totalAmount", formData.totalAmount);
      submissionData.append("idDocumentFront", idDocuments.front);
      submissionData.append("idDocumentBack", idDocuments.back);
      submissionData.append("signatureFile", signatureFile);
      submissionData.append("addressProof", addressProof);
      if (formData.walletAddress) {
        submissionData.append("walletAddress", formData.walletAddress);
      }

      const res = await fetch("https://usfranc.com/order/submit.php", {
        method: "POST",
        body: submissionData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();

      alert("Form submitted successfully!");

      setFormData({
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
      setIdDocuments({ front: null, back: null });
      setAddressProof(null);
      setSignatureFile(null);
      setIsAcknowledged(false);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          USFRANC Private Sale & Investors Order Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8 p-6 shadow rounded">
          {/* choose buyer type  */}
          <div className="">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Choose buying type</h2>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="private"
                  name="buyingType"
                  value="private"
                  checked={selectedType === "private"}
                  onChange={() => handleTypeChange("private")}
                  className="w-4 h-4"
                />
                <label htmlFor="private" className="cursor-pointer">Private</label>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="investor"
                  name="buyingType"
                  value="investor"
                  checked={selectedType === "investor"}
                  onChange={() => handleTypeChange("investor")}
                  className="w-4 h-4"
                />
                <label htmlFor="investor" className="cursor-pointer">Investor</label>
              </div>
            </div>

            {/* Information Tabs */}
            {selectedType && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                {selectedType === "private" && (
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Deferred Utility Distribution</h4>
                      <div className="space-y-2 text-gray-600">
                        <p>• 10% bonus in crypto after 12 months</p>
                        <p>• 10% bonus in crypto after 24 months</p>
                        <p className="font-medium text-gray-800">Total bonus: 20%</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedType === "investor" && (
                  <div>
                    <div className="space-y-3 text-gray-600">
                      <p>Participants may receive up to <span className="font-semibold text-gray-800">60% additional USFC coins</span> over a three-year period following the official launch of USFranc, subject to compliance and continued engagement.</p>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Release Schedule:</h4>
                        <div className="space-y-1">
                          <p>• 20% bonus in crypto after 12 months</p>
                          <p>• 20% bonus in crypto after 24 months</p>
                          <p>• 20% bonus in crypto after 36 months</p>
                          <p className="font-medium text-gray-800">Total bonus: 60%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Buyer Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Buyer Information
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <div>
                <label className="block text-gray-600">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
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
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <div>
                <label className="block text-gray-600">Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
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
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <div>
                <label className="block text-gray-600">Country:</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
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
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
                  required
                />
              </div>
            </div>

            {/* ID Document container */}
            <div className="col-span-2">
              <label className="block text-gray-600 mb-1">
                ID Document (Obligation — email to usfranc@bobosohomail.com)
              </label>

              <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                {/* ID Front Part */}
                <div className="border border-gray-300 rounded-md p-6">
                  <input
                    type="file"
                    name="idDocumentFront"
                    id="idDocumentFront"
                    className="hidden"
                    onChange={(e) => handleIdDocuments(e, "front")}
                    accept="image/*,.pdf"
                  />
                  <div className="flex flex-col items-center gap-3 text-center">
                    {idDocuments.front ? (
                      <>
                        <div className="flex items-center gap-2">
                          <FiCheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm font-medium text-gray-700 truncate max-w-xs">
                            {idDocuments.front.name}
                          </span>
                        </div>
                        <label
                          htmlFor="idDocumentFront"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                        >
                          <FiRefreshCw className="mr-2 h-4 w-4" />
                          Change File
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG or PNG
                        </p>
                      </>
                    ) : (
                      <>
                        <FiUpload className="h-7 w-7 text-gray-400" />
                        <label
                          htmlFor="idDocumentFront"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                        >
                          <FiUpload className="mr-2 h-4 w-4" />
                          Upload Front of ID
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG or PNG
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* ID Back Part */}
                <div className="border border-gray-300 rounded-md p-6">
                  <input
                    type="file"
                    name="idDocumentBack"
                    id="idDocumentBack"
                    className="hidden"
                    onChange={(e) => handleIdDocuments(e, "back")}
                    accept="image/*,.pdf"
                  />
                  <div className="flex flex-col items-center gap-3 text-center">
                    {idDocuments.back ? (
                      <>
                        <div className="flex items-center gap-2">
                          <FiCheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm font-medium text-gray-700 truncate max-w-xs">
                            {idDocuments.back.name}
                          </span>
                        </div>
                        <label
                          htmlFor="idDocumentBack"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                        >
                          <FiRefreshCw className="mr-2 h-4 w-4" />
                          Change File
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG or PNG
                        </p>
                      </>
                    ) : (
                      <>
                        <FiUpload className="h-7 w-7 text-gray-400" />
                        <label
                          htmlFor="idDocumentBack"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                        >
                          <FiUpload className="mr-2 h-4 w-4" />
                          Upload Back of ID
                        </label>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG or PNG
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proof of Address */}
          <div>
            <label className="block text-gray-600 mb-1">Proof of Address</label>
            <div className="border border-gray-300 rounded-md p-6">
              <input
                type="file"
                name="addressProof"
                id="addressProof"
                className="hidden"
                onChange={handleAddressProof}
                accept="image/*,.pdf"
              />
              <div className="flex flex-col items-center gap-3 text-center">
                {addressProof ? (
                  <>
                    <div className="flex items-center gap-2">
                      <FiCheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium text-gray-700 truncate max-w-xs">
                        {addressProof.name}
                      </span>
                    </div>
                    <label
                      htmlFor="addressProof"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                    >
                      <FiRefreshCw className="mr-2 h-4 w-4" />
                      Change File
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      Accepted: Utility bill, bank statement, or
                      government-issued document. PDF, JPG, or PNG
                    </p>
                  </>
                ) : (
                  <>
                    <FiUpload className="h-7 w-7 text-gray-400" />
                    <label
                      htmlFor="addressProof"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                    >
                      <FiUpload className="mr-2 h-4 w-4" />
                      Upload Address Proof
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      Accepted: Utility bill, bank statement, or
                      government-issued document. PDF, JPG, or PNG
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Order Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <label className="block text-gray-600">
                  Quantity of USFRANC (USFC) Ordered:
                </label>
                <input
                  type="number"
                  name="quantityOrdered"
                  value={formData.quantityOrdered}
                  onChange={handleQuantityChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
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
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-logo"
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

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="min-w-fit mt-1"
                checked={isAcknowledged}
                onChange={(e) => setIsAcknowledged(e.target.checked)}
              />
              <p>
                I confirm my order of USFRANC cryptocurrency, that i have read
                and accept{" "}
                <Link
                  href="/participation-terms-and-condtions"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  USFC Terms & Conditions
                </Link>{" "}
                and the{" "}
                <Link
                  href="/policy"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  Privacy Policy
                </Link>{" "}
                and my intention to transfer the full order amount in Euros to
                the Bank Account provided. Upon receipt of payment, the
                corresponding USFRANC coins will be delivered to your choosen crypto wallet address which we will contact you on received of your payment.
              </p>
            </div>

            {/* <div>
              <label className="block text-gray-600">
                Wallet Address (optional):
              </label>
              <input
                type="text"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                placeholder="Enter your wallet address here or send to usfranc@bobosohomail.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo"
              />
            </div> */}

            <div>
              <label className="block text-gray-600 mb-1">
                Signature Document:
              </label>
              <div className="border border-gray-300 rounded-md p-6">
                <input
                  type="file"
                  name="signatureFile"
                  id="signatureFile"
                  className="hidden"
                  onChange={handleSignatureFile}
                  accept="image/*,.pdf"
                />
                <div className="flex flex-col items-center gap-3 text-center">
                  {signatureFile ? (
                    <>
                      <div className="flex items-center gap-2">
                        <FiCheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-gray-700 truncate max-w-xs">
                          {signatureFile.name}
                        </span>
                      </div>
                      <label
                        htmlFor="signatureFile"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                      >
                        <FiRefreshCw className="mr-2 h-4 w-4" />
                        Change File
                      </label>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, JPG or PNG
                      </p>
                    </>
                  ) : (
                    <>
                      <FiUpload className="h-7 w-7 text-gray-400" />
                      <label
                        htmlFor="signatureFile"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-logo cursor-pointer"
                      >
                        <FiUpload className="mr-2 h-4 w-4" />
                        Upload Signed Signature
                      </label>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, JPG or PNG
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-600">Date:</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                readOnly
                className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-logo"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full sm:w-1/3 p-3 bg-logo text-white font-semibold rounded-md shadow-md hover:bg-logo-dark flex items-center gap-2.5 justify-center"
            >
              Confirm Order Now
              {isSubmitting && <FaSpinner className="animate-spin" />}
            </button>
          </div>
        </form>

        <p className="font-semibold mt-6">
          How you crypto order will be processed:
        </p>
        <ol className="list-decimal list-inside ml-5 mt-2.5">
          <li>Transfer your payment to the above account.</li>
          <li>
            Once confirmed, we will credit your wallet with the selected amount of USFC.
            This will be sent to your BNB-compatible wallet.
          </li>
        </ol>
      </div>
    </Container>
  );
}
