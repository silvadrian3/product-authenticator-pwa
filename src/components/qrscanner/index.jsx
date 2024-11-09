import React from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = ({ onScan }) => {
  const handleScan = (result) => {
    if (result?.text) {
      onScan(result.text); // Optimize by debouncing calls to onScan if QR code is scanned multiple times in quick succession.
    }
  };

  const handleError = (error) => {
    console.error(error); // Add user-friendly error messages for better UX, instead of only logging errors to console.
  };

  return (
    <div
      className="items-center justify-center"
      style={{ width: "280px", height: "280px" }}
    >
      <div className="w-full">
        <span className="block text-center items-center justify-center -m-b-2 text-lg">
          Scan QR Code
        </span>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              handleScan(result);
            }
            if (!!error) {
              handleError(error);
            }
          }}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default QRScanner;
