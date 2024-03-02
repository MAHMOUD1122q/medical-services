"use client";
import CommenSection from "@/components/commenSection";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeHelp, Bed, Brain, Gamepad, Shield, SkipBack, SmileIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Safety() {
  const router = useRouter();
  return (
    <>
      <title> Newborns : safety </title>
      <CommenSection title="Newborns: " sub=" safety" subtitle="" />
      <div className=" py-12">
        <div className=" mx-20">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: CPR
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/CPR-for-babies-under-12-months-narrow.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        CPR for babies under 12 months: in pictures
                      </p>
                      <p>
                        See how to do baby CPR. 1. Check for danger. 2. Check
                        response. 3. Send for help. 4. Check airway and
                        breathing. 5. Start compressions and rescue breaths.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: home & pet safety
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/making-your-home-safe-for-your-child.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Child safety at home
                      </p>
                      <p>
                        Child safety at home is about supervision, a safe
                        environment, and teaching children about what is and
                        isn’t safe. It’s important to know first aid and CPR.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/Indoor-safety-thumbnail-2-wide.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Indoor safety at home: in pictures
                      </p>
                      <p>
                        This illustrated guide to child safety at home indoors
                        has information on smoke detectors, safety glass,
                        poisons, safety gates, sharp items and blind cords.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/dogs-children-preventing-injuries.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Dogs and children: preventing child injuries
                      </p>
                      <p>
                        Dogs can be great family pets. For safety, children need
                        constant, close supervision near dogs. Here’s how to
                        prevent dog bites and other injuries.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/preventing-falls.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Preventing falls for babies and young children
                      </p>
                      <p>
                        Falls prevention for babies and young children is about
                        adjusting their home and play environment so it’s safe
                        as they grow. Close supervision is also key.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: safe equipment & furniture
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/baby-equipment-checklist.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        New baby checklist: home and baby equipment
                      </p>
                      <p>
                        Getting baby equipment and preparing your home for your
                        baby can be exciting. Our baby checklist goes through
                        the essentials so you don’t break the bank.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/safe-baby-furniture-checklist.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Safe baby furniture checklist
                      </p>
                      <p>
                        Safe baby furniture and baby equipment protects your
                        baby. When choosing cots, highchairs, change tables,
                        safety gates and more, check for AS/NZS standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/baby-slings-carriers-safety.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Baby carriers, slings and backpacks: safety guide
                      </p>
                      <p>
                        When choosing a baby carrier, sling or backpack, look
                        for healthy hip positioning for your baby. Use the
                        T.I.C.K.S. rule to position babies safely in slings.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/baby-breathing-monitors.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Baby breathing monitors
                      </p>
                      <p>
                        Baby breathing monitors sound an alarm if a baby stops
                        breathing. Health professionals can help you decide
                        whether a baby breathing monitor is right for you.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: bath & water safety
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/bath-safety.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Preventing drowning in the bath
                      </p>
                      <p>
                        Drowning is a serious risk for babies and children at
                        bath time. You can prevent drowning in the bath by
                        supervising your child in the bath at all times.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/safe-water-temperature.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Safe bath temperature: babies and children
                      </p>
                      <p>
                        A safe baby bath temperature is between 37°C and 38°C.
                        This goes for older children too. Reduce scalding risk
                        by lowering the temperature of water from taps.
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
                className=" flex flex-col justify-center items-center h-36 bg-gray-100 text-sky-600 text-xl mx-4 shadow-xl rounded-lg overflow-hidden basis-[25%] mb-12 fadeIn cursor-pointer hover:scale-[1.05] duration-500 "
                onClick={() => {
                  router.push("/tips/new-born/behaviour");
                }}
              >
                <Brain className="w-20 h-12" />
                behaviour
              </div>
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
