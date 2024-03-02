"use client";
import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/firebase/index";
import Image from "next/image";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { toast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";

const initialFormData = {
  username: "",
  role: "",
};

export default function UpdateUser() {
  const [formData, setFormData] = useState(initialFormData);
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);
  const { id } = useParams();

  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:4000/api/auth/single-user/${id}`, {}).then(
      (response) => {
        response.json().then((data) => {
          setFormData(data.data);
        });
      }
    );
  }, [id]);


  const createNewBlog = async (e: any) => {
    setPageLevelLoader(true);
    e.preventDefault();
    const data = await fetch(`http://localhost:4000/api/auth/update-user/${id}`, {
      method: "PATCH",
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
    <div className=" border-[1px] w-[800px] mb-5 p-8">
      <h3 className=" mb-8 text-2xl font-bold ">Add Blog</h3>
      <div className=" border-b-[1px] mt-4">
        <form onSubmit={createNewBlog}>
          <div className=" mb-6">
            <label htmlFor="">Add username</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="username"
              value={formData.username}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className=" mb-6">
            <label htmlFor="">Add role</label>
            <input
              type="text"
              className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              name="username"
              value={formData.role}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
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
                text={"updating User"}
                color={"#ffffff"}
                loading={pageLevelLoader}
                size="10px"
              />
            ) : (
              "update user"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
