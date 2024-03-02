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

export default function Sleep() {
  const router = useRouter();
  return (
    <>
      <title> Newborns : sleep </title>
      <CommenSection title="Newborns: " sub=" sleep" subtitle="" />
      <div className=" py-12">
        <div className=" mx-20">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Understanding newborn sleep
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/newborn-sleep-what-to-expect.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Newborn sleep: what to expect
                      </p>
                      <p>
                        Newborns sleep differently from older babies, children
                        and adults. They usually sleep in short bursts in the
                        day and night, and wake several times at night.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/is-my-child-tired.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Tired signs in babies and toddlers
                      </p>
                      <p>
                        When you spot tired signs in babies and toddlers, it’s
                        time to settle them for sleep. Tired signs include jerky
                        limb movements, grizzling and clinginess. Article
                        available in: Arabic, Dari, Karen, Persian, Simplified
                        Chinese, Vietnamese.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/sleep-the-hows-and-whys.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        About sleep
                      </p>
                      <p>
                        Sleep is important for health, wellbeing, growth and
                        learning. How much babies, children and teenagers sleep
                        and when they sleep changes as they get older.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: sleep, settling & routines
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/sleep-routines-for-newborns.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-72 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Newborn sleep: responsiveness and routines
                      </p>
                      <p>
                        In the early months, it’s best to respond to newborn
                        needs for sleeps and feeds. Follow baby’s lead when it
                        comes to a routine for feeds, sleep and play. Article
                        available in: Arabic, Dari, Dinka, Hakha Chin, Karen,
                        Persian, Simplified Chinese, Swahili, Tamil and
                        Vietnamese
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/Newborn-baby-routines-wide.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Newborn baby routines: in pictures
                      </p>
                      <p>
                        Newborn baby routines are all about responding to your
                        baby’s needs for feeds and sleep. It’s good to make time
                        for gentle play too. Get tips in pictures.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/patting-settling-technique2.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-72 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Responsive settling at 0-6 months: settling in arms,
                        hands-on settling, verbal reassurance
                      </p>
                      <p>
                        Responsive settling is responding to babies’ comfort
                        needs while helping them settle and sleep. Strategies
                        include settling in arms and hands-on settling.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/should-you-use-a-dummy.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Dummies: advantages, disadvantages and tips for use
                      </p>
                      <p>
                        Dummies soothe some babies and help them settle. But
                        dummies can be a hard habit to break, and babies also
                        need help to manage them. Get tips for dummy use.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Where your newborn sleeps
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/baby-in-her-own-bed.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Sharing a room with your baby
                      </p>
                      <p>
                        A safe cot in your room is the safest place for your
                        baby to sleep for the first 6-12 months. This reduces
                        SUDI risk and makes it easier to settle baby.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/co-sleeping-with-your-baby.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Co-sleeping with your baby
                      </p>
                      <p>
                        Co-sleeping is when babies sleep on the same surface as
                        another person. It has risks and benefits. There are
                        ways to reduce risk and make co-sleeping safer.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/light-and-noise.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Light and noise: better baby and toddler sleep
                      </p>
                      <p>
                        Young children can sleep in light and noise. But if you
                        want to improve toddler and baby sleep, it can help to
                        reduce light and keep noise consistent.
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