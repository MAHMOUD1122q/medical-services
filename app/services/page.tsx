import CommenSection from "@/components/commenSection"

import bestIcon from '@/assets/doctor.png'
import bestIcon2 from '@/assets/document.png'
import bestIcon3 from '@/assets/stethoscope.png'
import bestIcon4 from '@/assets/laboratory.png'
import bestIcon5 from '@/assets/team.png'
import bestIcon6 from '@/assets/plus.png'
import Image from "next/image"


export default function Services() {
  return (
    <>
    <title>Services</title>
    <CommenSection title="Our " sub="Services" subtitle=""/>
    <div className="py-16">
      <div className=' flex md:justify-between justify-center flex-wrap ml-0 mr-0 md:mr-20 md:ml-28 overflow-hidden'>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src={bestIcon} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Diagnostics and emergency treatment</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src={bestIcon2} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Home medical appointments</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src={bestIcon3} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Pharmacy refunded from hospital</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src={bestIcon5} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Long term medical care in a hospital</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src={bestIcon4} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> A specialized laboratory research</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src={bestIcon6} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Medical transport to the hospital</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
      </div>
    </div>
    </>
  )
}
