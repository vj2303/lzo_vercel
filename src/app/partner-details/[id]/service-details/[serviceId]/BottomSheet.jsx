import { useState } from "react";
// import { CartContext } from "../../../../../context/cart";
import { addToCart, editCart } from "../../../../../redux/cartSlice";
import { useDispatch } from "react-redux";

const BottomSheet = ({ isOpen, onClose, service, salon, isEdit }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(isEdit ? service.id : null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-5 z-50">
      <div className="bg-gray-200 w-full max-w-lg rounded-t-2xl p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold px-2">{service.name}</h2>
          <button onClick={onClose} className="text-gray-700">
            &#10005;
          </button>
        </div>
        {service.one_line_description && (
          <p className="text-gray-500 mb-2 bg-white p-2 rounded-xl">
            {service.one_line_description}
          </p>
        )}

        <div className="mb-4 bg-white p-2 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold px-2">{service.customizations?.[0]?.name}</h3>
              <p className="text-sm text-gray-500 mb-2 px-2">{service.customizations?.[0]?.instruction}</p>
            </div>
            <button className="bg-gray-300 py-1 text-[12px] rounded-md px-2 text-gray-500">
              Required
            </button>
          </div>
          {service.customizations?.[0]?.options?.map((ele, i) => {
            return (
              <div
              className={`grid grid-cols-2 items-center rounded-md px-2 py-2 ${ele.id === selectedOption?.id ? "bg-blue-100" : ""}`}
              key={i}
              onClick={() => setSelectedOption(ele)} // Update selectedOption when the service name or container is clicked
            >
              {/* Service Name */}
              <span>{ele.name}</span>
              {/* Container for rate and radio button */}
              <div className="flex items-center justify-end gap-2">
                <span className="text-sm text-gray-500">From ₹ {Math.floor(ele.rate)}</span>
            
                {/* Radio Button */}
                <input
                  type="radio"
                  name="product"
                  className="form-radio"
                  checked={ele.id === selectedOption?.id}
                  onChange={() => setSelectedOption(ele)} // Update selectedOption when radio is clicked
                  onClick={(e) => e.stopPropagation()} // Prevent event propagation to avoid triggering the container click
                />
              </div>
            </div>
            
            );
          })}
        </div>
        <div
          onClick={() => {
            if (!selectedOption) {
              alert("Select any option");
              return;
            }
            if (isEdit) {
              dispatch(editCart({ id: service.id, service: { ...service, display_rate: selectedOption.rate, selectedOption } }))
              // alert(service.name);
              onClose();
            } else {
              dispatch(addToCart({ ...service, display_rate: selectedOption.rate, selectedOption }));
              // alert(service.name);
              onClose();
            }

          }}
          className="bg-blue-500 popup_btn_gradient text-white w-full py-2 rounded-md font-semibold"
        >
          <button className="bg-blue-500 popup_btn_gradient text-white w-full py-2 rounded-md font-semibold">
            {isEdit ? "Update Cart" : "Add To Cart"}
          </button>

        </div>
      </div>
    </div >
  );
};

export default BottomSheet;







