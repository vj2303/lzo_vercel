"use client";

import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../../../../../../redux/store";
import OfferCard from "./OfferCard";
import Confetti from "react-confetti";

const OfferList = ({ offers }) => {
  const [showConfetti, setShowConfetti] = useState(false); // State to control confetti visibility
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Update window size dynamically
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleApplyOffer = () => {
    setShowConfetti(true); // Trigger confetti

    // Stop confetti after a short duration
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <Provider store={store}>
      <div className="mt-[100px] relative">
        {/* Show Confetti when an offer is applied */}
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={200} // Reduced number for smoother animation
            recycle={false} // Confetti stops after one cycle
            gravity={0.1} // Lower gravity for slower falling confetti
            wind={0.01} // Add a slight wind effect
            friction={0.99} // Smooth deceleration
          />
        )}
        {offers?.map((offer) => (
          <OfferCard offer={offer} key={offer.id} onApply={handleApplyOffer} />
        ))}
      </div>
    </Provider>
  );
};

export default OfferList;
