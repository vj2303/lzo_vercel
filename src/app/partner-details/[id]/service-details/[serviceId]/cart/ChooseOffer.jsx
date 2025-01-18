"use client";
import React from "react";
import { ChevronRight, CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearOffer } from "../../../../../../redux/cartSlice";
import Image from "next/image";
import { CirclePercent  } from 'lucide-react';

const ChooseOffers = ({ onApplyOffer }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const appliedOffer = useSelector((state) => state.cart.appliedOffer);

  const handleRemoveOffer = (e) => {
    e.stopPropagation(); // Prevent navigation when clearing the offer
    dispatch(clearOffer());
  };

  const handleChooseOffer = () => {
    if (appliedOffer) {
      // Trigger SuccessfullyApplied bottom sheet
      onApplyOffer(appliedOffer);
    } else {
      // Navigate to the offers page
      router.push("cart/offers");
    }
  };

  return (
    <div
      className="py-2 flex mt-2 m-2 p-2 rounded-xl justify-between bg-white items-center cursor-pointer"
      onClick={handleChooseOffer}
    >
      <div className="text-[14px]">
        {appliedOffer ? (
          <>
            <p className="font-semibold">Offer Applied</p>
            <p className="text-blue-500">{appliedOffer.code}</p>
          </>
        ) : (
          <p className=" text-[18px] text-gray-500 font-medium gap-1 flex items-center">
          {/* <Image
      src="https://img.icons8.com/?size=100&id=yV4jqXg6u8Jf&format=png&color=000000"
      width={25}
      height={25}
      alt="Animated Icon"
      unoptimized
    /> */}
          {/* <Percent className="w-12 h-12 text-blue-500 animate-bounceTwice" /> */}
          <CirclePercent  className="w-8 h-8 text-[#169B00] animate-rotate360 " />
          Choose Offer</p>
        )}
      </div>
      {appliedOffer ? (
        <CircleX
          onClick={handleRemoveOffer}
          className="cursor-pointer text-red-400 hover:text-red-600"
        />
      ) : (
        <ChevronRight className="text-gray-400" />
      )}
    </div>
  );
};

export default ChooseOffers;
