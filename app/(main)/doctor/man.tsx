"use client";
import { useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Facebook,
  Instagram,
  Plus,
  Star,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Carousel from "@/components/Carousel";

const Man = () => {
    
  // we can store objects i made it in percpective of ui for full stack we can pass props and dyanamic values from database
  const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

  const handleDivClick = (index: number) => {
    setSelectedDiv(index);
  };
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handleDateClick = (index: number) => {
    setSelectedDate(index);
  };

  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const handleTimeClick = (index: number) => {
    setSelectedTime(index);
  };
  const [Isfollow, setIsfollow] = useState(false);
  const [Isopen, setIsOpen] = useState(false);
  return (
    <div className="lg:flex block w-full justify-between h-full px-7 ">
      <div className="rightside   flex flex-col lg:w-1/2 h-full my-10 gap-4 ">
        <div className="w-full  rounded-2xl border">
          <div className="flex justify-between h-16 items-center px-5  rounded-t-2xl  bg-[#F4F7EC] w-full">
            <div className="text-[#313131] font-semibold text-2xl">
              A Little About me
            </div>
            <div
              onClick={() => setIsfollow(!Isfollow)}
              className="flex rounded-xl border border-[#3A643B] py-[6px] px-5 "
            >
              <span className="cursor-pointer">
                {Isfollow ? "Following" : "Follow"}
              </span>
              <Plus className={cn(Isfollow && "hidden")} />
            </div>
          </div>
          <div className=" mx-6 mt-10 ">
            <p
              className={cn(
                !Isopen
                  ? "text-[#333548] text-base    line-clamp-2"
                  : "text-[#333548] text-base "
              )}
            >
              Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
              Surat. love to work with all my hospital staff and seniour
              doctors. Completed my graduation in Gynaecologist Medicine from
              the Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni
              Hospital Surat. love to work with all my hospital staff and
              seniour doctors.e
            </p>
            <div className="flex mt-3  gap-7 items-center">
              <div className="border-b-[0.5px] border w-[70%] border-[#797979]"></div>
              <h2
                onClick={() => setIsOpen(!Isopen)}
                className="underline text-[#2B2B2B] text-lg cursor-pointer"
              >
                {Isopen ? "Read Less" : "Read More"}
              </h2>
            </div>
          </div>
          <div className="flex gap-2 h-10 mt-5 mb-10 mx-8 ">
            <div className="text-lg font-medium text-black flex items-center justify-center lg:w-1/3 w-1/5">
              Language Spoken
            </div>
            <div className="bg-[rgba(46,55,164,0.04)] w-[105px] h-10 flex items-center justify-center rounded-2xl text-base font-medium">
              English
            </div>
            <div className="bg-[rgba(46,55,164,0.04)] w-[105px] h-10 flex items-center justify-center rounded-2xl text-base font-medium">
              English
            </div>
            <div className="bg-[rgba(46,55,164,0.04)] w-[105px] h-10 flex items-center justify-center rounded-2xl text-base font-medium">
              English
            </div>
          </div>
          <div className="flex gap-1 px-10  ">
            <div className="h-10 w-10 border-[0.3px] mb-5 border-[#8E8E8E] flex items-center justify-center bg-[#F7F7FC] rounded-full cursor-pointer">
              <Facebook className="text-[#3A643B]" />
            </div>
            <div className="h-10 w-10 border-[0.3px] border-[#8E8E8E] flex items-center justify-center bg-[#F7F7FC] rounded-full cursor-pointer">
              <Instagram className="text-[#3A643B]" />
            </div>
            <div className="h-10 w-10 border-[0.3px] border-[#8E8E8E] flex items-center justify-center bg-[#F7F7FC] rounded-full cursor-pointer">
              <Youtube className="text-[#3A643B]" />
            </div>
            <div className="h-10 w-10 border-[0.3px] border-[#8E8E8E] flex items-center justify-center bg-[#F7F7FC] rounded-full cursor-pointer">
              <Twitter className="text-[#3A643B]" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-16 h-64 rounded-2xl  border ">
          <div className="flex h-[61px] items-center px-5  rounded-t-2xl  bg-[#F4F7EC] w-full">
            <div className="text-[#313131] font-semibold text-2xl">
              I Specialize In
            </div>
          </div>
          <div className="flex mx-4 w-[455px] h-10 gap-3 ">
            <div className="flex-col gap-2 flex items-center justify-center ">
              {" "}
              <div className="h-24  w-[100px] rounded-lg flex items-center justify-center bg-[#FFFCF2] border-[#EAEAEA] border">
                <Image src="/women.svg" alt="skin" width={65} height={64} />
              </div>
              <p className="text-black font-medium text-sm">
                Women&apos;s Health
              </p>
            </div>
            <div className="flex-col gap-2 flex items-center justify-center ">
              {" "}
              <div className="h-24 w-[100px] rounded-lg flex items-center justify-center bg-[#FFFCF2] border-[#EAEAEA] border">
                <Image src="/skincare.svg" alt="skin" width={65} height={64} />
              </div>
              <p className="text-black font-medium text-sm">Skin Care</p>
            </div>
            <div className="flex-col gap-2 flex items-center justify-center ">
              {" "}
              <div className="h-24 w-[100px] rounded-lg flex items-center justify-center bg-[#FFFCF2] border-[#EAEAEA] border">
                <Image src="/imunity.svg" alt="skin" width={65} height={64} />
              </div>
              <p className="text-black font-medium text-sm">Immunity</p>
            </div>
            <div className="flex-col gap-2 flex items-center justify-center ">
              {" "}
              <div className="h-24 w-[100px] rounded-lg flex items-center justify-center bg-[#FFFCF2] border-[#EAEAEA] border">
                <Image src="/hair.svg" alt="skin" width={65} height={64} />
              </div>
              <p className="text-black font-medium text-sm">Hair care</p>
            </div>
          </div>
        </div>
        <div className="w-full  rounded-2xl border h-[222px]">
          <div className="flex  h-16 items-center px-5  rounded-t-2xl  bg-[#F4F7EC] w-full">
            <div className="text-[#313131] font-semibold text-2xl">
              The Concerns I Treat
            </div>
          </div>
          <div className="flex mx-4 flex-wrap gap-2 h-10 mt-5 mb-10 mx ">
            <div className="bg-[#F7F7FC] text-[#3A643B] w-[140px] h-11 flex items-center justify-center rounded-2xl text-base font-medium">
              Skin Treatment
            </div>
            <div className="bg-[#F7F7FC] text-[#3A643B] w-[140px] h-11 flex items-center justify-center rounded-2xl text-base font-medium">
              Skin Treatment
            </div>
            <div className="bg-[#F7F7FC] text-[#3A643B] w-[140px] h-11 flex items-center justify-center rounded-2xl text-base font-medium">
              Skin Treatment
            </div>
            <div className="bg-[#F7F7FC] text-[#3A643B] w-[140px] h-11 flex items-center justify-center rounded-2xl text-base font-medium">
              Skin Treatment
            </div>
            <div className="bg-[#F7F7FC] text-[#3A643B] w-[140px] h-11 flex items-center justify-center rounded-2xl text-base font-medium">
              Skin Treatment
            </div>
            <div className="bg-[#F7F7FC] text-[#3A643B] w-[140px] h-11 flex items-center justify-center rounded-2xl text-base font-medium">
              Skin Treatment
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-7 h-[331px] rounded-2xl  border ">
          <div className="flex h-[61px] items-center px-5  rounded-t-2xl  bg-[#F4F7EC] w-full">
            <div className="text-[#313131] font-semibold text-2xl">
              My Work Experience
            </div>
          </div>
          <div className="ml-5 uppercase text-base font-semibold">
            I have been in practice for : 7+ Years
          </div>
          <div className=" ml-5 w-[67%] border border-[#D1D5D1]"></div>
          <div className="flex justify-between mx-6">
            <div className="flex gap-4">
              <div className="flex items-center justify-center">
                {" "}
                <Image src="/job.svg" alt="job" width={24} height={24}></Image>
              </div>
              <div className="flex flex-col ">
                <span className="font-medium text-[rgba(51,53,72,1)] text-base">
                  Midtown Medical Clinic
                </span>
                <span className="text-[rgba(51,53,72,0.5)] text-base font-medium">
                  Senior doctor
                </span>
              </div>
            </div>
            <div className="text-[rgba(51,53,72,0.71)] text-base font-medium">
              2016-present
            </div>
          </div>
          <div className="flex justify-between mx-6">
            <div className="flex gap-4">
              <div className="flex items-center justify-center">
                {" "}
                <Image src="/job.svg" alt="job" width={24} height={24}></Image>
              </div>
              <div className="flex flex-col ">
                <span className="font-medium text-[rgba(51,53,72,1)] text-base">
                  Midtown Medical Clinic
                </span>
                <span className="text-[rgba(51,53,72,0.5)] text-base font-medium">
                  Senior doctor
                </span>
              </div>
            </div>
            <div className="text-[rgba(51,53,72,0.71)] text-base font-medium">
              2016-present
            </div>
          </div>
        </div>
        <div className="w-full  rounded-2xl border h-[524px] md:h-[530px]">
          <div className="flex  h-16 items-center px-5  rounded-t-2xl  bg-[#F4F7EC] w-full gap-3">
            <div className="text-[#313131] font-semibold text-2xl">
              Featured Reviews
            </div>
            <div className="text-[#5c4f4f] font-semibold text-2xl"> (102)</div>
          </div>
          <div className="flex flex-col m-6 rounded-2xl border pt-3 px-9 pb-6">
            <div>
              <div className="flex gap-2 w-60 h-[65px]">
                <Image
                  className="rounded-[40px] w-[54px] h-14"
                  src="/review.jpeg"
                  alt="r"
                  width={54}
                  height={56}
                ></Image>
                <div>
                  <h2 className="text-[#2F2F2F] font-semibold text-xl">
                    Alicent Hightower
                  </h2>{" "}
                  <h3 className="#939393 text-base font-medium">
                    Consulted for Skin care
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <Star fill="#F79624" className="text-[#F79624]" />
                  <Star fill="#F79624" className="text-[#F79624]" />
                  <Star fill="#F79624" className="text-[#F79624]" />
                  <Star fill="#F79624" className="text-[#F79624]" />
                </div>
                <p className="font-normal text-base text-[#2E2F2E]">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col m-6 rounded-2xl border pt-5 px-9 pb-6">
            <div>
              <div className="flex gap-2 w-60 h-[65px]">
                <Image
                  className="rounded-[40px] w-[54px] h-14"
                  src="/review.jpeg"
                  alt="r"
                  width={54}
                  height={56}
                ></Image>
                <div>
                  <h2 className="text-[#2F2F2F] font-semibold text-xl">
                    Alicent Hightower
                  </h2>{" "}
                  <h3 className="#939393 text-base font-medium">
                    Consulted for Skin care
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <Star fill="#F79624" className="text-[#F79624]" />
                  <Star fill="#F79624" className="text-[#F79624]" />
                  <Star fill="#F79624" className="text-[#F79624]" />
                  <Star fill="#F79624" className="text-[#F79624]" />
                </div>
                <p className="font-normal text-base text-[#2E2F2E]">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" leftside border rounded-2xl h-[1087px] lg:mx-10 w-full mt-10  lg:w-1/2">
        <div className="border border-[#E2E2E2] w-[94%] flex items-center justify-between h-14 m-3 mt-7 px-6 rounded-2xl">
          <div className="text-black text-xl font-semibold">
            Appointment Fee
          </div>
          <div className="text-[#3A643B] text-xl font-semibold">₹699.00</div>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="lg:w-1/2 font-medium text-xl ml-7   flex items-center justify-center">
            <span>Select your mode of session</span>
          </div>
          <div className="lg:flex hidden items-center justify-center w-1/3 mr-7">
            <div className="  border w-full px-2"></div>
          </div>
        </div>
        <div className="flex h-20 items-center  w-full justify-between my-10 px-7">
          <div
            className={cn(
              selectedDiv == 0
                ? "border-[#E5E5E5] bg-[#F2FBF2] rounded-lg w-1/4 h-full border cursor-pointer flex justify-center flex-col items-center"
                : "border-[#E5E5E5] rounded-lg w-1/4 h-full border flex justify-center cursor-pointer flex-col items-center"
            )}
            onClick={() => handleDivClick(0)}
          >
            <div className="text-[#1F1F1F] flex text-lg font-semibold">
              In-Clinic{" "}
              <CheckCircle2
                className={cn(selectedDiv === 0 ? "pl-2" : "hidden")}
              />
            </div>
            <div className="text-base font-normal">45 Mins</div>
          </div>

          <div
            className={cn(
              selectedDiv == 1
                ? "border-[#E5E5E5] bg-[#F2FBF2] rounded-lg w-1/4 h-full border cursor-pointer flex justify-center flex-col items-center"
                : "border-[#E5E5E5] rounded-lg w-1/4 h-full border flex justify-center cursor-pointer flex-col items-center"
            )}
            onClick={() => handleDivClick(1)}
          >
            <div className="text-[#3A643B] flex text-lg font-semibold items-center">
              Video{" "}
              <CheckCircle2
                className={cn(selectedDiv === 1 ? "pl-2" : "hidden")}
              />
            </div>
            <div className="text-base font-normal">45 Mins</div>
          </div>

          <div
            className={cn(
              selectedDiv == 2
                ? "border-[#E5E5E5] bg-[#F2FBF2] rounded-lg w-1/4 h-full border cursor-pointer flex justify-center flex-col items-center"
                : "border-[#E5E5E5] rounded-lg w-1/4 h-full border flex justify-center cursor-pointer flex-col items-center"
            )}
            onClick={() => handleDivClick(2)}
          >
            <div className="text-[#1F1F1F] flex text-lg font-semibold">
              In-Clinic{" "}
              <CheckCircle2
                className={cn(selectedDiv === 2 ? "pl-2" : "hidden")}
              />
            </div>
            <div className="text-base font-normal">45 Mins</div>
          </div>
        </div>
        <div className="px-10">
          <div className="flex items-center justify-between gap-4 px-3">
            <div className="font-medium text-xl  flex items-center ">
              <span>Pick a Time slot</span>
            </div>
            <div className="border w-[291px] px-2"></div>

            <div className="w-11 h-11 border rounded-full flex items-center justify-center">
              {" "}
              <Calendar />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center w-full h-[126px] border rounded-3xl my-10 px-2 ">
              <Carousel>
              <div  onClick={() => handleDateClick(0)} className={cn(selectedDate==0?"border-[#E5E5E5] cursor-pointer bg-[#F2FBF2] rounded-lg  h-20 w-32  border flex justify-center flex-col items-center":"border-[#E5E5E5] rounded-lg  h-20 w-32  border flex justify-center cursor-pointer flex-col items-center")}>
                <div className="text-[#3A643B] flex text-lg font-semibold items-center">
                  Tue, 11 Oct
                </div>
                <div className="text-base font-normal text-rose-500">
                  02 slots
                </div>
              </div>
              <div  onClick={() => handleDateClick(1)} className={cn(selectedDate==1?"border-[#E5E5E5] cursor-pointer bg-[#F2FBF2] rounded-lg  h-20 w-32  border flex justify-center flex-col items-center":"border-[#E5E5E5] rounded-lg  h-20 w-32 cursor-pointer border flex justify-center flex-col items-center")}>
                <div className="text-[#3A643B] flex text-lg font-semibold items-center">
                  Tue, 11 Oct
                </div>
                <div className="text-base font-normal text-rose-500">
                  02 slots
                </div>
              </div>
              <div  onClick={() => handleDateClick(2)} className={cn(selectedDate==2?"border-[#E5E5E5] bg-[#F2FBF2] cursor-pointer rounded-lg  h-20 w-32  border flex justify-center flex-col items-center":"border-[#E5E5E5] rounded-lg  h-20 w-32  border flex justify-center flex-col items-center")}>
                <div className="text-[#3A643B] flex text-lg font-semibold cursor-pointer items-center">
                  Tue, 11 Oct
                </div>
                <div className="text-base font-normal text-rose-500">
                  02 slots
                </div>
              </div>
              <div  onClick={() => handleDateClick(3)} className={cn(selectedDate==3?"border-[#E5E5E5] cursor-pointer bg-[#F2FBF2] rounded-lg  h-20 w-32  border flex justify-center flex-col items-center":"border-[#E5E5E5] rounded-lg  h-20 w-32  border flex justify-center flex-col items-center")}>
                <div className="text-[#3A643B] flex text-lg cursor-pointer font-semibold items-center">
                  Tue, 11 Oct
                </div>
                <div className="text-base font-normal text-rose-500">
                  02 slots
                </div>
              </div>
              <div  onClick={() => handleDateClick(4)} className={cn(selectedDate==4?"border-[#E5E5E5] bg-[#F2FBF2] rounded-lg cursor-pointer  h-20 w-32  border flex justify-center flex-col items-center":"border-[#E5E5E5] rounded-lg  h-20 w-32  border flex justify-center cursor-pointer flex-col items-center")}>
                <div className="text-[#3A643B] flex text-lg font-semibold items-center">
                  Tue, 11 Oct
                </div>
                <div className="text-base font-normal text-rose-500">
                  02 slots
                </div>
              </div>
              <div  onClick={() => handleDateClick(5)} className={cn(selectedDate==5?"border-[#E5E5E5] bg-[#F2FBF2] rounded-lg  h-20 w-32  border flex justify-center flex-col items-center":"border-[#E5E5E5] cursor-pointer rounded-lg  h-20 w-32  border flex justify-center flex-col items-center")}>
                <div className="text-[#3A643B] flex text-lg cursor-pointer font-semibold items-center">
                  Tue, 11 Oct
                </div>
                <div className="text-base font-normal text-rose-500">
                  02 slots
                </div>
              </div>
              </Carousel>
            </div>

            <div className="text-black text-xl w-full items-start mx-10 gap-4 font-semibold ">
              Morning
            </div>
            <div className="grid grid-cols-4 w-[508px] gap-2 ml-10 my-3">
              <div
                className={cn(
                  selectedTime ==0
                    ? "w-[106px] h-[67px] text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl border flex items-center justify-center"
                )}
                onClick={() => handleTimeClick(0)}
              >
                <span>09:00 AM</span>
              </div>
              <div
                className={cn(
                  selectedTime == 1
                    ? "w-[106px] h-[67px] text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl border flex items-center justify-center"
                )}
                onClick={() => handleTimeClick(1)}
              >
                <span>09:00 AM</span>
              </div>{" "}
              <div
                className={cn(
                  selectedTime == 2
                    ? "w-[106px] h-[67px] text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl border flex items-center justify-center"
                )}
                onClick={() => handleTimeClick(2)}
              >
                <span>09:00 AM</span>
              </div>{" "}
              <div
                className={cn(
                  selectedTime == 4
                    ? "w-[106px] cursor-pointer h-[67px] text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] cursor-pointer rounded-2xl border flex items-center justify-center"
                )}
                onClick={() => handleTimeClick(4)}
              >
                <span>09:00 AM</span>
              </div>{" "}
              <div
                className={cn(
                  selectedTime == 5
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )}
                onClick={() => handleTimeClick(5)}
              >
                <span>09:00 AM</span>
              </div>{" "}
              <div
                className={cn(
                  selectedTime == 6
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )} 
                onClick={() => handleTimeClick(6)}
              >
                <span>09:00 AM</span>
              </div>
            </div>
          </div>
          <div className="text-black text-xl cursor-pointer items-start mx-10 gap-2 font-semibold">
            Evening
          </div>
          <div className="grid grid-cols-4 w-[508px] gap-2 ml-10 my-3">
          <div
                className={cn(
                  selectedTime == 7
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )} 
                onClick={() => handleTimeClick(7)}
              >
                <span>09:00 AM</span>
              </div>
              <div
                className={cn(
                  selectedTime == 8
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )} 
                onClick={() => handleTimeClick(8)}
              >
                <span>09:00 AM</span>
              </div>
              <div
                className={cn(
                  selectedTime == 9
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )} 
                onClick={() => handleTimeClick(9)}
              >
                <span>09:00 AM</span>
              </div>
              <div
                className={cn(
                  selectedTime == 10
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )} 
                onClick={() => handleTimeClick(10)}
              >
                <span>09:00 AM</span>
              </div>
              <div
                className={cn(
                  selectedTime == 11
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )} 
                onClick={() => handleTimeClick(11)}
              >
                <span>09:00 AM</span>
              </div>
              <div
                className={cn(
                  selectedTime == 12
                    ? "w-[106px] h-[67px] cursor-pointer text-white rounded-2xl bg-[#3A643B] border flex items-center justify-center"
                    : "w-[106px] h-[67px] rounded-2xl cursor-pointer border flex items-center justify-center"
                )} 
                onClick={() => handleTimeClick(12)}
              >
                <span>09:00 AM</span>
              </div>
          </div>
          <div className="  flex w-full justify-around items-center  my-10">
            <button className="text-white rounded-lg px-32 py-3 w-[476.37px]   h-[59.73px]text-white font-medium text-xl bg-[#3A643B]">
              Make An Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Man;
