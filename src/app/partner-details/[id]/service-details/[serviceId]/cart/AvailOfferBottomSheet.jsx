import React from 'react';

const AvailOfferBottomSheet = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Black overlay background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose} // Closes the bottom sheet when clicking on the overlay
        />
      )}

      {/* Sticky and Scrollable Bottom Sheet */}
      {isOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl z-50 p-4 max-h-[60vh] overflow-y-auto"
        >
          <h1 className="text-center py-4">How to avail the offer ?</h1>

          <div className="px-2">
            <div className="border rounded-md p-2">
              <h3>Step 1</h3>
              <p>Book your appointment with the LUZO app.</p>
            </div>
            <div className="border mt-2 rounded-md p-2">
              <h3>Step 2</h3>
              <p>Visit for your appointment to avail all the services.</p>
            </div>
            <div className="border mt-2 rounded-md p-2">
              <h3>Step 3</h3>
              <p>Pay your bill with the LUZO app using any mode of online payment after availing your services.</p>
            </div>
            <p className="text-sm mt-2">*Discount will be applicable on the final bill amount, including all taxes.</p>

            <div className="mt-4">
              <h1 className="text-center font-semibold">Sample Bill</h1>
              <div className="flex justify-between mt-2">
                <p>If the sample bill is</p>
                <p>₹ 944</p>
              </div>
              <div className="flex justify-between">
                <p>20% Discount</p>
                <p>- ₹ 188</p>
              </div>
              <div className="flex justify-between">
                <p>Net Payable Amount</p>
                <p>₹ 756</p>
              </div>
              <div className="flex justify-between">
                <p>10% LUZO Cash Earned</p>
                <p>+ ₹ 75</p>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                Note: LUZO Cash earned can be used to pay for your next appointment at any partner on the LUZO app.
              </p>
              <p className="text-center mt-4 font-medium">Still confused?</p>
            </div>

            <button className="bg-green-500 text-white rounded w-full py-2 mt-4 text-center">
              WhatsApp Customer Care
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AvailOfferBottomSheet;
