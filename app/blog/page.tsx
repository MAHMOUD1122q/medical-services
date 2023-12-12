'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import img from "@/assets/19836.jpg"
import {useState } from 'react';
import CommenSection from '@/components/commenSection';
import blogimage from '@/assets/blog-1.jpg'
import blogimage2 from '@/assets/blog-2.jpg'
import blogimage3 from '@/assets/blog-3.jpg'


export default function Specialties() {
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
    <title> Our Blog  </title>
    <CommenSection title=" Read Our" sub="Blog" subtitle=""/>
    <div className="py-16">
          <div className='flex justify-between flex-wrap flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28'>
            <div className=' mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn'>
              <Image src={blogimage} alt='image' className=' w-full h-56'/>
              <div className=' flex justify-between px-6 pt-4 pb-2'>
                <span className='logo-grediant'> Admin </span>
                <span className='text-[#666666]'> june 8 2017 </span>
              </div>
              <div className=' px-6'>
              <h3 className=' font-semibold text-2xl mt-2 mb-6'>Here is why yoga is best for your health</h3>
              <p className=' text-[#666666] mb-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <button className=' flex mb-12 logo-grediant items-center text-lg'> Read more <span className=' text-3xl'> &rarr;</span> </button>
              </div>
            </div>
            <div className=' mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn'>
              <Image src={blogimage2} alt='image' className=' w-full h-56'/>
              <div className=' flex justify-between px-6 pt-4 pb-2'>
                <span className='logo-grediant'> Admin </span>
                <span className='text-[#666666]'> june 8 2017 </span>
              </div>
              <div className=' px-6'>
              <h3 className=' font-semibold text-2xl mt-2 mb-6'>live better get to know your medical technology</h3>
              <p className=' text-[#666666] mb-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <button className=' flex mb-12 logo-grediant items-center text-lg'> Read more <span className=' text-3xl'> &rarr;</span> </button>
              </div>
            </div>
            <div className=' mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn'>
              <Image src={blogimage3} alt='image' className=' w-full h-56'/>
              <div className=' flex justify-between px-6 pt-4 pb-2'>
                <span className='logo-grediant'> Admin </span>
                <span className='text-[#666666]'> june 8 2017 </span>
              </div>
              <div className=' px-6'>
              <h3 className=' font-semibold text-2xl mt-2 mb-6'>Eating apple is the source of energy</h3>
              <p className=' text-[#666666] mb-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <button className=' flex mb-12 logo-grediant items-center text-lg'> Read more <span className=' text-3xl'> &rarr;</span> </button>
              </div>
            </div>
            <div className=' mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn'>
              <Image src={blogimage} alt='image' className=' w-full h-56'/>
              <div className=' flex justify-between px-6 pt-4 pb-2'>
                <span className='logo-grediant'> Admin </span>
                <span className='text-[#666666]'> june 8 2017 </span>
              </div>
              <div className=' px-6'>
              <h3 className=' font-semibold text-2xl mt-2 mb-6'>Here is why yoga is best for your health</h3>
              <p className=' text-[#666666] mb-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <button className=' flex mb-12 logo-grediant items-center text-lg'> Read more <span className=' text-3xl'> &rarr;</span> </button>
              </div>
            </div>
            <div className=' mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn'>
              <Image src={blogimage2} alt='image' className=' w-full h-56'/>
              <div className=' flex justify-between px-6 pt-4 pb-2'>
                <span className='logo-grediant'> Admin </span>
                <span className='text-[#666666]'> june 8 2017 </span>
              </div>
              <div className=' px-6'>
              <h3 className=' font-semibold text-2xl mt-2 mb-6'>Here is why yoga is best for your health</h3>
              <p className=' text-[#666666] mb-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <button className=' flex mb-12 logo-grediant items-center text-lg'> Read more <span className=' text-3xl'> &rarr;</span> </button>
              </div>
            </div>
            <div className=' mx-4 shadow-xl rounded-lg overflow-hidden basis-[30%] mb-12 fadeIn'>
              <Image src={blogimage3} alt='image' className=' w-full h-56'/>
              <div className=' flex justify-between px-6 pt-4 pb-2'>
                <span className='logo-grediant'> Admin </span>
                <span className='text-[#666666]'> june 8 2017 </span>
              </div>
              <div className=' px-6'>
              <h3 className=' font-semibold text-2xl mt-2 mb-6'>Here is why yoga is best for your health</h3>
              <p className=' text-[#666666] mb-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <button className=' flex mb-12 logo-grediant items-center text-lg'> Read more <span className=' text-3xl'> &rarr;</span> </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
