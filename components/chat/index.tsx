"use client";

import { Headphones } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Chat() {
  const [isOpen, setIsOpen] = useState("opacity-0 z-[-1]");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOpen("opacity-0 z-[-1]");
    });
  }, []);
  return (
    <>
      <div
        onClick={() =>
          isOpen === " opacity-100 z-50"
            ? setIsOpen("opacity-0 z-[-1]")
            : setIsOpen(" opacity-100 z-50")
        }
        className="fixed z-50 bottom-6 w-16 h-16 cursor-pointer flex items-center justify-center rounded-full right-3 bg-sky-600"
      >
        <Headphones className="text-white w-9 h-9" />
      </div>
      <div
        className={`fixed ${
          isOpen === "opacity-0 z-[-1]" ? "opacity-0 z-[-1]"  : " opacity-100 z-50"
        } duration-500 z-50 bottom-10 w-96 h-[500px] p-[3px] rounded-lg bg-gray-100  right-24`}
      >
        <div className="w-full p-4 bg-[#0f1933] rounded-lg">
          <h3 className="text-white">welcome in chatbot</h3>
        </div>
        <div className="bg-white rounded-lg z-40 h-[400px] mt-[-6px] px-2 py-4 overflow-y-scroll">
          {/* {ChatReplay.map((e)=>(
              <>
               <div key={e.id}>

               </div>
              </>
            ))} */}
          {/* <div className="bg-slate-200 w-fit p-2 rounded-md">
              <p>how can help you</p>
            </div>
            <div className=" w-full text-right flex justify-end">
              <p className={`bg-slate-200 w-fit  p-2 rounded-md ${chat === "" ? "hidden":""}`}>{chat1}</p>
            </div>
            <div className={`bg-slate-200 w-52 p-2 rounded-md ${chat === "" ? "hidden":""}`}>
              <p>{chat === "in need to check" ? "okay no problem tall me your number and name": ""}</p>
            </div> */}
        </div>
        <div className=" p-2 flex ">
          {/* <p className=" border-2 w-fit p-3 rounded-lg cursor-pointer mr-2">
            test
          </p>
          <p className=" border-2 w-fit p-3 rounded-lg cursor-pointer mr-2">
            in need to check
          </p>
          <p className=" border-2 w-fit p-3 rounded-lg cursor-pointer mr-2">
            test
          </p> */}
        </div>
      </div>
    </>
  );
}
