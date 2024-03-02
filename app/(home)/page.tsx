"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

import { sliderImages } from "@/assets/data";
import SrvBox from "@/components/SrvBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState("hide");
  const [fade, setFade] = useState("zoomout");
  const [fadeinRight, setFadeInRight] = useState("");
  const [fadeInTopLeft, setFadeInTopLeft] = useState("");
  const [fadeIn, setFadeIn] = useState("");
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fade = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setShow("show");
      } else {
        setShow("hide");
      }
    };
    const fadeInRight = () => {
      if (
        document.body.scrollTop > 850 ||
        document.documentElement.scrollTop > 850
      ) {
        setFadeInRight("fadeInRight");
        setFadeInTopLeft("fadeInTopLeft");
      } else {
        setFadeInTopLeft("");
        setFadeInRight("");
      }
    };
    const zoom = () => {
      if (
        document.body.scrollTop > 1800 ||
        document.documentElement.scrollTop > 1800
      ) {
        setFade("zoomin");
      } else {
        setFade("zoomout");
      }
    };
    const fadeIn = () => {
      if (
        document.body.scrollTop > 2500 ||
        document.documentElement.scrollTop > 2500
      ) {
        setFadeIn("fadeIn");
      } else {
        setFadeIn("");
      }
    };
    window.addEventListener("scroll", fade);
    window.addEventListener("scroll", fadeInRight);
    window.addEventListener("scroll", fadeIn);
    window.addEventListener("scroll", zoom);
    return () => {
      window.removeEventListener("scroll", fade);
      window.removeEventListener("scroll", fadeInRight);
      window.removeEventListener("scroll", fadeIn);
      window.removeEventListener("scroll", zoom);
    };
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/api/blog/all-blog?limit=3`, {}).then(
      (response) => {
        response.json().then((data) => {
          setBlogs(data.data);
        });
      }
    );
  }, []);

  return (
    <>
      <title> Home </title>
      <meta name="description" content="halooooasdasdas" />
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {sliderImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Image
                src={item.url}
                alt="image"
                width={1000}
                height={650}
                className="md:ml-[345px] w-[1000px] h-[650px]"
              />
            </div>
            <div>
              <aside className="shadow-side absolute left-0 top-[90px] md:top-[90px] h-[580px] w-full z-10 overflow-hidden">
                <div className="absolute z-50 left-20 top-[60px] md:top-[140px]">
                  <h3
                    className={` font-bold text-2xl md:text-5xl w-[300px] md:w-[650px] leading-[1.3] duration-700 bounceIn`}
                  >
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-xl duration-500 bounceIn`}>
                    We provide a high level of medical service to ensure your
                    comfort 
                  </p>
                  <button
                    className={` px-12 py-3 text-white font-bold mt-6 rounded-2xl button-grediant duration-500 bounceIn `}
                    onClick={() => router.push("/symptoms-introduction")}
                  >
                    Check your symptoms 
                  </button>
                </div>
              </aside>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ======================== ending Landing ============================ */}
      {/* ======================== Starting Services ============================ */}
      <div className="py-16 overflow-hidden relative">
        <div className=" flex mx-14  md:mx-14  lg:mx-0 xl:mx-28 flex-wrap relative flex-col md:flex-row">
          <SrvBox
            icon={
              <Image
                src="/Services.png"
                alt="img"
                width={80}
                height={35}
                className=" p-4"
              />
            }
            title=" Diagnostics and emergency treatment "
            size="defualt"
            visible={show}
            margin="my-6"
          />
          <SrvBox
            icon={
              <Image
                src="/Services2.png"
                alt="img"
                width={80}
                height={35}
                className=" p-4"
              />
            }
            title=" medical appointments "
            size="defualt"
            visible={show}
            margin="my-6"
          />
          <SrvBox
            icon={
              <Image
                src="/Services3.png"
                alt="img"
                width={80}
                height={35}
                className=" p-4"
              />
            }
            title=" Pharmacy "
            size="defualt"
            visible={show}
            margin="my-6"
          />
          <h3
            className={`font-bold text-3xl mt-16 mr-4 ${show} duration-700 w-full mb-8 md:w-[380px] ml-2`}
          >
            Comprehensive services for our patients
          </h3>
          <SrvBox
            icon={
              <Image
                src="/Services4.png"
                alt="img"
                width={80}
                height={35}
                className=" p-4"
              />
            }
            title=" Long term medical care in a hospital "
            size="defualt"
            visible={show}
            margin="my-6"
          />
          <SrvBox
            icon={<p className="logo-grediant py-4 px-6 ">MISSION</p>}
            title=" The correct diagnosis is half the battle "
            size="service"
            visible={show}
            margin="my-0"
          />
          <SrvBox
            icon={<p className="logo-grediant py-4 px-6 ">VISION</p>}
            title=" We refund 50% of the cost of medicines "
            size="service-vision"
            visible={show}
            margin="my-0"
          />
          <SrvBox
            icon={
              <Image
                src="/Services5.png"
                alt="img"
                width={80}
                height={35}
                className=" p-4"
              />
            }
            title=" A specialized laboratory research"
            size="defualt"
            visible={show}
            margin="my-6"
          />
          <SrvBox
            icon={
              <Image
                src="/Services6.png"
                alt="img"
                width={80}
                height={35}
                className=" p-4"
              />
            }
            title=" Medical transport to the hospital"
            size="defualt"
            visible={show}
            margin="my-6"
          />
        </div>
        <div
          className={`absolute bottom-0 right-40 md:bottom-24 lg:right-0 xl:right-40 ${show} duration-700 hidden lg:block`}
        >
          <p className=" w-[600px] font-bold text-[#666666]">
             
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. 
          </p>
          <button className=" button-grediant py-2 px-12 rounded-xl mt-2 duration-500 text-white font-bold">
            View Services 
          </button>
        </div>
      </div>
      {/* ======================== ending Services ============================ */}
      {/* ======================== Starting About ============================ */}
      <div className="py-16 overflow-hidden">
        <div className=" flex justify-between mx-20">
          <div className={`mt-20 ${fadeInTopLeft}`}>
            <h3 className=" font-semibold text-3xl mb-4">About Medical</h3>
            <p className="mb-4 text-[#666666] w-full">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full lg:w-[600px]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="">Our Mission</AccordionTrigger>
                <AccordionContent className=" w-full">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className=" w-full">
                  Our Vission
                </AccordionTrigger>
                <AccordionContent className=" w-full">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. Separated they live in
                  Bookmarksgrove right Separated they live in Bookmarksgrove
                  right
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className=" w-full">
                  Why choose us
                </AccordionTrigger>
                <AccordionContent className=" w-full">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Image
              src='/about.png'
              alt="img"
              width={1300}
              height={500}
              className={`hidden xl:flex ${fadeinRight}`}
            />
          </div>
        </div>
      </div>
      {/* ======================== ending About ============================ */}
      {/* ======================== Staring What us the best ============================ */}
      <div className="py-16">
        <div className=" flex w-full relative">
          <div>
            <Image
              src='/bestSection.jpg'
              alt="img"
              width={700}
              height={1150}
              className="w-[700px] h-[1150px] md:h-[700px]"
            />
          </div>
          <div className="grediant w-1/2"></div>
          <div
            className={`absolute right-6 bg-white top-10 p-10 flex flex-wrap w-[330px] flex-col md:flex-row md:w-[650px] md:right-32 ${fade} duration-700`}
          >
            <h3 className=" mb-6 md:mb-20  text-4xl font-semibold">
              What makes us best?
            </h3>
            <div className=" flex mb-6 md:mb-16 flex-col md:flex-row ">
              <Image src='/doctor.png' width={48} height={48} alt="img" className=" w-12 h-12 mr-4" />
              <div>
                <span className=" font-semibold mb-4 block text-xl">
                  Qualified Doctors
                </span>
                <p className=" w-52 text-[#666666] leading-relaxed ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className=" flex ml-0 md:ml-4 mb-6 md:mb-16 flex-col md:flex-row ">
              <Image src='/document.png' width={48} height={48} alt="img" className=" w-12 h-12 mr-4" />
              <div>
                <span className=" font-semibold mb-4 block text-xl">
                  Online Enrollment
                </span>
                <p className=" w-52 text-[#666666] leading-relaxed">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className=" flex mb-6 md:mb-16 flex-col md:flex-row ">
              <Image src='/stethoscope.png' width={48} height={48} className=" w-12 h-12 mr-4" alt="img" />
              <div>
                <span className=" font-semibold mb-4 block text-xl">
                  Free Consultation
                </span>
                <p className=" w-52 text-[#666666] leading-relaxed">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className=" flex ml-0 md:ml-4 mb-6 md:mb-16 flex-col md:flex-row ">
              <Image src='/laboratory.png' width={48} height={48} className=" w-12 h-12 mr-4" alt="img" />
              <div>
                <span className=" font-semibold mb-4 block text-xl">
                  Modern Facilities
                </span>
                <p className=" w-52 text-[#666666] leading-relaxed">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ======================== Ending What us the best ============================ */}
      {/* ======================== Starting blog ============================ */}
      <div className="py-16">
        <div className=" text-center w-full">
          <h3 className=" text-4xl font-semibold mb-4">Recent blog</h3>
          <p className=" w-[350px] md:w-[430px] mx-auto text-[#666666] mb-20">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
        <div className=" flex justify-between flex-col md:flex-row ml-0 mr-0 md:mr-20 md:ml-28">
          {Blogs.map((blog: any) => (
            <>
              <div
                className={`mx-4 shadow-xl rounded-lg basis-[30%] mb-12 overflow-hidden ${fadeIn} cursor-pointer`}
                onClick={() => router.push(`/blog/${blog._id}`)}
              >
                <img src={blog.img} alt="image" className=" w-full h-56" />
                <div className=" flex justify-between px-6 pt-4 pb-2">
                  <span className="logo-grediant"> Admin </span>
                  <span className="text-[#666666]"> {blog.createdAt} </span>
                </div>
                <div className=" px-6">
                  <h3 className=" font-semibold text-2xl mt-2 mb-6">
                    {blog.title} 
                  </h3>
                  <p
                    className=" text-[#666666] mb-4 h-10 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />
                  <button className=" flex mb-12 logo-grediant items-center text-lg headShake">
                    Read more <span className=" text-3xl "> &rarr;</span> 
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* ======================== Ending blog ============================ */}
    </>
  );
}
