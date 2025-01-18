import React from 'react';

const BillBottomSheet = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Black overlay background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose} // Close the bottom sheet when clicking on the overlay
        />
      )}

      {/* Bottom sheet */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl z-50 p-4">
           <h1 className='text-center text-[14px]'>This is a sample bill for your reference</h1>
          <div>
              <div className="flex gap-3 mt-2 items-center justify-between">
                    {/* Increased input size */}
                    <input className="border rounded-lg p-2 w-3/4" /> 

                    {/* Made button smaller */}
                    <button className="bg-blue-400 px-3 py-3 text-white rounded text-sm">
                        Calculate
                    </button>
              </div>

            <div className="border border-gray-700 rounded-md mt-4 p-4">
              <div className="flex justify-between mb-2 items-center">
                <h3 className='text-gray-600 text-[12px]'>If Total Bill is</h3>
                <p className='text-[14px]'>₹ 944</p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className='text-gray-600 text-[16px]'>20% Discount by LUZO</h3>
                <p className='text-[16px]'>₹ 944</p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className='text-gray-600 text-[16px]'>Net Payable Amount:</h3>
                <p className='text-[16px]'>₹ 944</p>
              </div>
              <div className="flex items-center justify-between">
                <h3 className='text-gray-600 text-[16px]'>10% LUZO Cash Earned</h3>
                <p className='text-[16px]'>₹ 944</p>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Note: LUZO Cash earned can be used to pay for your next appointment at any partner on the LUZO app.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BillBottomSheet;
