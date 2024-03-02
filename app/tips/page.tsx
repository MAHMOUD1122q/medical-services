"use client";
import CommenSection from "@/components/commenSection";
import { useRouter } from "next/navigation";
import React from "react";

export default function Tips() {
  const router = useRouter();

  return (
    <>
      <title> Tips for the mother </title>
      <CommenSection title="Tips for " sub=" the mother" subtitle="" />
      <div className="py-12">
        <div className="flex flex-wrap flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28">
          <div
            className=" mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500"
            onClick={() => router.push(`/tips/new-born`)}
          >
            <img
              loading="lazy"
              src="/newborns-hero.jpg"
              alt="image"
              className=" w-[500px] h-52"
            />
            <div className=" px-6">
              <h3 className=" font-semibold text-2xl mt-2 mb-3">
                newborns (0-3 months)
              </h3>
              <button className=" flex mb-6 logo-grediant items-center text-lg">
                Read more <span className=" text-3xl"> &rarr;</span>
              </button>
            </div>
          </div>
          <div
            className=" mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500"
            onClick={() => router.push(`/tips/babies`)}
          >
            <img
              loading="lazy"
              src="/babies-landing-hero.jpg"
              alt="image"
              className=" w-[500px] h-52"
            />
            <div className=" px-6">
              <h3 className=" font-semibold text-2xl mt-2 mb-3">
                Babies (3-12 months)
              </h3>
              <button className=" flex mb-6 logo-grediant items-center text-lg">
                {" "}
                Read more <span className=" text-3xl"> &rarr;</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
