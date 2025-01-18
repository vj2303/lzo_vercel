"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessfullyApplied = ({ isVisible, onClose, offerDetails }) => {
  const router = useRouter();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-10/12 max-w-md text-center relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <div className="flex flex-col items-center">
          <div className="text-green-500 text-4xl mb-4">✔️</div>
          <h2 className="text-lg font-bold mb-2">Offer Applied Successfully</h2>
          <p className="text-gray-600 text-sm mb-4">
            {offerDetails?.description ||
              "20% Discount + 10% Cashback on your next payment!"}
          </p>
          <p className="text-xs text-gray-400 mb-4">
            After availing your services, pay using LUZO app via any mode of
            online payment and get discounts.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              onClose();
              // router.push("/cart"); // Redirect to cart page
            }}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullyApplied;
