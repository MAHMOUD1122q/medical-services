"use client";
import React, { useEffect, useState } from "react";
import CommenSection from "@/components/commenSection";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";
export default function SymptomsPatient3() {
  const router = useRouter();
  const symptom = localStorage.getItem("data");
  
  const [f, setF] = useState("")
  
      window.onload = async () => {
      
      }

  return (
    <>
      <title>symptomes</title>
      <CommenSection title="Check your" sub="symptoms-patiant" subtitle="" />
      <div className="flex py-8 mx-28">
        <div className="ml-12 mr-16 mt-6 flex ">
          <div className="w-1 h-36 bg-slate-200/70 mr-2 relative">
            <div className=" bg-green-600 w-1 h-36" />
          </div>
          <div>
            <p className="mb-4">Introduction</p>
            <p className="mb-4">Patient</p>
            <p className="mb-4">Symptoms</p>
            <p className="mb-4">Results</p>
          </div>
        </div>
        <div className=" bg-white shadow-lg mt-6 p-10  flex w-full justify-between">
          <div className=" basis-3/5 mr-14">
            <h3 className=" font-semibold text-lg mb-2">thank you click the butoon to Check </h3>
            <button
              className="rounded-md  py-2 mt-6 hover:text-sky-800 duration-500  text-sky-600 "
              onClick={() => router.push("/symptoms-Patient/1")}
            >
              <ArrowBigLeft className=" inline" /> Back
            </button>
            <button
              className="rounded-md float-right button-grediant px-6 py-2 mt-6  text-white duration-300"
              onClick={() => router.push("/symptoms-Patient")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
