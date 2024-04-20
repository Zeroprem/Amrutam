import React from 'react'
import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';
const Card = () => {
  return (
    <section
  >
   
<div className=" pt-44 w-full bg-gray-50 flex items-center">
      <div className="h-56 w-72 absolute flex lg:justify-start justify-center pl-10  lg:items-center">
        <Image

          className="object-cover h-20 w-20 rounded-full lg:mt-0 mt-5"
          src="/photo.png"
          alt="fdf"
          width={
            159}
          height={
            159}
        />
      </div>

      <div
        className="
          h-56
          px-4
          w-full
          rounded-xl
        "
      >
        <div className='  h-1/2 w-full flex flex-col
            justify-around
           items-center'>
        <Image src="/cover.png" alt="aa" width={1229}  height={
168} className=' w-full
            overflow-hidden
            rounded-3xl
           ' /> </div>
           <div className='z-10 gap-4 h-1/2 w-full flex
            justify-evenly
            items-center bg-[#FFFBF2]'>
                <div className='flex flex-col lg:pl-32'>
                    <div className='flex'> <span className='font-bold text-xl text-[#212529]'>Dr. Bruce Willis</span><CheckCircle2  className='text-blue-700'/></div>
                    <span className='text-[#3A643B] text-sm font-medium'>Gynecologist</span>
                    <div className='flex'>
                    <span className='text-[#626262] text-sm font-semibold items-center flex'>4.2</span><Star fill= 'orange'  className='text-orange-300 text-sm'/>
                    </div>
                    
                </div>
             <div className='flex gap-7 lg:pr-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-xs font-medium text-[#3A643B]'>Followers</span>
                        <span className=' text-xl font-semibold'>850</span>

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <span className='text-xs font-medium text-[#3A643B]'>Following</span>
                        <span className='text-xl font-semibold'>850</span>

                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <span className='text-xs font-medium text-[#3A643B]'>Posts</span>
                        <span className='text-xl font-semibold'>50</span>

                        </div>
                </div>
                <div className='pr-28'>
                    <button className='border h-[59px] text-xl w-[274px] bg-[#3A643B] gap-1 rounded-lg flex items-center justify-center   py-3 px-8'>
                        <span className='font-medium  text-white'>Book</span>
                        <span className='font-medium  text-white'>an</span>
                        <span className='font-medium  text-white'>Appointment</span>
                    </button>
                </div>
           </div>
            </div>

    </div>
    </section>
  )
}

export default Card