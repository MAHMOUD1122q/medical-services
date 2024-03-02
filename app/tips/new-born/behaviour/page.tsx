"use client";
import CommenSection from "@/components/commenSection";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeHelp, Bed, Gamepad, Shield, SkipBack, SmileIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function behaviour() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <>
      <title> Newborns : behaviour </title>
      <CommenSection title="Newborns: " sub=" behaviour" subtitle="" />
      <div className=" py-12">
        <div className=" mx-20">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Understanding newborn behaviour
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/newborn-behaviour-nutshell.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Newborn behaviour: an overview
                      </p>
                      <p>
                        Newborn baby behaviour is about bonding, communicating
                        needs and exploring the world. It’s important to respond
                        quickly and lovingly to newborn behaviour.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/temperament.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Temperament: what it is and why it matters
                      </p>
                      <p>
                        Temperament is the individual way your child responds to
                        the world. Understanding your child’s temperament helps
                        you choose effective parenting strategies.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/newborn-first-week.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Your newborn’s first weeks: what to expect
                      </p>
                      <p>
                        A newborn’s first weeks of life are spent adapting to
                        the outside world. You can help by providing warmth,
                        love, security and cuddles. Here’s what to expect.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: crying & colic
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/colic-what-to-do.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Crying: babies
                      </p>
                      <p>
                        All babies cry. If your baby is crying, check that baby
                        isn’t sick, hurt or uncomfortable. Singing, rocking,
                        wrapping, patting, massage or baths might help.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/Baby-cues.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Baby cues and baby body language: video guide
                      </p>
                      <p>
                        Baby body language gives cues to whether babies are
                        tired or hungry, want to play or need a break. Our guide
                        has videos so you can see baby cues in action.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/colic-what-is-it.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Colic: what it is and what to do{" "}
                      </p>
                      <p>
                        Colic is when babies cry and fuss a lot for no obvious
                        medical reason. It’s best to see a GP or nurse about
                        colic. Looking after yourself is important too.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Soothing-a-crying-baby-narrow.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Soothing a crying baby: in pictures
                      </p>
                      <p>
                        To soothe a crying baby, check whether baby is hungry,
                        tired, uncomfortable or sick. This helps you know what
                        to do to comfort baby and stop the crying.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-10">
            <p className=" text-sky-600 text-center text-5xl mb-10">
              Other newborns topics
            </p>
            <div className="flex flex-wrap flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28">
              <div
                className=" flex flex-col justify-center text-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[25%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
                onClick={() => {
                  router.push("/tips/new-born/connecting-communicating");
                }}
              >
                <SmileIcon className="w-20 h-12" />
                Connecting & communicating
              </div>
              <div
                className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[25%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
                onClick={() => {
                  router.push("/tips/new-born/play-learning");
                }}
              >
                <Gamepad className="w-20 h-12" />
                Play & learning
              </div>
              <div
                className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[25%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
                onClick={() => {
                  router.push("/tips/new-born/safety");
                }}
              >
                <Shield className="w-20 h-12" />
                Safety
              </div>
              <div
                className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[25%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
                onClick={() => {
                  router.push("/tips/new-born/premature-sick-babies");
                }}
              >
                <BadgeHelp className="w-20 h-12" />
                Premature & sick babies
              </div>
              <div
                className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[25%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
                onClick={() => {
                  router.push("/tips/new-born/sleep");
                }}
              >
                <Bed className="w-20 h-12" />
                Sleep
              </div>
              <div
                className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[25%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
                onClick={() => {
                  router.push("/tips/new-born");
                }}
              >
                <SkipBack className="w-20 h-12" />
                Back to newborn
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
