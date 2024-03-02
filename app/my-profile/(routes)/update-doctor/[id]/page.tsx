"use client";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { toast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import TileComponent from "@/components/TileComponent";
import { times } from "@/assets/data";

const initialFormData = {
  name: "",
  specialization: "",
  schedule: {},
};

export default function UpdateDoctors() {
  const [formData, setFormData] = useState(initialFormData) as any;
  const { id } = useParams();
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:4000/api/doctor/single-doctor/${id}`, {}).then(
      (response) => {
        response.json().then((data) => {
          setFormData(data.data);
        });
      }
    );
  }, [id]);
  const createNewDoctor = async (e: any) => {
    setPageLevelLoader(true);
    e.preventDefault();
    const data = await fetch(
      `http://localhost:4000/api/doctor/update-doctor/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      }
    );
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
    <div className=" border-[1px] w-[800px] mb-5 p-8">
      <h3 className=" mb-8 text-2xl font-bold ">Add Doctors</h3>
      <div className=" border-b-[1px] mt-4">
        <form onSubmit={createNewDoctor}>
          <div className="">
            <label htmlFor="">Add name</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="name"
              value={formData.name}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="">
            <label htmlFor="">Add specialization</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="specialization"
              value={formData.specialization}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  specialization: e.target.value,
                })
              }
            />
          </div>
          <Dialog>
            <DialogTrigger>add schedule</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>add schedule</DialogTitle>
                <DialogDescription>
                  <div className="py-2">
                    <p className=" text-lg">saturday</p>
                    <TileComponent
                      selected={formData.schedule.saturday}
                      onClick={''}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">sunday</p>
                    <TileComponent
                      selected={formData.schedule.sunday}
                      onClick={''}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">monday</p>
                    <TileComponent
                      selected={formData.schedule.monday}
                      onClick={''}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Tuesday</p>
                    <TileComponent
                      selected={formData.schedule.tuesday}
                      onClick={''}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Wednesday</p>
                    <TileComponent
                      selected={formData.schedule.wednesday}
                      onClick={''}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Thursday</p>
                    <TileComponent
                      selected={formData.schedule.thursday}
                      onClick={''}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Friday</p>
                    <TileComponent
                      selected={formData.schedule.friday}
                      onClick={""}
                      data={times}
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <button
            type="submit"
            className=" w-full bg-sky-600 text-white px-[250px] mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300"
          >
            {pageLevelLoader ? (
              <ComponentLevelLoader
                text={"updateing Doctor"}
                color={"#ffffff"}
                loading={pageLevelLoader}
                size="10px"
              />
            ) : (
              "update Doctor"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
