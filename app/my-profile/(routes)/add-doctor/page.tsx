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

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/firebase/index";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { toast } from "@/components/ui/use-toast";
import TileComponent from "@/components/TileComponent";
import { times } from "@/assets/data";

const initialFormData = {
  saturday: [],
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
};

export default function AddDoctors() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [day, setDay] = useState(initialFormData);
  const [inputs, setInputs] = useState({} as any);
  const [imgPerc, setImgPerc] = useState(0);
  const [imagesPreview, setImagesPreview] = useState("");
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);

  useEffect(() => {
    img && uploadFile(img, "img");
  }, [img]);

  const uploadFile = (file: any, fileType: any) => {
    const storage = getStorage(app);
    const folder = fileType === "img" ? "doctor/" : "all/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "img" ? setImgPerc(Math.round(progress)) : null;
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL - ", downloadURL);
          setInputs((prev: any) => {
            return {
              ...prev,
              [fileType]: downloadURL,
            };
          });
        });
      }
    );
  };
  function handleTileClickSaturday(getCurrentItem: any) {
    let cpysaturday = [...day.saturday] as any;
    const index = cpysaturday.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpysaturday.push(getCurrentItem);
    } else {
      cpysaturday = cpysaturday.filter(
        (item: any) => item.id !== getCurrentItem.id
      );
    }
    setDay({
      ...day,
      saturday: cpysaturday,
    });
  }
  function handleTileClickSunday(getCurrentItem: any) {
    let cpySunday = [...day.sunday] as any;
    const index = cpySunday.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpySunday.push(getCurrentItem);
    } else {
      cpySunday = cpySunday.filter(
        (item: any) => item.id !== getCurrentItem.id
      );
    }
    setDay({
      ...day,
      sunday: cpySunday,
    });
  }
  function handleTileClickMonday(getCurrentItem: any) {
    let cpyMonday = [...day.monday] as any;
    const index = cpyMonday.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyMonday.push(getCurrentItem);
    } else {
      cpyMonday = cpyMonday.filter(
        (item: any) => item.id !== getCurrentItem.id
      );
    }
    setDay({
      ...day,
      monday: cpyMonday,
    });
  }
  function handleTileClickTuesday(getCurrentItem: any) {
    let cpyTuesday = [...day.tuesday] as any;
    const index = cpyTuesday.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyTuesday.push(getCurrentItem);
    } else {
      cpyTuesday = cpyTuesday.filter(
        (item: any) => item.id !== getCurrentItem.id
      );
    }
    setDay({
      ...day,
      tuesday: cpyTuesday,
    });
  }
  function handleTileClickWednesday(getCurrentItem: any) {
    let cpyWednesday = [...day.wednesday] as any;
    const index = cpyWednesday.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyWednesday.push(getCurrentItem);
    } else {
      cpyWednesday = cpyWednesday.filter(
        (item: any) => item.id !== getCurrentItem.id
      );
    }
    setDay({
      ...day,
      wednesday: cpyWednesday,
    });
  }
  function handleTileClickThursday(getCurrentItem: any) {
    let cpyThursday = [...day.thursday] as any;
    const index = cpyThursday.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyThursday.push(getCurrentItem);
    } else {
      cpyThursday = cpyThursday.filter(
        (item: any) => item.id !== getCurrentItem.id
      );
    }
    setDay({
      ...day,
      thursday: cpyThursday,
    });
  }
  function handleTileClickFriday(getCurrentItem: any) {
    let cpyFriday = [...day.friday] as any;
    const index = cpyFriday.findIndex(
      (item: any) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cpyFriday.push(getCurrentItem);
    } else {
      cpyFriday = cpyFriday.filter(
        (item: any) => item.id !== getCurrentItem.id
      );
    }
    setDay({
      ...day,
      friday: cpyFriday,
    });
  }
  const createNewDoctor = async (e: any) => {
    setPageLevelLoader(true);
    e.preventDefault();
    const data = await fetch("http://localhost:4000/api/doctor/add-doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        specialization,
        img: inputs.img,
        schedule: day,
      }),
    });
    const finalData = await data.json();
    if (finalData.success) {
      toast({
        variant: "success",
        title: finalData.message,
      });
      setPageLevelLoader(false);
      setTimeout(() => {
        history.go(0);
      }, 1000);
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
          <h3> Add image</h3>
          <div className="flex items-center justify-center w-full mb-5 mt-3">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                accept="image/*"
                id="dropzone-file"
                type="file"
                className="hidden"
                name="img"
                onChange={(e: any) => setImg((prev: any) => e.target.files[0])}
              />
            </label>
          </div>
          <div className="grid grid-cols-6 gap-2 my-5">
            {imgPerc > 0 && "Uploading: " + imgPerc + "%"}
            <Image
              src={imagesPreview}
              alt="Preview"
              className={`col-span-1 object-contain shadow rounded border-2 border-gray p-2 h-full w-full ${
                imagesPreview === "" ? "hidden" : null
              }`}
              width={50}
              height={50}
            />
          </div>
          <div className="">
            <label htmlFor="">Add name</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="">Add specialization</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>
          <Dialog>
            <DialogTrigger className=" mt-5 bg-sky-600 text-white py-2 px-4 rounded-xl hover:bg-sky-700 duration-300">
              add schedule
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>add schedule</DialogTitle>
                <DialogDescription>
                  <div className="py-2">
                    <p className=" text-lg">saturday</p>
                    <TileComponent
                      selected={day.saturday}
                      onClick={handleTileClickSaturday}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">sunday</p>
                    <TileComponent
                      selected={day.sunday}
                      onClick={handleTileClickSunday}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">monday</p>
                    <TileComponent
                      selected={day.monday}
                      onClick={handleTileClickMonday}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Tuesday</p>
                    <TileComponent
                      selected={day.tuesday}
                      onClick={handleTileClickTuesday}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Wednesday</p>
                    <TileComponent
                      selected={day.wednesday}
                      onClick={handleTileClickWednesday}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Thursday</p>
                    <TileComponent
                      selected={day.thursday}
                      onClick={handleTileClickThursday}
                      data={times}
                    />
                  </div>
                  <div className=" border-t border-sky-600 py-2">
                    <p className=" text-lg">Friday</p>
                    <TileComponent
                      selected={day.friday}
                      onClick={handleTileClickFriday}
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
                text={"Adding Doctor"}
                color={"#ffffff"}
                loading={pageLevelLoader}
                size="10px"
              />
            ) : (
              "Add Doctor"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
