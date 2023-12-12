"use client";
import CommenSection from "@/components/commenSection";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SymptomsIntroduction() {
  const router = useRouter()
  return (
    <>
      <CommenSection title="Check your" sub="symptoms-introduction" subtitle="" />
      <div className="flex py-8 mx-28">
        <div className="ml-12 mr-16 mt-6 flex ">
         <div className="w-1 h-60 bg-slate-200/70 mr-2 relative">
          <div className=" bg-green-600 w-1 h-10"/>
         </div>
         <div>
          <p className="mb-4">Introduction</p>
          <p className="mb-4 cursor-no-drop text-slate-600/50">Patient</p>
          <p className="mb-4 cursor-no-drop text-slate-600/50">Symptoms</p>
          <p className="mb-4 cursor-no-drop text-slate-600/50">Regions</p>
          <p className="mb-4 cursor-no-drop text-slate-600/50">Interview</p>
          <p className="mb-4 cursor-no-drop text-slate-600/50">Results</p>
         </div>
        </div>
        <div className=" bg-white shadow-lg mt-6 p-10  flex w-full justify-between">
          <div className=" basis-3/5 mr-14">
            <h3 className=" font-semibold text-lg mb-2">Check your symptoms</h3>
            <p className="">Take a short (3 min) symptom assessment. The information you give is safe and won’t be shared. Your results will include:</p>
            <ul className="ml-8 mt-3">
              <li className=" list-disc">Possible causes of symptoms.</li>
              <li className=" list-disc">Recommendations on what to do next.</li>
            </ul>
            <div className="mt-6">
              <h3 className=" font-semibold text-lg">About this symptom checker</h3>
              <ul className="ml-8 mt-3">
              <li className=" list-disc">Created and validated by doctors</li>
              <li className=" list-disc">Clinically validated with patient cases</li>
            </ul>
            </div>
            <button className="rounded-md button-grediant px-6 py-2 mt-6  text-white duration-300" onClick={()=> router.push("/symptoms-introduction/symptomes-terms")}>Next</button>
          </div>
          <div className=" basis-2/5">
            <Image src="/check-symptoms.svg" alt="image" width={250} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}
