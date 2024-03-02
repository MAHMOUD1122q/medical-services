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
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConnectingAndCommunicating() {
  const router = useRouter();
  return (
    <>
      <title> Newborns : connecting & communicating </title>
      <CommenSection
        title="Newborns: "
        sub=" connecting & communicating"
        subtitle=""
      />
      <div className=" py-12">
        <div className=" mx-20">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: bonding
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/attachment.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Bonding and attachment: newborns
                      </p>
                      <p>
                        Bonding with newborns happens when you respond
                        consistently to your baby with love, warmth and care.
                        Bonding and attachment are vital to baby development.
                      </p>
                    </div>
                  </div>
                  <div className="flex mr-5 cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/can-you-spoil-your-baby.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Can you spoil a baby?
                      </p>
                      <p>
                        Can you spoil a baby? No. Responding calmly and
                        consistently helps baby learn that the world is safe and
                        helps bonding – good for baby, good for you.
                      </p>
                    </div>
                  </div>
                  <div className="flex mr-5 cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/staying-positive.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Positive relationships for parents and children: how to
                        build them
                      </p>
                      <p>
                        Positive relationships between parents and children are
                        key to child development. These relationships are about
                        being in the moment, quality time and trust.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Bonding-with-newborns-and-babies-PIP-narrow.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Bonding with newborns and babies: in pictures
                      </p>
                      <p>
                        Bonding with babies is about smiling, cuddling, massage,
                        singing, talking, reading and playing. See how to bond
                        with your baby in our illustrated guide.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: communicating
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/talking-with-babies-toddlers.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Communication and talking: babies and toddlers
                      </p>
                      <p>
                        Children are ready to communicate from birth. Encourage
                        talking and communication by chatting, responding to
                        children’s interests, and tuning in to children.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/Baby-toddler-cues-thumbnail-wide.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Baby and toddler cues: in pictures
                      </p>
                      <p>
                        How do you know if your baby wants to play, wants a
                        break or needs to sleep? Use this illustrated guide to
                        baby tired signs and other baby cues.
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
                      <p className="text-black font-semibold mb-2">
                        Baby cues and baby body language: video guide
                      </p>
                      <p>
                        Baby body language gives cues to whether babies are
                        tired or hungry, want to play or need a break. Our guide
                        has videos so you can see baby cues in action.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/talking-and-listening.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Communicating well with babies and children: tips
                      </p>
                      <p>
                        Good communication is key to children’s relationships
                        and development. It’s about listening and talking in
                        ways that make children feel important and valued.
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
