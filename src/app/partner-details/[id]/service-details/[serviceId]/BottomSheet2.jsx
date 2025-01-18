"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const BottomSheet2 = ({ onClose, service, salon }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the slide-up animation after the component is mounted
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    // Trigger the slide-down animation before unmounting
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for the animation to complete before closing
  };

  return (
    <div className={`fixed inset-0 flex justify-center items-end bg-black bg-opacity-10 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div
        className={`bg-white w-full max-w-lg rounded-t-2xl transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Image container with close button positioned on top-right */}
        <div className="relative w-full">
          {/* Close button positioned at the top-right */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white text-xl"
          >
            &#10005;
          </button>

          {/* Centered image */}
          <div className="flex justify-center items-center w-full">
            <Image src="/banner_down.jpg" width={300} height={300} className="w-full rounded-md" alt="Banner" />
          </div>
        </div>

        <div className="p-4">
          <p className="text-[12px] text-center pb-4">
            To book your appointment, download the LUZO app
          </p>
          <a
            href={salon?.salon_share_link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-500 popup_btn_gradient text-white w-full py-2 rounded-md text-center font-semibold"
          >
            Download app
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet2;
