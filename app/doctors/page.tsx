"use client"

import CommenSection from "@/components/commenSection";
import { Facebook, Instagram, Linkedin, Stethoscope, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import StaffImage from "@/assets/staff-4.jpg"
import StaffImage2 from "@/assets/staff-3.jpg"
import StaffImage3 from "@/assets/staff-2.jpg"
import StaffImage4 from "@/assets/staff-1.jpg"
import Image from "next/image";

export default function Doctors() {
  const [show,setShow] = useState("hide-left")
  const [zoom,setZoom] = useState("zoomout")
  useEffect(() => {
    return () => {
        setZoom("zommin")
        setShow("show")
    };
  }, []);
  return (
    <>
    <title> Doctors </title>
      <CommenSection title=" Well Experienced" sub=" Doctors" subtitle="" />
      <div className="py-16">
        <div className=' text-center w-full'>
          <h3 className=' text-4xl font-semibold mb-4'> Well Experienced Doctors</h3>
          <p className=' w-full md:w-[430px]  mx-auto text-[#666666] mb-20'> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
        <div className="flex mx-0 md:mx-20 md:justify-between justify-center flex-wrap">
          <div className=" text-center shadow-lg rounded overflow-hidden mb-4 md:mb-0">
            <Image src={StaffImage} alt="img" className=" w-64 h-[270px]"/>
            <span className="text-[#666666] text-sm mt-5 block">Dental Hygienist</span>
            <h3 className=" text-xl mb-5">Dr. Beatrice Prior</h3>
            <div className=" flex justify-center mb-5">
              <Facebook className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Twitter className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Linkedin className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Instagram className="text-[#cccccc] h-5 cursor-pointer"/>
            </div>
          </div>
          <div className=" text-center shadow-lg rounded overflow-hidden mb-4 md:mb-0">
            <Image src={StaffImage2} alt="img" className="  w-64 h-[270px]"/>
            <span className="text-[#666666] text-sm mt-5 block">Dental Hygienist</span>
            <h3 className=" text-xl mb-5">Dr. Beatrice Prior</h3>
            <div className=" flex justify-center mb-5">
              <Facebook className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Twitter className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Linkedin className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Instagram className="text-[#cccccc] h-5 cursor-pointer"/>
            </div>
          </div>
          <div className=" text-center shadow-lg rounded overflow-hidden mb-4 md:mb-0">
            <Image src={StaffImage3} alt="img" className="  w-64 h-[270px]"/>
            <span className="text-[#666666] text-sm mt-5 block">Dental Hygienist</span>
            <h3 className=" text-xl mb-5">Dr. Beatrice Prior</h3>
            <div className=" flex justify-center mb-5">
              <Facebook className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Twitter className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Linkedin className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Instagram className="text-[#cccccc] h-5 cursor-pointer"/>
            </div>
          </div>
          <div className=" text-center shadow-lg rounded overflow-hidden mb-4 md:mb-0">
            <Image src={StaffImage4} alt="img" className=" w-64 h-[270px]"/>
            <span className="text-[#666666] text-sm mt-5 block">Dental Hygienist</span>
            <h3 className=" text-xl mb-5">Dr. Beatrice Prior</h3>
            <div className=" flex justify-center mb-5">
              <Facebook className="text-[#cccccc] mr-4 h-5cursor-pointer"/>
              <Twitter className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Linkedin className="text-[#cccccc] mr-4 h-5  cursor-pointer"/>
              <Instagram className="text-[#cccccc] h-5 cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
