"use client";
import CommenSection from "@/components/commenSection";
import { ArrowBigLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SymptomsPatient1() {
  const router = useRouter();
  return (
    <>
          <title>symptomes</title>
      <CommenSection title="Check your" sub="symptoms-patiant" subtitle="" />
      <div className="flex py-8 mx-28">
        <div className="ml-12 mr-16 mt-6 flex ">
          <div className="w-1 h-36 bg-slate-200/70 mr-2 relative">
            <div className=" bg-green-600 w-1 h-[75px]" />
          </div>
          <div>
            <p className="mb-4">Introduction</p>
            <p className="mb-4">Patient</p>
            <p className="mb-4 cursor-no-drop text-slate-600/50">Symptoms</p>
            <p className="mb-4 cursor-no-drop text-slate-600/50">Results</p>
          </div>
        </div>
        <div className=" bg-white shadow-lg mt-6 p-10 w-full ">
          <div className=" basis-3/5 mr-14">
            <h3 className=" font-semibold text-lg mb-2">What is your sex?</h3>
            <div className=" flex text-center ">
              <div
                className=" py-10 px-32 mr-10 border-[1px] hover:bg-slate-200/40 duration-300 cursor-pointer"
                onClick={() => router.push("/symptoms-Patient/2")}
              >
                <Image src="/female.svg" alt="icon" width={100} height={100} />
                <p>Female</p>
              </div>
              <div
                className=" py-10 px-32 border-[1px] hover:bg-slate-200/40 duration-300 cursor-pointer"
                onClick={() => router.push("/symptoms-Patient/2")}
              >
                <Image src="/male.svg" alt="icon" width={100} height={100} />
                <p>male</p>
              </div>
            </div>
            <button
              className="rounded-md  py-2 mt-6 hover:text-sky-800 duration-500  text-sky-600 "
              onClick={() =>
                router.push("/symptoms-introduction/symptomes-terms")
              }
            >
              <ArrowBigLeft className=" inline" /> Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
