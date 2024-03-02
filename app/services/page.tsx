import CommenSection from "@/components/commenSection"

import Image from "next/image"

export default function Services() {
  return (
    <>
    <title>Services</title>
    <CommenSection title="Our " sub="Services" subtitle=""/>
    <div className="py-16">
      <div className=' flex md:justify-between justify-center flex-wrap ml-0 mr-0 md:mr-20 md:ml-28 overflow-hidden'>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src='/doctor.png' width={56} height={56} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Diagnostics and emergency treatment</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src='/document.png' width={56} height={56} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> medical appointments</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src='/stethoscope.png' width={56} height={56} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Pharmacy</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src='/team.png' width={56} height={56} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Long term medical care in a hospital</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src='/laboratory.png' width={56} height={56} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> A specialized laboratory research</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
        <div className="shadow-xl rounded-lg p-6 basis-[31%] mb-6 mx-2 fadeInRight">
          <Image src='/plus.png' width={56} height={56} alt="icon" className=" w-14 h-14 mb-6"/>
          <h3 className=" font-semibold text-xl mb-4"> Medical transport to the hospital</h3>
          <p className="text-[#666666] w-64 mb-4"> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
        </div>
      </div>
    </div>
    </>
  )
}
