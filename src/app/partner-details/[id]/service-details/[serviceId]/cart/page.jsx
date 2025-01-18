"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // To access query params
import Navbar from "../../../../../../components/Navbar";
import Footer from "../../../../../../components/Footer";
import BillDetails from "./BillDetails";
import Offers from "./Offers";
import ChooseOffers from "./ChooseOffer";
import LocationSupport from "./LocationSupport";
import BottomSheet from "./BottomSheet";
import BottomSheet2 from "../BottomSheet2";
import SuccessfullyApplied from "./SuccessfullyApplied";
import { Provider } from "react-redux";
import store from "../../../../../../redux/store";

const Page = () => {
  const [isSuccessfullyAppliedVisible, setIsSuccessfullyAppliedVisible] =
    useState(false);
  const [appliedOfferDetails, setAppliedOfferDetails] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if the offer was applied from the query parameter
    const offerApplied = searchParams.get("offerApplied");
    if (offerApplied === "true") {
      setIsSuccessfullyAppliedVisible(true);
      setAppliedOfferDetails({
        description: "20% Discount + 10% Cashback", // Example details
      });
    }
  }, [searchParams]);

  const closeSuccessfullyApplied = () => {
    setIsSuccessfullyAppliedVisible(false);
  };

  const [showBottomSheet2, setShowBottomSheet2] = useState(false);

  const handleOpenBottomSheet2 = () => {
    setShowBottomSheet2(true);
  };

  const handleCloseBottomSheet2 = () => {
    setShowBottomSheet2(false);
  };

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className="bg-gray-100">
          <LocationSupport />
          <ChooseOffers />
          <BillDetails />
          <Offers />
          {/* <BottomSheet /> */}
          {/* <BottomSheet2
          isOpen={true} 
          onClose={() => {}}
          service={{ serviceName: 'Sample Service' }}
          /> */}

<BottomSheet onClick={handleOpenBottomSheet2} />
      {showBottomSheet2 && (
        <BottomSheet2
          onClose={handleCloseBottomSheet2}
          service="Example Service"
          salon={{ salon_share_link: "/loading" }}
        />
      )}

          <SuccessfullyApplied
            isVisible={isSuccessfullyAppliedVisible}
            onClose={closeSuccessfullyApplied}
            offerDetails={appliedOfferDetails}
          />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Page;
