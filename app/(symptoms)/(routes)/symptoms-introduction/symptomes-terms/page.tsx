"use client";
import CommenSection from "@/components/commenSection";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";


export default function Terms() {
  const router = useRouter();
  const [policy,setPolicy] = useState(false)
  const [terms,setTerms] = useState(false)

  function isValid() {
    return terms &&
      policy
      ? true
      : false;
  }


  return (
    <>
      <CommenSection
        title="Check your"
        sub="symptoms-introduction"
        subtitle=""
      />
      <div className="flex py-8 mx-28">
        <div className="ml-12 mr-16 mt-6 flex ">
          <div className="w-1 h-60 bg-slate-200/70 mr-2 relative">
            <div className=" bg-green-600 w-1 h-10" />
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
            <h3 className=" font-semibold text-lg mb-2">Terms of Service</h3>
            <p className="">
              Before using the checkup, please read the Terms of Service and
              remember:
            </p>
            <ul className="ml-8 mt-3">
              <li className=" list-disc mb-4">
                Checkup isn’t a diagnosis. It’s only for your information and
                not a qualified medical opinion.
              </li>
              <li className=" list-disc mb-4">
                Checkup isn’t for emergencies. Call your local emergency number
                right away when there’s a health emergency.
              </li>
              <li className=" list-disc">
                Your data is safe. The information you give won’t be shared or
                used to identify you.
              </li>
            </ul>
            <div className="mt-6">
              <h3 className=" font-semibold text-lg">
                About this symptom checker
              </h3>
              <div className=" flex items-center mt-2">
                <input type="checkbox" className="w-4 h-4 accent-sky-600" onChange={(e) => {
                  e.target.checked ? 
                  setPolicy(true)
                  : setPolicy(false)           
                  }}/>
                <p className="ml-2 ">
                  I read and accept
                  <Sheet>
                    <SheetTrigger>
                      <span className=" text-sky-600 ml-1">
                        Terms of Service.
                      </span>
                    </SheetTrigger>
                    <SheetContent className="bg-white text-white">
                      <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription></SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </p>
              </div>
              <div className=" flex items-center">
                <input type="checkbox" className=" w-7 h-7 accent-sky-600" onChange={(e) => {
                  e.target.checked ? 
                  setTerms(true)
                  : setTerms(false)           
                  }}/>
                <p className="ml-2 mt-6">I agree for my health information to be used for the interview. More information in the
                <Sheet>
                    <SheetTrigger>
                      <span className=" text-sky-600 ml-1">
                      Privacy Policy.
                      </span>
                    </SheetTrigger>
                    <SheetContent className="bg-white text-white">
                      <SheetHeader>
                        <SheetTitle>Terms of Service</SheetTitle>
                        <SheetDescription></SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </p>
              </div>
            </div>
            <div className=" flex justify-between">
              <button className="rounded-md  py-2 mt-6 hover:text-sky-800 duration-500  text-sky-600 "
              onClick={() => router.push("/symptoms-introduction")}
              >
              <ArrowBigLeft className=" inline"/> Back
              </button>
            <button
              className="rounded-md disabled:opacity-50 disabled:pointer-events-none button-grediant px-6 py-2 mt-6  text-white duration-300"
              onClick={() =>{ 
                router.push("/symptoms-Patient/1")
              } }
              disabled={!isValid()}
            >
              Next
            </button>
            </div>
          </div>
          <div className=" basis-2/5">
            <Image
              src="/symptomes-terms.svg"
              alt="image"
              width={250}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
