"use client"
import React, { useState } from 'react'
import { ChevronRight, ChevronUp, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { editCart, removeFromCart } from '../../../../../../redux/cartSlice';
import BottomSheet from '../BottomSheet';

const BillDetails = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)
  const cart = useSelector((state) => state.cart.cart);
  const discount = useSelector((state) => state.cart.discount);
  let total = 0;
  const dispatch = useDispatch();

  // State to manage visibility of services
  const [isOpen, setIsOpen] = useState(true);

  // Toggle visibility
  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='px-[10px] mt-2'>
      <div className='bg-white rounded-md p-3'>
        <div className='border-b mb-4'>
          <h1 className='text-[14px] font-bold mb-3'>Bill Details</h1>
          <div className='flex justify-between'>
            <p className='font-medium text-[12px] flex gap-1 items-center'>
              Your Services
              {/* Toggle the Chevron icon */}
              {isOpen ? (
                <ChevronUp size={15} className='bg-gray-200 rounded-full' onClick={toggleVisibility} />
              ) : (
                <ChevronDown size={15} className='bg-gray-200 rounded-full' onClick={toggleVisibility} />
              )}
            </p>
          </div>

          {/* Show the services only when isOpen is true */}
          {isOpen && cart?.map((ele) => {
            total += +ele.display_rate;
            return (
              <div className='flex mt-2 justify-between' key={ele.id}>
                <div className='flex'>
                  <div className='flex flex-col items-center'>
                    {ele.gender === "Women" ? (
                      <Image
                        src='/Women.svg'
                        alt='img'
                        width={15}
                        height={15}
                      />
                    ) : ele.gender === "Men" ? (
                      <Image
                        src='/Men.svg'
                        alt='img'
                        width={12}
                        height={12}
                      />
                    ) : (
                      <Image src='/Unisex.svg' alt='img' width={12} height={12} />
                    )}
                  </div>

                  <div className='ml-4'>
                    <p className='text-[9px] border-b'>{ele.one_line_description}</p>
                    <p className='text-[14px]'>{ele.name}</p>
                    <p className='text-[12px]'>From ₹ {ele.display_rate} + GST</p>
                    {ele.customizations && ele.customizations.length > 0 && <p className='text-[12px] text-blue-300' onClick={() => {
                      setIsCartOpen(true)
                      setSelectedId(ele.id)
                    }}>Edit</p>}
                  </div>
                </div>

                <X className='border border-[#000] border-w-2 rounded-full' onClick={() => dispatch(removeFromCart(ele.id))} />
                {selectedId && selectedId === ele.id && isCartOpen && <BottomSheet
                  isOpen={true}
                  onClose={() => {
                    setIsCartOpen(false)
                  }}
                  service={ele}
                  isEdit={true}
                  // salon={salon}
                />}
              </div>
            );
          })}
        </div>

        <div className='flex font-bold text-[14px] mb-2 justify-between'>
          <h3>Approx Total</h3>
          <h3>₹ {total - ((discount / 100) * total)}</h3>
        </div>
      </div>

      <p className='text-gray-500 bg-white mt-2 rounded-md p-2 text-[12px]'>
        The total may vary after consultation depending on the length, density, product, & stylist you choose.
      </p>
    </div>
  );
}

export default BillDetails;
