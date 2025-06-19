"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiUpload, FiRefreshCw, FiCheckCircle, FiFile } from "react-icons/fi";
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

  const [idDocuments, setIdDocuments] = useState({
    front: null,
    back: null,
  });
  const [addressProof, setAddressProof] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Convert file to base64 for ImgBB
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  // Upload single image to ImgBB
  const uploadToImgBB = async (file) => {
    try {
      const base64Image = await convertToBase64(file);
      const formData = new FormData();
      formData.append("key", "b213c81cd4bc99c48b54bb6be2144da2");
      formData.append("image", base64Image);

      const response = await fetch("https://api.imgbb.com/1/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        return result.data.url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("ImgBB upload error:", error);
      throw error;
    }
  };

  const handleIdDocuments = (e, part) => {
    const file = e.target.files[0];
    setIdDocuments((prev) => ({ ...prev, [part]: file }));
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
      totalAmount: quantity * 2,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form submitted");

    // Validation
    if (!idDocuments.front || !idDocuments.back || !signatureFile) {
      alert("Please attach all necessary files.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Step 1: Upload all images to ImgBB
      console.log("Uploading images...");
      const [frontIdUrl, backIdUrl, addressProofUrl, signatureUrl] =
        await Promise.all([
          uploadToImgBB(idDocuments.front),
          uploadToImgBB(idDocuments.back),
          uploadToImgBB(addressProof),
          uploadToImgBB(signatureFile),
        ]);

      console.log("Images uploaded successfully");

      // Step 2: Prepare email data with image URLs
      const emailData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        fullAddress: formData.fullAddress,
        country: formData.country,
        dob: formData.dob,
        quantityOrdered: formData.quantityOrdered,
        totalAmount: formData.totalAmount,
        walletAddress: formData.walletAddress,
        date: formData.date,
        frontIdUrl: frontIdUrl,
        backIdUrl: backIdUrl,
        addressProofUrl: addressProofUrl,
        signatureUrl: signatureUrl,
        submissionDate: new Date().toISOString(),
      };

      // Step 3: Send email via EmailJS
      console.log("Sending email...");
      const result = await emailjs.send(
        "service_iqqrtr1",
        "template_nf4azqs",
        emailData,
        "ewm-4zeSsY4xNqiwh"
      );

      if (result.status === 200) {
        alert("Form submitted successfully!");

        // Reset form
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
      }
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

            {/* ID Document container */}
            <div className="col-span-2">
              <label className="block text-gray-600 mb-1">
                ID Document (Obligation — email to usfranc@bobosohomail.com)
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            <label className="block text-gray-600 mb-1">
              Proof of Address (optional)
            </label>
            <div className="border border-gray-300 rounded-md p-6">
              <input
                type="file"
                name="addressProof"
                id="addressProof"
                className="hidden"
                onChange={(e) => setAddressProof(e.target.files[0])}
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
                onChange={(e) => setSignatureFile(e.target.files[0])}
              />
              <label
                htmlFor="signatureInput"
                className="inline-block px-6 py-2 bg-logo text-white font-semibold rounded-md cursor-pointer hover:bg-logo-dark"
              >
                Upload Signature
              </label>
              {signatureFile && (
                <span className="ml-4 text-sm font-medium text-logo">
                  {signatureFile.name}
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
