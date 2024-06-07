/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import CommenSection from "@/components/commenSection";
import { useRouter } from "next/navigation";
import { ArrowBigLeft } from "lucide-react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
const animatedComponents = makeAnimated();

interface Option {
  readonly label: string;
  readonly value: string;
}
export default function SymptomsPatient2() {
  const options = [
    { value: "Headaches", label: "Headaches" },
    { value: "Shortness of breath", label: "Shortness Of Breath" },
    { value: "Dizziness", label: "Dizziness" },
    { value: "Hypotension", label: "Hypotension"},
    { value: "Milky Nipple", label: "Milky Nipple" },
    { value: "Discharge", label: "Discharge"},
    { value: "Fatigue", label: "Fatigue"},
    { value: "Sore Throat", label: "Sore Throat"},
    { value: "Sneezing", label: "Sneezing"},
  ];
  const [openWindo, setOpenWindo] = useState(false);
  const [joi, setJoi] = useState("");
  const [value, setValue] = React.useState<readonly Option[]>([]);
  const [result, setResult] = useState("");
  const [specializationResult, setSpecializationResult] = useState("");
  const [loading, setLoading] = useState(false);

  let symptom: any = [];

  useEffect(() => {
    value.map((e: any) => {
      symptom.push(e.label);
    });
    setJoi(symptom.join(","));
  }, [value, symptom]);
  const results = async () => {
    setLoading(true);
    const data = await fetch(
      "https://4f78-41-129-115-232.ngrok-free.app/result",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symptoms: joi,
        }),
      }
    );

    const finalData = await data.json();
    if (finalData) {
      setLoading(false);
      setResult(finalData.disease);
      setSpecializationResult(finalData.specialization);
    } else setLoading(false);
  };

  const router = useRouter();

  return (
    <>
      <title>symptomes</title>
      <CommenSection title="Check your" sub="symptoms-patiant" subtitle="" />
      <div className="flex py-8 mx-28">
        <div className="ml-12 mr-16 mt-6 flex ">
          <div className="w-1 h-36 bg-slate-200/70 mr-2 relative">
            <div className=" bg-green-600 w-1 h-[100px]" />
          </div>
          <div>
            <p className="mb-4">Introduction</p>
            <p className="mb-4">Patient</p>
            <p className="mb-4">Symptoms</p>
            <p className="mb-4 cursor-no-drop text-slate-600/50">Results</p>
          </div>
        </div>
        <div className=" bg-white shadow-lg mt-6 p-10  flex w-full justify-between">
          <div className=" basis-3/5 mr-14">
            <h3 className=" font-semibold text-lg mb-2">Check your symptoms</h3>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              onChange={(newValue: any) => setValue(newValue)}
              isMulti
              options={options}
            />
            <button
              className="rounded-md  py-2 mt-6 hover:text-sky-800 duration-500  text-sky-600 "
              onClick={() => router.push("/symptoms-Patient/1")}
            >
              <ArrowBigLeft className=" inline" /> Back
            </button>
            <button
              className="rounded-md float-right button-grediant px-6 py-2 mt-6  text-white duration-300"
              onClick={() => {
                results();
                setOpenWindo(true);
              }}
            >
              Check
            </button>
            {openWindo === true ? (
              <>
                <div className=" absolute bg-black/40 top-0 w-[1340px] left-0 h-[1110px] z-[1500]"></div>
                <div className=" absolute border-sky-600 border-2 top-[40%] flex flex-col justify-center items-center p-10 rounded-2xl left-[35%] z-[2000] w-[500px] h-[500px] bg-white">
                  <div
                    className=" absolute right-4 top-4 text-white bg-black w-8 h-8 text-center leading-8 cursor-pointer rounded-full"
                    onClick={() => setOpenWindo(false)}
                  >
                    X
                  </div>
                  {loading === true ? (
                    <>
                      <p>please wait</p>
                      <ClipLoader color="#36d7b7" />
                    </>
                  ) : (
                    <>
                      <p className=" mb-4 font-bold ">disease : {result}</p>
                      <p className=" mb-4 font-bold ">specialization : {specializationResult}</p>
                    </>
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
