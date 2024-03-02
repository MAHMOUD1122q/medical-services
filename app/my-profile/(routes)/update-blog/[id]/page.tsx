"use client";
import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Image from "next/image";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { toast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";


const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const initialFormData = {
  title: "",
  description: "",
};

export default function UpdateBlog() {
  const [formData, setFormData] = useState(initialFormData);
  const { pageLevelLoader, setPageLevelLoader } = useContext(GlobalContext);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:4000/api/blog/single-blog/${id}`, {}).then(
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
    const data = await fetch(`http://localhost:4000/api/blog/updated-blog/${id}`, {
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
          <div className="">
            <label htmlFor="">Add Decription</label>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={formData.description}
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
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
                text={"Adding Blog"}
                color={"#ffffff"}
                loading={pageLevelLoader}
                size="10px"
              />
            ) : (
              "Add Blog"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
