"use client"

import CommenSection from "@/components/commenSection";
import {
  BadgeHelp,
  Bed,
  Brain,
  Gamepad,
  Shield,
  SkipBack,
  SmileIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Babies() {
  const router = useRouter()
  return (
    <>
      <title> Babies (3-12 months)</title>
      <CommenSection title="Babies " sub=" (3-12 months)" subtitle="" />
      <div className="py-12">
        <div className="flex flex-wrap flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28">
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          // onClick={()=>{router.push("/tips/babies/behaviour")}}
          >
            <Brain className="w-20 h-12" />
            behaviour
          </div>
          <div className=" flex flex-col justify-center text-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          // onClick={()=>{router.push("/tips/babies/connecting-communicating")}}
          >
            <SmileIcon className="w-20 h-12" />
            Connecting & communicating
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          // onClick={()=>{router.push("/tips/babies/play-learning")}}
          >
            <Gamepad className="w-20 h-12" />
            Play & learning
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          // onClick={()=>{router.push("/tips/babies/safety")}}
          >
            <Shield className="w-20 h-12" />
            Safety
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          // onClick={()=>{router.push("/tips/babies/premature-sick babies")}}
          >
            <BadgeHelp className="w-20 h-12" />
            Premature & sick babies
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          // onClick={()=>{router.push("/tips/babies/sleep")}}
          >
            <Bed className="w-20 h-12"/>
            Sleep
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          onClick={()=>{router.push("/tips")}}
          >
            <SkipBack className="w-20 h-12"/>
            back
          </div>
        </div>
      </div>
    </>
  );
}
