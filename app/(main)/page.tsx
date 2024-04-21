"use client"

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-24  w-full flex">
      <div>
        <div className="  h-56 w-screen bg-[url('/bg-search.svg')]">
          <div className="flex gap-5 h-56 flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold tracking-wider">
              Find expert Doctors for an In-clinic session here
            </h1>
            <div className="ml-20 flex gap-3 h-14 w-[682px]">
              <div className="relative w-52 h-14 flex items-center py-1 px-3">
                <MapPin className="bg-white absolute ml-1 w-6 h-6 text-[#3A643B]" />
                <select className="p-7 py-2 undefined rounded-lg outline-none cursor-pointer">
                  <option>Search Location</option>
                  <option value="">Options...</option>
                </select>
              </div>
              <div className="h-14 flex items-center py-2 px-3 justify-end relative w-96  rounded-lg outline-none">
                <input
                  placeholder={"eg. Doctor, specialisation, clinic name"}
                  type="text"
                  className="pl-2 w-full h-full -7 py-0 undefined rounded-lg outline-none"
                ></input>
                <ArrowRight className="absolute cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="w-full   flex flex-col justify-center items-center">
          <div className="flex justify-around items-center  gap-6 h-20 w-2/3">
            <select className="px-5 py-2   bg-gray-200 rounded-lg outline-none">
              <option>Expertise</option>
              <option value="">Options...</option>
            </select>
            <select className="px-5 py-2  bg-gray-200 rounded-lg outline-none">
              <option>Gender</option>
              <option value="">Options...</option>
            </select>
            <select className="px-5 py-2  bg-gray-200 rounded-lg outline-none">
              <option>Fees</option>
              <option value="">Options...</option>
            </select>
            <select className="px-5 py-2  bg-gray-200 rounded-lg outline-none">
              <option>Language</option>
              <option value="">Options...</option>
            </select>
            <select className="px-5 py-2   bg-green-100 rounded-lg outline-none">
              <option>All Filters</option>
              <option value="">Options...</option>
            </select>
          </div>
          <p className="h-[1px] w-full bg-gray-200"></p>
        </div>
        <div className="p-4">
         <div className="flex mt-3 justify-end gap-6"><button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">Hair care <span className="text-gray-400">X</span></button><button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">Female <span className="text-gray-400">X</span></button><button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">Rs.0-Rs.500 <span className="text-gray-400">X</span></button><button className="rounded-lg px-3 py-2 bg-[#EAF2EA]">Hindi <span className="text-gray-400">X</span></button></div>
      </div>
      <div className="flex items-center justify-center gap-6">
      <div className=" bg-[#FFF7E2] shadow-md shadow-gray-300 border rounded-xl p-4 w-1/4">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <div className="flex flex-col items-center">
            <div  className="flex flex-col items-center">
              <Image className="relative rounded-full  z-0" width={149}  src="/girl.png" height={150} alt="h"/>
              <span className="bg-black relative bottom-5  z-10 text-sm text-white rounded-2xl px-2 p-1">4.2 ⭐️  </span>
              </div><h1 className="text-xl font-bold">Dr. Prerna Narang</h1><p className="text-gray-400">Male-Female Infertility</p><p className="text-gray-400">7 years of Experience</p><p className="text-gray-400">Speaks: English, Hindi, Marathi</p></div><div className="flex gap-4"><div className="flex flex-col justify-center items-center border border-gray-400 rounded-lg p-2"><h1 className="text-xs">Video Consultation</h1><p className="text-green-700 font-bold">₹600</p></div><div className="flex flex-col justify-center items-center border  border-gray-400 rounded-lg p-2"><h1 className="text-xs ">Chat Consultation</h1><p className="text-green-700 font-bold">Free</p></div></div><div className="flex gap-3 w-full flex-col"><button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg"><Link href="/doctor">View Profile</Link></button>
      <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white  font-lighter rounded-lg">Book a Consultation</button></div></div></div>
      <div className=" bg-[#FFF7E2] shadow-md shadow-gray-300 border rounded-xl p-4 w-1/4">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <Image className="relative rounded-full z-0" width="149"  src="/girl.png" height={150} alt="h"/>
              <span className="bg-black relative bottom-5  z-10 text-sm text-white rounded-2xl px-2 p-1">4.2 ⭐️  </span>
              </div><h1 className="text-xl font-bold">Dr. Prerna Narang</h1><p className="text-gray-400">Male-Female Infertility</p><p className="text-gray-400">7 years of Experience</p><p className="text-gray-400">Speaks: English, Hindi, Marathi</p></div><div className="flex gap-4"><div className="flex flex-col justify-center items-center border border-gray-400 rounded-lg p-2"><h1 className="text-xs">Video Consultation</h1><p className="text-green-700 font-bold">₹600</p></div><div className="flex flex-col justify-center items-center border  border-gray-400 rounded-lg p-2"><h1 className="text-xs ">Chat Consultation</h1><p className="text-green-700 font-bold">Free</p></div></div><div className="flex gap-3 w-full flex-col"><button className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg"><Link href="/doctor">View Profile</Link></button>
      <button className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white  font-lighter rounded-lg">Book a Consultation</button></div></div></div>
      <div className=" bg-[#FFF7E2] shadow-md shadow-gray-300 border rounded-xl p-4 w-1/4">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <Image className="relative rounded-full z-0" width="149"  src="/girl.png" height={150} alt="h"/>
              <span className="bg-black relative bottom-5  z-10 text-sm text-white rounded-2xl px-2 p-1">4.2 ⭐️  </span>
              </div><h1 className="text-xl font-bold">Dr. Prerna Narang</h1><p className="text-gray-400">Male-Female Infertility</p><p className="text-gray-400">7 years of Experience</p><p className="text-gray-400">Speaks: English, Hindi, Marathi</p></div><div className="flex gap-4"><div className="flex flex-col justify-center items-center border border-gray-400 rounded-lg p-2"><h1 className="text-xs">Video Consultation</h1><p className="text-green-700 font-bold">₹600</p></div><div className="flex flex-col justify-center items-center border  border-gray-400 rounded-lg p-2"><h1 className="text-xs ">Chat Consultation</h1><p className="text-green-700 font-bold">Free</p></div></div><div className="flex gap-3 w-full flex-col"><button onClick={()=>{}} className="px-4 py-1.5 ring-1 undefined ring-[#3A643B] hover:bg-[#3A643B] hover:text-white text-[#3A643B] font-lighter rounded-lg"> <Link href="/doctor">View Profile</Link></button>
      <button  className="px-4 py-1.5 ring-1 bg-[#3A643B] text-white ring-[#3A643B] hover:bg-[#3A643B] hover:text-white  font-lighter rounded-lg">Book a Consultation</button></div></div></div>

      </div>
      
      </div>
    </main>
  );
}
