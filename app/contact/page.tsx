"use client"
import {useState,useEffect } from 'react';
import { Mail, Map, Network, Phone } from "lucide-react";
import CommenSection from '@/components/commenSection';



export default function ContactUs() {
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
    <title>
      Contact
    </title>
    <CommenSection title="Get in" sub=" touch" subtitle="" />
    <div className=' my-12'>
      <div className=' mt-16 mx-6 md:mx-32'>
      <div className={` duration-700`}>
          <h3 className=" font-semibold text-3xl mb-6">
          Contact Information
          </h3>
          <div className=' flex justify-between flex-col md:flex-row'>
          <p className="flex mb-2 logo-grediant">
            <Map className=" mr-2"/> Cairo
          </p>
          <p className="flex mb-2 logo-grediant">
            <Phone className=" mr-2"/> 19080
          </p>
          <p className="flex mb-2 logo-grediant">
          <Mail className=" mr-2"/> Medical@gmail.com
          </p>
          <p className="flex mb-2 logo-grediant">
          <Network className=" mr-2"/>  Medical.com
          </p>
          </div>
        </div>
      <form className={ `mt-12 mx-[0] md:mx-[250px] duration-700`}>
          <h3 className=" text-3xl font-semibold mb-4"> Get In Touch</h3>
          <div className="my-2">
          <label className=" block mb-2" > Name </label>
          <input type="text" className=" border-[1px] w-[280px] md:w-[600px] h-10 outline-[#185a9d]" placeholder=" Your name "/>
          </div>
          <div className="my-2">
          <label  className=" block mb-2" > Email </label>
          <input type="text" className=" border-[1px] w-[280px] md:w-[600px] h-10 outline-[#185a9d]" placeholder=" Your email address "/>
          </div>
          <div className="my-2">
          <label  className=" block mb-2"> Subject </label>
          <input type="text"  className=" border-[1px] w-[280px] md:w-[600px] h-10 outline-[#185a9d]" placeholder=" Your subject of this message "/>
          </div>
          <div className="my-2">
          <label className=" block mb-2"> Message  </label>
          <textarea placeholder=" Say something about us" className=" border-[1px] w-[280px] md:w-[600px] h-28 resize-none outline-[#185a9d]"  />
          </div>
          <button className=" bg-red-600 py-2 w-[280px] mx-0 block text-white button-grediant duration-300 mt-2 "> Send Message </button>
        </form>
      </div>
    </div>
    </>
  )
}