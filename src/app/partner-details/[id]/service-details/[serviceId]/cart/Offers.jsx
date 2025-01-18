'use client';
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AvailOfferBottomSheet from './AvailOfferBottomSheet'; // Ensure it's correctly imported
import BillBottomSheet from './BillBottomSheet'; // Ensure it's correctly imported

const Offers = () => {
  // States to manage the visibility of the bottom sheets
  const [isOfferSheetOpen, setIsOfferSheetOpen] = useState(false);
  const [isBillSheetOpen, setIsBillSheetOpen] = useState(false);

  // Toggle functions for each bottom sheet
  const toggleOfferSheet = () => {
    setIsOfferSheetOpen((prevState) => !prevState);
  };

  const toggleBillSheet = () => {
    setIsBillSheetOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="px-[10px]">
        <div className="bg-white rounded-md p-2 mt-2">
          {/* Click handler for the first bottom sheet */}
          <div
            className="flex font-medium border-b text-[14px] py-3 justify-between items-center cursor-pointer"
            onClick={toggleOfferSheet} // Toggle the AvailOfferBottomSheet
          >
            <h3>How to avail this offer ?</h3>
            <ChevronRight />
          </div>

          {/* Click handler for the second bottom sheet */}
          <div
            className="flex font-medium text-[14px] py-3 justify-between items-center cursor-pointer"
            onClick={toggleBillSheet} // Toggle the BillBottomSheet
          >
            <h3>Calculate your bill with offers ?</h3>
            <ChevronRight />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-600 text-[20px] font-medium py-8">Let&apos;s Pamper You!</p>

      {/* Conditionally render each bottom sheet */}
      {isOfferSheetOpen && (
        <AvailOfferBottomSheet isOpen={isOfferSheetOpen} onClose={toggleOfferSheet} />
      )}
      {isBillSheetOpen && <BillBottomSheet isOpen={isBillSheetOpen} onClose={toggleBillSheet} />}
    </>
  );
};

export default Offers;
