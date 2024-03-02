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

export default function NewBorn() {
  const router = useRouter()
  return (
    <>
      <title> Newborns (0-3 months)</title>
      <CommenSection title="Newborns " sub=" (0-3 months)" subtitle="" />
      <div className="py-12">
        <div className="flex flex-wrap flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28">
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          onClick={()=>{router.push("/tips/new-born/behaviour")}}
          >
            <Brain className="w-20 h-12" />
            behaviour
          </div>
          <div className=" flex flex-col justify-center text-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          onClick={()=>{router.push("/tips/new-born/connecting-communicating")}}
          >
            <SmileIcon className="w-20 h-12" />
            Connecting & communicating
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          onClick={()=>{router.push("/tips/new-born/play-learning")}}
          >
            <Gamepad className="w-20 h-12" />
            Play & learning
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          onClick={()=>{router.push("/tips/new-born/safety")}}
          >
            <Shield className="w-20 h-12" />
            Safety
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          onClick={()=>{router.push("/tips/new-born/premature-sick-babies")}}
          >
            <BadgeHelp className="w-20 h-12" />
            Premature & sick babies
          </div>
          <div className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[22%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
          onClick={()=>{router.push("/tips/new-born/sleep")}}
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
