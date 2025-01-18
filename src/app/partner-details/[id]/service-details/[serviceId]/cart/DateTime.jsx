import React from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const DateTime = () => {
  const dates = [
    { day: 'Wed', date: 13, month: 'NOV' },
    { day: 'Thu', date: 14, month: 'NOV' },
    { day: 'Fri', date: 15, month: 'NOV' },
    { day: 'Sat', date: 16, month: 'NOV' },
    { day: 'Sun', date: 17, month: 'NOV' },
    { day: 'Mon', date: 18, month: 'NOV' },

    { day: 'Wed', date: 20, month: 'NOV' },
  ];

  return (
    <div className='mt-[10px] bg-white p-2 m-2 rounded-md px-[10px]'>
      <h1 className='text-[14px] font-bold'>Select Date & Time Of Appointment</h1>

      <p className='border p-2 mt-2 text-[14px] rounded-xl font-medium'>
        Today | 8 Nov, Friday, 2024
      </p>

      <div className='flex flex-row gap-2 justify-between mt-2'>
        {dates.map((date, index) => (
          <div key={index} className='flex flex-col items-center text-[12px]'>
            <p>{date.day}</p>
            <p>{date.date}</p>
            <p>{date.month}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap gap-1 font-medium mt-2 text-[14px]'>
        <p className='border rounded-xl p-2'>12.00 PM</p>
        <p className='border rounded-xl p-2'>12.00 PM</p>
        <p className='border rounded-xl p-2'>12.00 PM</p>
        <p className='border rounded-xl p-2'>12.00 PM</p>
        <p className='border rounded-xl p-2'>12.00 PM</p>
      </div>
      
    </div>
  );
}

export default DateTime;



