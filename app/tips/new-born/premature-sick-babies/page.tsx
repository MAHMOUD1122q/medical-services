"use client";
import CommenSection from "@/components/commenSection";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BadgeHelp,
  Bed,
  Brain,
  Gamepad,
  Shield,
  SkipBack,
  SmileIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrematureSickBabies() {
  const router = useRouter();
  return (
    <>
      <title> Newborns : Premature babies & sick babies </title>
      <CommenSection
        title="Newborns: "
        sub=" Premature babies & sick babies"
        subtitle=""
      />
      <div className=" py-12">
        <div className=" mx-20">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Premature babies & sick babies: birth
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/premature-birth-emotional-preparation.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Premature birth: mental and emotional preparation
                      </p>
                      <p>
                        If you know you’re having a premature birth, you can
                        prepare emotionally. Practise relaxation, tour the NICU,
                        and explain to other children what’s happening.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/premature-birth.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Premature labour, birth and babies
                      </p>
                      <p>
                        This essential guide for parents of premature babies
                        covers gestational age, premature birth risk factors,
                        premature labour and premature development.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/premature-birth-getting-ready.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Sick or premature babies: practical preparation
                      </p>
                      <p>
                        If you know you’re having a premature or sick baby
                        who’ll be going to the NICU, it’s good to get organised
                        beforehand with cooking, child care and more.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Premature babies & sick babies: connecting & communicating
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Bonding-in-the-NICU.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-72 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Bonding with sick or premature babies in the NICU
                      </p>
                      <p>
                        Bonding is important for sick or premature babies in the
                        NICU. It helps them feel secure and develop. You can
                        bond through touch, song, play and daily care.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/premature-baby-calming-nicu.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Calming sick or premature babies in the NICU
                      </p>
                      <p>
                        Sick or premature babies can feel upset or stressed in
                        the NICU. To calm NICU babies, learn their cues and try
                        gentle touch, slow movements and soft voices.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/touch-holding-and-massage-for-premature-baby-wide.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-72 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Touch and holding for sick or premature babies in the
                        NICU
                      </p>
                      <p>
                        Touch, holding, comfort holding and kangaroo care can
                        soothe and comfort sick or premature babies in the NICU.
                        These are also great ways to bond.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Premature babies & sick babies: play & learning
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Playing-with-premature-babies-NICU.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Playing with sick or premature babies in the NICU
                      </p>
                      <p>
                        Playing with sick or premature babies in the NICU can
                        help with bonding and development. Watch your baby’s
                        cues, and use sight, touch and music to play.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Premature babies & sick babies: sleep
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/premature-baby-sleep-nicu.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Sleep and noise: sick or premature babies in the NICU
                      </p>
                      <p>
                        Noise in the neonatal intensive care unit (NICU) can
                        affect how sick or premature babies sleep. You can work
                        with NICU staff to monitor and manage noise.
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
                  router.push("/tips/new-born/sleep");
                }}
              >
                <Bed className="w-20 h-12" />
                Sleep
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
