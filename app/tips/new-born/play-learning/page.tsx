"use client";
import CommenSection from "@/components/commenSection";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeHelp, Bed, Brain, Shield, SkipBack, SmileIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlayLearning() {
  const router = useRouter();
  return (
    <>
      <title> Newborns : play & learning </title>
      <CommenSection title="Newborns: " sub=" play & learning" subtitle="" />
      <div className=" py-12">
        <div className=" mx-20">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: play ideas
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/why-play-is-important.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Why play is important
                      </p>
                      <p>
                        Play is more than just fun for babies and children. It’s
                        how they learn and develop. Playing with your child is
                        one of the most important things you can do. Article
                        available in: Arabic, Dari, Dinka, Hakha Chin, Karen,
                        Persian, Simplified Chinese, Swahili, Tamil, Vietnamese.
                      </p>
                    </div>
                  </div>
                  <div className="flex mr-5 mb-8 cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/play-ideas-newborn-babies.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Playing with newborns
                      </p>
                      <p>
                        Making faces, singing nursery rhymes and blowing
                        raspberries are great play ideas for newborn babies. The
                        key thing is interacting with your baby. Read more.
                      </p>
                    </div>
                  </div>
                  <div className="flex mr-5 mb-8 cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Letting-your-child-lead-play.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Letting your child lead play: activities for children
                        0-6 years
                      </p>
                      <p>
                        Child-led play is following your child’s lead and
                        responding to what they say or do. It’s good because
                        your child learns most when they’re engaged in play.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Movement-play-newborns.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Movement and play: newborns
                      </p>
                      <p>
                        Through play, newborns learn what their bodies can do
                        and practise moving different body parts. Get play ideas
                        to develop newborn movement and motor skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/newborn-play-ideas-cognitive-development.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Thinking and play: newborns
                      </p>
                      <p>
                        Babies are born ready to learn about themselves, their
                        families and their world. Play ideas for cognitive
                        development include talking, reading and singing.
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 mr-5 cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Tummy-time-for-babies-wide.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className="text-black font-semibold mb-2">
                        Tummy time for babies: in pictures
                      </p>
                      <p>
                        This parenting guide in pictures shows why tummy time is
                        important, how to do tummy time with a young baby, and
                        how to make sure baby enjoys tummy time.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: learning ideas
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/learning-baby-preschool-1.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Learning in the baby to preschool years
                      </p>
                      <p>
                        Right from birth, children learn by playing and
                        exploring. They learn best by actively engaging with
                        their environments and trying many different activities.
                      </p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer mr-5 hover:scale-[1.02] duration-500">
                    <img
                      src="/developing-early-numeracy-skills.jpg"
                      alt=""
                      className=" w-64 h-44 rounded-xl"
                    />
                    <div className=" w-64 ml-4 items-center">
                      <p className=" text-black font-semibold mb-2">
                        Early numeracy skills: how to develop them
                      </p>
                      <p>
                        Children develop maths and numeracy skills from birth.
                        Build early numeracy skills by counting, sorting,
                        looking at shapes, singing number songs and more.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="h-20 text-2xl px-5">
                Newborns: media & technology
              </AccordionTrigger>
              <AccordionContent className=" w-full">
                <div className=" flex flex-wrap">
                  <div className="flex mb-8 mr-5 items-center cursor-pointer hover:scale-[1.02] duration-500">
                    <img
                      src="/Healthy-screen-time-babies-wide.jpg"
                      alt=""
                      className=" w-64  h-44 rounded-xl"
                    />
                    <div className="w-64 ml-4">
                      <p className=" text-black font-semibold mb-2">
                        Screen time and digital technology use: babies and
                        toddlers
                      </p>
                      <p>
                        For children aged 0-2 years, most types of screen time
                        are best saved until they’re older. Connecting with
                        family and friends using video chat can be fun.
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
