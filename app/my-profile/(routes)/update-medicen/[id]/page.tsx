/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useContext, useEffect, useState } from "react";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { toast } from "@/components/ui/use-toast";
import { useParams } from "next/navigation";

const initialFormData = {
  title: "",
  price: 0,
  link: "",
  img: "",
};

export default function updateMedicen() {
  const [formData, setFormData] = useState(initialFormData);
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/medicen/single-medicen/${id}`, {}).then(
      (response) => {
        response.json().then((data) => {
          setFormData(data.data);
        });
      }
    );
  }, [id]);
  const createNewmedicen = async (e: any) => {
    setPageLevelLoader(true);
    e.preventDefault();
    const data = await fetch(
      `http://localhost:4000/api/medicen/update-medicen/${id}`,
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
      <h3 className=" mb-8 text-2xl font-bold ">Add Medicen</h3>
      <div className=" border-b-[1px] mt-4">
        <form action="" onSubmit={createNewmedicen}>
          <div className=" mb-6">
            <label htmlFor="">Add title</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="title"
              value={formData.title}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div className=" mb-6">
            <label htmlFor="">Add link</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="link"
              value={formData.link}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  link: e.target.value,
                })
              }
            />
          </div>
          <div className=" mb-6">
            <label htmlFor="">Add Price</label>
            <input
              type="Number"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="price"
              value={formData.price}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  price: e.target.value,
                })
              }
            />
          </div>
          <button
            type="submit"
            className=" w-full bg-sky-600 text-white px-[250px] mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300"
          >
            {pageLevelLoader ? (
              <ComponentLevelLoader
                text={"Adding Medicen"}
                color={"#ffffff"}
                loading={pageLevelLoader}
                size="10px"
              />
            ) : (
              "updating Medicen"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
