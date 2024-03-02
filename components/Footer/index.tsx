"use client"
import Image from "next/image";

import {Phone , Mail, Map } from 'lucide-react';
import { useRouter } from "next/navigation";




export default function Footer() {
  const date = new Date().getFullYear();
  const router = useRouter();

  return (
    <>
      <footer className=" bg-foot">
        <div className="md:flex md:justify-between md:flex-row md:items-center mx-4 md:mx-16 py-6">
        <div className="logo text-center md:text-left">
          <Image src="/logo.png" alt="logo" width={200} height={200}/>
        </div>
          <nav className=" text-white list-none">
            <h3 className=" font-bold mb-4"> Useful Links </h3>
            <li className=" mb-2 cursor-pointer hover:text-[#185a9d] duration-500" onClick={() => router.push("/")}> Home </li>
            <li className=" mb-2 cursor-pointer hover:text-[#185a9d] duration-500" onClick={() => router.push("/doctors")}>Doctors</li>
            <li className=" mb-2 cursor-pointer hover:text-[#185a9d] duration-500" onClick={() => router.push("/services")}>Services</li>
            <li className=" mb-2 cursor-pointer hover:text-[#185a9d] duration-500"onClick={() => router.push("/blog")}>Blog</li>
            <li className=" mb-2 cursor-pointer hover:text-[#185a9d] duration-500" onClick={() => router.push("/tips")}>Tips for the mother</li>
            <li className=" mb-2 cursor-pointer hover:text-[#185a9d] duration-500" onClick={() => router.push("/contact")}>Contact</li>
          </nav>
          <nav className=" text-white list-none">
            <h3 className=" font-bold mb-4"> Contact Us </h3>
            <li className="flex">  19080 <Phone className=" mr-1"/> </li>
            <li className="flex">  medical@gmail.com <Mail className=" mr-1"/> </li>
            <li className="flex"> Cairo <Map className=" mr-1"/></li>
          </nav>
        </div>
        <div className="flex justify-center py-4 bg-copy text-white">
          Copyright &copy; {date} <span className=" text-[#185a9d]"> Medical </span> All rights reserved
        </div>
      </footer>
    </>
  )
}