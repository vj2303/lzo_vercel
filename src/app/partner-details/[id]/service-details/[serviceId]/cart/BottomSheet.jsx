import React from "react";

const BottomSheet = ({ onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-200 py-4 px-2 rounded-t-lg">
      <button
        onClick={onClick}
        className="flex mb-2 bg-blue-400 shadow-lg p-2 px-2 w-full text-white rounded-md text-center justify-center"
      >
        Book & pay after service
      </button>
      <p className="text-[12px] text-gray-500 text-center">
        By booking an appointment you agree to our Terms of service and Privacy
        Policy
      </p>
    </div>
  );
};

export default BottomSheet;
