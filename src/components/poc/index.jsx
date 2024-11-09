import React, { useState } from "react";
import QRScanner from "../qrscanner";
import sha256 from "js-sha256";

const POC = () => {
  const [inputValue, setInputValue] = useState("");
  const [validationResult, setValidationResult] = useState(null);
  const [qrContent, setQrContent] = useState(null);

  const validateCode = (code) => {
    const VALID_CODE_HASH =
      "2c26b46b68ffc68ff99b453c1d30413413422f16494e8c3c9a15b8bb6f5a3fcd";
    const hashedCode = sha256(code);
    setValidationResult(
      hashedCode === VALID_CODE_HASH ? "Valid Product" : "Invalid Product"
    );
    setQrContent(code);
  };

  const handleTextInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    validateCode(inputValue);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* QR Scanner Frame */}

      <QRScanner onScan={validateCode} width={"100%"} />

      <p className="text-green text-sm mb-8">
        Align QR inside the frame to scan.
      </p>

      {/* QR Code Image Upload Button */}
      <div className="w-full max-w-xs mt-2">
        <label
          htmlFor="file-upload"
          className="block w-full bg-white text-red-500 text-center py-3 rounded-lg cursor-pointer border border-red-500 hover:bg-red-500 hover:text-white transition"
        >
          <span className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm5 10H8v2H6v-2H4v-2h2V9h2v2h2v2zm6-5h-3v5h-2V8h-3V6h3V4h2v2h3v2z" />
            </svg>
            <span>Upload QR Code</span>
          </span>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={(e) => {
            // Placeholder: Add QR image handling logic here
          }}
        />
      </div>

      {/* Text Input Field for Encrypted Code */}
      <div className="w-full max-w-xs mt-6">
        <input
          type="text"
          value={inputValue}
          onChange={handleTextInput}
          placeholder="Enter Encrypted Code"
          className="block w-full p-2 border rounded-lg"
        />
        <button
          onClick={handleSubmit}
          className="mt-2 w-full p-2 bg-blue-600 text-white rounded-lg"
        >
          Validate Code
        </button>
      </div>

      {/* Display Validation Result */}
      <div className="mt-4 text-center">
        {validationResult && (
          <p
            className={`text-lg font-semibold ${validationResult === "Valid Product" ? "text-green-500" : "text-red-500"}`}
          >
            {validationResult}
          </p>
        )}
        {qrContent && (
          <p className="text-gray-700 mt-2">QR Content: {qrContent}</p>
        )}
      </div>
    </div>
  );
};

export default POC;
