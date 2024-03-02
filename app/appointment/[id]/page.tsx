/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useContext } from "react";
import CommenSection from "@/components/commenSection";
import { useParams, useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { GlobalContext } from "@/context";

const initialFormData = {
  name: "",
  mobile: "",
  email: "",
};
export default function ContactUs() {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();
  const searchParams = useSearchParams();
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);

  const [doctor, setDoctor] = useState([] as any);
  const time = searchParams.get("time");
  const day = searchParams.get("day");
  useEffect(() => {
    fetch(`http://localhost:4000/api/doctor/single-doctor/${id}`, {}).then(
      (response) => {
        response.json().then((data) => {
          setDoctor(data.data);
        });
      }
    );
  }, [id]);
  const createNewAppointment = async (e: any) => {
    setPageLevelLoader(true);
    e.preventDefault();
    const data = await fetch(`http://localhost:4000/api/appointment/add-appointment/${id}?time=${time}&day=${day}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    });
    const finalData = await data.json();
    if (finalData.success) {
      toast({
        variant: "success",
        title: finalData.message,
      });
      setPageLevelLoader(false);
    } else {
      setPageLevelLoader(false);
      toast({
        variant: "destructive",
        title: finalData.message,
      });
    }
  };
  return (
    <>
      <title>Appointment</title>
      <CommenSection title="Make" sub=" Appointment" subtitle="" />
      <div className=" my-12">
        <div className=" flex mt-16 mx-6 md:mx-32">
          <div className=" bg-slate-50 shadow-lg h-full basis-2/4 p-6 border-sky-600 border-[1px]">
            <div className="flex justify-between relative ">
              <img
                src={doctor.img}
                alt="doctor image"
                className=" w-32 h-32 top-[-50px] absolute rounded-full"
                draggable="false"
              />
              <div className=" ml-36">
                <p>{doctor.name}</p>
                <p>{doctor.specialization}</p>
              </div>
            </div>
            <div className=" mt-10 bg-slate-200 p-3">
              <p>
                the Appointment in {day} as {time}, Scheduled Entry
              </p>
            </div>
          </div>
          <div className="bg-slate-50 shadow-lg ml-8  basis-2/4 p-6 border-sky-600 border-[1px]">
            <form onSubmit={createNewAppointment}>
              <label htmlFor="">Name of the patient</label>
              <input
                type="text"
                className=" bg-slate-200/50 mb-4 block w-full outline-none border-[1px] rounded-md h-9 px-3"
                name="name"
                onChange={(e: any) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
              <label htmlFor="">Mobile Number</label>
              <input
                type="number"
                className=" bg-slate-200/50 mb-4 block w-full outline-none border-[1px] rounded-md h-9 px-3"
                name="mobile"
                onChange={(e: any) =>
                  setFormData({
                    ...formData,
                    mobile: e.target.value,
                  })
                }
              />
              <label htmlFor="">Email</label>
              <input
                type="email"
                className=" bg-slate-200/50 mb-4 block w-full outline-none border-[1px] rounded-md h-9 px-3"
                name="email"
                onChange={(e: any) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
              <button className=" w-full bg-sky-600 text-white mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300">
                book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
