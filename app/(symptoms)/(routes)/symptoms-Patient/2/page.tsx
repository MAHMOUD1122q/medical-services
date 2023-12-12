"use client";
import CommenSection from "@/components/commenSection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Slider } from "@/components/ui/slider";

export default function SymptomsPatient2() {
  const router = useRouter();
  return (
    <>
      <CommenSection title="Check your" sub="symptoms-patiant" subtitle="" />
      <div className="flex py-8 mx-28">
        <div className="ml-12 mr-16 mt-6 flex ">
          <div className="w-1 h-60 bg-slate-200/70 mr-2 relative">
            <div className=" bg-green-600 w-1 h-[75px]" />
          </div>
          <div>
            <p className="mb-4">Introduction</p>
            <p className="mb-4">Patient</p>
            <p className="mb-4 cursor-no-drop text-slate-600/50">Symptoms</p>
            <p className="mb-4 cursor-no-drop text-slate-600/50">Regions</p>
            <p className="mb-4 cursor-no-drop text-slate-600/50">Interview</p>
            <p className="mb-4 cursor-no-drop text-slate-600/50">Results</p>
          </div>
        </div>
        <div className=" bg-white shadow-lg mt-6 p-10  flex w-full justify-between">
          <div className=" basis-3/5 mr-14">
            <h3 className=" font-semibold text-lg mb-2">Check your symptoms</h3>
            <button
              className="rounded-md button-grediant px-6 py-2 mt-6  text-white duration-300"
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
